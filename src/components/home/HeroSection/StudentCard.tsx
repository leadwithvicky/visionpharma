// components/Students/StudentsCard.tsx
import Image from 'next/image';

export const StudentsCard = () => (
  <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2 relative size-12">
        <Image
          src="/images/home/student1.webp"
          alt="Avatar"
          className="absolute rounded-full border-2 border-white bg-contain"
          fill
        />
        <Image
          src="/images/home/student2.webp"
          alt="Avatar"
          className="absolute rounded-full border-2 border-white bg-contain"
          fill
        />
        <Image
          src="/images/home/student3.webp"
          alt="Avatar"
          className="absolute rounded-full border-2 border-white bg-contain"
          fill
        />
      </div>
      <div className="text-base sm:text-lg font-bold">100%</div>
    </div>
    <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap px-3">
      Satisfied Students
    </div>
  </div>
);
