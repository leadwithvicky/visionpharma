import { useState } from 'react';
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

// Add type declaration for window object
declare global {
  interface Window {
    recaptchaVerifier: any; // Temporary workaround; Firebase types aren't perfect yet
  }
}

const PhoneAuth: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);
  const [step, setStep] = useState<'send' | 'verify'>('send');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Set up reCAPTCHA
  const setUpRecaptcha = () => {
    try {
      // Clear existing reCAPTCHA if it exists
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }

      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        'recaptcha-container',
        {
          size: 'invisible',
          callback: () => {
            // Don't call sendOtp here to avoid infinite loop
            console.log('reCAPTCHA verified');
          },
        }
      );
    } catch (error) {
      console.error('Error setting up reCAPTCHA:', error);
      setError('Failed to set up verification system');
    }
  };

  // Send OTP
  const sendOtp = async () => {
    try {
      setLoading(true);
      setError('');

      // Validate phone number
      if (!phoneNumber.match(/^\+[1-9]\d{1,14}$/)) {
        throw new Error(
          'Please enter a valid phone number with country code (+XXXXXXXXXX)'
        );
      }

      setUpRecaptcha();
      const appVerifier = window.recaptchaVerifier;

      if (!appVerifier) {
        throw new Error('reCAPTCHA not initialized');
      }

      const result = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      setConfirmationResult(result);
      setStep('verify');
      setError('');
    } catch (error: any) {
      setError(error.message || 'Failed to send OTP');
      // Reset reCAPTCHA on error
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (!confirmationResult) {
      setError('Please request OTP first');
      return;
    }

    try {
      setLoading(true);
      setError('');

      // Validate OTP format
      if (!otp || otp.length !== 6 || !/^\d+$/.test(otp)) {
        throw new Error('Please enter a valid 6-digit OTP');
      }

      await confirmationResult.confirm(otp);
      setError('');
      alert('Phone verified successfully!');
    } catch (error: any) {
      setError(error.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {step === 'send' ? (
        <div className="space-y-4">
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone (e.g., +1234567890)"
            className="w-full p-2 border rounded"
            disabled={loading}
          />
          <button
            onClick={sendOtp}
            disabled={loading || !phoneNumber}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-blue-300"
          >
            {loading ? 'Sending...' : 'Send OTP'}
          </button>
          <div id="recaptcha-container"></div>
        </div>
      ) : (
        <div className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit OTP"
            maxLength={6}
            className="w-full p-2 border rounded"
            disabled={loading}
          />
          <button
            onClick={verifyOtp}
            disabled={loading || !otp}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-blue-300"
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
          <button
            onClick={() => {
              setStep('send');
              setOtp('');
              setError('');
            }}
            className="w-full p-2 border rounded"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default PhoneAuth;
