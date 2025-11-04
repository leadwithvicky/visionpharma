'use client';

import axios from 'axios';
import Cookies from 'js-cookie'; // ✅ Make sure the import name matches the install

const apiClient = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002',
  withCredentials: true, // ✅ Required for sending cookies like HttpOnly (optional here)
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Attach token from cookies on every request (client-side only)
apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = Cookies.get('token'); // ✅ Make sure cookie name is 'token'
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default apiClient;
