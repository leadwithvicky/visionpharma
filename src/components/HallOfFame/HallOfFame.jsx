"use client";

import React, { useState, useEffect } from "react";
import EmpGrowth from "@/components/HallOfFame/EmpGrowth";
import Achievements from "@/components/HallOfFame/Achievements";
import Internship from "@/components/HallOfFame/Internship";
import Placement from "@/components/HallOfFame/Placement";
import GlobalRanking from "@/components/HallOfFame/GlobalRanking";

const HallOfFame = () => {
  const [activeTab, setActiveTab] = useState("EMPLOYEE GROWTH");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Dynamically import confetti to avoid SSR issues
      import("canvas-confetti").then((confettiModule) => {
        confettiModule.default({
          particleCount: 180,
          spread: 120,
          origin: { y: 0.6 },
          colors: ["#FFD700", "#FF69B4", "#00FFFF", "#7CFC00", "#FF4500"],
          scalar: 1.2,
          zIndex: 9999,
        });
      }).catch((error) => {
        console.error('Failed to load confetti:', error);
      });
    }
  }, [mounted]);

  const tabs = [
    "EMPLOYEE GROWTH",
    "ACHIEVEMENTS",
    "INTERNSHIP",
    // "PLACEMENT",
    "GLOBAL RANKING",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "EMPLOYEE GROWTH":
        return <EmpGrowth />;
      case "ACHIEVEMENTS":
        return <Achievements />;
      case "INTERNSHIP":
        return <Internship />;
      case "PLACEMENT":
        return <Placement />;
      case "GLOBAL RANKING":
        return <GlobalRanking />;
      default:
        return <EmpGrowth />;
    }
  };

  return (
    <>
    <div className="relative bg-gradient-to-br from-[#0f0c29] pt-12 via-[#302b63] to-[#24243e] text-white px-4 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto text-center pt-14">
        {/* Title */}
        <h1
          className="text-5xl sm:text-6xl uppercase tracking-wider mb-8 font-[Cormorant_Garamond] 
          bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E] bg-clip-text text-transparent 
          drop-shadow-[0_3px_2px_rgba(212,175,55,0.7)]"
        >
          HALL OF FAME
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-semibold tracking-wide transition-all duration-300 border 
                ${activeTab === tab
                  ? "bg-gradient-to-r from-[#FFD87C] to-[#A47A1E] text-[#1a1a2e] shadow-lg scale-105 border-yellow-400"
                  : "bg-transparent text-[#C0C0C0] border-white/20 hover:bg-white/10 hover:border-yellow-400"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="rounded-2xl "
        // className="backdrop-blur-md   rounded-2xl shadow-lg"
        >
          {renderTabContent()}
        </div>
      </div>
    </div>
    </>
  );
};

export default HallOfFame;
