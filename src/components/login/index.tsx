'use client';
import GoogleAnalyticsTemplate from '../Google.Analytics.Template';
import ShineBorder from '../ui/shine-border';
import LoginForm from './LoginForm';
import { useState } from 'react';

export default function Login() {
  const [welcomeMessage, setWelcomeMessage] = useState('');

  return (
    <GoogleAnalyticsTemplate>
      {welcomeMessage && (
        <div className="text-green-600 border border-green-500 bg-green-100 rounded-lg p-3 font-medium text-center">
          {welcomeMessage}
        </div>
      )}

      <div className="relative min-h-[93vh] flex justify-center items-center overflow-hidden mt-8">
        <div
          className="absolute inset-0 w-full h-full opacity-10"
          style={{
            background: `url("https://cdn.svgator.com/images/2024/07/SVG-background-animation.gif")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="flex pb-16 px-2 md:px-4 max-w-[550px] flex-1 relative z-10">
          <ShineBorder
            color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
            className="w-full gap-6 relative z-50 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-border"
          >
            <div className="flex flex-col gap-4 p-6 w-full">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Login</h2>
              <p className="text-foreground/80">Login to access your account and enjoy our services.</p>

              <LoginForm onSuccess={setWelcomeMessage} />
            </div>
          </ShineBorder>
        </div>
      </div>
    </GoogleAnalyticsTemplate>
  );
}
