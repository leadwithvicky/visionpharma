import {
  addEnrolledStudent,
  fetchEnrolledStudent,
  updateEnrolledStudent,
} from '@/services/manageAcess';
import React, { useState, useCallback } from 'react';
import { toast } from 'sonner';

// Define EnrollmentParams here to match frontend/backend
interface EnrollmentParams {
  page?: number;
  limit?: number;
  nameOrEmailSearch?: string; // Updated
  programSearch?: string; // Updated
  type?: string;
  batchMonth?: string;
  batchYear?: number;
  status?: number; // Added status filter
}

const useManageAccess = () => {
  // Type the state more accurately based on the expected API response
  const [enrolledData, setEnrolledData] = useState<{
    data: any[];
    total: number;
    page: number;
    limit: number;
  } | null>(null); // Initialize as null
  const [isLoading, setIsloading] = useState(false);

  const getEnrolledStudentApi = useCallback(
    async (params?: EnrollmentParams) => {
      let finalState = { data: [], total: 0, page: 1, limit: 10 }; // Default structure
      try {
        setIsloading(true);
        const response = await fetchEnrolledStudent(params);
        const apiData = response.data; // Assuming response is { data: { data: [...], total: ... } }

        finalState = {
          data: apiData?.data ?? [],
          total: apiData?.total ?? 0,
          page: apiData?.page ?? 1,
          limit: apiData?.limit ?? 10,
        };
        setEnrolledData(finalState);
      } catch (error: any) {
        console.error('Error fetching enrolled students:', error);
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            'Failed to fetch enrolled students'
        );
        setEnrolledData(finalState);
      } finally {
        setIsloading(false);
      }
    },
    []
  );

  const addEnrolledStudentApi = useCallback(async (studentData: any) => {
    try {
      setIsloading(true);
      const response = await addEnrolledStudent(studentData);
      toast.success('Enrollment added successfully');
      return response;
    } catch (error: any) {
      console.error('Error adding enrolled student:', error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          'Failed to add enrolled student'
      );
    } finally {
      setIsloading(false);
    }
  }, []);

  const updateEnrolledStudentApi = useCallback(
    async (id: any, studentData: any) => {
      try {
        setIsloading(true);
        const response = await updateEnrolledStudent(id, studentData);
        toast.success('Enrollment updated successfully');
        return response;
      } catch (error: any) {
        console.error('Error updating enrolled student:', error);
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            'Failed to update enrolled student'
        );
      } finally {
        setIsloading(false);
      }
    },
    []
  );

  return {
    enrolledData,
    getEnrolledStudentApi,
    isLoading,
    addEnrolledStudentApi,
    updateEnrolledStudentApi,
  };
};

export default useManageAccess;
