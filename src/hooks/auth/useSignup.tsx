import { SignupData, signupSchema } from '@/backend/schema/auth.schema';
import { authService } from '@/services';
import { set } from 'mongoose';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';

type FormErrors = Partial<Record<keyof SignupData, string>>;

export const useSignup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<FormErrors>({});
  const router = useRouter();
  const [signupError, setSignUpError] = useState<string | null>(null);
  const [formData, setFormData] = useState<SignupData>({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignUpError(null);
    if (name === 'mobile') {
      const digitsOnly = value.replace(/\D/g, '');
      const truncatedValue = digitsOnly.slice(0, 10);
      const isValidPhone =
        truncatedValue.length === 10 && /^[1-9][0-9]{9}$/.test(truncatedValue);

      setFormData((prev) => ({
        ...prev,
        [name]: truncatedValue,
      }));

      if (truncatedValue.length > 0 && !isValidPhone) {
        setError((prev) => ({
          ...prev,
          [name]:
            truncatedValue.length < 10
              ? 'Phone number must be exactly 10 digits'
              : 'Phone number must start with digits 1-9',
        }));
      } else {
        setError((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      }

      if (e.target.value !== truncatedValue) {
        e.target.value = truncatedValue;
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      setError((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError({});
    const validation = signupSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: FormErrors = {};
      validation.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as keyof SignupData] = err.message;
      });
      setError(fieldErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await authService.signup(formData);
      console.log(response);
      toast.success('Account Created Successfully');
      router.push('/login');
    } catch (err: any) {
      console.log(err?.response?.data?.message || 'Something went wrong');
      setSignUpError(err?.response?.data?.message || 'Something went wrong');
      toast.error(err?.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    handleChange,
    formData,
    error,
    signupError,
    loading,
  };
};
