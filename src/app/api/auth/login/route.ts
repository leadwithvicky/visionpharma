import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/backend/config/dbConnect';
import { User } from '@/backend/models/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  await dbConnect();


  try {
    const body =  await req.json();
    const { email, mobile, password, byGoogle } = body;
    

    if(byGoogle) {

        const user = await User.findOne({email : email});
        console.log(user)
        if(!user) {
            return NextResponse.json({error : 'User not found'}, {status : 404});
        }

        // If user exists but is not verified, redirect to register
        if (!user.isVerified) {
            return NextResponse.json({error : 'User not verified', user: user}, {status : 403});
        }

        const token = jwt.sign(
          { userId: user._id, email: user.email, role: user.role },
          process.env.JWT_SECRET!,
          { expiresIn: '7d' }
        );

        return NextResponse.json({ message: 'Login successful', token, user });
    }

    if ((!email && !mobile) || !password) {
      return NextResponse.json(
        { error: 'Email or Mobile and Password are required.' },
        { status: 400 }
      );
    }

    // Find user by email or mobile
    const query = email ? { email } : { mobile };
    const user = await User.findOne(query);

    if (!user) {
      return NextResponse.json({ error: 'You are not a registered user. Please sign up first.' }, { status: 404 });
    }

    // Validate password (assumes password is hashed using bcrypt)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Incorrect password. Please enter the correct one.' }, { status: 401 });
    }

    // Sign JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    return NextResponse.json({ message: 'Login successful', token, user });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
