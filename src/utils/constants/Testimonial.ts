interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
//   {
//     id: 1,
//     name: 'Shradha',
//     role: 'UX Designer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The design course equipped me with practical skills to create user-centric designs. The modules on prototyping and usability testing were incredibly insightful and prepared me for real-world challenges.',
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: 'Kavya',
//     role: 'Full Stack Developer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The development course was highly practical and project-oriented. Building a complete application as part of the curriculum gave me the confidence to handle complex projects.',
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: 'Raj',
//     role: 'Data Scientist',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The machine learning course was a game-changer for my career. I appreciated the real-world examples, which helped me apply the concepts effectively in my projects.',
//     rating: 5,
//   },
//   {
//     id: 4,
//     name: 'Abhilash',
//     role: 'Cloud Architect',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The course provided both theoretical knowledge and hands-on experience in cloud technologies. The projects helped me implement solutions confidently in my work.',
//     rating: 4,
//   },
//   {
//     id: 5,
//     name: 'Rakesh',
//     role: 'Backend Developer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The architecture course was invaluable in helping me understand how to design scalable systems. The practical insights into containerization were particularly useful.',
//     rating: 5,
//   },
//   {
//     id: 6,
//     name: 'Bharath',
//     role: 'Product Manager',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The course provided a clear understanding of product management strategies and tools. The real-world case studies were particularly helpful for applying concepts effectively.',
//     rating: 5,
//   },
//   {
//     id: 7,
//     name: 'Ishika',
//     role: 'Frontend Developer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The course covered advanced topics in frontend development, which helped me improve the performance and scalability of my projects. The hands-on approach was very effective.',
//     rating: 5,
//   },
//   {
//     id: 8,
//     name: 'Praveen',
//     role: 'Security Engineer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The cybersecurity course provided a comprehensive overview of modern security practices. The practical labs were engaging and taught me skills I use daily.',
//     rating: 4,
//   },
//   {
//     id: 9,
//     name: 'Krishna',
//     role: 'AI Engineer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The AI specialization was detailed and thorough. The hands-on projects gave me the confidence to work on complex models in my role.',
//     rating: 5,
//   },
//   {
//     id: 10,
//     name: 'Fouziya',
//     role: 'DevOps Engineer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'This course helped me streamline workflows and improve deployment processes. The hands-on modules on automation tools were particularly valuable.',
//     rating: 5,
//   },
//   {
//     id: 11,
//     name: 'Balu',
//     role: 'Mobile Developer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The mobile development course helped me transition to cross-platform app development with ease. The state management lessons were particularly helpful.',
//     rating: 5,
//   },
//   {
//     id: 12,
//     name: 'Aditya',
//     role: 'Business Intelligence Analyst',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The data visualization course taught me how to present data effectively. The focus on dashboard design and best practices was exactly what I needed.',
//     rating: 4,
//   },
//   {
//     id: 13,
//     name: 'Sreeja',
//     role: 'Blockchain Developer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The blockchain course was well-structured and informative. I now feel confident in developing decentralized applications and smart contracts.',
//     rating: 5,
//   },
//   {
//     id: 14,
//     name: 'Varun',
//     role: 'Quality Engineer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The testing course provided practical insights into automation frameworks. The hands-on exercises helped me implement automation in our workflows effectively.',
//     rating: 5,
//   },
//   {
//     id: 15,
//     name: 'Mahathi',
//     role: 'Systems Architect',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The course on system design provided excellent guidance for solving architectural challenges. The scalability modules were particularly insightful.',
//     rating: 5,
//   },
//   {
//     id: 16,
//     name: 'Karthik',
//     role: 'Machine Learning Engineer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The NLP course covered advanced techniques in a clear and practical way. The hands-on projects were engaging and highly relevant to real-world applications.',
//     rating: 4,
//   },
//   {
//     id: 17,
//     name: 'Pragna',
//     role: 'IoT Developer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The IoT course covered everything I needed to build and deploy connected devices. The practical projects were a great learning experience.',
//     rating: 5,
//   },
//   {
//     id: 18,
//     name: 'Manisha',
//     role: 'Technical Lead',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The leadership course provided tools and techniques for managing teams effectively. The communication frameworks were particularly useful.',
//     rating: 5,
//   },
//   {
//     id: 19,
//     name: 'Fareen',
//     role: 'Game Developer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The game development course was a complete package. The focus on optimization and multiplayer systems helped me excel in my role.',
//     rating: 5,
//   },
//   {
//     id: 20,
//     name: 'Shreya',
//     role: 'Site Reliability Engineer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The course on reliability engineering provided actionable insights into building resilient systems. The modules on monitoring and incident management were excellent.',
//     rating: 5,
//   },
//   {
//     id: 21,
//     name: 'Aishwarya',
//     role: 'Data Engineer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The data engineering course offered hands-on practice and real-world insights into managing large-scale data pipelines efficiently.',
//     rating: 5,
//   },
//   {
//     id: 22,
//     name: 'Spandana',
//     role: 'Game Designer',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The game design course provided me with creative and technical skills to create engaging experiences. I highly recommend it to aspiring designers.',
//     rating: 5,
//   },
//   {
//     id: 23,
//     name: 'Santhosh',
//     role: 'DevOps Specialist',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The DevOps course streamlined my understanding of CI/CD pipelines. The practical labs made the learning experience comprehensive and effective.',
//     rating: 5,
//   },
//   {
//     id: 24,
//     name: 'Saurav',
//     role: 'AI Researcher',
//     image: '/images/broadselection/course1.webp',
//     quote:
//       'The AI course offered a perfect balance between theory and practice, enabling me to apply advanced concepts to ongoing research projects.',
//     rating: 5,
//   },
// ];

  {
    id: 1,
    name: 'ADHITHYA B',
    role: 'SAS Trainee',
    image: '/images/testimonials/testimonial1.jpg',
    quote: 'My educational and internship experience at Vision Tech was satisfactory! It widened my perspective and gave me deeper knowledge on SAS. The teaching is very organized and motivating.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Akshaya Chada',
    role: 'Fresher Intern',
    image: '/images/testimonials/testimonial2.jpg',
    quote: 'I am a fresher and learned many important concepts. I felt very enthusiastic to learn new things. Thankful to Vision Tech and their excellent mentors.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Satya Sujana',
    role: 'SAS Intern',
    image: '/images/testimonials/testimonial3.jpg',
    quote: 'Had a great learning experience with Vision Tech while taking the SAS course. The instructors were knowledgeable and content was industry-relevant.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Devisri P.S',
    role: 'Clinical SAS Intern',
    image: '/images/testimonials/testimonial4.jpg',
    quote: 'Well-structured program with a solid foundation in Base SAS and clinical data. Trainers were always ready to help. Learned practical skills not covered in college.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Tetala Janardhan Reddy',
    role: 'Student',
    image: '/images/testimonials/testimonial5.jpg',
    quote: 'Great internship programs and useful courses. Trainers were friendly and I learned a lot of practical skills. Training was clear and helpful for real-world work.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Rohini G',
    role: 'Intern',
    image: '/images/testimonials/testimonial6.jpg',
    quote: 'The managers and directors were so supportive and explained everything well. The work culture was energetic and encouraging.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Samadhan Chavan',
    role: 'Clinical SAS Intern',
    image: '/images/testimonials/testimonial7.jpg',
    quote: 'Learned so much about Clinical SAS and feel very confident. Big thank you to Anjan Sir for making difficult topics easy to understand.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Seeri Chandana',
    role: 'AI Intern',
    image: '/images/testimonials/testimonial8.jpg',
    quote: 'Gained hands-on experience in AI, machine learning, and NLP. Akhil Sir’s guidance was instrumental and the internship helped me align AI with agriculture.',
    rating: 5,
  },
  {
    id: 9,
    name: 'Konisi Bhavana',
    role: 'Clinical SAS Intern',
    image: '/images/testimonials/testimonial9.jpg',
    quote: 'Excellent Clinical SAS training. Anjan Sir’s teaching and patience were great. Supportive environment helped boost my confidence.',
    rating: 5,
  },
  {
    id: 10,
    name: 'Lakshmi Priya',
    role: 'UI/UX Designer Intern',
    image: '/images/testimonials/testimonial10.jpg',
    quote: 'Grew as a UI/UX Designer and improved my creative skills using Figma and Adobe XD. Great experience for anyone passionate about design.',
    rating: 5,
  },
  {
    id: 11,
    name: 'Raj Laxmi Mishra',
    role: 'HR Generalist',
    image: '/images/testimonials/testimonial11.jpg',
    quote: 'Working here has been rewarding. Supportive leadership, inclusive culture, and nonstop learning in a fast-moving tech setting.',
    rating: 5,
  },
  {
    id: 12,
    name: 'Tankala Rohith',
    role: 'AI Intern',
    image: '/images/testimonials/testimonial12.jpg',
    quote: 'Completed AI internship course and strengthened my understanding of AI concepts. Great learning experience.',
    rating: 5,
  },
  {
    id: 13,
    name: 'Sathwika Chada',
    role: 'AIML Intern',
    image: '/images/testimonials/testimonial13.jpg',
    quote: 'Excited to learn AI/ML. Gained real-world application skills and technical knowledge. Happy to be part of this course.',
    rating: 5,
  },
  {
    id: 14,
    name: 'Ami Tesh',
    role: 'Team Member',
    image: '/images/testimonials/testimonial14.jpg',
    quote: 'Outstanding experience at VisionTech. Structured training and real-world exposure. Inspired by visionary leaders and exceptional mentorship.',
    rating: 5,
  },
  {
    id: 15,
    name: 'Satya Kanuri',
    role: 'AI Intern',
    image: '/images/testimonials/testimonial15.jpg',
    quote: 'Amazing learning experience in AI! Instructors made complex concepts easy to understand with hands-on support.',
    rating: 5,
  },
  {
    id: 16,
    name: 'Vanjarapu Bhulakshmi',
    role: 'Full Stack Intern',
    image: '/images/testimonials/testimonial16.jpg',
    quote: 'Great experience learning full-stack web development. Classes were very engaging and interactive.',
    rating: 5,
  },
  {
    id: 17,
    name: 'Sai Kumar',
    role: 'AI Intern',
    image: '/images/testimonials/testimonial17.jpg',
    quote: 'Enrolled in AI program. Mentors had great explanations and valued active participation. Loved the internship.',
    rating: 5,
  },
  {
    id: 18,
    name: 'Siva Priya',
    role: 'ML Intern',
    image: '/images/testimonials/testimonial18.jpg',
    quote: 'Took a machine learning course and it was worth more than the fee. Hands-on experience helped build skills and confidence.',
    rating: 5,
  },
  {
    id: 19,
    name: 'Hasini Vorem',
    role: 'Digital Marketing Intern',
    image: '/images/testimonials/testimonial19.jpg',
    quote: 'Great experience learning digital marketing. Classes were engaging and interactive throughout.',
    rating: 5,
  },
  {
    id: 20,
    name: 'Hemanth Kadali',
    role: 'Full Stack Intern',
    image: '/images/testimonials/testimonial20.jpg',
    quote: 'Had a great experience with full stack web development. Vision Tech provided a genuine platform and excellent teaching.',
    rating: 5,
  },
];
