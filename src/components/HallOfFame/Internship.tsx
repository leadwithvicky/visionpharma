"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import IMAGE from "./images";


const Internship = () => {
  const highlights = [
    {
      icon: IMAGE.LEARNINGSPRINTS,
      title: "90-Day Learning Sprints",
    },
    {
      icon: IMAGE.REALWORLDPROJECT,
      title: "Real - world Project",
    },
    {
      icon: IMAGE.EXPERTS,
      title: "Mentored by\nIndustry Experts",
    },
  ];

  const tracks = [
    {
      icon: IMAGE.FULLSTACK,
      title: "Full Stack Web Development",
      desc: "Hands-on coding, mentorship, live project exposure.",
    },
    {
      icon: IMAGE.MEDICALCODING,
      title: "Medical Coding",
      desc: "Trainees handled clinical documentation and coded real cases in alignment with CPC standards.",
    },
    {
      icon: IMAGE.BUSINESSDEVELOPMENT,
      title: "Business Development",
      desc: "Interns handled Salesforce tools and live outreach.",
    },
  ];

  return (
    <section className="w-full px-4 py-20 text-white">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col gap-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* TOP: Highlights */}
        <motion.div
          className="flex justify-center flex-wrap gap-16"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center max-w-[180px]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={80}
                height={80}
                loading="lazy"
                className="w-20 h-20 mb-3 drop-shadow-lg z-10"
              />
              <p
                className="text-base font-extrabold uppercase tracking-wide 
                           bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
                           bg-clip-text text-transparent font-[Poppins] whitespace-pre-line leading-snug"
              >
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM: Internship Tracks */}
        <motion.div
          className="flex flex-wrap justify-center gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          {tracks.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-[#12345666] to-[#00000033] rounded-2xl px-8 py-8 w-[300px] text-center shadow-lg backdrop-blur-md border border-white/10 hover:scale-105 transition duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3
                className="text-xl font-extrabold uppercase tracking-wide 
                           bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
                           bg-clip-text text-transparent font-[Poppins] mb-3"
              >
                {item.title}
              </h3>
              <p className="text-sm text-[#C0C0C0] font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Internship;
