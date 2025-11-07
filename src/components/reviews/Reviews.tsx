'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import companies, { Company } from './_reviews';
import Image from 'next/image';
import { Dialog, DialogContent} from '@/components/ui/dialog';
import { toast } from 'sonner';
import SubmitReviewForm from './SubmitReviewForm';
import Link from 'next/link';



const Reviews = () => {
  const [open, setOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', rating: '', comment: '' });

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // Reset form when closing
      setName('');
      setEmail('');
      setRating('');
      setComment('');
      setErrors({ name: '', email: '', rating: '', comment: '' });
    }
  };

  const handleSubmit = async () => {
    const newErrors = { name: '', email: '', rating: '', comment: '' };
    let hasError = false;

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      hasError = true;
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email address';
      hasError = true;
    }
    if (!rating) {
      newErrors.rating = 'Rating is required';
      hasError = true;
    }
    if (!comment.trim()) {
      newErrors.comment = 'Comment is required';
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      toast.error('Validation Error: Please correct the errors and try again.');
    } else if (selectedCompany) {
      try {
        const response = await fetch('/api/submit-review', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            rating,
            comment,
            company: selectedCompany.name
          })
        });

        if (response.ok) {
          toast.success('Review submitted: Thank you for your feedback!');
          setOpen(false);
          // Reset form
          setName('');
          setEmail('');
          setRating('');
          setComment('');
          setErrors({ name: '', email: '', rating: '', comment: '' });
        } else {
          toast.error('Failed to submit review. Please try again.');
        }
      } catch (error) {
        toast.error('Error submitting review. Please try again.');
      }
    }
  };

  return (
    <div className="flex flex-wrap lg:justify-center justify-evenly items-start lg:gap-6 gap-2 py-6 px-4 rounded-2xl bg-white ">
      {companies.map((review, index) => (
        <div
          key={index}
          className="w-1/3 md:w-1/3 lg:w-[240px] flex justify-center"
        >
          <motion.div
            className="p-4 flex flex-col items-center gap-4 w-full bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src={`${review.img}`}
              alt={review.name}
              title={review.name}
              width={50}
              height={50}
              loading="eager"
              unoptimized={true}
              className="h-16 object-contain rounded-xl"
            />
            <p className="text-center font-semibold text-sm sm:text-base text-gray-800 lg:h-auto h-10">
              {review.name}
            </p>
            <p className="font-bold text-base sm:text-lg text-black">
              <span className="text-yellow-500">★ </span>
              {review.rating}
            </p>
            <Link
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-[#005CAF] to-[#13AB82]
 text-white font-semibold hover:bg-[#145a8a] transition text-sm">
                Insights
              </button>
            </Link>

             {/* <button
              onClick={() => {
                setSelectedCompany(review);
                setOpen(true);
              }}
              className="w-full py-2 px-4 rounded-xl bg-[#1C75BC] text-white font-semibold hover:bg-[#145a8a] transition text-sm"
            >
              Write Review
            </button> */}
          </motion.div>
        </div>
      ))}
      
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="w-full max-w-2xl max-h-[90vh] overflow-auto">
          <SubmitReviewForm
            selectedCompany={selectedCompany}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            rating={rating}
            setRating={setRating}
            comment={comment}
            setComment={setComment}
            errors={errors}
            setErrors={setErrors}
            onSubmit={handleSubmit}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Reviews;
