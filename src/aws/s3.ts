import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import {
  S3UploadOptions,
  S3UploadResult,
  S3ListOptions,
  S3ListResult,
} from '@/types/s3.types';

// Define options for generating presigned upload URL
interface PresignedUploadUrlOptions {
  fileName: string;
  contentType: string;
  s3Path?: string; // e.g., 'pdf/program-title-month-year' or 'video/program-title-month-year'
  isPublic?: boolean; // Keep consistency, default to false (private)
  expiresIn?: number; // URL expiry time in seconds
}

// Define the result structure for the presigned URL function
interface PresignedUploadUrlResult {
  presignedUrl: string;
  s3PathKey: string; // The final S3 object key
  s3Url: string; // The final URL after upload (non-signed)
  publicUrl?: string; // Public URL if applicable (useful for immediate reference if public)
}

// Initialize the S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// Bucket name from environment variable
const bucketName = process.env.AWS_S3_BUCKET_NAME!;

/**
 * Generates a pre-signed URL for uploading a file directly to S3.
 */
export async function getPresignedUploadUrl({
  fileName,
  contentType,
  s3Path = '',
  isPublic = false, // Default to private uploads
  expiresIn = 60 * 60, // Default 1 hour validity
}: PresignedUploadUrlOptions): Promise<PresignedUploadUrlResult> {
  try {
    // Clean the original file name and path
    const cleanFileName = `${Date.now()}-${fileName.replace(
      /[^a-zA-Z0-9.-]/g, // Allow dots and hyphens in filename
      '-'
    )}`;
    const cleanPath = s3Path
      .trim()
      .replace(/[^a-zA-Z0-9\/\-]/g, '-') // Corrected regex: Allow slashes and hyphens in path
      .replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes

    // Construct the S3 key
    const s3PathKey = `${isPublic ? 'public/' : 'private/'}${
      cleanPath ? cleanPath + '/' : ''
    }${cleanFileName}`;

    // Normalize multiple hyphens and convert to lowercase
    const normalizedKey = s3PathKey.replace(/--+/g, '-').toLowerCase();

    // Create the command for PutObject
    const putObjectCommand = new PutObjectCommand({
      Bucket: bucketName,
      Key: normalizedKey,
      ContentType: contentType,
      // ACL: isPublic ? 'public-read' : undefined, // ACLs might be disabled, use Bucket Policy
    });

    // Generate the pre-signed URL for PUT request
    const presignedUrl = await getSignedUrl(s3Client, putObjectCommand, {
      expiresIn,
    });

    // Construct the final S3 URL and public URL (if applicable)
    const s3Url = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${normalizedKey}`;
    const publicUrl = isPublic ? s3Url : undefined;

    return {
      presignedUrl,
      s3PathKey: normalizedKey,
      s3Url,
      publicUrl,
    };
  } catch (error) {
    console.error('Error generating presigned upload URL:', error);
    throw new Error(
      `Failed to generate presigned upload URL: ${(error as Error).message}`
    );
  }
}

/**
 * Uploads a file to S3 and returns information about the uploaded file.
 * For private files, returns a presigned URL valid for the specified duration.
 */
export async function uploadFileToS3({
  fileBuffer,
  contentType,
  fileName,
  s3Path = '',
  isPublic = false,
  expiresIn = 60 * 60, // Default 1 hour for presigned URLs
}: S3UploadOptions): Promise<S3UploadResult> {
  try {
    // Clean the original file name and path in one step
    const cleanFileName = `${Date.now()}-${fileName.replace(
      /[^a-zA-Z0-9.-]/g, // Allow dots and hyphens
      '-'
    )}`;
    const cleanPath = s3Path
      .trim()
      .replace(/[^a-zA-Z0-9\/\-]/g, '-')
      .replace(/^\/+|\/+$/g, '');

    // Create the S3 key with root folder and path in one operation
    const s3PathKey = `${isPublic ? 'public/' : 'private/'}${
      cleanPath ? cleanPath + '/' : ''
    }${cleanFileName}`;

    // Normalize any double hyphens that might have been created
    const normalizedKey = s3PathKey.replace(/--+/g, '-').toLowerCase();

    // Upload the file to S3
    const uploadCommand = new PutObjectCommand({
      Bucket: bucketName,
      Key: normalizedKey,
      Body: fileBuffer,
      ContentType: contentType,
      // ACL: isPublic ? 'public-read' : undefined, // ACLs might be disabled, use Bucket Policy
    });

    await s3Client.send(uploadCommand);

    // Generate a presigned URL for GET requests (if needed, e.g., for immediate access after upload)
    // For direct display of private files, a separate mechanism or the getPresignedUrl function below should be used.
    const getObjectCommand = new GetObjectCommand({
      Bucket: bucketName,
      Key: normalizedKey,
    });

    const s3Url = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${normalizedKey}`;
    // Generate a signed GET URL only if the file is private and needs immediate signed access
    const signedGetUrl = !isPublic
      ? await getSignedUrl(s3Client, getObjectCommand, { expiresIn })
      : undefined;
    const publicUrl = isPublic ? s3Url : signedGetUrl; // publicUrl now holds the signed URL if private

    // Calculate when the signed GET URL will expire
    const expiresAt = !isPublic
      ? new Date(Date.now() + expiresIn * 1000)
      : undefined;

    return {
      s3PathKey: normalizedKey,
      s3Url, // The permanent non-signed URL
      publicUrl: publicUrl!, // The accessible URL (public or signed)
      isPublic,
      expiresAt, // Expiry for the signed GET URL
    };
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw new Error(`Failed to upload file to S3: ${(error as Error).message}`);
  }
}

/**
 * Generates a presigned URL for accessing (GET) a private file in S3.
 */
export async function getPresignedUrl(
  s3PathKey: string, // Changed parameter name for clarity
  expiresIn: number = 60 * 60 // 1 hour
): Promise<string> {
  try {
    // Ensure the key doesn't start with a slash if it's relative
    const key = s3PathKey.startsWith('/') ? s3PathKey.substring(1) : s3PathKey;

    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    return await getSignedUrl(s3Client, command, { expiresIn });
  } catch (error) {
    console.error('Error generating presigned URL:', error);
    throw new Error(
      `Failed to generate presigned URL: ${(error as Error).message}`
    );
  }
}

/**
 * Constructs a public URL for a file in S3.
 * Note: This only works if the bucket has a policy allowing public access to the specified paths.
 * Since ACLs are disabled, public access must be controlled through bucket policies.
 */
export function getPublicUrl(s3PathKey: string): string {
  // Ensure the key doesn't start with a slash if it's relative
  const key = s3PathKey.startsWith('/') ? s3PathKey.substring(1) : s3PathKey;
  return `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
}

/**
 * Lists objects in an S3 bucket with the given prefix
 * @param options The options for listing objects
 * @returns A list of object keys
 */
export async function listS3Objects({
  prefix,
  maxKeys = 1000,
}: S3ListOptions): Promise<S3ListResult> {
  try {
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: prefix,
      MaxKeys: maxKeys,
    });

    const response = await s3Client.send(command);

    return {
      keys: (response.Contents || []).map((item) => item.Key!),
      nextContinuationToken: response.NextContinuationToken,
      isTruncated: response.IsTruncated || false,
    };
  } catch (error) {
    console.error('Error listing S3 objects:', error);
    throw new Error(`Failed to list S3 objects: ${(error as Error).message}`);
  }
}

/**
 * Deletes an object from S3
 * @param s3PathKey The key of the object to delete
 * @returns A boolean indicating whether the deletion was successful
 */
export async function deleteS3Object(s3PathKey: string): Promise<boolean> {
  try {
    // Ensure the key doesn't start with a slash if it's relative
    const key = s3PathKey.startsWith('/') ? s3PathKey.substring(1) : s3PathKey;

    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    await s3Client.send(command);
    return true;
  } catch (error) {
    console.error('Error deleting S3 object:', error);
    throw new Error(`Failed to delete S3 object: ${(error as Error).message}`);
  }
}
