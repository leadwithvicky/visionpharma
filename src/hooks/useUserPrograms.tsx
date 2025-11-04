import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import apiClient from '@/services/apiClient';
import { ENROLLMENT_ROUTES } from '@/routes-endpoint';

interface Program {
  _id: string;
  title: string;
  slug: string;
  image: string;
  program: string;
  branch: string;
  description: string;
  subtopic: string;
}

interface UserProgram {
  _id: string;
  type: string; // 'ULP' or 'ILP'
  status: number;
  batchMonth: string;
  batchYear: number;
  createdAt: string;
  updatedAt: string;
  program: Program;
}

interface UseUserProgramsReturn {
  userPrograms: UserProgram[];
  isLoading: boolean;
  error: string | null;
  fetchUserPrograms: () => Promise<void>;
}

const useUserPrograms = (): UseUserProgramsReturn => {
  const [userPrograms, setUserPrograms] = useState<UserProgram[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUserPrograms = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await apiClient.get(ENROLLMENT_ROUTES.userProgram);

      if (response.data && response.data.success) {
        setUserPrograms(response.data.data || []);
      } else {
        setError(response.data?.message || 'Failed to fetch programs');
        toast.error(response.data?.message || 'Failed to fetch programs');
      }
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || 'Error fetching user programs';
      setError(errorMessage);
      toast.error(errorMessage);
      console.error('Error fetching user programs:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserPrograms();
  }, [fetchUserPrograms]);

  return {
    userPrograms,
    isLoading,
    error,
    fetchUserPrograms,
  };
};

export default useUserPrograms;
