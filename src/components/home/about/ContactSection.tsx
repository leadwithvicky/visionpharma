import { ContactInfo } from '@/utils/constants/about';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

// Contact Section Component
export const ContactSection: React.FC<{ contactInfo: ContactInfo }> = ({
  contactInfo,
}) => (
  <div className="flex flex-wrap items-start gap-6 md:text-lg">
    <Link
      href={`tel:${contactInfo.phone}`}
      className="flex items-center gap-2 text-foreground "
    >
      <div className="p-3 bg-violet-100 rounded-full">
        <Phone className="w-5 h-5" />
      </div>
      <div className="flex flex-col font-semibold">
        <span className="font-semibold">Call Us</span>
        <span className="text-sm">{contactInfo.phone[0]}</span>
        <span className="text-sm">{contactInfo.phone[1]}</span>
      </div>
    </Link>
    <Link
      href={`mailto:${contactInfo.email}`}
      className="flex items-center gap-2 text-foreground"
    >
      <div className="p-3 bg-violet-100 rounded-full">
        <Mail className="w-5 h-5" />
      </div>
      <div className="flex flex-col font-semibold">
        <span className="font-semibold">Email Us</span>
        <span className="text-sm ">{contactInfo.email[0]}</span>
        <span className="text-sm">{contactInfo.email[1]}</span>
      </div>
    </Link>
  </div>
);
