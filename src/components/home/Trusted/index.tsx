import React from 'react';
import TrustedByCompact from './TrustedByCertificate';
// import { TbCertificate } from 'react-icons/tb';

const TrustedBy = () => {
  return (
    <section className="bg-gradient-to-b  from-blue-100 via-pink-200 to-transparent sm:px-8 px-4 pt-8">
      <div className="text-center flex flex-col justify-center items-center gap-8">
        {/* <div className="text-sm w-fit mx-auto flex items-center mb-4 gap-1 bg-primary/5 px-4 py-2 rounded-full">
          <TbCertificate className="text-2xl text-primary" />
          <span className="text-primary text-md">Certifications</span>
        </div> */}
        <div className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-foreground ">
          Empowered By Industry Leaders
        </div>

        <TrustedByCompact />
      </div>
    </section>
  );
};

export default TrustedBy;
