// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';

// interface Course {
//   title: string;
//   image: string;
//   description: string;
//   subtopic: string;
// }

// interface CourseCardProps {
//   course: Course;
//   onExplore: (title: string) => void;
// }

// const CourseCard = ({ course, onExplore }: CourseCardProps) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//       whileHover={{ scale: 1.02, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
//       className="border border-gray-200 rounded-2xl sm:rounded-3xl shadow-sm
//         transition-all duration-300 ease-in-out
//         flex flex-col gap-3 sm:gap-3 pb-4 md:pb-1"
//     >
//       {/* Animated Image Container */}
//       <div className="relative w-full aspect-[5/4] overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.4, ease: 'easeOut' }}
//           className="w-full h-full"
//         >
//           <Image
//             src={course.image}
//             alt={course.title}
//             className="absolute object-cover inset-0 rounded-t-2xl sm:rounded-t-3xl"
//             fill
//             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//             priority={false}
//           />
//         </motion.div>
//       </div>

//       <div className="px-3 sm:px-4 pb-3 sm:pb-4 tracking-tight flex flex-col justify-between h-full">
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="mb-1 text-gray-500 text-xs tracking-tight p-2 bg-gray-100 w-fit rounded-full"
//         >
//           {course.subtopic}
//         </motion.div>

//         <motion.h3
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="text-lg sm:text-xl font-semibold mb-1"
//         >
//           {course.title}
//         </motion.h3>

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="text-gray-600 text-xs sm:text-sm line-clamp-2"
//         >
//           {course.description}
//         </motion.p>

//         {/* Animated Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={() => onExplore(course.title.replaceAll(' ', '-'))}
//           className="bg-primary text-white px-4 py-3 rounded-full mt-4 w-full
//             flex items-center justify-center gap-1 group"
//         >
//           Explore Now
//           <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
//             <ArrowRight className="size-5 transition-all duration-200 ease-in-out" />
//           </motion.span>
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default CourseCard;
