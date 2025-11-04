/**
 * Interface for S3 upload options
 */
export interface S3UploadOptions {
  fileBuffer: Buffer;
  contentType: string;
  fileName: string;
  s3Path: string;
  isPublic?: boolean;
  expiresIn?: number;
}

/**
 * Interface for the result of an S3 upload
 */
export interface S3UploadResult {
  s3PathKey: string;
  s3Url: string;
  publicUrl: string;
  isPublic: boolean;
  expiresAt?: Date;
}

/**
 * Interface for listing S3 objects
 */
export interface S3ListOptions {
  prefix: string;
  maxKeys?: number;
}

/**
 * Interface for listing S3 objects result
 */
export interface S3ListResult {
  keys: string[];
  nextContinuationToken?: string;
  isTruncated: boolean;
}

/**
 * Interface for representing a validation error
 */
export interface ValidationError {
  message: string;
  code: string;
}

/**
 * Interface for presigned URL response
 */
export interface PresignedUrlResult {
  url: string;
  s3PathKey: string;
  expiresAt: string;
}

/**
 * Interface for delete file response
 */
export interface DeleteFileResult {
  success: boolean;
  message: string;
}

/**
 * Interface for upload options from the client side
 */
export interface UploadOptions {
  s3Path?: string;
  isPublic?: boolean;
  expiresIn?: number;
  skipTypeDetection?: boolean;
}
