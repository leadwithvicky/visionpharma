'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroImage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[450px] w-full lg:w-[520px] flex justify-center"
  >
    <Image
      src="/pharmalogo.png"
      alt="VisionPharma - Pharmacy Courses, Pharmacovigilance Training, Clinical Research Training"
      fill
      priority
      quality={95}
      className="object-contain rounded-xl sm:rounded-2xl"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
    />
  </motion.div>
);
