import { useState } from 'react';
import {
  S3UploadResult,
  S3ListResult,
  PresignedUrlResult,
  DeleteFileResult,
  UploadOptions,
} from '@/types/s3.types';
import { S3_ROUTES } from '@/routes-endpoint';
import apiClient from '@/services/apiClient';

interface UseS3UploadReturn {
  upload: (file: File, options?: UploadOptions) => Promise<S3UploadResult>;
  getPresignedUrl: (
    s3PathKey: string,
    expiresIn?: number
  ) => Promise<PresignedUrlResult>;
  listFiles: (prefix?: string, maxKeys?: number) => Promise<S3ListResult>;
  deleteFile: (s3PathKey: string) => Promise<DeleteFileResult>;
  isUploading: boolean;
  error: Error | null;
  progress: number;
}

/**
 * Hook for S3 file operations including upload, get URL, list and delete
 * @returns Object containing S3 operation functions, loading states, errors, and progress
 */
export function useS3Upload(): UseS3UploadReturn {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [progress, setProgress] = useState(0);

  /**
   * Uploads a file to S3 using the API
   * @param file The file to upload
   * @param options Upload options
   * @returns The upload result
   */
  const upload = async (
    file: File,
    options: UploadOptions = {}
  ): Promise<S3UploadResult> => {
    try {
      setIsUploading(true);
      setError(null);
      setProgress(0);

      const formData = new FormData();
      formData.append('file', file);

      // Build the URL with query parameters
      const params = new URLSearchParams();

      if (options.s3Path) {
        params.append('s3Path', options.s3Path);
      }

      if (options.isPublic !== undefined) {
        params.append('isPublic', options.isPublic.toString());
      }

      if (options.expiresIn) {
        params.append('expiresIn', options.expiresIn.toString());
      }

      if (options.skipTypeDetection) {
        params.append('skipTypeDetection', 'true');
      }

      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + (100 - prev) * 0.1;
          return newProgress > 95 ? 95 : newProgress;
        });
      }, 200);

      const url = `${S3_ROUTES.upload}?${params.toString()}`;

      const response = await apiClient.post(
        url,
        formData
        //    {
        //   method: 'POST',
        //   body: formData,
        // }
      );

      clearInterval(progressInterval);

      if (!response.data.success) {
        const errorData = await response.data;
        throw new Error(errorData.error || 'Upload failed');
      }

      setProgress(100);
      const result = await response.data;

      // Adapt the result to match the expected interface
      return {
        s3PathKey: result.s3PathKey,
        s3Url: result.s3Url,
        publicUrl: result.publicUrl,
        isPublic: result.isPublic,
        expiresAt: result.expiresAt,
      };
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err;
    } finally {
      setIsUploading(false);
    }
  };

  /**
   * Gets a presigned URL for a file in S3
   * @param s3PathKey The S3 path key of the file
   * @param expiresIn Optional expiration time in seconds
   * @returns The presigned URL and expiration info
   */
  const getPresignedUrl = async (
    s3PathKey: string,
    expiresIn?: number
  ): Promise<PresignedUrlResult> => {
    try {
      setError(null);

      const params = new URLSearchParams({
        s3PathKey,
      });

      if (expiresIn) {
        params.append('expiresIn', expiresIn.toString());
      }

      const response = await apiClient(
        `${S3_ROUTES.presignedUrl}?${params.toString()}`
      );

      if (!response.data.success) {
        const errorData = await response.data;
        throw new Error(errorData.error || 'Failed to get presigned URL');
      }

      return await response.data;
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err;
    }
  };

  /**
   * Lists files in S3 with an optional prefix
   * @param prefix Optional path prefix to filter results
   * @param maxKeys Optional maximum number of keys to return
   * @returns List of file keys and pagination info
   */
  const listFiles = async (
    prefix: string = '',
    maxKeys?: number
  ): Promise<S3ListResult> => {
    try {
      setError(null);

      const params = new URLSearchParams({
        prefix,
      });

      if (maxKeys) {
        params.append('maxKeys', maxKeys.toString());
      }

      const response = await apiClient.get(
        `${S3_ROUTES.list}?${params.toString()}`
      );

      if (!response.data.success) {
        const errorData = await response.data;
        throw new Error(errorData.error || 'Failed to list files');
      }

      return await response.data;
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err;
    }
  };

  /**
   * Deletes a file from S3
   * @param s3PathKey The S3 path key of the file to delete
   * @returns Result of the delete operation
   */
  const deleteFile = async (s3PathKey: string): Promise<DeleteFileResult> => {
    try {
      setError(null);

      const params = new URLSearchParams({
        s3PathKey,
      });

      const response = await apiClient.delete(
        `${S3_ROUTES.delete}?${params.toString()}`
        // ,
        //  {
        //   method: 'DELETE',
        // }
      );

      if (!response.data.success) {
        const errorData = await response.data;
        throw new Error(errorData.error || 'Failed to delete file');
      }

      return await response.data;
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err;
    }
  };

  return {
    upload,
    getPresignedUrl,
    listFiles,
    deleteFile,
    isUploading,
    error,
    progress,
  };
}
