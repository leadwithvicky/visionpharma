import { useState, useRef } from 'react';
import { useS3Upload } from '@/hooks/useS3Upload';
import Image from 'next/image';

interface FileUploaderProps {
  s3Path?: string;
  isPublic?: boolean;
  skipTypeDetection?: boolean;
  expiresIn?: number;
  onUploadComplete?: (result: {
    s3PathKey: string;
    publicUrl: string;
    s3Url: string;
    isPublic: boolean;
    expiresAt?: string;
  }) => void;
  acceptedFileTypes?: string;
  maxFileSize?: number;
}

export default function FileUploader({
  s3Path,
  isPublic = false,
  skipTypeDetection = false,
  expiresIn,
  onUploadComplete,
  acceptedFileTypes,
  maxFileSize = 10 * 1024 * 1024, // 10MB default
}: FileUploaderProps) {
  const { upload, isUploading, error, progress } = useS3Upload();
  const [uploadedFile, setUploadedFile] = useState<{
    url: string;
    name: string;
  } | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset states
    setFileError(null);
    setUploadedFile(null);

    // Validate file type if specified
    if (acceptedFileTypes && !file.type.match(acceptedFileTypes)) {
      setFileError(`Invalid file type. Accepted types: ${acceptedFileTypes}`);
      return;
    }

    // Validate file size
    if (file.size > maxFileSize) {
      setFileError(
        `File is too large. Maximum size: ${maxFileSize / (1024 * 1024)}MB`
      );
      return;
    }

    try {
      // Upload the file to S3
      const result = await upload(file, {
        s3Path,
        isPublic,
        skipTypeDetection,
        expiresIn,
      });

      // Set the uploaded file info
      setUploadedFile({
        url: result.publicUrl,
        name: file.name,
      });

      // Call the onUploadComplete callback if provided
      if (onUploadComplete) {
        onUploadComplete({
          ...result,
          expiresAt: result.expiresAt?.toISOString(),
        });
      }
    } catch (err) {
      console.error('Upload failed:', err);
      // Error is already set by the hook
    }

    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      // Create a synthetic event with the dropped file
      const fileInputEl = fileInputRef.current;
      if (fileInputEl) {
        // @ts-ignore - Using DataTransfer to create a synthetic change event
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(files[0]);
        fileInputEl.files = dataTransfer.files;

        // Trigger the onChange handler
        const event = new Event('change', { bubbles: true });
        fileInputEl.dispatchEvent(event);
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* File upload area */}
      <div
        className={`
          border-2 border-dashed rounded-lg p-6 text-center
          ${isUploading ? 'bg-gray-100' : 'hover:bg-gray-50'}
          transition-colors duration-200 cursor-pointer
        `}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept={acceptedFileTypes}
          disabled={isUploading}
        />

        {isUploading ? (
          <div className="space-y-2">
            <div className="text-sm text-gray-600">Uploading...</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        ) : uploadedFile ? (
          <div className="space-y-2">
            <svg
              className="mx-auto h-12 w-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-sm text-gray-600">File uploaded successfully</p>
            <p className="text-xs text-gray-500 truncate max-w-full">
              {uploadedFile.name}
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="text-sm text-gray-600">
              Drag and drop a file, or click to select
            </p>
            <p className="text-xs text-gray-500">
              {acceptedFileTypes
                ? `Accepted formats: ${acceptedFileTypes.replace(/\./g, ' ')}`
                : 'Any file format'}
            </p>
            <p className="text-xs text-gray-500">
              {maxFileSize
                ? `Maximum size: ${maxFileSize / (1024 * 1024)}MB`
                : 'No size limit'}
            </p>
          </div>
        )}
      </div>

      {/* Error message */}
      {(error || fileError) && (
        <div className="text-red-500 text-sm">
          {fileError || error?.message}
        </div>
      )}

      {/* Preview for uploaded file (if image) */}
      {uploadedFile && uploadedFile.url.match(/\.(jpeg|jpg|gif|png)$/i) && (
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
          <Image
            src={uploadedFile.url}
            alt="Uploaded file preview"
            className="max-w-full h-auto max-h-48 rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
