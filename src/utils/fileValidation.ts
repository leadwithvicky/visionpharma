import { z } from 'zod';
import { ValidationError } from '@/types/s3.types';
import {
  MIME_TYPES,
  imageOptionsSchema,
  documentOptionsSchema,
  videoOptionsSchema,
  audioOptionsSchema,
} from '@/backend/schema/s3';

/**
 * Validates a file based on its MIME type and size
 * @param file The file to validate
 * @param options Optional validation options
 * @returns Either null if validation passes or a ValidationError
 */
export function validateFile(
  file: File,
  options: {
    allowedTypes?: string[];
    maxSize?: number;
  } = {}
): ValidationError | null {
  const { allowedTypes, maxSize } = options;

  // Check file type if specified
  if (allowedTypes && allowedTypes.length > 0) {
    if (!allowedTypes.includes(file.type)) {
      return {
        message: `Invalid file type. Allowed types: ${allowedTypes.join(', ')}`,
        code: 'INVALID_FILE_TYPE',
      };
    }
  }

  // Check file size if specified
  if (maxSize && file.size > maxSize) {
    return {
      message: `File size exceeds maximum allowed size of ${
        maxSize / (1024 * 1024)
      }MB`,
      code: 'FILE_TOO_LARGE',
    };
  }

  return null;
}

/**
 * Validates an image file
 * @param file The file to validate
 * @param customOptions Custom validation options
 * @returns Either null if validation passes or a ValidationError
 */
export function validateImage(
  file: File,
  customOptions: z.infer<typeof imageOptionsSchema> = {}
): ValidationError | null {
  const validatedOptions = imageOptionsSchema.parse(customOptions);
  return validateFile(file, {
    allowedTypes: MIME_TYPES.IMAGE,
    maxSize: (validatedOptions.maxSizeInMB || 5) * 1024 * 1024,
  });
}

/**
 * Validates a document file
 * @param file The file to validate
 * @param customOptions Custom validation options
 * @returns Either null if validation passes or a ValidationError
 */
export function validateDocument(
  file: File,
  customOptions: z.infer<typeof documentOptionsSchema> = {}
): ValidationError | null {
  const validatedOptions = documentOptionsSchema.parse(customOptions);
  return validateFile(file, {
    allowedTypes: MIME_TYPES.DOCUMENT,
    maxSize: (validatedOptions.maxSizeInMB || 10) * 1024 * 1024,
  });
}

/**
 * Validates a video file
 * @param file The file to validate
 * @param customOptions Custom validation options
 * @returns Either null if validation passes or a ValidationError
 */
export function validateVideo(
  file: File,
  customOptions: z.infer<typeof videoOptionsSchema> = {}
): ValidationError | null {
  const validatedOptions = videoOptionsSchema.parse(customOptions);
  return validateFile(file, {
    allowedTypes: MIME_TYPES.VIDEO,
    maxSize: (validatedOptions.maxSizeInMB || 100) * 1024 * 1024,
  });
}

/**
 * Validates an audio file
 * @param file The file to validate
 * @param customOptions Custom validation options
 * @returns Either null if validation passes or a ValidationError
 */
export function validateAudio(
  file: File,
  customOptions: z.infer<typeof audioOptionsSchema> = {}
): ValidationError | null {
  const validatedOptions = audioOptionsSchema.parse(customOptions);
  return validateFile(file, {
    allowedTypes: MIME_TYPES.AUDIO,
    maxSize: (validatedOptions.maxSizeInMB || 20) * 1024 * 1024,
  });
}
