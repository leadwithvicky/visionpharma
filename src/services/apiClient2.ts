import axios from 'axios';
import cookies from 'js-cookie';

const apiClient = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002',
  withCredentials: true, // Ensures cookies are included
  headers: {
    'Content-Type': 'application/json',
  },
});


// Attach Token to Requests (Client-side only)
apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default apiClient;
