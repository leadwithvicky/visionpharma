import dbConnect from '@/backend/config/dbConnect'; // you must create this
import { User } from '@/backend/models/user.model'; // userMongoSchema exported as User
import jwt from 'jsonwebtoken';

export async function POST(req : any) {
  await dbConnect();

  try {
    const body = await req.json();

    const {
      email,
      name,
      photo,
      mobile,
      program,
      batchMonth,
      batchYear,
      password,
      step, // "google" | "form"
    } = body;

    console.table(  {email,
      name,
      photo,
      mobile,
      program,
      batchMonth,
      batchYear,
      password,
      step})

    if (!email) {
      return Response.json({ error: 'Email is required.' }, { status: 400 });
    }

    // STEP 1: User just signed in with Google
    if (step === 'google') {
      let existingUser = await User.findOne({ email });

      if (!existingUser) {
        const newUser = await User.create({
          email,
          fullName: name || '',
          photo: photo || '',
          loginMethod: 2, // Google
          isVerified: false,
          otpVerified: false,
        });

        return Response.json({ message: 'User created after Google sign-in', user: newUser });
      }

       if (!process.env.JWT_SECRET || typeof process.env.JWT_SECRET !== 'string') {
        return Response.json({ error: 'JWT secret not configured' }, { status: 500 });
      }
      const token = jwt.sign(
        { userId: existingUser._id, email: existingUser.email, role: existingUser.role },
        process.env.JWT_SECRET as string,
        { expiresIn: '7d' }
      );

      return Response.json({ message: 'User already exists', user: existingUser, token });
    }

    // STEP 2: Update after form fill
    if (step === 'form') {
      const user = await User.findOne({ email });

      if (!user) {
        return Response.json({ error: 'User not found' }, { status: 404 });
      }

      user.mobile = mobile ? Number(mobile) : undefined;
      user.program = program || user.program;
      user.batchMonth = batchMonth || user.batchMonth;
      user.batchYear = batchYear ? Number(batchYear) : user.batchYear;
      user.password = password || user.password;
      user.isVerified = true;

      await user.save();

      // 🔐 Issue JWT token (placeholder)
      if (!process.env.JWT_SECRET || typeof process.env.JWT_SECRET !== 'string') {
        return Response.json({ error: 'JWT secret not configured' }, { status: 500 });
      }
      const token = jwt.sign(
        { userId: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: '7d' }
      );

      return Response.json({ message: 'User profile completed', token, user });
    }

    return Response.json({ error: 'Invalid step value' }, { status: 400 });
  } catch (err) {
    console.error('User API Error:', err);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
