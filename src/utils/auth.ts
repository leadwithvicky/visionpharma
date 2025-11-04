import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import * as jose from 'jose';
import { User } from '@/backend/models';
import dbConnect from '@/backend/config/dbConnect';

// Function to extract the token from the Authorization header or from cookies
export const getToken = (request: Request): string | null => {
  const authHeader = request.headers.get('Authorization');

  // Check Authorization header first
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }

  // Then check cookies
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  return token || null;
};

// Function to get the user from the request
export const getUserFromRequest = async (request: Request) => {
  try {
    await dbConnect();

    const token = getToken(request);
    if (!token) {
      return null;
    }

    // Verify the token using jose
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'your-secret-key'
    );

    const { payload } = await jose.jwtVerify(token, secret);

    if (!payload || !payload.id) {
      return null;
    }

    // Find the user in the database
    const user = await User.findById(payload.id);
    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error getting user from request:', error);
    return null;
  }
};
