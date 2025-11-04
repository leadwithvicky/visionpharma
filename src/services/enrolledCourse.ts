import apiClient from './apiClient';
import { ENROLLMENT_ROUTES } from '@/routes-endpoint';
export const fetchEnrolledCourse = async (queryData: any) => {
  const response = await apiClient.get(`${ENROLLMENT_ROUTES.base}`, queryData);
  return response.data;
};
