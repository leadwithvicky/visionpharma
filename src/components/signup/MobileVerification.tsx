'use client';

import React, { useState, useEffect } from 'react';
import { useSignup } from './SignupContext';
import { PhoneIcon } from 'lucide-react';

const MobileVerification = () => {
  const {
    form,
    handleChange,
    mobileVerified,
    otpSent,
    handleSendOtp,
    enteredOtp,
    setEnteredOtp,
    handleOtpVerify,
    error,
  } = useSignup();

  const [mobileError, setMobileError] = useState('');
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  const validateMobile = (number: string) => {
    return /^\d{10}$/.test(number);
  };

  const onSendOtp = () => {
    if (!validateMobile(form.mobile)) {
      setMobileError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setMobileError('');
    handleSendOtp();
    setCooldown(60); // 60 seconds cooldown
  };

  const onResendOtp = () => {
    handleSendOtp();
    setCooldown(60);
  };

  return (
    <div className="md:col-span-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Mobile *
      </label>
      <div className="relative">
        <input
          type="tel"
          name="mobile"
          value={form.mobile}
          onChange={(e) => {
            handleChange(e);
            setMobileError(''); // Clear on change
          }}
          className={`w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
            mobileError
              ? 'border-red-500 focus:ring-red-500'
              : 'focus:ring-violet-500'
          }`}
          placeholder="Enter your mobile number"
        />
        <PhoneIcon className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
      </div>

      {mobileError && (
        <p className="text-red-500 text-sm mt-1">{mobileError}</p>
      )}
      {/* Show backend error (rate limit, DND, etc.) */}
      {error && !mobileError && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}

      {!mobileVerified && (
        <>
      {!otpSent ? (
        <button
          type="button"
          onClick={onSendOtp}
          className="mt-3 w-full bg-violet-600 text-white py-3 rounded-md hover:bg-violet-700 transition"
          disabled={cooldown > 0}
        >
          {cooldown > 0 ? `Wait ${cooldown}s` : 'Verify Mobile'}
        </button>
      ) : (
        <>
          {/* OTP input and buttons commented out to disable OTP verification */}
          {/*
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Enter OTP"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
              className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              type="button"
              onClick={handleOtpVerify}
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
            >
              Verify OTP
            </button>
          </div>
          <button
            type="button"
            onClick={onResendOtp}
            className="mt-3 w-full bg-violet-500 text-white py-2 rounded-md hover:bg-violet-600 transition"
            disabled={cooldown > 0}
          >
            {cooldown > 0 ? `Resend OTP in ${cooldown}s` : 'Resend OTP'}
          </button>
          */}
        </>
      )}
        </>
      )}

      {mobileVerified && (
        <p className="text-green-600 text-sm mt-2">Mobile verified ✅</p>
      )}
    </div>
  );
};

export default MobileVerification;



