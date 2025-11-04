export type ContactInfo = {
  phone: string[];
  email: string[];
};
// Types
export type Feature = {
  title: string;
  isAvailable: boolean;
};

export const features: Feature[] = [
  { title: 'Online learning', isAvailable: true },
  { title: 'Audio performance', isAvailable: true },
  { title: 'Expert trainers', isAvailable: true },
  { title: 'Lifetime access', isAvailable: true },
  { title: 'Video performance', isAvailable: true },
  { title: 'Course guidelines', isAvailable: true },
];

export const contactInfo: ContactInfo = {
  phone: ['+91 720 7376 333'],
  email: [' support@visiontech.world'],
};
