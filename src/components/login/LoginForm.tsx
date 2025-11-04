'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LockIcon, MailIcon, Eye, EyeOff, Loader2 } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

import { loginWithEmailPassword, loginWithGoogle } from './loginMethods';
import { useGoogleSignIn } from '@/firebase/useGoogleSignIn';
import InputField from './InputField';
import { useLoginHandler } from './useLoginHandler';

// Function to map backend errors to user-friendly messages
const mapErrorToUserFriendlyMessage = (errorMessage: string): string => {
  switch (errorMessage) {
    case 'User not found':
      return 'You are not a registered user. Please sign up.';
    case 'Invalid password':
      return 'You have entered the wrong password. Please try again.';
    case 'Server error':
      return 'Something went wrong. Please try again later.';
    default:
      // For network errors or other axios errors, provide a generic message
      if (errorMessage.includes('Network Error') || errorMessage.includes('timeout')) {
        return 'Network error. Please check your connection and try again.';
      }
      return 'Login error.';
  }
};

export default function LoginForm({
  onSuccess,
}: {
  onSuccess: (message: string) => void;
}) {
  const router = useRouter();
  const { signInWithGoogle } = useGoogleSignIn();
  const { handleSuccess, validateForm } = useLoginHandler();

  const [emailMobile, setEmailMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signInError, setSignInError] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validateForm(emailMobile, password);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    try {
      setLoading(true);
      const res = await loginWithEmailPassword(emailMobile, password);
      if (res?.token) {
        handleSuccess(res);
        onSuccess(`Welcome, ${res?.user?.name || res?.user?.email || 'User'}!`);
      } else {
        setSignInError('Invalid credentials. Please try again.');
      }
    } catch (error: any) {
      setSignInError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const user = await signInWithGoogle();
      if (!user.email) {
        throw new Error("Google account has no email.");
      }

      const res = await loginWithGoogle(user.email);
      if (res?.token) {
        handleSuccess(res);
        onSuccess(`Welcome, ${res?.user?.name || res?.user?.email || 'User'}!`);
      } else {
        // User not found in DB or not verified, redirect to register with user data
        const { encryptData } = await import('@/utils/encryption');
        const encryptedData = encryptData({
          name: user.name || '',
          email: user.email,
        });
        sessionStorage.setItem('tempSignupData', encryptedData);
        router.push('/register');
      }
    } catch (err: any) {
      // Handle specific error cases
      if (err.message === 'User not verified') {
        // This should not happen since loginWithGoogle should return the response for 403
        // But if it does throw, we still want to redirect to register
        const user = await signInWithGoogle(); // Re-get user data
        const { encryptData } = await import('@/utils/encryption');
        const encryptedData = encryptData({
          name: user.name || '',
          email: user.email,
        });
        sessionStorage.setItem('tempSignupData', encryptedData);
        router.push('/register');
      } else {
        const userFriendlyMessage = mapErrorToUserFriendlyMessage(err.message);
        setSignInError(userFriendlyMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
      {signInError && (
        <div className="text-red-500 bg-red-100 border border-red-500 p-2 rounded-lg">
          {signInError}
        </div>
      )}

      <InputField
        label="Email / Mobile No *"
        value={emailMobile}
        onChange={(e) => {
          setEmailMobile(e.target.value);
          setErrors((prev) => ({ ...prev, email: undefined }));
        }}
        placeholder="Email or number..."
        icon={<MailIcon className="size-4" />}
        error={errors.email}
        disabled={loading}
      />

      <InputField
        label="Password *"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setErrors((prev) => ({ ...prev, password: undefined }));
        }}
        placeholder="Password"
        icon={<LockIcon className="size-4" />}
        iconRight={
          showPassword ? (
            <EyeOff className="size-4" onClick={() => setShowPassword(false)} />
          ) : (
            <Eye className="size-4" onClick={() => setShowPassword(true)} />
          )
        }
        error={errors.password}
        disabled={loading}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-violet-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition hover:bg-violet-700 hover:shadow-lg disabled:opacity-70"
      >
        {loading ? <><Loader2 className="animate-spin" /> Signing in...</> : 'Login'}
      </button>

      <div className="flex items-center justify-center gap-2">
        <div className="flex-1 h-[1px] bg-muted/20" />
        <span className="text-muted-foreground text-sm">or</span>
        <div className="flex-1 h-[1px] bg-muted/20" />
      </div>

      <div
        onClick={handleGoogleLogin}
        className="w-full border border-border rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] hover:bg-gray-100 transition"
      >
        <div className="py-3 px-6 flex gap-2 items-center justify-center w-full">
          <FcGoogle className="text-2xl" />
          Login with Google
        </div>
      </div>

      <div className="text-center text-foreground text-sm">
        Don’t have an account?{' '}
        <span className="font-semibold text-primary hover:text-primary/90 cursor-pointer">
          <a href="/signup">Sign up</a>
        </span>
      </div>
    </form>
  );
}
