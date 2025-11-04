'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Employee } from './teamData';
import Link from 'next/link';
import Image from 'next/image';

const FoundersCart = ({ item }: { item: Employee }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="bg-white w-11/12 max-w-6xl h-auto border shadow-xl overflow-hidden rounded-[30px] grid grid-cols-1 md:grid-cols-3 cursor-pointer"
    >
      {/* Photo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden h-64 md:h-auto"
      >
        <Image
          src={item.photoUrl}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out"
          alt={item.name}
          loading='lazy'
        />
      </motion.div>

      {/* Information */}
      <div className="col-span-2 flex flex-col justify-center px-4 py-6 md:p-8">
        {/* Name */}
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1C75BC] mb-2">
          {item.name}
        </p>

        {/* Designation */}
        <p className="text-lg md:text-2xl font-semibold text-gray-700 mb-4">
          {item.designation}
        </p>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-600 mb-6">
          {item.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos ab enim magni tenetur impedit hic repudiandae consequatur molestias, maiores corporis consectetur dolore voluptate voluptas id rem soluta iure itaque vel quaerat est. Fugiat odio repellat exercitationem incidunt possimus debitis. Dolorum voluptatum odio soluta hic!'}
        </p>

        {/* Links */}
        <div className="flex gap-5 items-center text-sm md:text-lg font-bold">
          {/* LinkedIn */}
          <Link
            href={item.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-xl"
            >
              <Image
                width={40}
                height={40}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
                alt="LinkedIn"
                className="w-full h-full rounded-xl"
                loading='lazy'
              />
            </motion.div>
          </Link>

          {/* Portfolio */}
          <Link
            href={item.portfolioUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              🔗 Portfolio
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FoundersCart;
