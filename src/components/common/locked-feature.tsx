import React from 'react';
import { LockIcon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface LockedFeatureProps {
  featureName: string;
}

export function LockedFeature({ featureName }: LockedFeatureProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] px-4">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="bg-primary/10 p-3 rounded-full mb-4">
          <LockIcon className="h-10 w-10 text-primary" />
        </div>

        <h2 className="text-2xl font-bold mb-2">Feature Locked</h2>

        <p className="text-gray-600 mb-6">
          The <span className="font-medium text-primary">{featureName}</span>{' '}
          feature is not yet available for your account. This feature is
          currently under development and will be available soon.
        </p>

        <Button asChild className="flex items-center gap-2">
          <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Dashboard</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
