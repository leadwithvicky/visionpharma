import { LogIn, UserPlus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const AuthButtons = () => {
  return (
    <div className="flex items-center space-x-2 font-medium">
      <Link href="/login">
        <button className="bg-gradient-to-r from-visionBlue via-visionBlue/80 to-visionGreen hover:bg-visionBlue text-visionWhite px-5 py-2.5 rounded-full transition-all duration-300 transform flex items-center gap-2 shadow-lg hover:shadow-visionBlue/30 group">
          <LogIn size={18} className="group-hover:animate-pulse" />
          <span>Login</span>
        </button>
      </Link>
      <Link href="/signup">
        <button className="group bg-visionWhite border border-visionBlue text-visionBlue hover:bg-visionBlue hover:text-visionWhite px-5 py-2.5 rounded-full transition-all duration-300 transform flex items-center gap-2 shadow-sm hover:shadow-visionBlue/30">
          <UserPlus size={18} className="group-hover:animate-pulse" />
          <span>Sign Up</span>
        </button>
      </Link>
    </div>
  );
};

export default AuthButtons;
