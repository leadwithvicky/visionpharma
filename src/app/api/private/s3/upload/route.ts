import { NextRequest, NextResponse } from 'next/server';
import { uploadFileToS3 } from '@/aws/s3';
import { MIME_TYPES } from '@/backend/schema/s3';
import { z } from 'zod';

/**
 * Schema for validating query parameters
 */
const uploadQuerySchema = z.object({
  s3Path: z.string().optional(),
  isPublic: z.preprocess(
    (val) => val === 'true',
    z.boolean().optional().default(false)
  ),
  expiresIn: z.preprocess(
    (val) => (val ? parseInt(val as string, 10) : undefined),
    z.number().int().positive().optional().default(3600)
  ),
  skipTypeDetection: z.preprocess(
    (val) => val === 'true',
    z.boolean().optional().default(false)
  ),
});

/**
 * Detects the file type category based on MIME type
 */
function detectFileType(
  mimeType: string
): 'images' | 'videos' | 'documents' | 'audio' | 'other' {
  if (MIME_TYPES.IMAGE.includes(mimeType)) return 'images';
  if (MIME_TYPES.VIDEO.includes(mimeType)) return 'videos';
  if (MIME_TYPES.DOCUMENT.includes(mimeType)) return 'documents';
  if (MIME_TYPES.AUDIO.includes(mimeType)) return 'audio';
  return 'other';
}

/**
 * Universal API endpoint for uploading files to S3 regardless of type
 * @param request The incoming request
 * @returns A response with the upload result
 */
export async function POST(request: NextRequest) {
  try {
    // Check if the request is multipart/form-data
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json(
        { error: 'Request must be multipart/form-data' },
        { status: 415 }
      );
    }

    // Parse and validate query parameters
    const searchParams = request.nextUrl.searchParams;
    const queryResult = uploadQuerySchema.safeParse({
      s3Path: searchParams.get('s3Path'),
      isPublic: searchParams.get('isPublic'),
      expiresIn: searchParams.get('expiresIn'),
      skipTypeDetection: searchParams.get('skipTypeDetection'),
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

    // Get the form data
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Get validated query parameters
    const { s3Path, isPublic, expiresIn, skipTypeDetection } = queryResult.data;

    // Determine file type and path
    let filePath = s3Path || '';

    // If no path is provided and auto-detection is not disabled, organize by file type
    if (!s3Path && !skipTypeDetection) {
      const fileType = detectFileType(file.type);
      filePath = fileType;
    }

    // Convert File to Buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Upload to S3
    const result = await uploadFileToS3({
      fileBuffer,
      contentType: file.type,
      fileName: file.name,
      s3Path: filePath,
      isPublic,
      expiresIn,
    });

    // Return the result
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: `File upload failed: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
