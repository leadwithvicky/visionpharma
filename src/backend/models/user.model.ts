
import bcrypt from 'bcrypt';
import { CallbackError, Schema, model, models } from 'mongoose';

export const userMongoSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    loginMethod: {
      type: Number,
      enum: [1, 2, 3, 4, 5], // 1 = email, 2 = google, etc.
      default: 1,
      required: true,
    },
    password: {
      type: String,
      default: null,
    },
    isEnrolled:{type:Boolean,default:false},
    fullName: { type: String, default: null },
    firstName: { type: String, default: null },
    middleName: { type: String, default: null },
    lastName: { type: String, default: null },
    dob: { type: Date, default: null },
    mobile: { type: Number, default: null },
    photo: { type: String, default: null },
    gender: {
      type: Number,
      enum: [1, 2, 3, 4],
      default: null,
    },
    address: { type: String, default: null },
    role: {
      type: String,
      enum: ['student', 'admin', 'teacher', 'super-admin'],
      default: 'student',
    },
    socialId: { type: String, default: null },
    socialResponse: { type: String, default: null },
    status: {
      type: Number,
      enum: [0, 1, 2],
      default: 1,
    },

    // ➕ Extended fields for your signup process
    program: { type: String, default: null },
    batchYear: { type: Number, default: null },
    batchMonth: { type: String, default: null },
    otpVerified: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// 🔐 Pre-save hook for password hashing
userMongoSchema.pre('save', async function (next) {
  const user = this as any;

  // Only hash if password is being modified or new
  if (!user.isModified('password') || !user.password) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (err) {

    // Fix: ensure err is of type CallbackErrorC or undefined
    return next(err as CallbackError);
  }
});
userMongoSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Export the model
export const User = models.User || model('User', userMongoSchema);