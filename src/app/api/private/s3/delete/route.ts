import { NextRequest, NextResponse } from 'next/server';
import { deleteS3Object } from '@/aws/s3';
import { z } from 'zod';

/**
 * Schema for validating delete request
 */
const deleteFileSchema = z.object({
  s3PathKey: z.string(),
});

/**
 * API endpoint for deleting a file from S3
 * @param request The incoming request
 * @returns A response indicating whether the deletion was successful
 */
export async function DELETE(request: NextRequest) {
  try {
    // Parse and validate query parameters
    const searchParams = request.nextUrl.searchParams;
    const queryResult = deleteFileSchema.safeParse({
      s3PathKey: searchParams.get('s3PathKey'),
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

    const { s3PathKey } = queryResult.data;

    // Delete the object
    await deleteS3Object(s3PathKey);

    // Return success response
    return NextResponse.json({
      success: true,
      message: `File ${s3PathKey} deleted successfully`,
    });
  } catch (error) {
    console.error('Error deleting file:', error);
    return NextResponse.json(
      { error: `Failed to delete file: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
