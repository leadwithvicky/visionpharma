import React from 'react';
import Marquee from 'react-fast-marquee';
// import { FaLightbulb } from 'react-icons/fa';

interface Certificate {
  id: number;
  text: string;
}

const certificates: Certificate[] = [
  { id: 1, text: 'Official Certificate' },
  { id: 2, text: 'Professional Teacher' },
  { id: 3, text: 'Lifetime Access' },
];

const Benefit = () => {
  return (
    <div className="bg-visionBlue py-4 overflow-hidden">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="py-2"
        autoFill
      >
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="flex items-center gap-3 mx-3 text-white"
          >
            <span className="text-2xl font-semibold whitespace-nowrap">
              {cert.text}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Benefit;
