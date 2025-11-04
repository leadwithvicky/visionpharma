import { NextRequest, NextResponse } from 'next/server';
import { getPresignedUploadUrl } from '@/aws/s3';
import dbConnect from '@/backend/config/dbConnect'; // Corrected import path

export async function POST(request: NextRequest) {
  try {
    // Connect to DB or ensure environment variables are loaded if necessary
    await dbConnect(); // Optional: if needed for env vars or other setup

    const body = await request.json();
    const {
      fileName,
      contentType,
      fileType, // 'pdf' or 'video'
      path, // New parameter: The desired S3 path prefix (e.g., "pdf/some-program-jan-2024")
      isPublic = false, // New: Get isPublic from body, default to false
      expiresIn = 60 * 60, // 1 hour
    } = body;

    // Validate required fields (excluding isPublic as it has a default)
    if (
      !fileName ||
      !contentType ||
      !fileType || // Keep or remove validation based on need
      !path
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Missing required fields (fileName, contentType, fileType, path) for upload URL generation',
        },
        { status: 400 }
      );
    }

    // Use the provided path directly for s3Path
    const s3Path = path;
    // Use the isPublic value from the request body (or its default)
    const isPublicFlag = typeof isPublic === 'boolean' ? isPublic : false;

    // Generate the presigned URL using the provided path and isPublic flag
    const result = await getPresignedUploadUrl({
      fileName,
      contentType,
      s3Path, // Use the path from the request
      isPublic: isPublicFlag, // Pass the flag here
      expiresIn,
    });

    return NextResponse.json({
      success: true,
      data: {
        presignedUrl: result.presignedUrl,
        s3Url: result.s3Url, // The final URL the frontend should store
        s3PathKey: result.s3PathKey, // Optionally return the key too
      },
    });
  } catch (error) {
    console.error('Error generating presigned upload URL:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to generate presigned upload URL',
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
