import { getAllUsers } from '@/services';
import React, { useState, useCallback } from 'react';

// Define UserParams here or import if available
interface UserParams {
  search?: string;
  limit?: number;
  // Add other params if your getAllUsers service accepts them
}

const useAllUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allUser, setAllUser] = useState<any[]>([]);

  // Wrap the API function with useCallback
  const getAllUserApi = useCallback(async (params?: UserParams) => {
    try {
      setIsLoading(true);
      const response = await getAllUsers(params);
      console.log(response, 'response');

      // Adjust based on actual API response structure
      const users =
        response?.data?.users || response?.data || response?.users || [];

      setAllUser(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      setAllUser([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    allUser,
    getAllUserApi,
    isLoading,
  };
};

export default useAllUser;
