'use client';

import React from 'react';
import Reviews from '../reviews/Reviews';
import VisionTechSection from './VisionTechSection';
import OurTeam from '../ourTeam/OurTeam';
import OurPartners from './OurPartners';
import CertificateSection from './CertificateSection';
import Wwr from './Wwr';
import OurOffers from './OurOffers';
import OurVision from './OurVision';

const AboutVision = () => {
  return (
    <div className=" pb-36">
      <div className=" mx-auto p-6 space-y-12  relative ">

        {/* Introduction */}
        <VisionTechSection />

        {/* Company Review */}
        <Reviews />

        {/* Our Partners Section */}
        <OurPartners />

        {/* Certificate Section */}
        <CertificateSection />

        {/* Who We Are */}
        <Wwr />

        {/* Our Team */}
        <OurTeam />

        {/* What We Offer */}
        <OurOffers />

        {/* Our Vision */}
        <OurVision />
      </div>
    </div>
  );
};

export default AboutVision;
