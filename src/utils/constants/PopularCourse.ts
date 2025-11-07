import { courseAPIData } from './courseTopic';

const popularCourse = [
  {
    category: 'All Programs',
    courses: [
      // 'artificial-intelligence-c1',
      // 'qa-testing-and-automation-c5',
      // 'machine-learning-c2',
      // 'data-science-and-analytics-c3',
      // 'full-stack-web-development-c4',
      'SAS-Programming-c28',
      'Medical-Coding-c13',
      'Pharmacovigilance-c29',
      // 'Nano-Science-Nano-Technology-c16',
      'human-resource-c75',
      'clinical-data-mining-c3',
      'pharma-quality-assurance-c2',
      'medical-writing-c1',
      'Artificial-Intelligence-c32',
      'clinical-research-coordinator-c206',
      'clinical-research-c205',
      
      // 'digital-marketing-c77',
      // 'Artificial-Intelligence-c32',
      // 'cloud-computing-c62',
      // 'autocad-c107',
      // 'embedded-systems-design-c111',
    ],
  },
  {
    category: 'B.Pharm',
    courses: [
      // 'qa-testing-and-automation-c5',
      // 'artificial-intelligence-c1',
      // 'machine-learning-c2',
      // 'data-science-and-analytics-c3',
      // 'full-stack-web-development-c4',
      // 'power-bi-for-data-visualization-c6',
      // 'devops-c7',
      // 'cloud-computing-c62',
      // 'cybersecurity-and-ethical-hacking-c9',
      // 'mobile-app-development-c10',
      // 'robotics-c11',
      // 'augmented-reality-and-virtual-reality-c12',
      'SAS-Programming-c28',
      'Pharmacovigilance-c37',
      // 'Nano-Science-Nano-Technology-c16',
      // 'autocad-c115',
      // 'embedded-systems-design-c111',
      'Medical-Coding-c13',
      'clinical-data-mining-c3',
      'pharma-quality-assurance-c2',
      'medical-writing-c1',
      // 'Clinical-SAS-c31',
      'Artificial-Intelligence-c32',
      'clinical-research-c205',
      'clinical-research-coordinator-c206',
    ],
  },
  {
    category: 'M.Pharm',
    courses: [
      'Medical-Coding-c13',
      'SAS-Programming-c28',
      'Pharmacovigilance-c51',
      // 'Nano-Science-and-Nano-Technology-c30',
      // 'Clinical-SAS-c31',
      'Artificial-Intelligence-c32',
      'Drug-Development-Process-c33',
      'Regulatory-Affairs-c34',
      'clinical-data-mining-c3',
      'pharma-quality-assurance-c2',
      'medical-writing-c1',
      'clinical-research-c205',
      'clinical-research-coordinator-c206',
    ],
  },
  {
    category: 'D.Pharm',
    courses: [
      // 'artificial-intelligence-c1',
      // 'qa-testing-and-automation-c5',
      // 'machine-learning-c2',
      // 'data-science-and-analytics-c3',
      // 'full-stack-web-development-c4',

      'Medical-Coding-c13',
      'SAS-Programming-c28',
      'Pharmacovigilance-c45',
      // 'Nano-Science-and-Nano-Technology-c30',
      // 'Clinical-SAS-c31',
      'Artificial-Intelligence-c32',
      'Drug-Development-Process-c33',
      'Regulatory-Affairs-c34',
      'clinical-data-mining-c3',
      'pharma-quality-assurance-c2',
      'medical-writing-c1',
      // 'Clinical-SAS-c31',
      'clinical-research-c205',
      'clinical-research-coordinator-c206',

      // 'SAS-Programming-c28',
      // 'Medical-Coding-c13',
      // 'Pharmacovigilance-c15',
      // 'Nano-Science-Nano-Technology-c16',
      'human-resource-c75',
      // 'digital-marketing-c77',
      // 'Artificial-Intelligence-c32',
      // 'cloud-computing-c62',
      // 'finance-c75',
      // 'arvr-development-c66',
      // 'cyber-security-c63',

      // 'robotics-c65',
    ],
  },
  {
    category: 'PharmD',
    courses: [
      'Medical-Coding-c13',
      'SAS-Programming-c28',
      'pharmacovigilance-c69',
      // 'Nano-Science-and-Nano-Technology-c30',
      // 'Clinical-SAS-c31',
      'Artificial-Intelligence-c32',
      'Drug-Development-Process-c33',
      'Regulatory-Affairs-c34',
      'clinical-data-mining-c3',
      'pharma-quality-assurance-c2',
      'medical-writing-c1',
      'clinical-research-c205',
      'clinical-research-coordinator-c206',
    ],
  },
  {
    category: 'BSC',
    courses: [
      // 'qa-testing-and-automation-c5',
      // 'artificial-intelligence-c1',
      // // 'machine-learning-c2',
      // 'data-science-and-analytics-c3',
      // 'full-stack-web-development-c4',
      // 'power-bi-for-data-visualization-c6',
      // 'devops-c7',
      // 'cloud-computing-c62',
      // 'cybersecurity-and-ethical-hacking-c9',
      // 'mobile-app-development-c10',
      // 'robotics-c11',
      // 'augmented-reality-and-virtual-reality-c12',
      'SAS-Programming-c28',
      'pharmacovigilance-c69',
      // 'Nano-Science-Nano-Technology-c16',
      // 'autocad-c115',
      // 'embedded-systems-design-c111',
      'Medical-Coding-c13',
      'clinical-data-mining-c3',
      'pharma-quality-assurance-c2',
      'medical-writing-c1',
      // 'Clinical-SAS-c31',
      'Artificial-Intelligence-c32',
      'clinical-research-c205',
      'clinical-research-coordinator-c206',
    ],
  },
  {
    category: 'MSC',
    courses: [
      // 'qa-testing-and-automation-c5',
      // 'artificial-intelligence-c1',
      // // 'machine-learning-c2',
      // 'data-science-and-analytics-c3',
      // 'full-stack-web-development-c4',
      // 'power-bi-for-data-visualization-c6',
      // 'devops-c7',
      // 'cloud-computing-c62',
      // 'cybersecurity-and-ethical-hacking-c9',
      // 'mobile-app-development-c10',
      // 'robotics-c11',
      // 'augmented-reality-and-virtual-reality-c12',
      'SAS-Programming-c28',
      'Pharmacovigilance-c15',
      // 'Nano-Science-Nano-Technology-c16',
      // 'autocad-c115',
      // 'embedded-systems-design-c111',
      'Medical-Coding-c13',
      'clinical-data-mining-c3',
      'pharma-quality-assurance-c2',
      'medical-writing-c1',
      // 'Clinical-SAS-c31',
      'Artificial-Intelligence-c32',
      'clinical-research-c205',
      'clinical-research-coordinator-c206',
    ],
  },
  // {
  //   category: 'MBA',
  //   courses: [
  //     'hr-c83',
  //     'digital-marketing-c85',
  //     'finance-c84',
  //     // 'business-analytics-c86',
  //     'blockchain-c87',
  //     'product-management-c88',
  //     'supply-chain-management-c89',
  //     'operations-management-c90',
  //   ],
  // },
  // {
  //   category: 'MCA',
  //   courses: [
  //     'artificial-intelligence-c1',
  //     'qa-testing-and-automation-c5',
  //     'machine-learning-c2',
  //     'data-science-and-analytics-c3',
  //     'full-stack-web-development-c4',
  //     // 'ai-c91',
  //     // 'ml-c92',
  //     // 'data-science-c93',
  //     // 'full-stack-web-development-c94',
  //     // 'data-science-and-analytics-c3',
  //     // 'qa-testing-c95',
  //     // 'power-bi-c96',
  //     // // 'cloud-computing-c97',
  //     // 'cyber-security-c98',
  //     // 'mobile-app-development-c99',
  //     // // 'cloud-computing-c62',
  //     // 'devops-c100',
  //     // 'robotics-c101',
  //     // 'ar-vr-c102',
  //   ],
  // },
  // {
  //   category: 'Agriculture',
  //   courses: [
  //     'ai-c103',
  //     // 'nano-science-c104',
  //     'research-development-c105',
  //      'Nano-Science-Nano-Technology-c16',
  //     // 'genetics-c106',
  //   ],
  // },
];

export function getPopularCourse() {
  const categoryToProgramBranch: Record<string, { program: string; branch: string }> = {
    'B.Pharm': { program: 'Pharmacy', branch: 'Bachelor of Pharmacy' },
    'M.Pharm': { program: 'Pharmacy', branch: 'Master of Pharmacy' },
    'D.Pharm': { program: 'Pharmacy', branch: 'Diploma in Pharmacy' },
    'PharmD': { program: 'Pharmacy', branch: 'Doctor of Pharmacy' },
    'BSC': { program: 'Degree', branch: 'Bachelor of Science' },
    'MSC': { program: 'Degree', branch: 'Master of Science' },
  };

  const res = popularCourse.map((category) => {
    const desired = categoryToProgramBranch[category.category];
    const seenSlugs = new Set<string>();

    const selectedCourses = category.courses
      .map((slug) => slug.toLowerCase())
      .map((slugLc) => {
        // Prefer exact program+branch match
        const exact = desired
          ? courseAPIData.find(
              (c) =>
                c.slug?.toLowerCase() === slugLc &&
                c.program?.toLowerCase() === desired.program.toLowerCase() &&
                c.branch?.toLowerCase() === desired.branch.toLowerCase()
            )
          : undefined;

        if (exact) return exact;

        // Fallback: match by program only
        const progOnly = desired
          ? courseAPIData.find(
              (c) =>
                c.slug?.toLowerCase() === slugLc &&
                c.program?.toLowerCase() === desired.program.toLowerCase()
            )
          : undefined;
        if (progOnly) return progOnly;

        // Final fallback: any by slug
        return courseAPIData.find((c) => c.slug?.toLowerCase() === slugLc);
      })
      .filter((c): c is NonNullable<typeof c> => Boolean(c))
      .filter((c) => {
        const key = (c.slug || '').toLowerCase();
        if (seenSlugs.has(key)) return false;
        seenSlugs.add(key);
        return true;
      });

    return { category: category.category, courses: selectedCourses };
  });

  return res;
}
