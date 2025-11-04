import { courseAPIData } from './courseTopic';

const popularCourse = [
  {
    category: 'All Programs',
    courses: [
      'artificial-intelligence-c1',
      'qa-testing-and-automation-c5',
      'machine-learning-c2',
      'data-science-and-analytics-c3',
      'full-stack-web-development-c4',
      'SAS-Programming-c28',
      'Medical-Coding-c13',
      'Pharmacovigilance-c15',
      'Nano-Science-Nano-Technology-c16',
      'human-resource-c75',
      'digital-marketing-c77',
      'Artificial-Intelligence-c32',
      'cloud-computing-c62',
      // 'autocad-c107',
      // 'embedded-systems-design-c111',
    ],
  },
  {
    category: 'B.Tech',
    courses: [
      'qa-testing-and-automation-c5',
      'artificial-intelligence-c1',
      // 'machine-learning-c2',
      'data-science-and-analytics-c3',
      'full-stack-web-development-c4',
      'power-bi-for-data-visualization-c6',
      'devops-c7',
      'cloud-computing-c62',
      'cybersecurity-and-ethical-hacking-c9',
      'mobile-app-development-c10',
      'robotics-c11',
      // 'augmented-reality-and-virtual-reality-c12',
      'SAS-Programming-c28',
      'Pharmacovigilance-c15',
      'Nano-Science-Nano-Technology-c16',
      'autocad-c115',
      'embedded-systems-design-c111',
      'Medical-Coding-c13',
    ],
  },
  {
    category: 'Pharmacy',
    courses: [
      'Medical-Coding-c13',
      'SAS-Programming-c28',
      'Pharmacovigilance-c15',
      'Nano-Science-and-Nano-Technology-c30',
      'Clinical-SAS-c31',
      'Artificial-Intelligence-c32',
      'Drug-Development-Process-c33',
      'Regulatory-Affairs-c34',
    ],
  },
  {
    category: 'Degree',
    courses: [
      'artificial-intelligence-c1',
      'qa-testing-and-automation-c5',
      'machine-learning-c2',
      'data-science-and-analytics-c3',
      'full-stack-web-development-c4',
      'SAS-Programming-c28',
      'Medical-Coding-c13',
      'Pharmacovigilance-c15',
      'Nano-Science-Nano-Technology-c16',
      'human-resource-c75',
      'digital-marketing-c77',
      'Artificial-Intelligence-c32',
      'cloud-computing-c62',
      // 'finance-c75',
      // 'arvr-development-c66',
      // 'cyber-security-c63',
      
      // 'robotics-c65',
    ],
  },
  {
    category: 'MBA',
    courses: [
      'hr-c83',
      'digital-marketing-c85',
      'finance-c84',
      // 'business-analytics-c86',
      'blockchain-c87',
      'product-management-c88',
      'supply-chain-management-c89',
      'operations-management-c90',
    ],
  },
  {
    category: 'MCA',
    courses: [
      'artificial-intelligence-c1',
      'qa-testing-and-automation-c5',
      'machine-learning-c2',
      'data-science-and-analytics-c3',
      'full-stack-web-development-c4',
      // 'ai-c91',
      // 'ml-c92',
      // 'data-science-c93',
      // 'full-stack-web-development-c94',
      // 'data-science-and-analytics-c3',
      // 'qa-testing-c95',
      // 'power-bi-c96',
      // // 'cloud-computing-c97',
      // 'cyber-security-c98',
      // 'mobile-app-development-c99',
      // // 'cloud-computing-c62',
      // 'devops-c100',
      // 'robotics-c101',
      // 'ar-vr-c102',
    ],
  },
  {
    category: 'Agriculture',
    courses: [
      'ai-c103',
      // 'nano-science-c104',
      'research-development-c105',
       'Nano-Science-Nano-Technology-c16',
      // 'genetics-c106',
    ],
  },
];

export function getPopularCourse() {
  const res = popularCourse.map((category) => {
    return {
      category: category.category,
      courses: courseAPIData.filter((course) =>
        category.courses.some(
          (c) => course.slug.toLowerCase() === c.toLowerCase()
        )
      ),
    };
  });

  return res;
}
