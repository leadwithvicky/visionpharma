'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '@/Redux/userSlice';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        dispatch(setUser({user : parsedUser, isVerified : parsedUser.isVerified}));
      } catch (err) {
        console.error('Failed to parse user from localStorage:', err);
        dispatch(clearUser());
      }
    } else {
      dispatch(clearUser());
    }
  }, [dispatch]);

  return <>{children}</>;
}
