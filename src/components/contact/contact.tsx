'use client';
import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import StudentForm from '@/components/home/about/StudentForm';
import { Loader } from '../loader/loader';
import GoogleAnalyticsTemplate from '../Google.Analytics.Template';


const ContactInfo = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] border border-border">
    <div className="flex items-center gap-4 p-4">
      <div className="rounded-full p-2 bg-orange-100">
        <Icon className="h-6 w-6 text-orange-500" />
      </div>
      <div>
        <h3 className="font-bold text-navy-900 mb-1">{title}</h3>
        {children}
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const [isMapLoading, setIsMapLoading] = useState(true);

  return (
    <GoogleAnalyticsTemplate>
      <div className="  sm:py-16 py-8">
        <div className="max-w-screen-2xl sm:px-8 px-4 mx-auto flex flex-col gap-8">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="sm:text-4xl text-2xl font-bold">Contact Us</h1>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ContactInfo icon={MapPin} title="Location">
              <p className="text-gray-600 text-sm">
                {`Module No.1, Q3-A3, Quadrant 3, 1st Floor, Cyber Towers, HITEC
              City, Hyderabad, Telangana, 500081`}
              </p>
            </ContactInfo>

            <ContactInfo icon={Phone} title="Call Now">
              <p className="text-gray-600 text-sm">+91 72073 76333</p>
            </ContactInfo>

            <ContactInfo icon={Mail} title="Email Now">
              <p className="text-gray-600 text-sm">support@visiontech.world</p>
            </ContactInfo>
          </div>

          {/* Map Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative min-h-[400px] bg-gray-100 rounded-lg">
              {isMapLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                  <Loader />
                </div>
              )}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.200186180127!2d78.3812398!3d17.4501301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93fe992c963d%3A0xf4a3c95fea8b977!2sVisionTech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1740415051986!5m2!1sen!2sin"
                loading="lazy"
                className="h-full w-full rounded-lg"
                onLoad={() => setIsMapLoading(false)}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold text-orange-500">Contact Us</p>
              <p className="md:text-4xl text-2xl font-bold">Need More Help ?</p>
              <StudentForm />
            </div>
          </div>

        </div>
      </div>
    </GoogleAnalyticsTemplate>
  );
};

export default ContactPage;
