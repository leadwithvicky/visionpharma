import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Employee {
  photoUrl: string;
  name: string;
  designation: string;
  linkedInUrl: string;
}

const EmployeeCart = ({ item }: { item: Employee }) => {
  // console.log('EmployeeCart image URL:', item.photoUrl);
  return (
    <div className="my-10 relative">
      {/* Background Tilt Card */}  
      <div className="w-[250px] min-h-[300px] absolute bg-visionBlue -rotate-[20deg] rounded-[30px] shadow-sm"></div>

      {/* Foreground Card */}
      <div className="w-[250px] min-h-[300px] relative z-10 bg-white border shadow-xl rounded-[30px] flex flex-col gap-2">
        {/* Photo */}
        <div className="rounded-full  mx-auto absolute -top-10 right-20 overflow-hidden">
          <Image
            src={item.photoUrl}
            alt={`${item.name} photo`}
            className="w-[100px] h-full object-contain rounded-full"
            loading="lazy"
            width={65} height={65}
          />
        </div>

        {/* Name */}
        <p className="mt-20 text-[21px] font-bold text-center text-[#1C75BC] h-8">
          {item.name}
        </p>

        {/* Designation */}
        <p className="text-center text-xl font-bold  h-20 w-4/5 mx-auto">{item.designation}</p>

        {/* LinkedIn */}
        <Link href={item.linkedInUrl} target="_blank" rel="noopener noreferrer">
          <Image
            className="w-[60px] h-[60px] mx-auto rounded-xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
            alt="LinkedIn"
           width={50} height={50}

          />
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCart;
