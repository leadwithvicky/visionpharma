// import Image from 'next/image';
import { StarRating } from './StarRating';
// import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/utils/constants/Testimonial';

// Testimonial Card Component
export const TestimonialCard = ({
  name,
  role,
  // image,
  quote,
  rating,
}: Omit<(typeof TESTIMONIALS)[0], 'id'>) => (
  <div className="bg-white p-4 flex flex-col gap-1 rounded-2xl shadow-sm relative hover:shadow-md transition-shadow min-h-[200px]">
    <div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-800 text-sm">{role}</p>
    </div>

    <p className="text-gray-700 mb-2 text-sm tracking-tight">{quote}</p>
    <StarRating rating={rating} />
  </div>
);

{
  /* <div className="relative"> */
}
{
  /* <div className="absolute -left-4 -top-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <Quote className="w-4 h-4 text-white" />
          </div>
        </div> */
}
{
  /* <div className="relative w-12 h-12">
          <Image
            src={image}
            alt={`${name}'s profile picture`}
            fill
            className="rounded-full object-cover"
            sizes="(max-width: 48px) 100vw, 48px"
          />
        </div> */
}
{
  /* </div> */
}
