import { Check } from 'lucide-react';
import React from 'react';
import { TbPoint } from 'react-icons/tb';

const Overview = () => {
  const objectives = [
    'The difference between startup and ongoing expenses',
    'How to create a sales forecast for your business',
    'The important difference between profits and cash',
    'Types of business expenses to deduct from your taxes',
    'How expenses vs. assets are treated for tax purposes',
    'How to create an expense budget for your business',
    'The important difference between profits and cash',
    'Online resources for tax questions',
  ];
  const benefits = [
    'Learn how to create a sales forecast for your business',
    'Understand the difference between startup and ongoing expenses',
    'Discover how to create an expense budget for your business',
    'Gain insights into the importance of expenses vs. assets',
    'Understand how to deduct expenses from your taxes',
    'Learn how to identify tax questions and resources online',
  ];

  return (
    <div className="space-y-4 max-w-screen-xl">
      <div className="bg-white border border-border rounded-2xl p-6 shadow-sm ">
        <h2 className="text-2xl font-bold mb-6">What You&apos;ll Learn</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {objectives.map((objective, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{objective}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-base md:text-xl xl:text-2xl font-bold text-foreground/90">
          About The Course
        </div>
        <div className="text-foreground/80 tracking-tight">
          Data Structures and Algorithms (DSA) form the backbone of computer
          science, enabling efficient problem-solving and software development.
          Data structures organize and store data (e.g., arrays, linked lists,
          trees), while algorithms are step-by-step procedures to perform tasks
          (e.g., searching, sorting). Mastery of DSA improves code efficiency,
          scalability, and adaptability, making it vital for developers.
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-base md:text-xl xl:text-2xl font-bold text-foreground/90">
          Requirement
        </div>
        <div className="text-foreground/80 tracking-tight">
          To learn Data Structures and Algorithms (DSA), you need basic
          programming knowledge (e.g., Python, Java), understanding of math and
          logic, problem-solving skills, and an IDE like VS Code or PyCharm. Use
          resources like books, courses, and platforms (e.g., LeetCode), and
          practice consistently to master DSA.
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-base md:text-xl xl:text-2xl font-bold text-foreground/90">
          In This Course You Will Learn
        </div>
        <div className="text-foreground/80 tracking-tight">
          In this course, you will be able to:
        </div>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <TbPoint className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
