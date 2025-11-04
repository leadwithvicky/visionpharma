'use client';

import { motion } from 'framer-motion';

const VisionTechSection = () => {
  const FOUNDERS =
    'https://res.cloudinary.com/dxsxrosna/image/upload/v1752145460/6305359307809604922_qanfxn.jpg';
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-white max-w-4xl mx-auto shadow-md shadow-[#F08A28] rounded-lg border border-border sm:p-6 p-2 grid  gap-6"
    >
      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl mb-6">
          <span className="font-extrabold text-transparent bg-gradient-to-r from-[#56088F] to-[#1A3364] bg-clip-text">
            VisionTech
          </span>
        </h1>

        <p className="text-foreground leading-relaxed">
          VisionTech is founded by <b>Vinay Teja</b>, alumni of CBIT and
          co-founded by <b>Vamshi Krishna</b>, alumni of Anurag University, with
          the vision of bridging the gap between quality education and
          real-world skills...
        </p>

        <p className="text-foreground leading-relaxed mt-5">
          With a deep understanding of the evolving digital landscape, our
          focused aim is to create a tech-driven learning platform that empowers
          learners, professionals, and underserved communities.
        </p>
      </motion.div>

      {/* Right Side - Image
      <motion.div
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="p-3 flex justify-center items-center"
      >
        <img
          className="w-full h-full object-cover rounded-xl shadow-xl"
          alt="founders-photo"
          src={FOUNDERS}
        />
      </motion.div> */}
    </motion.section>
  );
};

export default VisionTechSection;
