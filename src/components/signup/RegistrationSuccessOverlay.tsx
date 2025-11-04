'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

interface Props {
  msg?: string; // made optional for flexibility
}

export default function RegistrationSuccessOverlay({ msg }: Props) {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 max-w-md w-full text-center border border-green-300">
        {msg ? (
          <p className="text-xl font-semibold text-green-700 mb-4">{msg}</p>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              ✅ Registered Successfully!
            </h2>
            <p className="text-gray-700 mb-4">
              Welcome to{' '}
              <span className="text-violet-600 font-semibold">VisionTech</span>
              <br />
              Redirecting to the home page...
            </p>
          </>
        )}
        <div className="flex justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-violet-600" />
        </div>
      </div>
    </div>
  );
}
