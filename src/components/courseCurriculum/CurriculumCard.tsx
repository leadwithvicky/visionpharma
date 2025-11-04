import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Star } from 'lucide-react';
import Image from 'next/image';

interface CourseCardProps {
  title: string;
  duration: string;
  students: number;
  rating: number;
  image: string;
}

const CourseCard = ({
  title,
  duration,
  students,
  rating,
  image,
}: CourseCardProps) => {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          className="absolute w-full h-full object-cover rounded-t-lg"
          fill
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
