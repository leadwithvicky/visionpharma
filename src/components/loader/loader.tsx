import Image from 'next/image';
import React from 'react';
import { RiLoader2Fill } from 'react-icons/ri';
export const Loader = () => {
  return (
    // <Image
    //   src={'/images/book-loader.gif'}
    //   alt=""
    //   fill
    //   className="object-cover"
    // />
    <RiLoader2Fill className="animate-spin text-2xl" />
  );
};
