import dbConnect from '@/backend/config/dbConnect';
import { signupSchema } from '@/backend/schema/auth.schema';
import { AuthService } from '@/backend/services/auth.service';
import { NextResponse } from 'next/server';
// Signup API Route
export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    signupSchema.parse(body);
    const { fullName, email, mobile, password } = body;

    // Simulate user creation logic (replace with actual DB logic)
    const user = await AuthService.register({
      fullName,
      email,
      mobile,
      password,
    });

    return NextResponse.json(
      { message: 'User registered successfully', data: user },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error inserting data:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
