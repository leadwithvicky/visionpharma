import apiClient from './apiClient';
import { SCHEDULECLASS_ROUTES } from '@/routes-endpoint';

export interface ScheduleClassFilters {
  title?: string;
  fromDate?: string;
  toDate?: string;
  status?: string;
  programId?: string;
  programTitle?: string;
  page?: number;
  limit?: number;
}

export const fetchScheduleClass = async (filters?: ScheduleClassFilters) => {
  const response = await apiClient.get(`${SCHEDULECLASS_ROUTES.base}`, {
    params: filters,
  });
  return response.data;
};

export const ScheduleClass = async (scheduleClassData: any) => {
  const response = await apiClient.post(
    `${SCHEDULECLASS_ROUTES.base}`,
    scheduleClassData
  );
  return response.data;
};

export const deleteScheduleClass = async (scheduleClassId: string) => {
  const response = await apiClient.delete(
    `${SCHEDULECLASS_ROUTES.base}/${scheduleClassId}`
  );
  return response.data;
};

export const updateScheduleClass = async (
  scheduleClassId: string,
  scheduleClassData: any
) => {
  const response = await apiClient.patch(
    `${SCHEDULECLASS_ROUTES.base}/${scheduleClassId}`,
    scheduleClassData
  );
  return response.data;
};

export const getScheduleClassOfStudent = async (
  userId: string,
  date?: string
  // page: number = 1,
  // limit?: number = 5
) => {
  const response = await apiClient.get(`${SCHEDULECLASS_ROUTES.enrolled}`, {
    params: {
      userId,
      date,
      // page: page.toString(),
      // limit: limit.toString(),
    },
  });
  return response.data;
};
