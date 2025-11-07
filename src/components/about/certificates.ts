import IMAGE from '@/utils/images';

interface Certificate {
  id: number;
  image: string;
  hasVerificationButton: boolean;
  verificationCode: string;
  verificationUrl: string;
}

const Certificates: Certificate[] = [
  {
    id: 1,
    image: IMAGE.IMP_DOCS.INCORPERATION,
    hasVerificationButton: true,
    verificationCode: 'VISIONPHARMA ACADEMY PRIVATE LIMITED',
    verificationUrl:
      'https://www.mca.gov.in/content/mca/global/en/mca/fo-llp-services/company-llp-name-search.html',
  },
  {
    id: 2,
    image: IMAGE.IMP_DOCS.GOV_TELANGANA,
    hasVerificationButton: true,
    verificationCode: 'SEA/RAN/ALO/BN/1073660/2025',
    verificationUrl:
      'https://labour.telangana.gov.in/VerifyApplicationStatus.do',
  },
  {
    id: 3,
    image: IMAGE.IMP_DOCS.MSME,
    hasVerificationButton: true,
    verificationCode: 'UDYAM-TS-09-0153010',
    verificationUrl: 'https://udyamregistration.gov.in/Udyam_Verify.aspx',
  },
  {
    id: 4,
    image: IMAGE.IMP_DOCS.ISO,
    hasVerificationButton: true,
    verificationCode: 'ISO 9001:2015',
    verificationUrl:
      'https://www.startupindia.gov.in/content/sih/en/startupgov/validate-startup-recognition.html',
  },
  {
    id: 5,
    image: IMAGE.IMP_DOCS.RECOGNITION,
    hasVerificationButton: true,
    verificationCode: 'DIPP206847',
    verificationUrl: 'https://www.ksrcertification.in/verify/',
  },
];

export default Certificates;
