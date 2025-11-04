import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    formData: Record<string, unknown>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    // router.push('/success');

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // alert('Form submitted successfully');
    } catch (error) {
      console.error(error);
      // setErrorMessage('Form submission failed');
      // alert('Form submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, errorMessage, handleSubmit };
};
