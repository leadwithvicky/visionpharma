import { SignJWT, jwtVerify } from 'jose';
import { tokenUserSign_I } from '../types/auth.type';

export class TokenService {
  static async generateAccessToken(user: tokenUserSign_I): Promise<string> {
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'gggggfgg'
    );

    return new SignJWT(user)
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime(process.env.JWT_EXPIRATION || '1h')
      .sign(secret);
  }

  static async verifyToken(token: string): Promise<tokenUserSign_I | null> {
    try {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || 'gggggfgg'
      );

      const { payload } = await jwtVerify(token, secret, {
        algorithms: ['HS256'],
      });

      return payload as tokenUserSign_I;
    } catch (error) {
      return null;
    }
  }
}
