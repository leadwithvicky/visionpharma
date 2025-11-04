"use client";
import React from "react";
import { motion } from "framer-motion";

const PLACED_STUDENTS = [
  {
    name: "Sanya Rao",
    title: "Medical Coding Analyst",
    company: "Apollo Hospitals, Hyderabad",
    feedback:
      "From knowing nothing about coding to auditing real patient data at Apollo, VisionTech changed my career path completely.",
    image: "/image/sanya.png",
  },
  {
    name: "Nisha D’Souza",
    title: "Machine Learning Engineer",
    company: "Amazon, Chennai",
    feedback:
      "VisionTech gave me clarity, code confidence, and a hiring-ready portfolio. Amazon noticed and hired.",
    image: "/image/nisha.png",
  },
  {
    name: "Aditya Verma",
    title: "Business Intelligence Associate",
    company: "Deloitte, Gurugram",
    feedback:
      "VisionTech turned data from confusing to exciting. The mentors made sure I didn’t just learn tools, I learned how to think like an analyst.",
    image: "/image/aditya.png",
  },
];

const Placement = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-16 text-center text-white">
      {/* Heading */}
      <motion.p
        className="mt-4 text-3xl sm:text-4xl font-extrabold uppercase tracking-widest 
                   bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E] 
                   bg-clip-text text-transparent font-[Poppins] drop-shadow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Trained by VisionTech. Hired by the Future.
      </motion.p>

      {/* Cards */}
      <motion.div
        className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
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
        {PLACED_STUDENTS.map((student, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-8 text-white shadow-xl hover:scale-105 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <image
              src={student.image}
              alt={student.name}
              className="w-24 h-24 mx-auto rounded-full border-4 text-[#C0C0C0] shadow-lg object-cover mb-4"
            />
            <h3
              className="text-lg sm:text-xl font-extrabold uppercase tracking-wide 
                         bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
                         bg-clip-text text-transparent font-[Poppins] mb-1"
            >
              {student.name}
            </h3>
            <p className="font-semibold text-[#C0C0C0]">{student.title}</p>
            <p className="text-sm italic text-blue-300 mb-2">
              {student.company}
            </p>
            <p className="text-sm text-[#C0C0C0] leading-relaxed">
              {student.feedback}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Placement;
