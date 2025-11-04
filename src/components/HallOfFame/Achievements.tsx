"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import IMAGE from "@/components/HallOfFame/images";

const Achievements = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section className="w-full px-4 py-20 text-white bg-transparent">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16"
        {...fadeIn}
      >
        {/* LEFT: Certificate & Icons */}
        <motion.div
          className="flex flex-col items-center gap-8 flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Certificate */}
          <Image
            src={IMAGE.CERTIFICATE}
            alt="Certificate of Recognition"
            loading="lazy"
            width={360}
            height={240}
            className="w-[360px] bg-white sm:w-[440px] rounded-xl shadow-[0_10px_40px_rgba(255,215,0,0.3)] border border-yellow-400/40"
          />

          {/* Icons */}
          <div className="flex justify-center gap-10 flex-wrap">
            {[
              {
                img: IMAGE.STUDENTSTRAINED,
                title: "1500+ Students",
                subtitle: "Trained",
              },
              {
                img: IMAGE.TROPHY,
                title: "DPIIT Certified",
                subtitle: "Startup",
              },
              {
                img: IMAGE.CORPORATETIEUPS,
                title: "5+ Corporate",
                subtitle: "Tie-ups",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="w-14 h-14 mb-2 drop-shadow-md"
                />
                <p
                  className="text-center text-base font-extrabold uppercase tracking-wide 
                             bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
                             bg-clip-text text-transparent font-[Poppins] leading-tight"
                >
                  {item.title}
                  <br />
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Highlights */}
        <motion.div
          className="flex flex-col gap-8 w-full max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[
            {
              title: "Intern to Employee",
              desc: "Many interns grew into full-time roles, now leading projects and mentoring peers.",
              icon: IMAGE.INTERNTOEMPLOYEE,
              color: "from-cyan-500 to-blue-500",
            },
            {
              title: "1500+ Interns Trained",
              desc: "Hands-on experience in MERN Stack, AI, Medical Coding, and Clinical SAS.",
              icon: IMAGE.INTERNSTRAINED,
              color: "from-yellow-400 to-red-400",
            },
            {
              title: "Certificate Success",
              desc: "Skilled. Hired. Our CPC training ensures both exam success and job placement.",
              icon: IMAGE.CERTIFICATEOFSUCCESS,
              color: "from-cyan-500 to-blue-500",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-5 p-5 bg-white/5 rounded-2xl border-l-4 border-yellow-400/30 hover:shadow-xl hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.2 }}
            >
              <div
                className={`min-w-[72px] min-h-[72px] rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              </div>
              <div>
                <h3
                  className="text-xl font-extrabold uppercase tracking-wide 
                             bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
                             bg-clip-text text-transparent font-[Poppins] mb-2"
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#C0C0C0] font-light leading-snug">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Achievements;
