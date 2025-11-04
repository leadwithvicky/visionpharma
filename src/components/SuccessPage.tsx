'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const SuccessPage = () => {
  const [confetti, setConfetti] = useState<((options?: any) => void) | null>(
    null
  );

  useEffect(() => {
    // Dynamically import confetti to avoid SSR issues
    import('canvas-confetti').then((confettiModule) => {
      setConfetti(() => confettiModule.default);
    });
  }, []);

  useEffect(() => {
    if (confetti) {
      const duration = 1000;
      const end = Date.now() + duration;

      const frame = () => {
        if (confetti) {
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.8 },
            colors: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107'],
          });

          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.8 },
            colors: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107'],
          });
        }

        if (Date.now() < end) {
          setTimeout(frame, 16); // Use setTimeout as fallback to keep animation smooth
        }
      };

      frame();
    }
  }, [confetti]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="space-y-4">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Submission Successful!
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-gray-600">
            Thanks for Joining. We will get back to you soon.
          </p>

          <div className="space-y-3">
            <Button
              className="w-full bg-primary hover:bg-primary/80 text-white"
              onClick={() => (window.location.href = '/')}
            >
              Return to Home
            </Button>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => (window.location.href = '/')}
            >
              Go to Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuccessPage;
