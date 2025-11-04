'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/services';
import { toast } from 'sonner';
import { LoginData, loginSchema } from '@/backend/schema/auth.schema';

type FormErrors = Partial<Record<keyof LoginData, string>>;

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<FormErrors>({});
  const [signInError, setSignInError] = useState<string | null>(null);
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();

  // Handle user data persistence
  useEffect(() => {
    // Only store user data when it actually changes and is not null
    if (userData) {
      try {
        localStorage.setItem('user', JSON.stringify(userData));
        // Consider redirecting here instead of in handleSubmit for better control
        window.location.href = '/';
      } catch (err) {
        toast.error('Failed to save user session');
        console.error('LocalStorage error:', err);
      }
    }
  }, [userData, router]);

  // Clear a specific field error when user types
  const clearFieldError = (fieldName: string) => {
    if (error[fieldName as keyof LoginData]) {
      setError((prev) => ({
        ...prev,
        [fieldName]: undefined,
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInError(null);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the specific field error
    clearFieldError(name);
  };

  const validateForm = (data: LoginData): FormErrors | null => {
    const validation = loginSchema.safeParse(data);

    if (!validation.success) {
      const fieldErrors: FormErrors = {};
      validation.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as keyof LoginData] = err.message;
      });
      return fieldErrors;
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    // Prevent multiple submissions
    if (loading) return;

    setLoading(true);
    setError({});

    // Form validation
    const validationErrors = validateForm(formData);
    if (validationErrors) {
      setError(validationErrors);
      setLoading(false);
      // Show toast for validation errors
      toast.error('Email or password is invalid');
      return;
    }

    try {
      const response = await authService.login(formData);


      if (!response || !response.data) {
        throw new Error('Something went wrong');
      }

      setUserData(response.data.user);
      toast.success('Login successful');

      // We'll handle navigation in the useEffect to ensure localStorage is updated first
    } catch (error: any) {
      console.error('Login error:', error);
      setSignInError(
        error?.response?.data?.message || 'Email or password is invalid'
      );
      toast.error(
        error?.response?.data?.message || 'Email or password is invalid'
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
    });
    setError({});
  };

  return {
    userData,
    formData,
    error,
    loading,
    signInError,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useLogin;
