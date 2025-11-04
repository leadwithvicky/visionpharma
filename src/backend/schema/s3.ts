import { z } from 'zod';

/**
 * Schema constants
 */
export const MIME_TYPES = {
  IMAGE: [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml',
  ],
  DOCUMENT: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
  ],
  VIDEO: ['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime'],
  AUDIO: ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/aac'],
};

export const MAX_FILE_SIZES = {
  IMAGE: 5 * 1024 * 1024, // 5MB
  DOCUMENT: 10 * 1024 * 1024, // 10MB
  VIDEO: 100 * 1024 * 1024, // 100MB
  AUDIO: 20 * 1024 * 1024, // 20MB
  GENERIC: 10 * 1024 * 1024, // 10MB
};

/**
 * Base file upload options schema
 */
export const baseFileOptionsSchema = z
  .object({
    s3Path: z.string().optional(),
    isPublic: z.boolean().optional(),
    expiresIn: z.number().int().positive().optional(),
    maxSizeInMB: z.number().positive().optional(),
  })
  .partial();

/**
 * Schema for image upload options
 */
export const imageOptionsSchema = baseFileOptionsSchema.extend({
  maxSizeInMB: z.number().positive().optional(),
});

/**
 * Schema for document upload options
 */
export const documentOptionsSchema = baseFileOptionsSchema.extend({
  maxSizeInMB: z.number().positive().optional(),
});

/**
 * Schema for video upload options
 */
export const videoOptionsSchema = baseFileOptionsSchema.extend({
  maxSizeInMB: z.number().positive().optional(),
});

/**
 * Schema for audio upload options
 */
export const audioOptionsSchema = baseFileOptionsSchema.extend({
  maxSizeInMB: z.number().positive().optional(),
});

/**
 * Schema for validating query parameters in file upload requests
 */
export const uploadQuerySchema = z.object({
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
 * Schema for validating presigned URL request
 */
export const presignedUrlSchema = z.object({
  s3PathKey: z.string(),
  expiresIn: z.preprocess(
    (val) => (val ? parseInt(val as string, 10) : undefined),
    z.number().int().positive().optional().default(3600)
  ),
});

/**
 * Schema for validating file listing request
 */
export const listFilesSchema = z.object({
  prefix: z.string().optional().default(''),
  maxKeys: z.preprocess(
    (val) => (val ? parseInt(val as string, 10) : undefined),
    z.number().int().positive().optional().default(1000)
  ),
});

/**
 * Schema for validating file deletion request
 */
export const deleteFileSchema = z.object({
  s3PathKey: z.string(),
});
