import {
  createProgram,
  fetchPrograms,
  updateProgram,
  ProgramData,
} from '@/services/manageProgram';
import { useCallback, useState } from 'react';

// Define the structure of a program (update as needed)
export interface Program_I {
  _id: string;
  title: string;
  slug: string;
  subtopic?: string;
  description?: string;
  image?: string;
  batchMonth?: string;
  batchYear?: number;
  createdAt?: string;
  updatedAt?: string;
}

// Define the parameters for fetching programs
interface ProgramParams_I {
  searchParams?: string;
  page?: number;
  limit?: number;
  batchMonth?: string;
  batchYear?: number | string;
}

// Define the structure of the API response data
interface ApiResponseData_I {
  data: Program_I[];
  total: number;
  page: number;
  limit: number;
}

// Define the structure of the API response
interface ApiResponse_I {
  data: ApiResponseData_I;
  success: boolean;
  message: string;
}

const useManageProgram = () => {
  const [programs, setPrograms] = useState<Program_I[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalPrograms, setTotalPrograms] = useState<number>(0);
  const [limit, setLimit] = useState<number>(100); // Use the defined limit
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const getPrograms = useCallback(
    async (params: ProgramParams_I) => {
      setIsLoading(true);
      try {
        const searchActive =
          !!params.searchParams || !!params.batchMonth || !!params.batchYear;
        setHasSearched(searchActive);

        const response: ApiResponse_I = await fetchPrograms({
          ...params,
          page: params.page || 1,
          limit: params.limit || limit,
        });

        if (response?.data) {
          const { data, total, page, limit: pageSize } = response.data;
          setPrograms(data || []);
          setTotalPrograms(total || 0);
          setCurrentPage(page || 1);
          setTotalPages(Math.ceil((total || 0) / (pageSize || limit)));
          setLimit(pageSize || limit);
        } else {
          setPrograms([]);
          setTotalPrograms(0);
          setCurrentPage(1);
          setTotalPages(1);
        }
      } catch (error) {
        console.error('Error fetching programs:', error);
        setPrograms([]);
        setTotalPrograms(0);
        setCurrentPage(1);
        setTotalPages(1);
      } finally {
        setIsLoading(false);
      }
    },
    [limit]
  );

  const createProgramsApi = useCallback(
    async (programData: ProgramData) => {
      setIsLoading(true);
      try {
        const result = await createProgram(programData);
        await getPrograms({ page: 1, limit });
        return result;
      } catch (error) {
        console.error('Error creating program:', error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [getPrograms, limit]
  );

  const updateProgramsApi = useCallback(
    async (programId: string, programData: ProgramData) => {
      setIsLoading(true);
      try {
        const result = await updateProgram(programId, programData);
        await getPrograms({ page: currentPage, limit });
        return result;
      } catch (error) {
        console.error('Error updating program:', error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [getPrograms, currentPage, limit]
  );

  return {
    programs,
    isLoading,
    getPrograms,
    currentPage,
    totalPages,
    totalPrograms,
    limit,
    hasSearched,
    createProgramsApi,
    updateProgramsApi,
  };
};

export default useManageProgram;
