import apiClient from './apiClient';
import { ENROLLMENT_ROUTES } from '@/routes-endpoint';

// Define EnrollmentParams here or import if available globally
interface EnrollmentParams {
  page?: number;
  limit?: number;
  nameOrEmailSearch?: string;
  programSearch?: string;
  type?: string;
  batchMonth?: string;
  batchYear?: number;
  status?: number;
}

export const fetchEnrolledStudent = async (params?: EnrollmentParams) => {
  // Construct query parameters
  const queryParams = new URLSearchParams();
  if (params?.page) queryParams.set('page', String(params.page));
  if (params?.limit) queryParams.set('limit', String(params.limit));
  if (params?.nameOrEmailSearch)
    queryParams.set('nameOrEmailSearch', params.nameOrEmailSearch);
  if (params?.programSearch)
    queryParams.set('programSearch', params.programSearch);
  if (params?.type) queryParams.set('type', params.type);
  if (params?.batchMonth) queryParams.set('batchMonth', params.batchMonth);
  if (params?.batchYear) queryParams.set('batchYear', String(params.batchYear));
  if (params?.status !== undefined) {
    queryParams.set('status', String(params.status));
  }

  const queryString = queryParams.toString();
  const url = `${ENROLLMENT_ROUTES.base}${
    queryString ? `?${queryString}` : ''
  }`;

  const response = await apiClient.get(url);

  // Add this log to check the exact structure being returned
  console.log(
    'Data structure returned by fetchEnrolledStudent:',
    response.data
  );

  return response.data;
};

export const addEnrolledStudent = async (studentData: any) => {
  const response = await apiClient.post(
    `${ENROLLMENT_ROUTES.base}`,
    studentData
  );
  return response.data;
};

export const updateEnrolledStudent = async (id: any, studentData: any) => {
  const response = await apiClient.patch(
    `${ENROLLMENT_ROUTES.base}/${id}`,
    studentData
  );
  return response.data;
};
