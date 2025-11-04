interface Instructor {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
}

export const INSTRUCTORS: Instructor[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Senior Full Stack Developer & Tech Educator',
    bio: "With over 8 years of experience at top tech companies like Infosys and Microsoft India, I'm passionate about sharing my knowledge in web development and cloud computing. Currently leading technical training programs at Bangalore's premier coding bootcamp...",
    image: '/images/home/instructor/teacher1.avif',
    socialLinks: {
      facebook: 'https://facebook.com/priyasharmatech',
      twitter: 'https://twitter.com/priyasharmadev',
      youtube: 'https://youtube.com/c/PriyaSharmaTech',
    },
  },
  {
    id: 2,
    name: 'Rajesh Verma',
    role: 'AI/ML Specialist & Course Director',
    bio: 'Ex-Google Research, specialized in Machine Learning and AI. Currently mentoring the next generation of data scientists at IIT Delhi. Have guided over 10,000 students through my online courses in Data Science and Python programming...',
    image: '/images/home/instructor/teacher2.webp',
    socialLinks: {
      twitter: 'https://twitter.com/rajeshvermaai',
      youtube: 'https://youtube.com/c/RajeshVermaAI',
    },
  },
  {
    id: 3,
    name: 'Anjali Deshmukh',
    role: 'Frontend Developer & UX Expert',
    bio: 'A passionate frontend developer with expertise in React and Angular. Previously worked with Flipkart and now teaching at my own coding studio in Pune. Specializing in responsive design and modern JavaScript frameworks...',
    image: '/images/home/instructor/teacher3.avif',
    socialLinks: {
      facebook: 'https://facebook.com/anjalideshmukh.dev',
      twitter: 'https://twitter.com/anjalideshmukh',
      youtube: 'https://youtube.com/c/AnjaliDeshmukhDev',
    },
  },
  {
    id: 4,
    name: 'Arjun Reddy',
    role: 'DevOps Engineer & Cloud Architecture Trainer',
    bio: 'AWS Certified Solutions Architect with 6+ years of experience in DevOps and cloud technologies. Currently leading DevOps training at TechVantage Academy, Hyderabad. Helped over 500 professionals transition to cloud careers...',
    image: '/images/home/instructor/teacher4.webp',
    socialLinks: {
      twitter: 'https://twitter.com/arjunreddydevops',
      youtube: 'https://youtube.com/c/ArjunReddyCloud',
    },
  },
];
