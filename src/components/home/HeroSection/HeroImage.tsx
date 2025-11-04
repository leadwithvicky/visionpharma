// components/Hero/HeroImage.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroImage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[400px] w-full lg:w-[510px] relative "
  >
    <Image
      className="absolute rounded-xl sm:rounded-2xl object-contain"
      src="/images/home/hero-illustration.png"
      alt="Student learning online through VisionTech's B.Tech, MBA, MCA, and Pharmacy courses with expert mentorship"
      fill
      priority
      quality={90}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 510px"
    />
  </motion.div>
);
