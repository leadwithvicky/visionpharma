import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

// In-memory rate limiter: { [mobile]: [timestamps] }
const otpRateLimit: { [mobile: string]: number[] } = {};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { mobile } = body;

    if (!mobile) {
      return NextResponse.json(
        { success: false, message: 'Mobile number is required' },
        { status: 400 }
      );
    }

    // Rate limiting: max 3 OTPs/hour per mobile
    const now = Date.now();
    const windowMs = 60 * 60 * 1000; // 1 hour
    otpRateLimit[mobile] = (otpRateLimit[mobile] || []).filter(ts => now - ts < windowMs);
    if (otpRateLimit[mobile].length >= 3) {
      console.log(`[OTP][RATE_LIMIT] Mobile: ${mobile}, Time: ${new Date().toISOString()}`);
      return NextResponse.json(
        { success: false, message: 'Rate limit exceeded. Please try again after 1 hour.' },
        { status: 429 }
      );
    }
    otpRateLimit[mobile].push(now);
    console.log(`[OTP][REQUEST] Mobile: ${mobile}, Time: ${new Date().toISOString()}`);

    const verification = await client.verify.v2
      .services(process.env.TWILIO_SERVICE_SID!)
      .verifications.create({
        to: `+91${mobile}`,
        channel: 'sms',
      });

    if (verification.status === 'pending') {
      return NextResponse.json(
        { success: true, message: 'OTP sent successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to send OTP' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Send OTP Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { mobile, code } = body;

    if (!mobile || !code) {
      return NextResponse.json(
        { success: false, message: 'Mobile and code are required' },
        { status: 400 }
      );
    }

    const verificationCheck = await client.verify.v2
      .services(process.env.TWILIO_SERVICE_SID!)
      .verificationChecks.create({
        to: `+91${mobile}`,
        code,
      });

    if (verificationCheck.status === 'approved') {
      console.log(`[OTP][VERIFIED] Mobile: ${mobile}, Time: ${new Date().toISOString()}`);
      return NextResponse.json(
        { success: true, message: 'OTP verified successfully' },
        { status: 200 }
      );
    } else {
      console.log(`[OTP][FAILED] Mobile: ${mobile}, Time: ${new Date().toISOString()}`);
      return NextResponse.json(
        { success: false, message: 'Invalid OTP' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Verify OTP Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
