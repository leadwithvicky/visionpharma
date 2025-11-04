import { LogIn, UserPlus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const AuthButtons = () => {
  return (
    <div className="flex items-center space-x-2 font-medium">
      <Link href="/login">
        <button className="bg-gradient-to-r from-primary via-primary/80 to-pink-400 hover:bg-primary text-white px-5 py-2.5 rounded-full transition-all duration-300 transform flex items-center gap-2 shadow-lg hover:shadow-purple-500/30 group">
          <LogIn size={18} className="group-hover:animate-pulse" />
          <span>Login</span>
        </button>
      </Link>
      <Link href="/signup">
        <button className="group bg-white border border-primary text-primary hover:bg-primary hover:text-white px-5 py-2.5 rounded-full transition-all duration-300 transform flex items-center gap-2 shadow-sm hover:shadow-primary/30">
          <UserPlus size={18} className="group-hover:animate-pulse" />
          <span>Sign Up</span>
        </button>
      </Link>
    </div>
  );
};

export default AuthButtons;
