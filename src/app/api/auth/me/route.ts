import dbConnect from '@/backend/config/dbConnect';
import { User } from '@/backend/models';
import { UserService } from '@/backend/services/user.service';
import { NextRequest, NextResponse } from 'next/server';

/**
 * this api is used to get user data by id from database
 * @returns user data
 */
export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const userId = req.nextUrl.searchParams.get('id');

    const header = req.headers.get('x-internal-auth');

    if (header !== 'vision-tech-internal-user') {
      return NextResponse.json({ error: 'Not Authorized' }, { status: 401 });
    }

    const user = await UserService.getAuthUserById(userId as string);

    console.log('user', user);

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Not found User' }, { status: 400 });
  }
}
