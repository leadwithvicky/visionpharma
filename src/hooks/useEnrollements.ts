// import { API_ENDPOINTS } from '@/config/apiEndpoint';
// import { fetchEnrolledCourse } from '@/services/enrolledCourse';
// import { useCallback, useState } from 'react';

// interface EnrollmentParams {
//   searchParams?: string;
//   page?: number;
//   limit?: number;
// }

// const useEnrollments = () => {
//   const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [page, setPage] = useState<number>(1);
//   const [hasSearched, setHasSearched] = useState<boolean>(false);

//   // Using useCallback to memoize the function
//   const getEnrolledCourse = useCallback(
//     async ({ searchParams, page = 1, limit }: EnrollmentParams) => {
//       try {
//         setIsLoading(true);

//         // Track if this is a search operation
//         if (searchParams && searchParams.trim() !== '') {
//           setHasSearched(true);
//         } else if (page === 1) {
//           // Reset hasSearched flag if this is a fresh initial load
//           setHasSearched(false);
//         }

//         const response = await fetchEnrolledCourse({
//           searchParams,
//           page,
//           limit,
//         });

//         const data = response.data.data;
//         setEnrolledCourses(data || []);
//       } catch (error) {
//         console.error('Error fetching enrolled courses:', error);
//         setEnrolledCourses([]);
//       } finally {
//         setIsLoading(false);
//       }
//     },
//     []
//   );

//   return {
//     enrolledCourses,
//     isLoading,
//     getEnrolledCourse,
//     setEnrolledCourses,
//     page,
//     setPage,
//     hasSearched,
//   };
// };

// export default useEnrollments;
