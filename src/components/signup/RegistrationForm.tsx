'use client';

import React from 'react';
import { useSignup } from './SignupContext';
import PersonalInfo from './PersonalInfo';
import MobileVerification from './MobileVerification';
import ProgramSelection from './ProgramSelection';
import BatchSelection from './BatchSelection';
import ErrorHandling from './ErrorHandling';
import PasswordManager from './PasswordManager';
import SubmitButton from './SubmitButton';
import { motion } from 'framer-motion';

const RegistrationForm = () => {
  const { handleSubmit } = useSignup();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-5xl mx-auto px-6 sm:px-8 py-12"
    >
      

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border border-gray-200 shadow-xl rounded-3xl p-6 md:p-10 relative overflow-hidden"
      >
        {/* ShineBorder simulation */}
        <div className="absolute inset-0 border-2 border-transparent rounded-3xl pointer-events-none shine-border" />

        {/* Error Handling on top */}
        <div className="md:col-span-2">
          <ErrorHandling />
        </div>

        {/* Form Sections */}
        <PersonalInfo />
        <MobileVerification />
        {/* <ProgramSelection />
        <BatchSelection /> */}
        <PasswordManager />
        <SubmitButton />
      </form>
    </motion.div>
  );
};

export default RegistrationForm;
