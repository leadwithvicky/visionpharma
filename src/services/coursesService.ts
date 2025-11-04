import apiClient from './apiClient';
import { courseData } from '@/types/course';

// export const getPrograms = async () => {
//   const response = await apiClient.get(API_ENDPOINTS.COURSES.BASE);
//   return response.data;
// };

// export const getProgramById = async (courseId: string) => {
//   const response = await apiClient.get(
//     API_ENDPOINTS.COURSES.GET_BY_ID(courseId)
//   );
//   return response.data;
// }; //NOT USED

// export const addCourse = async (courseData: courseData) => {
//   const response = await apiClient.post(API_ENDPOINTS.COURSES.ADD, courseData);
//   return response.data;
// }; // NOT USED

// export const updateCourse = async (
//   courseId: string,
//   courseData: Partial<courseData>
// ) => {
//   const response = await apiClient.patch(
//     API_ENDPOINTS.COURSES.UPDATE(courseId),
//     courseData
//   );
//   return response.data;
// }; // NOT USED
// export const getChapterById = async (chapterId: string) => {
//   const response = await apiClient.get(
//     API_ENDPOINTS.COURSES.GET_CHAPTER(chapterId)
//   );
//   return response.data;
// };

// export const enrollCourse = async (courseId: string, userId: string) => {
//   const response = await apiClient.post(API_ENDPOINTS.COURSES.ENROLL, {
//     courseId,
//     userId,
//   });
//   return response.data;
// }; //NOT USED

// export const getEnrollDetail = async () => {
//   const response = await apiClient.get(API_ENDPOINTS.COURSES.GET_ENROLL);
//   return response.data;
// };  //NOT USED
// export const getEnrolledCourseByUser = async (userId: string) => {
//   const response = await apiClient.get(
//     API_ENDPOINTS.COURSES.GET_ENROLLED_BY_USER(userId)
//   );
//   return response.data;
// }; //NOT USED

// export const getUserCourse = async (userId: string) => {
//   const response = await apiClient.get(
//     API_ENDPOINTS.COURSES.GET_USER_COURSE(userId)
//   );
//   return response.data;
// }; NOT USED

// export const getEnrolledCourse = async (userId: string) => {
//   const response = await apiClient.get(`/private/courses/${userId}`);
//   return response.data;
// };

// export const getCourseChapter = async (chapterId: string) => {
//   const response = await apiClient.get(
//     API_ENDPOINTS.COURSES.GET_CHAPTER(chapterId)
//   );
//   return response.data;
// }; //NOT USED
