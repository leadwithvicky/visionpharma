'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'; // ✅ Import framer-motion

interface CareerCartProps {
  position: {
    title: string;
    description: string;
    skills: string[];
    slug: string;
    icon: React.ComponentType<any>;
    background: string;
  };
}

const CareerCart: React.FC<CareerCartProps> = ({ position }) => {
  return (
    <motion.div
      className="relative w-[350px] h-[500px] drop-shadow-2xl"
      initial={{ opacity: 0, scale: 0.9, y: 30 }}   // starting state
      animate={{ opacity: 1, scale: 1, y: 0 }}       // animate to
      transition={{ duration: 0.6, ease: 'easeOut' }} // smooth animation
      whileHover={{ scale: 1.03, y: -5 }}             // hover effect
    >
      <Image
        className="absolute"
        src={position.background}
        alt={position.title}
        fill
        style={{ objectFit: 'cover' }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-opacity-50 px-4 flex flex-col justify-between">
        <div className="w-10/12 text-center">
          <div className="">
            <h1 className="font-bold mb-2 text-center text-wrap">{position.title}</h1>
          </div>

          <div className="h-12 ">
            <p className="text-sm" text-center text-wrap text-sm>
              {position.description}
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
            {position.skills
              .slice()
              .sort((a, b) => a.localeCompare(b))
              .map((skill, index) => (
                <button
                  key={index}
                  className="px-2 py-1 bg-gray-200 rounded text-sm w-[120px]"
                >
                  {skill}
                </button>
              ))}
          </div>

          <div className="w-full flex justify-end">
            <Link href={`/careers/${position.slug}`} className="relative w-[150px] h-[40px]">
              <Image
                src="https://res.cloudinary.com/denikmblr/image/upload/v1758101902/Group_1_1_npolpa.png"
                alt="Apply Now"
                width={150}
                height={40}
                className="object-contain"
              />
              <div className="absolute top-0 w-full text-sm h-full font-bold flex pl-4 items-center text-white">
                Apply Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerCart;
