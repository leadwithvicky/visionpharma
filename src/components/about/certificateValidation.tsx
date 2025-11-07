import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Certificates from './certificates';
import Image from 'next/image';

export function CertificateValidation() {


  return (
    <div className="relative w-[95%] sm:w-full max-w-xl mx-auto">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {Certificates.map((cert) => (
            <CarouselItem key={cert.id}>
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full"
              >
                <Card className="border-none h-auto w-full overflow-hidden shadow-none bg-transparent p-2">
                  <CardContent className="flex flex-col bg-transparent items-center justify-center p-0 h-[500px] sm:h-[900px]">
                    <Image
                      src={cert.image}
                      alt={`Certificate ${cert.id}`}
                      width={600}
                      height={800}
                      loading='lazy'
                      unoptimized={true}
                      className="w-full h-full object-contain border rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                    />
                  </CardContent>
                </Card>

                {cert.hasVerificationButton && (
                  <div className="flex flex-col sm:flex-col xl:flex-row items-center xl:justify-between w-full bg-transparent p-4 gap-3 text-white">
                    <div className="text-center xl:text-left text-white">
                      <p className="text-sm font-bold xl:text-lg mb-1 text-black">
                        Use:
                      </p>
                      <p className="text-sm font-semibold xl:text-lg text-black break-words">
                        {cert.verificationCode}
                      </p>
                    </div>
                    <Link
                      href={cert.verificationUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#005CAF] to-[#13AB82]
 text-white font-semibold text-sm xl:text-base py-2 px-4 rounded transition-all duration-300 text-center"
                    >
                      Verify Certificate
                    </Link>
                  </div>
                )}
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrow Buttons */}
        <CarouselPrevious className="absolute left-[-40px] sm:left-[-80px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent text-black hover:bg-white rounded-full p-2 shadow transition" />
        <CarouselNext className="absolute right-[-40px] sm:right-[-80px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent text-black hover:bg-white rounded-full p-2 shadow transition" />
      </Carousel>
    </div>
  );
}

export default CertificateValidation;
