'use client';

import Signup from '@/components/signup';
import { SignupProvider } from '@/components/signup/SignupContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { decryptData } from '@/utils/encryption';

const Page = () => {
  const router = useRouter();
  const [isValidData, setIsValidData] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user data is available from sessionStorage
    const tempSignupData = sessionStorage.getItem('tempSignupData');
    if (!tempSignupData) {
      // Redirect back to signup if no data
      router.push('/signup');
      return;
    }

    try {
      // Attempt to decrypt the data to validate it
      decryptData(tempSignupData);
      setIsValidData(true);
    } catch (error) {
      console.error('Error decrypting temp signup data:', error);
      // Clear invalid data and redirect to signup with error
      sessionStorage.removeItem('tempSignupData');
      router.push('/signup?error=invalid_data');
      setIsValidData(false);
    }
  }, [router]);

  // Don't render until we've validated the data
  if (isValidData === null) {
    return <div>Loading...</div>;
  }

  if (isValidData === false) {
    return <div>Redirecting...</div>;
  }

  return (
    <SignupProvider initialStep="form">
      <Signup />
    </SignupProvider>
  );
};

export default Page;
