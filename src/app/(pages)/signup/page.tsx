import Signup from '@/components/signup';
import { SignupProvider } from '@/components/signup/SignupContext';
import React from 'react';

const page = () => {
  return (
    <SignupProvider>
      <Signup />
    </SignupProvider>
  );
};

export default page;
