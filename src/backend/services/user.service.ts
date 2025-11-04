import mongoose from 'mongoose';
import { BcryptHelper } from '../helper/bcryptHelper';
import { User as UserModel } from '../models';
import {
  changePassword_I,
  getUserQuery_I,
  updateUser_I,
} from '../types/user.type';

export const UserService = {
  findAllUsers: async (query: getUserQuery_I) => {
    const { page = 1, limit = 10, search, status, type } = query;
    // Build the search query
    const filter: any = {};

    if (search) {
      filter.$or = [
        { firstName: { $regex: search, $options: 'i' } }, // Case-insensitive on firstName
        { email: { $regex: search, $options: 'i' } }, // Case-insensitive on email
      ];
    }

    if (status) {
      filter.status = status; // Add status filter if provided
    }

    if (type) {
      filter.type = type; // Add type filter if provided
    }

    const skip = (page - 1) * limit;

    // Fetch paginated users
    const users = await UserModel.find(filter).skip(skip).limit(limit);

    // Get total count for pagination metadata
    const totalCount = await UserModel.countDocuments(filter);

    return {
      users,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
    };
  },

  getUserById: async (userId: string) => {
    // Ensure the userId is provided
    if (!userId) {
      throw new Error('User ID is required');
    }

    // Find the user by ID
    const user = await UserModel.findById(userId).select('-password');

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  },

  updateUserById: async (userId: string, data: updateUser_I) => {
    // Ensure the userId is provided
    if (!userId) {
      throw new Error('User ID is required');
    }

    // Check if the user exists
    const user = await UserModel.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Find and update the user
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $set: data }, // Perform a partial update using $set
      { new: true, runValidators: true } // Return the updated document and apply validation
    );

    return updatedUser;
  },

  changePassword: async (data: changePassword_I) => {
    const { email, oldPassword, newPassword } = data;

    // Find the user by email
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new Error('User not found');
    }

    // Check if the old password matches
    const isMatch = await BcryptHelper.comparePassword(
      oldPassword,
      user.password
    );

    const isSamePassword = await BcryptHelper.comparePassword(
      newPassword,
      user.password
    );

    if (!isMatch || isSamePassword) {
      throw new Error('password does not match');
    }

    // Hash the new password
    const hashedPassword = await BcryptHelper.hashPassword(newPassword);

    const res = UserModel.updateOne(
      { email },
      { $set: { password: hashedPassword } }
    );

    return res;
  },

  getAuthUserById: async (userId: string) => {
    try {
      const userResponse = await UserModel.aggregate([
        {
          $match: {
            _id: new mongoose.Types.ObjectId(userId),
          },
        },
        {
          $project: {
            password: 0,
            __v: 0,
            createdAt: 0,
            updatedAt: 0,
            socialId: 0,
            socialResponse: 0,
            loginMethod: 0,
          },
        },
        {
          $lookup: {
            from: 'program_enrollments',
            let: { userId: '$_id' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ['$userId', '$$userId'] },
                      { $eq: ['$status', 1] }, // Only approved
                    ],
                  },
                },
              },
              { $limit: 1 }, // Stop at first match (we just care if it exists)
            ],
            as: 'activeEnrollments',
          },
        },
        {
          $addFields: {
            hasActiveEnrollment: {
              $gt: [{ $size: '$activeEnrollments' }, 0],
            },
          },
        },
        {
          $project: {
            activeEnrollments: 0, // Remove full data
          },
        },
      ]);
      const user = userResponse[0];
      if (!user) {
        return null; // User not found
      }
      const alwaysEnrolledRoles = ['admin', 'devta'];
      const data = {
        ...user,
        hasActiveEnrollment: alwaysEnrolledRoles.includes(user.role)
          ? true
          : user.hasActiveEnrollment,
      };

      return data;
    } catch (error) {
      console.log('Error fetching user with enrollment status:', error);
      return null;
    }
  },
};
