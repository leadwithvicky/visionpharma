import React from 'react';
import Image from 'next/image';

interface CourseInstructor {
  name: string;
  email: string;
  phone: string;
}

interface CourseDetails {
  title?: string;
  price: number;
  originalPrice?: number;
  instructor: CourseInstructor;
  duration: string;
  lessons: number;
  students: number;
  languages: string[];
  hasCertification: boolean;
}

const RightSideDetail = ({ img }: { img: string }) => {
  return (
    <div className="xl:max-w-screen-md rounded-xl bg-white overflow-hidden flex w-[40%] flex-shrink-0">
      {/* Course Image */}
      <div className="relative flex w-fit items-center flex-1">
        <div className="relative w-[300px] aspect-square">
          <Image
            src={img}
            alt="Course preview"
            className="absolute w-full h-full object-cover rounded-xl"
            fill
          />
        </div>
        {/* <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-l-8 border-y-6 border-y-transparent border-l-purple-600" />
          </div>
        </div> */}
      </div>

      {/* <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-purple-600">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-4">This Program includes:</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <Users size={18} />
              <span>Instructor: {instructor.name}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={18} />
              <span>Duration: {duration}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <BookOpen size={18} />
              <span>Lessons: {lessons}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Users size={18} />
              <span>Students: {students}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Globe2 size={18} />
              <span>Languages: {languages.join(', ')}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Award size={18} />
              <span>Certifications: {hasCertification ? 'Yes' : 'No'}</span>
            </div>
          </div>

          <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Buy Now
          </button>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-semibold mb-2">Contact us</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={18} />
                <span>{instructor.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={18} />
                <span>{instructor.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default RightSideDetail;
