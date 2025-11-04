import { NextRequest, NextResponse } from 'next/server';
import { getPresignedUrl } from '@/aws/s3';
import { z } from 'zod';

// Mark this route as dynamic since it uses request.nextUrl.searchParams
export const dynamic = 'force-dynamic';

/**
 * Schema for validating presigned URL request
 */
const presignedUrlSchema = z.object({
  s3PathKey: z.string(),
  expiresIn: z.preprocess(
    (val) => (val ? parseInt(val as string, 10) : undefined),
    z.number().int().positive().optional().default(3600)
  ),
});

/**
 * API endpoint for generating presigned URLs for existing S3 objects
 * @param request The incoming request
 * @returns A response with the presigned URL
 */
export async function GET(request: NextRequest) {
  try {
    // Parse and validate query parameters
    const searchParams = request.nextUrl.searchParams;
    const queryResult = presignedUrlSchema.safeParse({
      s3PathKey: searchParams.get('s3PathKey'),
      expiresIn: searchParams.get('expiresIn'),
    });

    if (!queryResult.success) {
      return NextResponse.json(
        {
          error: 'Invalid query parameters',
          details: queryResult.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { s3PathKey, expiresIn } = queryResult.data;

    // Generate the presigned URL
    const presignedUrl = await getPresignedUrl(s3PathKey, expiresIn);

    // Calculate when the URL will expire
    const expiresAt = new Date(Date.now() + expiresIn * 1000);

    // Return the result
    return NextResponse.json({
      url: presignedUrl,
      s3PathKey,
      expiresAt: expiresAt.toISOString(),
    });
  } catch (error) {
    console.error('Error generating presigned URL:', error);
    return NextResponse.json(
      {
        error: `Failed to generate presigned URL: ${(error as Error).message}`,
      },
      { status: 500 }
    );
  }
}
