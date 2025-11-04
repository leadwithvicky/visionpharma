import apiClient from './apiClient';
import { PROGRAMS_ROUTES } from '@/routes-endpoint';

// Define a more specific type for query parameters
interface FetchProgramsParams {
  searchParams?: string;
  page?: number;
  limit?: number;
  batchMonth?: string;
  batchYear?: number | string; // Allow string for initial query param
}

export const fetchPrograms = async (queryData: FetchProgramsParams) => {
  // Build query string dynamically
  const params = new URLSearchParams();
  if (queryData.searchParams) params.append('search', queryData.searchParams);
  if (queryData.page) params.append('page', String(queryData.page));
  if (queryData.limit) params.append('limit', String(queryData.limit));
  if (queryData.batchMonth) params.append('batchMonth', queryData.batchMonth);
  if (queryData.batchYear)
    params.append('batchYear', String(queryData.batchYear));

  const queryString = params.toString();
  const url = `${PROGRAMS_ROUTES.base}${queryString ? `?${queryString}` : ''}`;

  console.log('Fetching programs URL:', url);

  const response = await apiClient.get(url);
  return response.data; // Expecting { data: { data: [], total: number, page: number, limit: number }, ... }
};

// Define the structure for program creation/update data
// (Can be imported from hook if defined there and exported)
export interface ProgramData {
  [key: string]: any;
}

export const createProgram = async (programData: ProgramData) => {
  try {
    const response = await apiClient.post(
      `${PROGRAMS_ROUTES.base}`,
      programData
      // {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // }
    );
    return response.data;
  } catch (error) {
    console.error('Error creating program:', error);
    throw error;
  }
};

export const updateProgram = async (
  programId: string,
  programData: ProgramData
) => {
  try {
    const response = await apiClient.patch(
      `${PROGRAMS_ROUTES.update}/${programId}`,
      programData
      // {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating program:', error);
    throw error;
  }
};
