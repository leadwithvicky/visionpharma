'use client';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { usePathname } from 'next/navigation';
import React from 'react';

const HeaderFooterRemove = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const pathOfTest = ['/weekly-test', '/final-weekly-test'];
  if (pathOfTest.includes(pathname)) {
    return null;
  }
  return (
    <div>
      {' '}
      <Header />
      <div className="flex-1">{children}</div>
      <div className="flex-end w-full">
        <Footer />
      </div>
    </div>
  );
};

export default HeaderFooterRemove;
