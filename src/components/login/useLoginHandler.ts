'use client';
import Cookies from 'js-cookie';
import { setUser } from '@/Redux/userSlice';
import { useDispatch } from 'react-redux';

export function useLoginHandler() {
  const dispatch = useDispatch();

  const handleSuccess = (data: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(data?.user));
    }

    Cookies.set('token', data?.token, {
      expires: 7,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
    });

    Cookies.set('role', data?.user?.role, {
      expires: 7,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
    });

    dispatch(
      setUser({
        user: data?.user,
        token: data?.token,
        isVerified: data?.isVerified,
      })
    );
    window.location.href = '/'
  };

  const validateForm = (emailMobile: string, password: string) => {
    const errors: { email?: string; password?: string } = {};
    if (!emailMobile.trim()) errors.email = 'Email or Mobile is required';
    if (!password.trim()) errors.password = 'Password is required';
    return errors;
  };

  return { handleSuccess, validateForm };
}
