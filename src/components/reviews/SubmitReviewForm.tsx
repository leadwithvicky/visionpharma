import React from 'react'
import { Company } from './_reviews';

import { DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Image from 'next/image';

const SubmitReviewForm = ({
  selectedCompany,
  name,
  setName,
  email,
  setEmail,
  rating,
  setRating,
  comment,
  setComment,
  errors,
  onSubmit,
}: {
  selectedCompany: Company | null;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  rating: string;
  setRating: React.Dispatch<React.SetStateAction<string>>;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  errors: { name: string; email: string; rating: string; comment: string };
  setErrors: React.Dispatch<
    React.SetStateAction<{ name: string; email: string; rating: string; comment: string }>
  >;
  onSubmit: () => void;
}) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-center text-lg font-semibold">
          {selectedCompany ? `Write a Review for ${selectedCompany.name}` : 'Write a Review'}
        </DialogTitle>
        {selectedCompany && (
          <Image
            src={selectedCompany.img}
            alt={selectedCompany.name}
            width={60}
            height={60}
            className="mx-auto mt-4 object-contain rounded-lg shadow-sm"
            unoptimized={true}
          />
        )}
      </DialogHeader>
      <div className="space-y-6 py-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name
          </label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Rating</label>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-8 w-8 cursor-pointer transition-colors ${
                  star <= Number(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                }`}
                onClick={() => setRating(star.toString())}
              />
            ))}
          </div>
          {errors.rating && <p className="text-red-500 text-sm text-center">{errors.rating}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="comment" className="text-sm font-medium text-gray-700">
            Your Review
          </label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience and feedback..."
            className="w-full min-h-[100px]"
          />
          {errors.comment && <p className="text-red-500 text-sm">{errors.comment}</p>}
        </div>
      </div>
      <DialogFooter>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
          onClick={onSubmit}
        >
          Submit & Share Review
        </Button>
      </DialogFooter>
    </>
  );
};

export default SubmitReviewForm
