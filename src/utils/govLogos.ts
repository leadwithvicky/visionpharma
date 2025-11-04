export type GovLogoType = {
  id: number;
  name: string;
  background: string;
  secondBg: string;
  textColor: string;
  title: string;
  sideLogo: string;
  mainLogo: string;

};

export const govLogosArray: GovLogoType[] = [
  {
    id: 1,
    name: 'Government of India',
    background: '#B1CBF6',
    secondBg: '#3151ACCC',
    textColor: '#3151AC',
    mainLogo: 'https://res.cloudinary.com/denikmblr/image/upload/v1751884199/f214e3fc82a401daf4bc59bbadbc0c40f5071543_1_os0xs9.png',
    title: 'Government of India',
    sideLogo: 'https://res.cloudinary.com/denikmblr/image/upload/v1751884699/f214e3fc82a401daf4bc59bbadbc0c40f5071543_lpzxcj.png',
  },
  {
    id: 2,
    name: 'Government of Telangana',
    background: '#F6BFB1',
    secondBg: '#8DB066ED',
    textColor: '#E2512C',
    mainLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Emblem_of_Telangana.svg/1200px-Emblem_of_Telangana.svg.png',
    title: 'Government of Telangana',
    sideLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Emblem_of_Telangana.svg/1200px-Emblem_of_Telangana.svg.png',
  },
  {
    id: 3,
    name: 'Ministry of Micro, Small and Medium Enterprises',
    background: '#B1CBF6',
    secondBg: '#3151ACAD',
    textColor: '#B40E0E',
    mainLogo: 'https://res.cloudinary.com/denikmblr/image/upload/v1751884198/bd761e91e3804c9bded1340c3293a60a4fd8d45c_woog9f.png',
    title: 'MSME',
    sideLogo: 'https://5.imimg.com/data5/JK/ND/MY-20716531/msme-logo.png',
  },
  {
    id: 4,
    name: 'International Organization for Standardization',
    background: '#75C9C7',
    secondBg: '#F6BFB1',
    textColor: '#000000',
    mainLogo: 'https://res.cloudinary.com/denikmblr/image/upload/v1752157984/logo-iso-9001-png_1_fhfls9.png',
    title: 'ISO',
    sideLogo: 'https://res.cloudinary.com/denikmblr/image/upload/v1751884198/0696c974c1505292adbd7024a5e2b24c617673e1_joeate.png',
  },
  {
    id: 5,
    name: 'Startup India',
    background: '#9CF2FF',
    secondBg: '#3151ACAD',
    textColor: '#3151AC',
    mainLogo: 'https://res.cloudinary.com/denikmblr/image/upload/v1752158107/DPIIT-header-removebg-preview_vao56k.png',
    title: 'Startup India',
    sideLogo: 'https://res.cloudinary.com/denikmblr/image/upload/v1751884198/7ef2280c417a6388f48563888c6cba9370492df9_rwsa7y.png',
  },
];
