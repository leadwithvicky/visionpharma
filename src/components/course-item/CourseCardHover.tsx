// import { AnimatePresence, motion } from 'framer-motion';
// import { useState } from 'react';
// import CourseCard from './CourseCard';

// export function CourseCardWithHover({ courses }: { courses: any }) {
//   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 min-h-[50vh]">
//       {courses &&
//         courses?.map((item: any, idx: number) => (
//           <div
//             key={item.id}
//             className="relative group  block p-2 w-full"
//             onMouseEnter={() => setHoveredIndex(idx)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <AnimatePresence>
//               {hoveredIndex === idx && (
//                 <motion.span
//                   className="absolute inset-0 w-full bg-purple-600/20 dark:bg-slate-500/10 block  rounded-3xl"
//                   layoutId="hoverBackground"
//                   initial={{ opacity: 0 }}
//                   animate={{
//                     opacity: 1,
//                     transition: { duration: 0.15 },
//                   }}
//                   exit={{
//                     opacity: 0,
//                     transition: { duration: 0.15, delay: 0.2 },
//                   }}
//                 />
//               )}
//             </AnimatePresence>
//             <div className="relative w-full h-full z-50">
//               <CourseCard course={item} />
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// }
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import CourseCard from './CourseCard';

export function CourseCardWithHover({ courses }: { courses: any }) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="flex justify-center flex-wrap  min-h-[50vh]">
      {courses &&
        courses?.map((item: any, idx: number) => (
          <div
            key={item.id}
            className="relative group  block p-2 lg:w-1/4 md:w-1/3"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 w-full bg-purple-600/20 dark:bg-slate-500/10 block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="relative w-full h-full z-50">
              <CourseCard course={item} />
            </div>
          </div>
        ))}
    </div>
  );
}
