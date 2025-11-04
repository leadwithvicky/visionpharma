import { NextRequest, NextResponse } from 'next/server';
import { listS3Objects } from '@/aws/s3';
import { z } from 'zod';

// Mark this route as dynamic since it uses request.nextUrl.searchParams
export const dynamic = 'force-dynamic';

/**
 * Schema for validating list request
 */
const listFilesSchema = z.object({
  prefix: z.string().optional().default(''),
  maxKeys: z.preprocess(
    (val) => (val ? parseInt(val as string, 10) : undefined),
    z.number().int().positive().optional().default(1000)
  ),
});

/**
 * API endpoint for listing files in S3
 * @param request The incoming request
 * @returns A response with the list of files
 */
export async function GET(request: NextRequest) {
  try {
    // Parse and validate query parameters
    const searchParams = request.nextUrl.searchParams;
    const queryResult = listFilesSchema.safeParse({
      prefix: searchParams.get('prefix'),
      maxKeys: searchParams.get('maxKeys'),
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

    const { prefix, maxKeys } = queryResult.data;

    // List the objects
    const result = await listS3Objects({ prefix, maxKeys });

    // Return the result
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error listing files:', error);
    return NextResponse.json(
      { error: `Failed to list files: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
