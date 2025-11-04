


'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  ChangeEvent,
  FormEvent,
} from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '@/Redux/userSlice';
import { useGoogleSignIn } from '@/firebase/useGoogleSignIn';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { encryptData, decryptData } from '@/utils/encryption';


type SignupStep = 'google' | 'form';

type FormType = {
  name: string;
  email: string;
  mobile: string;
  program: string;
  batchYear: string;
  batchMonth: string;
  password: string;
  confirmPassword: string;
};

type SignupContextType = {
  loading: boolean;
  step: SignupStep;
  form: FormType;
  otpSent: boolean;
  otp: string;
  enteredOtp: string;
  mobileVerified: boolean;
  error: string;
  successMessage: string | null;
  handleGoogleSignIn: () => Promise<void>;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | { name: string; value: string }
  ) => void;
  handleSendOtp: () => void;
  handleOtpVerify: () => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
  setEnteredOtp: React.Dispatch<React.SetStateAction<string>>;
};

const SignupContext = createContext<SignupContextType | undefined>(undefined);

export const SignupProvider = ({ children, initialStep = 'google' }: { children: ReactNode; initialStep?: SignupStep }) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [step, setStep] = useState<SignupStep>(initialStep);
  const [form, setForm] = useState<FormType>({
    name: '',
    email: '',
    mobile: '',
    program: '',
    batchYear: '',
    batchMonth: '',
    password: '',
    confirmPassword: '',
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [mobileVerified, setMobileVerified] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signInWithGoogle } = useGoogleSignIn();
  const dispatch = useDispatch();
  const router = useRouter();

  // Initialize form with encrypted sessionStorage data on mount
  useEffect(() => {
    const tempSignupData = sessionStorage.getItem('tempSignupData');
    if (tempSignupData) {
      try {
        const userData = decryptData(tempSignupData);
        setForm((prev) => ({
          ...prev,
          name: userData.name || '',
          email: userData.email || '',
        }));
      // Clear the sessionStorage after using it
      sessionStorage.removeItem('tempSignupData');
      } catch (error) {
        console.error('Error decrypting temp signup data:', error);
      }
    }
  }, []);

  const updateUserInStore = (result: any, message?: string) => {
    const { user, token } = result;

    localStorage.setItem('user', JSON.stringify(user));

    Cookies.set('token', token, {
      expires: 7,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
    });

    Cookies.set('role', user?.role || 'student', {
      expires: 7,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
    });

    dispatch(
      setUser({
        user: user?.user,
        token: token,
        isVerified: user?.isVerified,
      })
    );

    if (user.isVerified) {
      setSuccessMessage(message || 'Signup successful!');
      setTimeout(() => router.push('/'), 2000);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const user = await signInWithGoogle();
      if (!user.email || !user.name) throw new Error('Missing email or name');

      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          name: user.name,
          photo: user.photo || '',
          step: 'google',
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'User creation failed');

      if (result.user.isVerified) {
        const message = `Hi ${result.user?.firstName || result.user?.fullName || 'User'}, you're already registered. Logging in...`;
        updateUserInStore(result, message);
        return;
      }

      // Encrypt and set temporary sessionStorage with user data for register page
      const encryptedData = encryptData({
        name: result.user.fullName || user.name,
        email: result.user.email || user.email,
      });
      sessionStorage.setItem('tempSignupData', encryptedData);

      // Redirect to register page using router.push for client-side navigation
      router.push('/register');
    } catch (err: any) {
      console.error('Google Sign-In error:', err);
      setError('Google Sign-In or user creation failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    | { name: string; value: string }
) => {
  if ('target' in e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  } else {
    setForm((prev) => ({ ...prev, [e.name]: e.value }));
  }
};

  const handleSendOtp = async () => {
    if (form.mobile.length === 10) {
      // Temporarily disable OTP sending
      // const result = await sendOtp(form.mobile);
      // console.log(result);

      // setOtp('123456'); // You should get OTP from API in production
      // setOtpSent(true);
      setMobileVerified(true); // Directly set verified
      setError('');
    } else {
      setError('Enter a valid 10-digit mobile number.');
    }
  };

  const handleOtpVerify = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/otp', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile: form.mobile, code: enteredOtp }),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setMobileVerified(true);
        setError('');
      } else {
        setError(result.message || 'Invalid OTP. Please try again.');
      }
    } catch {
      setError('OTP verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate mobile
    if (!form.mobile || form.mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Validate password match
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Validate password presence
    if (!form.password) {
      setError('Please set a password.');
      return;
    }

    // Temporarily disable mobile verification check
    // if (!mobileVerified) {
    //   return setError('Please verify your mobile number.');
    // }

    try {
      setLoading(true);
      setError(''); // Clear any previous errors
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, step: 'form' }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Form submission failed');

      // No need to clear localStorage since we're not using it anymore

      updateUserInStore(result, 'Signup Completed Successfully!');
    } catch (err: any) {
      console.error('Form submission error:', err);
      setError('Failed to complete signup.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignupContext.Provider
      value={{
        loading,
        step,
        form,
        otpSent,
        otp,
        enteredOtp,
        mobileVerified,
        error,
        successMessage,
        handleGoogleSignIn,
        handleChange,
        handleSendOtp,
        handleOtpVerify,
        handleSubmit,
        setEnteredOtp,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};

export const useSignup = () => {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error('useSignup must be used within a SignupProvider');
  }
  return context;
};