// components/logos/index.tsx
'use client';
import React from 'react';

export const NvidiaLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" fill="none">
    <rect width="100" height="40" fill="#000" />
    <path
      d="M25.7,12.5H13.5v1.9h12.2v-1.9zM25.7,17.3H13.5v1.9h12.2v-1.9zM11.6,24h16.9v-1.9H11.6V24zM11.6,10.6h16.9V8.7H11.6v1.9z"
      fill="#76B900"
    />
    <path
      d="M43.5,10c-2.7,0-4.9,2.2-4.9,4.9s2.2,4.9,4.9,4.9s4.9-2.2,4.9-4.9S46.2,10,43.5,10z M43.5,18.2c-1.8,0-3.3-1.5-3.3-3.3
        s1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3S45.3,18.2,43.5,18.2z"
      fill="#76B900"
    />
    <text
      x="50"
      y="25"
      fill="white"
      fontFamily="Arial, sans-serif"
      fontSize="12"
      fontWeight="bold"
    >
      NVIDIA
    </text>
  </svg>
);

export const MicrosoftLogo = () => (
  <svg
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    width="256"
    height="256"
    preserveAspectRatio="xMidYMid"
  >
    <path fill="#F1511B" d="M121.666 121.666H0V0h121.666z" />
    <path fill="#80CC28" d="M256 121.666H134.335V0H256z" />
    <path fill="#00ADEF" d="M121.663 256.002H0V134.336h121.663z" />
    <path fill="#FBBC09" d="M256 256.002H134.335V134.336H256z" />
  </svg>
); //done

export const AmazonLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="304"
    height="182"
    x="0"
    y="0"
    viewBox="0 0 304 182"
  >
    <path
      fill="#ffffff"
      d="m86 66 2 9c0 3 1 5 3 8v2l-1 3-7 4-2 1-3-1-4-5-3-6c-8 9-18 14-29 14-9 0-16-3-20-8-5-4-8-11-8-19s3-15 9-20c6-6 14-8 25-8a79 79 0 0 1 22 3v-7c0-8-2-13-5-16-3-4-8-5-16-5l-11 1a80 80 0 0 0-14 5h-2c-1 0-2-1-2-3v-5l1-3c0-1 1-2 3-2l12-5 16-2c12 0 20 3 26 8 5 6 8 14 8 25v32zM46 82l10-2c4-1 7-4 10-7l3-6 1-9v-4a84 84 0 0 0-19-2c-6 0-11 1-15 4-3 2-4 6-4 11s1 8 3 11c3 2 6 4 11 4zm80 10-4-1-2-3-23-78-1-4 2-2h10l4 1 2 4 17 66 15-66 2-4 4-1h8l4 1 2 4 16 67 17-67 2-4 4-1h9c2 0 3 1 3 2v2l-1 2-24 78-2 4-4 1h-9l-4-1-1-4-16-65-15 64-2 4-4 1h-9zm129 3a66 66 0 0 1-27-6l-3-3-1-2v-5c0-2 1-3 2-3h2l3 1a54 54 0 0 0 23 5c6 0 11-2 14-4 4-2 5-5 5-9l-2-7-10-5-15-5c-7-2-13-6-16-10a24 24 0 0 1 5-34l10-5a44 44 0 0 1 20-2 110 110 0 0 1 12 3l4 2 3 2 1 4v4c0 3-1 4-2 4l-4-2c-6-2-12-3-19-3-6 0-11 0-14 2s-4 5-4 9c0 3 1 5 3 7s5 4 11 6l14 4c7 3 12 6 15 10s5 9 5 14l-3 12-7 8c-3 3-7 5-11 6l-14 2z"
    />
    <path
      d="M274 144A220 220 0 0 1 4 124c-4-3-1-6 2-4a300 300 0 0 0 263 16c5-2 10 4 5 8z"
      fill="#f90"
    />
    <path
      d="M287 128c-4-5-28-3-38-1-4 0-4-3-1-5 19-13 50-9 53-5 4 5-1 36-18 51-3 2-6 1-5-2 5-10 13-33 9-38z"
      fill="#f90"
    />
  </svg>
); //done

export const TSMCLogo = () => (
  <svg viewBox="0 0 100 40">
    <path
      d="M20,15h60v3H20v-3zM20,22h60v3H20v-3zM20,29h60v3H20v-3z"
      fill="#1428A0"
    />
    <text x="20" y="35" fill="#1428A0" fontSize="12">
      TSMC
    </text>
  </svg>
);

export const RelianceLogo = () => (
  <svg viewBox="0 0 100 40">
    <path d="M20,10h60v20H20V10zM25,15l10,5l-10,5V15z" fill="#002366" />
    <text x="40" y="25" fill="white" fontSize="10">
      Reliance
    </text>
  </svg>
);

export const TCSLogo = () => (
  <svg viewBox="0 0 100 40">
    <path d="M10,10h80v20H10V10z" fill="#0066CC" />
    <text x="25" y="25" fill="white" fontSize="14" fontWeight="bold">
      TCS
    </text>
  </svg>
);

export const BhartiAirtelLogo = () => (
  <svg viewBox="0 0 100 40">
    <circle cx="50" cy="20" r="15" fill="#ED1C24" />
    <path
      d="M45,15c5,5,5,10,0,15M55,15c-5,5-5,10,0,15"
      fill="none"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

export const InfosysLogo = () => (
  <svg viewBox="0 0 100 40">
    <rect x="10" y="10" width="80" height="20" fill="#007CC3" />
    <text x="20" y="25" fill="white" fontSize="12" fontWeight="bold">
      Infosys
    </text>
  </svg>
);

export const HCLLogo = () => (
  <svg viewBox="0 0 100 40">
    <path d="M20,10h60v20H20V10z" fill="#00A2E8" />
    <text x="35" y="25" fill="white" fontSize="14" fontWeight="bold">
      HCL
    </text>
  </svg>
);

export const LarsenToubroLogo = () => (
  <svg viewBox="0 0 100 40">
    <circle cx="50" cy="20" r="15" fill="#0033A0" />
    <text x="42" y="25" fill="white" fontSize="14" fontWeight="bold">
      L&T
    </text>
  </svg>
);

export const WiproLogo = () => (
  <svg viewBox="0 0 100 40">
    <path d="M20,15l30,5l30-5v10l-30,5l-30-5V15z" fill="#007DC4" />
  </svg>
);

export const MahindraMahindraLogo = () => (
  <svg viewBox="0 0 100 40">
    <path d="M25,20l25-10l25,10l-25,10L25,20z" fill="#DD1D21" />
    <text x="30" y="35" fill="#DD1D21" fontSize="8" fontWeight="bold">
      MAHINDRA
    </text>
  </svg>
);

export const SunPharmaLogo = () => (
  <svg viewBox="0 0 100 40">
    <circle cx="50" cy="20" r="15" fill="#F7941D" />
    <path d="M45,15l10,5l-10,5V15z" fill="white" />
  </svg>
);

export const ONGCLogo = () => (
  <svg viewBox="0 0 100 40">
    <rect x="20" y="10" width="60" height="20" fill="#164673" />
    <text x="30" y="25" fill="white" fontSize="12" fontWeight="bold">
      ONGC
    </text>
  </svg>
);

export const NTPCLogo = () => (
  <svg viewBox="0 0 100 40">
    <path d="M20,10h60v20H20V10z" fill="#FF6B00" />
    <text x="30" y="25" fill="white" fontSize="12" fontWeight="bold">
      NTPC
    </text>
  </svg>
);

export const TechMahindraLogo = () => (
  <svg viewBox="0 0 100 40">
    <path d="M20,10h60v20H20V10z" fill="#DE2027" />
    <text x="25" y="25" fill="white" fontSize="8" fontWeight="bold">
      TECH MAHINDRA
    </text>
  </svg>
);

export const TataMotorsLogo = () => (
  <svg viewBox="0 0 100 40">
    <circle cx="50" cy="20" r="15" fill="#486AAE" />
    <text x="35" y="25" fill="white" fontSize="10" fontWeight="bold">
      TATA
    </text>
  </svg>
);

export const DrReddysLogo = () => (
  <svg viewBox="0 0 100 40">
    <rect x="20" y="10" width="60" height="20" rx="5" fill="#00539B" />
    <text x="25" y="25" fill="white" fontSize="8" fontWeight="bold">
      Dr. REDDY&apos;S
    </text>
  </svg>
);

export const OracleLogo = () => (
  <svg viewBox="0 0 100 40">
    <rect x="20" y="10" width="60" height="20" fill="#F80000" />
    <text x="30" y="25" fill="white" fontSize="12" fontWeight="bold">
      ORACLE
    </text>
  </svg>
);

export const IBMLogo = () => (
  <svg viewBox="0 0 100 40">
    <path
      d="M20,13h60v4H20v-4zM20,18h60v4H20v-4zM20,23h60v4H20v-4z"
      fill="#1F70C1"
    />
  </svg>
);

export const SalesforceLogo = () => (
  <svg viewBox="0 0 100 40">
    <path
      d="M50,10c8.3,0,15,6.7,15,15s-6.7,15-15,15s-15-6.7-15-15S41.7,10,50,10z"
      fill="#00A1E0"
    />
    <path d="M45,20c2-2,5-2,7,0s2,5,0,7s-5,2-7,0S43,22,45,20z" fill="white" />
  </svg>
);

export const VMwareLogo = () => (
  <svg viewBox="0 0 100 40">
    <path d="M20,10h25l5,20h-5l-5-20zM55,10h25l-5,20h-5l5-20z" fill="#607078" />
  </svg>
);

export const ServiceNowLogo = () => (
  <svg viewBox="0 0 100 40">
    <rect x="20" y="10" width="60" height="20" rx="10" fill="#2BB24C" />
    <text x="25" y="25" fill="white" fontSize="8" fontWeight="bold">
      ServiceNow
    </text>
  </svg>
);

export const AutodeskLogo = () => (
  <svg viewBox="0 0 100 40">
    <path d="M25,10l25,20l25-20H25z" fill="#0696D7" />
  </svg>
);
