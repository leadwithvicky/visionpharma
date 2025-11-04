import { useState, useCallback } from 'react';

interface Week {
  title: string;
  subTitle: string;
  videos: { title: string; url?: string }[];
  pdfs: { title: string; url?: string }[];
  test: string;
}

interface SampleCurriculumData {
  _id?: string;
  programId?: string;
  slug?: string;
  title: string;
  description: string;
  weeks: Week[];
  createdAt?: string;
  updatedAt?: string;
}

export function useSampleCurriculum() {
  const [curriculum, setCurriculum] = useState<SampleCurriculumData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch curriculum by programId
  const fetchByProgramId = useCallback(async (programId: string) => {
    if (!programId) {
      setError('Program ID is required');
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/sample/curriculum/program/${programId}`
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch curriculum');
      }

      if (result.success && result.data) {
        setCurriculum(result.data);
        return result.data;
      } else {
        throw new Error('Failed to fetch curriculum data');
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      setError(message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch curriculum by slug (legacy support)
  const fetchBySlug = useCallback(async (slug: string) => {
    if (!slug) {
      setError('Slug is required');
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/sample/curriculum/${slug}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch curriculum');
      }

      if (result.success && result.data) {
        setCurriculum(result.data);
        return result.data;
      } else {
        throw new Error('Failed to fetch curriculum data');
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      setError(message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Get all curriculums
  const fetchAll = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/sample/curriculum');
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch curriculums');
      }

      if (result.success) {
        return result.data;
      } else {
        throw new Error('Failed to fetch curriculum data');
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      setError(message);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Create or update curriculum
  const saveCurriculum = useCallback(
    async (data: SampleCurriculumData, files?: Record<string, File>) => {
      setIsLoading(true);
      setError(null);

      try {
        // Create form data
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));

        // Add files if any
        if (files) {
          Object.entries(files).forEach(([key, file]) => {
            formData.append(key, file);
          });
        }

        const response = await fetch('/api/sample/curriculum', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Failed to save curriculum');
        }

        if (result.success) {
          setCurriculum(result.data);
          return result.data;
        } else {
          throw new Error('Failed to save curriculum');
        }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'Unknown error';
        setError(message);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Delete curriculum
  const deleteCurriculum = useCallback(
    async (identifier: string, isProgram = false) => {
      if (!identifier) {
        setError('Identifier is required');
        return false;
      }

      setIsLoading(true);
      setError(null);

      try {
        // Use the appropriate endpoint based on whether we're deleting by programId or slug
        const endpoint = isProgram
          ? `/api/sample/curriculum/program/${identifier}`
          : `/api/sample/curriculum/${identifier}`;

        const response = await fetch(endpoint, {
          method: 'DELETE',
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Failed to delete curriculum');
        }

        if (result.success) {
          setCurriculum(null);
          return true;
        } else {
          throw new Error('Failed to delete curriculum');
        }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'Unknown error';
        setError(message);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    curriculum,
    isLoading,
    error,
    fetchByProgramId,
    fetchBySlug,
    fetchAll,
    saveCurriculum,
    deleteCurriculum,
  };
}
