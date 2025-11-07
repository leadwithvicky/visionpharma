'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Cookies from 'js-cookie';
import {
  LogIn,
  Menu,
  UserPlus,
  X,
  User,
  Settings,
  LogOut,
} from 'lucide-react';

import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import { authService } from '@/services';

import ProfileDropdown from './manage-profile';
import AuthButtons from './AuthButtons';

const navigationItems = [
  { label: 'Home', route: '/' },
  { label: 'About Us', route: '/about' },
  { label: 'Services', route: '/services' },
  { label: 'Careers', route: '/careers' },
  { label: 'Contact Us', route: '/contact' },
  // { label: 'Hall of Fame', route: '/hall-of-fame' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const isHallOfFamePage = pathname === '/hall-of-fame';

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleSignOut = () => {
    authService.logout();
    setOpen(false);
    toast.success('Logout successful');
    window.location.href = '/login';
  };

  useEffect(() => {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      setUserData(JSON.parse(localUser));
    }
  }, []);

  // Scroll lock and responsive menu reset
  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMenuOpen(false);
    };

    if (mediaQuery.matches) setIsMenuOpen(false);
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header className={`w-full shadow-md ${isHallOfFamePage ? 'bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]' : 'bg-white'}`}>
      <div className="w-full px-2 md:px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className={`flex items-center pl-2 md:pl-4  pr-5 rounded-xl ${isHallOfFamePage ? 'bg-gradient-to-r from-[#FFD87C] to-[#A47A1E]' : 'bg-white'}`}>
            <div className="relative w-[280px] aspect-[4/2] hover:scale-105 transition-all duration-300">
              <Image
                src="logo.png"
                alt="VisionTech Logo"
                fill
                unoptimized
                className="object-contain"
                
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            <nav className="flex items-center space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.route}
                  href={item.route}
                  className={`relative font-semibold transition-all text-lg ${
                    item.route === '/'
                      ? pathname === '/'
                        ? isHallOfFamePage ? 'text-orange-300' : 'text-[#13AB82]'
                        : isHallOfFamePage ? 'text-white hover:text-orange-300' : 'text-[#005CAF] hover:text-[#13AB82]'
                      : pathname.startsWith(item.route)
                        ? isHallOfFamePage ? 'text-orange-300' : 'text-[#13AB82]'
                        : isHallOfFamePage ? 'text-white hover:text-orange-300' : 'text-[#005CAF] hover:text-[#13AB82]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 text-[#13AB82] transition-transform origin-left duration-300 ${
                      item.route === '/' 
                        ? pathname === '/'
                          ? 'scale-x-100'
                          : 'scale-x-0'
                        : pathname.startsWith(item.route)
                          ? 'scale-x-100'
                          : 'scale-x-0'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {userData ? (
              <ProfileDropdown
                userName={userData?.fullName}
                userEmail={userData?.email}
                setOpen={setOpen}
                open={open}
                handleSignOut={handleSignOut}
                isHallOfFamePage={isHallOfFamePage}
              />
            ) : (
              <AuthButtons />
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-md ${isHallOfFamePage ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`lg:hidden fixed inset-0 top-[64px] md:top-[80px] shadow-lg z-50 overflow-y-auto font-semibold ${isHallOfFamePage ? 'bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]' : 'bg-white'}`}>
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.route}
                href={item.route}
                onClick={toggleMenu}
                className={`py-3 px-4 text-lg rounded-md ${
                  item.route === '/'
                    ? pathname === '/'
                      ? isHallOfFamePage ? 'bg-orange-900/50 text-orange-300' : 'bg-orange-50 text-[#13AB82]'
                      : isHallOfFamePage ? 'text-white hover:bg-white/10 hover:text-orange-300' : 'text-[#005CAF] hover:bg-gray-50 hover:text-[#13AB82]'
                    : pathname.startsWith(item.route)
                      ? isHallOfFamePage ? 'bg-orange-900/50 text-orange-300' : 'bg-orange-50 text-[#13AB82]'
                      : isHallOfFamePage ? 'text-white hover:bg-white/10 hover:text-orange-300' : 'text-[#005CAF] hover:bg-gray-50 hover:text-[#13AB82]'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <hr className={`my-2 ${isHallOfFamePage ? 'border-white/20' : 'border-gray-200'}`} />

            {userData ? (
              <>
                <Link
                   href="https://visiontech-lms.vercel.app/login"
                  onClick={toggleMenu}
                  className={`py-3 px-4 flex items-center text-lg rounded-md ${
                    pathname.startsWith('/dashboard')
                      ? isHallOfFamePage ? 'bg-orange-900/50 text-orange-300' : 'bg-orange-50 text-orange-600'
                      : isHallOfFamePage ? 'text-white hover:bg-white/10 hover:text-orange-300' : 'hover:bg-gray-50 hover:text-orange-500'
                  }`}
                >
                  <Settings size={18} className="mr-3" />
                  VisionPharma LMS
                </Link>
                <Link
                  href="/profile"
                  onClick={toggleMenu}
                  className={`py-3 px-4 flex items-center text-lg rounded-md ${
                    pathname.startsWith('/profile')
                      ? isHallOfFamePage ? 'bg-orange-900/50 text-orange-300' : 'bg-orange-50 text-orange-600'
                      : isHallOfFamePage ? 'text-white hover:bg-white/10 hover:text-orange-300' : 'hover:bg-gray-50 hover:text-orange-500'
                  }`}
                >
                  <User size={18} className="mr-3" />
                  Profile
                </Link>
                <button
                  onClick={() => {
                    handleSignOut();
                    toggleMenu();
                  }}
                  className={`py-3 px-4 flex items-center text-lg rounded-md w-full text-left ${isHallOfFamePage ? 'text-red-300 hover:bg-red-900/50' : 'text-red-500 hover:bg-red-50'}`}
                >
                  <LogOut size={18} className="mr-3" />
                  Log Out
                </button>
              </>
            ) : (
              <div className="pt-4 space-y-2">
                <Link href="/login" onClick={toggleMenu}>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-[#13AB82] via-primary to-[#005CAF] text-white rounded-lg hover:shadow-md flex items-center justify-center gap-2">
                    <LogIn size={18} />
                    Login
                  </button>
                </Link>
                <Link href="/signup" onClick={toggleMenu}>
                  <button className="w-full px-4 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white flex items-center justify-center gap-2">
                    <UserPlus size={18} />
                    Sign Up
                  </button>
                </Link>
              </div>
            )}

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
