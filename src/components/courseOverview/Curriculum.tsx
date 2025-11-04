import React from 'react';
import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const InstructorProfile = () => {
  const socialLinks: SocialLink[] = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaYoutube />, href: '#', label: 'YouTube' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 rounded-lg overflow-hidden bg-purple-100">
              <Image
                src="/api/placeholder/192/192"
                alt="Maya Singh"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              Maya Singh
            </h2>
            <p className="text-purple-600 font-medium mb-4">
              Developer and Teacher
            </p>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              I&apos;m a developer with a passion for teaching. I&apos;m the
              lead instructor at the London App Brewery, London&apos;s leading
              Programming Bootcamp. I&apos;ve helped hundreds of thousands of
              students learn to code and change their lives by becoming a
              developer. I&apos;ve been invited by companies such as Twitter,
              Facebook and Google to teach their employees. My first foray into
              programming was when I was just 12 years old, wanting to build my
              own Space Invader game. Since then I&apos;ve made hundreds of
              websites, apps and games, but most importantly, I realized that my
              greatest passion is teaching. I spend most of my time researching
              how to make learning to code fun and make hard concepts easy to
              understand. I apply everything I discover into my bootcamp
              programs. In my programs you&apos;ll find lots of geeky humor but
              also lots of explanations and animations to make sure everything
              is easy to understand. I&apos;ll be there for you every step of
              the way.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Contact us</h3>
              <p className="text-sm text-gray-600">
                Phone:{' '}
                <a href="tel:+18512345789" className="text-purple-600">
                  +1 854 123 456 789
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Email:{' '}
                <a
                  href="mailto:mayasingh@gmail.com"
                  className="text-purple-600"
                >
                  mayasingh@gmail.com
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Address: 5609 E Sprague Ave, Spokane Valley, WA 99212, USA
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
