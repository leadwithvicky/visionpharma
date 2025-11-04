import { BcryptHelper } from '../helper/bcryptHelper';
import { User } from '../models';
import { registerUser_I, tokenUserSign_I } from '../types/auth.type';
import { TokenService } from './token.service';

export class AuthService {
  static async register(data: registerUser_I): Promise<any> {
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email: data.email });

      if (existingUser) {
        throw new Error('User already exists');
      }

      // Hash password
      const hashedPassword = await BcryptHelper.hashPassword(data.password);

      let firstName = null;
      let middleName = null;
      let lastName = null;
      if (data.fullName) {
        const names = data.fullName.split(' ');
        if (names.length) {
          firstName = names[0];
        } else if (names.length === 2) {
          firstName = names[0];
          lastName = names[1];
        } else {
          firstName = names[0];
          middleName = names[1];
          lastName = names.slice(2).join(' ');
        }
      }

      // Create new user
      const user = new User({
        ...data,
        firstName,
        middleName,
        lastName,
        password: hashedPassword,
      });

      const savedUser = await user.save();

      // Safely handle document conversion
      const userObject = savedUser.toObject();
      const { password, ...restData } = userObject;

      return {
        user: restData,
      };
    } catch (error: any) {
      // Log the error for debugging
      console.error('Registration error:', error);

      // Throw a more specific error
      if (error.code === 11000) {
        throw new Error('Email already exists');
      }

      throw new Error(error.message || 'Error creating user');
    }
  }
  static async login(email: string, password: string): Promise<any> {
    try {
      // Find user by email
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('User not found');
      }

      // Compare passwords
      const isPasswordMatch = await BcryptHelper.comparePassword(
        password,
        user.password
      );

      if (!isPasswordMatch) {
        throw new Error('Invalid credentials');
      }

      const tokenUser: tokenUserSign_I = {
        id: String(user._id),
        email: user.email,
        role: user.role,
      };

      // Generate token
      const token = await TokenService.generateAccessToken(tokenUser);

      const { password: _password, ...restData } = user['_doc'];
      const response = {
        ...restData,
      };

      return { user: response, token };
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error('Invalid credentials');
    }
  }
}
