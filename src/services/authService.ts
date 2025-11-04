import apiClient from './apiClient';
import Cookies from 'js-cookie';
import { SignupData } from '@/backend/schema/auth.schema';
import { AUTH_ROUTES } from '@/routes-endpoint';

interface LoginData {
  email: string;
  password: string;
}

export const authService = {
  signup: async (data: SignupData) => {
    const response = await apiClient.post(AUTH_ROUTES.signup, data);
    // console.log(response.data);
    return response.data;
  },

  login: async (value: LoginData) => {
    const { data } = await apiClient.post(AUTH_ROUTES.login, value);
    console.log(data, 'login');

    localStorage.setItem('user', JSON.stringify(data.data.user));
    Cookies.set('token', data.data.token, { expires: 7 });
    Cookies.set('role', data.data.user.role, { expires: 7 });
    return data;
  },

  logout: () => {
    localStorage.removeItem('user');
    Cookies.remove('token');
    Cookies.remove('role');
  },
};
