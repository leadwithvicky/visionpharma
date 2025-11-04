import React from 'react';
import Marquee from 'react-fast-marquee';
import { TRUSTEDBYCOMPANY } from '@/utils/constants/TrustedBy';
// import { TbCertificate } from 'react-icons/tb';
import Image from 'next/image';

interface CompanyType {
  Logo: string;
}

const TrustedByMarquee = () => {
  return (
    <div>
      {/* Second Marquee */}
      <Marquee
        gradient={false}
        speed={40}
        direction="right"
        pauseOnHover={true}
        className="py-2 overflow-hidden"
        autoFill
      >
        {TRUSTEDBYCOMPANY.map((company: CompanyType, index: number) => (
          <div
            key={index}
            className="mx-2 flex flex-col items-center justify-center group bg-background border border-primary/20 p-2 rounded-2xl"
          >
            <div className="relative min-h-[120px] w-[280px] flex items-center justify-center rounded-lg transition-all duration-300">
              <Image
                className="transition-transform duration-300 object-contain"
                src={company.Logo}
                alt={`Company logo ${index}`}
                width={120}
                height={120}
              />
            </div>
          </div>
        ))}

      </Marquee>
    </div>
  );
};

export default TrustedByMarquee;
