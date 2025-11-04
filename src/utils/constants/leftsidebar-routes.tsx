import React from 'react';
import {
  FaHome,
  FaBookOpen,
  FaProjectDiagram,
  FaBookReader,
} from 'react-icons/fa';
import { GrCertificate } from 'react-icons/gr';
import { TiDocumentText } from 'react-icons/ti';
import { LuUserRoundCog } from 'react-icons/lu';
import { BsFillAwardFill } from 'react-icons/bs';
import { MdManageAccounts } from 'react-icons/md';

// Shared route configuration type
export interface RouteConfig {
  path: string;
  label: string;
  icon?: React.ReactNode;
  allowedRoles: string[]; // 'student', 'admin', etc.
  programTypes?: string[]; // 'ULP', 'ILP', etc.
  locked?: boolean;
  featureName?: string;
  subItems?: Omit<
    RouteConfig,
    'icon' | 'allowedRoles' | 'programTypes' | 'locked'
  >[];
}

// Shared route configurations
export const DASHBOARD_ROUTES: RouteConfig[] = [
  {
    path: '/dashboard',
    label: 'Home',
    icon: <FaHome />,
    allowedRoles: ['student', 'admin'],
    programTypes: ['ULP', 'ILP'],
    locked: false,
  },
  {
    path: '/dashboard/my-programs',
    label: 'My Programs',
    icon: <FaBookOpen />,
    allowedRoles: ['student'],
    programTypes: ['ULP', 'ILP'],
    locked: false,
  },

  // Locked student routes (accessible to admins)
  {
    path: '/dashboard/our-projects',
    label: 'Projects',
    icon: <FaProjectDiagram />,
    allowedRoles: ['student'],
    programTypes: ['ILP'],
    locked: true,
    featureName: 'Projects',
    subItems: [
      {
        path: '/dashboard/our-projects/add-new-projects',
        label: 'Add New Project',
      },
      {
        path: '/dashboard/our-projects/view-all-projects',
        label: 'View All Projects',
      },
    ],
  },
  {
    path: '/dashboard/certificate',
    label: 'Certificates',
    icon: <GrCertificate />,
    allowedRoles: ['student'],
    programTypes: ['ULP', 'ILP'],
    locked: true,
    featureName: 'Certificates',
  },

  // ILP specific items
  {
    path: '/dashboard/aptitude',
    label: 'Aptitude',
    icon: <TiDocumentText />,
    allowedRoles: ['student'],
    programTypes: ['ILP'],
    locked: true,
    featureName: 'Aptitude',
  },
  {
    path: '/dashboard/technical',
    label: 'Technical',
    icon: <FaBookReader />,
    allowedRoles: ['student'],
    programTypes: ['ILP'],
    locked: true,
    featureName: 'Technical',
  },
  {
    path: '/dashboard/hr-round',
    label: 'HR Round',
    icon: <LuUserRoundCog />,
    allowedRoles: ['student'],
    programTypes: ['ILP'],
    locked: true,
    featureName: 'HR Round',
  },
  {
    path: '/dashboard/reward',
    label: 'Rewards',
    icon: <BsFillAwardFill />,
    allowedRoles: ['student'],
    programTypes: ['ILP'],
    locked: true,
    featureName: 'Rewards',
  },

  // Admin routes (all unlocked for admins)
  {
    path: '/dashboard/admin/manage-access',
    label: 'Manage Access',
    icon: <MdManageAccounts />,
    allowedRoles: ['admin'],
    programTypes: ['ULP', 'ILP'],
    locked: false,
  },
  {
    path: '/dashboard/admin/schedule-class',
    label: 'Manage Classes',
    icon: <MdManageAccounts />,
    allowedRoles: ['admin'],
    programTypes: ['ULP', 'ILP'],
    locked: false,
  },
  // {
  //   path: '/dashboard/admin/recordings',
  //   label: 'Manage Recording',
  //   icon: <MdManageAccounts />,
  //   allowedRoles: ['admin'],
  //   programTypes: ['ULP', 'ILP'],
  //   locked: false,
  // },
  {
    path: '/dashboard/admin/manage-program',
    label: 'Manage Programs',
    icon: <MdManageAccounts />,
    allowedRoles: ['admin'],
    programTypes: ['ULP', 'ILP'],
    locked: false,
  },
  // {
  //   path: '/dashboard/admin/aptitude',
  //   label: 'Manage Aptitude',
  //   icon: <MdManageAccounts />,
  //   allowedRoles: ['admin'],
  //   programTypes: ['ULP', 'ILP'],
  //   locked: false,
  // },
  {
    path: '/dashboard/admin/manage-aptitude',
    label: 'Manage Tests',
    icon: <MdManageAccounts />,
    allowedRoles: ['admin'],
    programTypes: ['ULP', 'ILP'],
    locked: false,
  },
];
