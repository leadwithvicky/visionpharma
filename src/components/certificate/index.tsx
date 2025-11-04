import React from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { usePathname } from 'next/navigation';

// Define the Certificate type
interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string; // Optional link to certificate verification
}

// Define programs with their certificates
const programs = {
  ulp: {
    name: 'Ultimate Learner Program',
    description:
      'Certificates earned through our intensive Ultimate Learner Program',
    certificates: [
      {
        id: 'ulp-cert1',
        title: 'Skill Development Certificate',
        issuer: 'visionTech',
        date: 'January 2025',
        image: '/certificate/Skill-Development-Certificate1.png',
        link: '/verify/ulp-cert1',
      },
      {
        id: 'ulp-cert2',
        title: 'Internship Completion Certificate',
        issuer: 'visionTech',
        date: 'February 2025',
        image: '/certificate/Internship-Completion-Certificate2.png',
        link: '/verify/ulp-cert2',
      },
    ],
  },
  ilp: {
    name: 'Infinity Learner Program',
    description:
      'Certificates earned through our comprehensive Infinity Learning Program',
    certificates: [
      {
        id: 'ilp-cert1',
        title: 'Skill Development Certificate',
        issuer: 'visiontech',
        date: 'December 2024',
        image: '/certificate/Skill-Development-Certificate1.png',
        link: '/verify/ilp-cert1',
      },
      {
        id: 'ilp-cert2',
        title: 'Internship Completion Certificate',
        issuer: 'visiontech',
        date: 'January 2025',
        image: '/certificate/Internship-Completion-Certificate2.png',
        link: '/verify/ilp-cert2',
      },
      {
        id: 'ilp-cert3',
        title: 'Star Performer Certificate',
        issuer: 'visiontech',
        date: 'February 2025',
        image: '/certificate/Star-Performer-Certificate3.png',
        link: '/verify/ilp-cert3',
      },
    ],
  },
};

const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
  return (
    <div
      className={`flex flex-row justify-center items-center overflow-hidden mb-10`}
    >
      <div className="">
        <Image
          src={certificate.image}
          alt={certificate.title}
          width={1200}
          height={1200}
          className=" "
        />
      </div>
      {/* {pathname !== '/dashboard' ?"":<div className=" w-[40%] flex flex-col justify-center items-center p-4">
        <h4 className="font-extrabold text-2xl mb-2 text-center ">
          Download your<br />
          {certificate.title}
        </h4>
        <div className="flex justify-center mt-2">
          <a href={certificate.link} download className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
            <Download className="h-8 w-8 text-white" />
          </a>
        </div>
      </div>}   */}
    </div>
  );
};

const Certification = () => {
  return (
    <section className="py-8 ">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="ulp" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-2 gap-2">
              <TabsTrigger value="ulp">Ultimate Learner Program</TabsTrigger>
              <TabsTrigger value="ilp">Infinity Learner Program</TabsTrigger>
            </TabsList>
          </div>

          {/* ULP Content */}
          <TabsContent value="ulp">
            <div className="">
              {programs.ulp.certificates.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))}
            </div>
          </TabsContent>

          {/* ILP Content */}
          <TabsContent value="ilp">
            <div className="">
              {programs.ilp.certificates.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Certification;
