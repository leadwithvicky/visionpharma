'use client';

import RegistrationSuccessOverlay from './RegistrationSuccessOverlay';
import RegistrationForm from './RegistrationForm';
import { useSignup } from './SignupContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GOOGLE_ICON =
  'https://res.cloudinary.com/denikmblr/image/upload/v1752055231/eeccca0750dc564ea55c897f90f4fb99_lcxiyj.png';

export default function Signup() {
  const { successMessage, step, handleGoogleSignIn } = useSignup();

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-12">
      {successMessage && <RegistrationSuccessOverlay msg={successMessage} />}

      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-4xl bg-white relative overflow-hidden rounded-3xl shadow-2xl p-8 sm:p-10 space-y-8 border border-violet-100"
      >
        {/* Optional Shine Border */}
        <div className="absolute inset-0 border-2 border-transparent rounded-3xl pointer-events-none shine-border" />

        {/* Header */}
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-3xl  font-bold text-gray-800 text-center">
            {step === 'google' ? 'Create Your Account' : 'Complete Your Registration'}
          </h2>
        </div>

        {/* Google Sign-In or Full Form */}
        {step === 'google' ? (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoogleSignIn}
            className="w-full border border-gray-300 py-3 px-6 rounded-xl flex items-center justify-center gap-3 text-gray-700 hover:bg-gray-100 transition text-base sm:text-lg font-medium shadow-sm"
          >
            <Image width={24} height={24} src={GOOGLE_ICON} alt="Google Icon" className="w-6 h-6" />
            Sign in with Google
          </motion.button>
        ) : (
          <RegistrationForm />
        )}
      </motion.div>
    </div>
  );
}
