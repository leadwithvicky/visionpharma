'use client';
import { useState } from 'react';
import { User, Mail, Phone, Send, University } from 'lucide-react';
import { useFormSubmit } from '@/hooks/useFormSubmit';

export const StudentForm = ({
  firstNameRef,
}: {
  firstNameRef?: React.RefObject<HTMLInputElement>;
}) => {
  const { isSubmitting, errorMessage } = useFormSubmit();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    college: false,
  });

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 3)
          return 'Name must be at least 3 characters.';
        if (value.trim().length > 50)
          return 'Name must be less than 50 characters.';
        if (!/^[a-zA-Z\s]+$/.test(value.trim()))
          return 'Name can only contain letters and spaces.';
        return '';

      case 'email':
        if (!value.trim()) return 'Email address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
          return 'Enter a valid email address.';
        if (value.length > 100)
          return 'Email must be less than 100 characters.';
        return '';

      case 'phone':
        if (!value.trim()) return 'Phone number is required.';
        if (value.trim()[0] === '0') return 'Phone number cannot start with 0.';
        if (!/^\d{10}$/.test(value.trim()))
          return 'Phone number must be exactly 10 digits.';
        if (/^1{10}$/.test(value.trim()))
          return 'Invalid phone number.';
        return '';

      case 'college':
        if (!value.trim()) return 'College name is required.';
        if (value.trim().length < 3)
          return 'College name must be at least 3 characters.';
        if (value.trim().length > 100)
          return 'College name must be less than 100 characters.';
        if (!/^[a-zA-Z0-9\s\-.,&()]+$/.test(value.trim()))
          return 'College name can only contain letters, numbers, spaces, and basic punctuation.';
        return '';

      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      college: validateField('college', formData.college),
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      college: true,
    });

    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    // Sanitize input based on field type
    switch (name) {
      case 'name':
        sanitizedValue = value.slice(0, 50);
        break;
      case 'phone':
        sanitizedValue = value.replace(/\D/g, '').slice(0, 10);
        break;
      case 'email':
        sanitizedValue = value.slice(0, 100);
        break;
      case 'college':
        sanitizedValue = value.slice(0, 100);
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    if (touched[name as keyof typeof touched]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, sanitizedValue),
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, formData[name as keyof typeof formData]),
    }));
  };

  const sendToWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    const messageText = `*New Student Registration*
Name: ${formData.name.trim()}
Email: ${formData.email.trim()}
Phone: ${formData.phone.trim()}
College: ${formData.college.trim()}`;

    const encodedMessage = encodeURIComponent(messageText);
    const phoneNumber = '917207376333';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    if (window.confirm('Are you sure you want to submit this form?')) {
      window.open(whatsappURL, '_blank');
    }
  };

  return (
    <form className="space-y-3 w-full" onSubmit={sendToWhatsApp} noValidate>
      {errorMessage && (
        <div className="text-red-500 text-center">{errorMessage}</div>
      )}

      <div className="space-y-3 md:space-y-0 grid grid-cols-1 md:gap-3">
        {/* Name Field */}
        <div className="relative w-full">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 size-5" />
          <input
            ref={firstNameRef}
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
              errors.name && touched.name ? 'border-red-500' : 'border-gray-200'
            } focus:border-violet-500 focus:ring-1 focus:ring-primary outline-none transition-all`}
            required
          />
        </div>
        {errors.name && touched.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}

        {/* Email Field */}
        <div className="relative w-full">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 size-5" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
              errors.email && touched.email
                ? 'border-red-500'
                : 'border-gray-200'
            } focus:border-violet-500 focus:ring-1 focus:ring-primary outline-none transition-all`}
            required
          />
        </div>
        {errors.email && touched.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}

        {/* Phone Field */}
        <div className="relative w-full">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 size-5" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
              errors.phone && touched.phone
                ? 'border-red-500'
                : 'border-gray-200'
            } focus:border-violet-500 focus:ring-1 focus:ring-primary outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
            required
          />
        </div>
        {errors.phone && touched.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}

        {/* College Field */}
        <div className="relative w-full">
          <University className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 size-5" />
          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={formData.college}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
              errors.college && touched.college
                ? 'border-red-500'
                : 'border-gray-200'
            } focus:border-violet-500 focus:ring-1 focus:ring-primary outline-none transition-all`}
            required
          />
        </div>
        {errors.college && touched.college && (
          <p className="text-red-500 text-sm mt-1">{errors.college}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg disabled:opacity-70"
        disabled={isSubmitting}
      >
        <Send className="size-5" />
        {isSubmitting ? 'Submitting...' : 'Send to WhatsApp'}
      </button>
    </form>
  );
};

export default StudentForm;
