'use client';

import { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import { SENDEMAIL_ROUTES } from '@/routes-endpoint';
import apiClient from '@/services/apiClient';

// Define form values
interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  gender: string;
  resume: File | null;
}

// Simple validation schema
const validationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone must be 10 digits')
    .required('Phone is required'),
  gender: Yup.string().required('Gender is required'),
  position: Yup.string().required('Position is required'),
  resume: Yup.mixed().required('Resume is required'),
});

export const useApplyNowForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formik = useFormik<FormValues>({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      position: '',
      gender: '',
      resume: null,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const formData = new FormData();
      formData.append('fullName', values.fullName);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('position', values.position);
      formData.append('gender', values.gender);
      if (values.resume) formData.append('resume', values.resume);

      try {
        const res = await apiClient.post(
          SENDEMAIL_ROUTES.base,
          formData

          //   {
          //   method: 'POST',
          //   body: formData,
          // }
        );

        if (!res.data.success) {
          toast.error('Failed to send application');
        } else {
          toast.success('Application sent!');
          resetForm();
          if (fileInputRef.current) fileInputRef.current.value = '';
        }
      } catch (error) {
        toast.error('Something went wrong');
        console.error(error);
      }
      setSubmitting(false);
    },
  });

  // Handle phone input (only numbers, max 10 digits)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    formik.setFieldValue('phone', value);
  };

  // Handle file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0] || null;
    formik.setFieldValue('resume', file);
  };

  return {
    formik,
    fileInputRef,
    handlePhoneChange,
    handleFileChange,
  };
};
