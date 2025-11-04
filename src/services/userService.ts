import apiClient from './apiClient';
import { AUTH_ROUTES, USERS_ROUTES } from '@/routes-endpoint';

export const getAllUsers = async (params: any) => {
  const response = await apiClient.get(
    `${USERS_ROUTES.base}?search=${params.search ?? ''}`
  );
  return response.data;
};

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await apiClient.post(AUTH_ROUTES.login, credentials);
  return response.data;
};
