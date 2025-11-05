import React, { Dispatch, useState } from 'react';
import Image from 'next/image';
import { User, LogOut, LayoutDashboard, X } from 'lucide-react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { authService } from '@/services';
import Link from 'next/link';
import { toast } from 'sonner';

interface ProfileDropdownProps {
  userName: string;
  userEmail: string;
  userAvatar?: string;
  accounts?: {
    name: string;
    email: string;
    avatar?: string;
  }[];
  handleSignOut?: () => void;
  onProfileClick?: () => void;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isHallOfFamePage?: boolean;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  userName,
  userEmail,
  userAvatar,
  onProfileClick,
  open,
  setOpen,
  handleSignOut,
  isHallOfFamePage,
}) => {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className={`flex items-center justify-center size-10 rounded-full transition-colors ${
          isHallOfFamePage ? 'bg-gradient-to-r from-[#FFD87C] to-[#A47A1E] hover:brightness-110' : 'bg-purple-100 hover:bg-purple-200'
        }`}>
          {userAvatar ? (
            <Image
              src={userAvatar}
              alt={userName}
              width={32}
              height={32}
              className="rounded-full"
            />
          ) : (
            <span className="text-primary font-bold">
              {/* {userName?.charAt(0).toUpperCase()} */}
              <User />
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-72 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
        <div className="relative">
          {/* <button
            onClick={() => setOpen(false)}
            className="absolute right-0 top-0 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-700"
          >
            <X size={16} />
            <span className="sr-only">Close</span>
          </button> */}

          <div className="p-2 border-b border-gray-200">
            <div className="flex  items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                isHallOfFamePage ? 'bg-gradient-to-r from-[#FFD87C] to-[#A47A1E]' : 'bg-purple-100'
              }`}>
                {userAvatar ? (
                  <Image
                    src={userAvatar}
                    alt={userName}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  <span className="text-primary text-xl font-bold">
                    {/* {userName?.charAt(0).toUpperCase()} */}
                    <User size={24} />
                  </span>
                )}
              </div>
              <div className="ml-4 flex flex-col max-w-28">
                <h4 className="font-medium">
                  {userName?.length > 20
                    ? `${userName.substring(0, 20)}...`
                    : userName}
                </h4>
                <p className="text-sm text-gray-700 ">
                  {userEmail?.length > 20
                    ? `${userEmail.substring(0, 20)}...`
                    : userEmail}
                </p>
              </div>
            </div>
          </div>

          <div className="py-2">
            {/* <button
              onClick={() => {
                if (onProfileClick) onProfileClick();
                setOpen(false);
              }}
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <User size={18} className="mr-3 text-gray-500" />
              <span>Profile</span>
            </button> */}

            <Link
              href="https://visiontech-lms.vercel.app"
              target = '_blank'
              onClick={() => setOpen(false)}
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <LayoutDashboard size={18} className="mr-3 text-gray-500" />
              <span>VisionPharma LMS</span>
            </Link>

            <button
              onClick={handleSignOut}
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <LogOut size={18} className="mr-3 text-gray-500" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileDropdown;
