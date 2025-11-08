// utils/constants/whyChooseUs.ts
import { Feature, Stat } from '@/types/whychooseus';
import {
  BookOpenCheck,
  BrainCircuit,
  ChartNoAxesCombined,
  Cpu,
  Globe,
  Recycle,
  Target,
  Trophy,
  User2,
} from 'lucide-react';
// import { School, Globe, Headphones } from 'lucide-react';

export const stats: Stat[] = [
  { value: 12000, label: 'Student Enrolled', className: 'text-visionBlue bg-visionWhite' },
  { value: 3500, label: 'Classes Completed', className: 'text-visionGreen bg-visionWhite' },
  { value: 15, label: 'Top Instructors', className: 'text-visionBlue bg-visionWhite' },
  // // { value: '35.3K', label: 'Positive Reviews' },<Cpu /><User /><BookOpenCheck />
  // { value: '100%', label: 'Satisfaction Rate' },
];

export const whyChooseUsFeatures: Feature[] = [
  {
    icon: <Cpu className=" text-white" />,
    title: 'Advanced Technology',
    description: 'Cutting-edge tech stack and modern learning platforms.',
    buttonText: 'Explore Now',
  },
  {
    icon: <User2 className=" text-white" />,
    title: 'Expert Instructors',
    description:
      'Our instructors are passionate about sharing their knowledge and are dedicated to your success.',
    buttonText: 'Our Instructors',
  },
  {
    icon: <BookOpenCheck className=" text-white" />,
    title: 'Comprehensive Curriculum',
    description: 'Well-structured Programs covering all essential topics.',
    buttonText: 'Explore Now',
  },
  {
    icon: <BrainCircuit className=" text-white" />,
    title: 'Innovative Learning',
    description: 'Interactive and engaging learning experiences.',
    buttonText: 'Explore Now',
  },
  {
    icon: <Target className=" text-white" />,
    title: 'Focused Approach',
    description: 'Industry-aligned training and practical skills.',
    buttonText: 'Explore Now',
  },
  {
    icon: <Globe className=" text-white" />,
    title: 'Global Community',
    description:
      'Global network are passionate about sharing their knowledge and are dedicated to your community.',
    buttonText: 'About Company',
  },
  {
    icon: <ChartNoAxesCombined className=" text-white" />,
    title: 'Carrer Growth',
    description: 'Proven track record of student success.',
    buttonText: 'About Company',
  },
  {
    icon: <Trophy className=" text-white" />,
    title: 'Industry Recognition',
    description: 'Certified programs valued by employers.',
    buttonText: 'Explore Now',
  },
  {
    icon: <Recycle className=" text-white" />,
    title: 'Lifetime Access',
    description: 'Unlimited access to course updates and resources.',
    buttonText: 'Join Us Now',
  },
];
