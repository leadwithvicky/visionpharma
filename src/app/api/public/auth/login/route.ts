import dbConnect from '@/backend/config/dbConnect';
import { loginSchema } from '@/backend/schema/auth.schema';
import { AuthService } from '@/backend/services/auth.service';
import { NextResponse } from 'next/server';
// Signup API Route
export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    loginSchema.parse(body);

    const { email, password } = body;

    const { user, token } = await AuthService.login(email, password);

    const { password: _password, ...userResponse } = user;
    return NextResponse.json(
      {
        message: 'User logged in successfully',
        data: {
          user: userResponse,
          token,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error inserting data:', error);
    return NextResponse.json(
      { error: error.errors || 'Invalid request' },
      { status: 400 }
    );
  }
}
