import { Loader } from '@/components/loader/loader';
import React from 'react';

function FullScreenLoader() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Loader />;
      </div>
    </div>
  );
}

export default FullScreenLoader;
