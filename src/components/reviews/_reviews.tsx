export interface Company {
  name: string;
  img: string;
  rating: string;
  link: string;
}

export const companies: Company[] = [
  {
    name: 'Google Reviews',
    img: 'https://res.cloudinary.com/denikmblr/image/upload/v1752055231/eeccca0750dc564ea55c897f90f4fb99_lcxiyj.png',
    rating: '4.9',
    link: 'https://www.google.com/search?q=VisionTech+PVT+LTD+Reviews',
  },
  {
    name: 'Crunchbase',
    img: 'https://res.cloudinary.com/denikmblr/image/upload/v1752055230/cb_ohmvg1.png',
    rating: '4.6',
    link: 'https://www.crunchbase.com/organization/visiontech-18be',
  },
  {
    name: 'Ambition Box',
    img: 'https://res.cloudinary.com/denikmblr/image/upload/v1752055688/ambition_box_faur0w.png',
    rating: '4.8',
    link: 'https://www.ambitionbox.com/overview/visiontech-academy-overview',
  },
  {
    name: 'Trustpilot',
    img: 'https://res.cloudinary.com/denikmblr/image/upload/v1752055230/trustpilot_v14c6x.png',
    rating: '5.0',
    link: 'https://www.trustpilot.com/review/visiontech.world',
  },
];

export default companies;