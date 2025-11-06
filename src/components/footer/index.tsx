'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUp, FacebookIcon } from 'lucide-react';
import Link from 'next/link';
import { BsTwitterX, BsWhatsapp } from 'react-icons/bs';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SlSocialPintarest } from 'react-icons/sl';
import { PiTelegramLogo } from 'react-icons/pi';

const SocialIcon = ({
  icon: Icon,
  href,
  label,
  bgColor,
  hoverColor,
}: {
  icon: React.ComponentType<any>;
  href: string;
  label: string;
  bgColor: string;
  hoverColor: string;
}) => (
  <a
    href={href}
    aria-label={label}
    className="transition-transform transform hover:scale-110 w-fit"
    target="_self"
    rel="noopener noreferrer"
  >
    <div
      className={`flex items-center justify-center size-8 rounded-lg ${bgColor} hover:${hoverColor} transition-colors duration-300 shadow-lg hover:shadow-xl`}
    >
      <Icon className="w-5 h-5 text-white" />
    </div>
  </a>
);

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/company/visiontech-group/about/',
    label: 'LinkedIn',
    bgColor: 'bg-[#0077B5]',
    hoverColor: 'bg-[#006396]',
  },
  {
    icon: BsWhatsapp,
    href: 'https://api.whatsapp.com/send?phone=917207376333&text=Hello',
    label: 'WhatsApp',
    bgColor: 'bg-[#25D366]',
    hoverColor: 'bg-[#128C7E]',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/visiontech_world',
    label: 'Instagram',
    bgColor: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
    hoverColor: 'bg-gradient-to-tr from-[#E1683C] via-[#C92BB4] to-[#7B2DA0]',
  },
  {
    icon: FacebookIcon,
    href: '#',
    label: 'Facebook',
    bgColor: 'bg-[#1877F2]',
    hoverColor: 'bg-[#166FE5]',
  },
  {
    icon: BsTwitterX,
    href: 'https://x.com/GroupVisiontech',
    label: 'Twitter',
    bgColor: 'bg-black',
    hoverColor: 'bg-gray-900',
  },
  {
    icon: SlSocialPintarest,
    href: 'https://www.pinterest.com/visiontech_group/',
    label: 'Pinterest',
    bgColor: 'bg-[#E60023]',
    hoverColor: 'bg-[#D50c22]',
  },
  {
    icon: PiTelegramLogo,
    href: 'https://web.telegram.org/a/#-1002630400957',
    label: 'Telegram',
    bgColor: 'bg-[#0088cc]',
    hoverColor: 'bg-[#0077b5]',
  },
];

const FooterLinks = ({
  title,
  links,
  isOpen,
  onToggle,
}: {
  title: string;
  links: { text: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b md:border-none border-purple-700/30">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center py-2 md:py-0 md:pointer-events-none"
    >
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <span className="md:hidden">{isOpen ? '−' : '+'}</span>
    </button>
    <ul
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 pb-4' : 'max-h-0 md:max-h-96'
      }`}
    >
      {links.map((link, index) => (
        <li key={index}>
          {link.href.startsWith('/') ? (
            <Link
              href={link.href}
              className="text-gray-300 text-sm hover:text-orange-500 duration-300 transition-colors block py-1"
            >
              {link.text}
            </Link>
          ) : (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-sm hover:text-orange-500 duration-300 transition-colors block py-1"
            >
              {link.text}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const checkScrollTop = useCallback(() => {
    setShowScroll(window.scrollY > 300);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const footerLinks = [
    {
      title: 'CATEGORIES',
      links: [
        // { text: 'B.Tech', href: '/program?programName=B.Tech' },
        { text: 'B.Pharm', href: '/program?programName=B.Pharm' },
        { text: 'M.Pharm', href: '/program?programName=M.Pharm' },
        { text: 'D.Pharm', href: '/program?programName=D.Pharm' },
        { text: 'PharmD', href: '/program?programName=PharmD' },
        // { text: 'Degree', href: '/program?programName=Degree' },
        // { text: 'MBA', href: '/program?programName=MBA' },
        // { text: 'MCA', href: '/program?programName=MCA' },
        // { text: 'Agriculture', href: '/program?programName=Agriculture' },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About Us', href: '/about' },
        { text: 'Services', href: '/services' },
        { text: 'Careers', href: '/careers' },
        { text: 'Contact Us', href: '/contact' },
        { text: 'Blogs', href: 'https://visiontech-blogs.vercel.app/' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-purple-900 to-purple-800 text-white">
      <div className="max-w-screen-2xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center hover:rotate-6 transition-transform">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                VisionPharma
              </span>
            </div>
            <p className="text-gray-300 max-w-sm text-sm leading-relaxed">
              Follow what lights you up with fearless imagination, shaping your
              own path without worrying about tradition.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={index}
                  icon={social.icon}
                  href={social.href}
                  label={social.label}
                  bgColor={social.bgColor}
                  hoverColor={social.hoverColor}
                />
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <FooterLinks
              key={index}
              title={section.title}
              links={section.links}
              isOpen={openSections[section.title] || false}
              onToggle={() => toggleSection(section.title)}
            />
          ))}

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">CONTACT US</h3>
            <div className="flex flex-col">
              <p className="flex flex-col font-semibold hover:text-purple-200 transition-colors">
                <Link href="tel:+917207376333">+91 7207376333</Link>
              </p>
              <p className="hover:text-purple-200 transition-colors flex flex-col font-semibold tracking-wide mb-[2px]">
                <a href="mailto:support@visiontech.world">
                  support@visiontech.world
                </a>
              </p>
              <p className="text-gray-300 text-sm not-italic">
                {`Module No.1, Q3-A3, Quadrant 3, 1st Floor, Cyber Towers, HITEC
                City, Hyderabad, Telangana, 500081`}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-purple-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            Copyright © 2024 VisionTech. All rights reserved
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-gray-400 text-sm text-center">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund-policy"
              className="hover:text-white transition-colors"
            >
              Refund Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>

      {showScroll && (
        <button
          onClick={scrollTop}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-purple-500 hover:bg-purple-600 text-white rounded-full p-3 md:p-4 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 z-[9999]"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
