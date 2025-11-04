// app/signup/layout.tsx
import { SignUpProviders } from '@/components/signup/signupProviders';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign Up | Visiontech',
    description: 'Create a new account as a student',
};

export default function SignupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <SignUpProviders>
                <main className="w-full  p-6 bg-white rounded-2xl shadow-lg">
                    {children}
                </main>
            </SignUpProviders>
        </div>
    );
}
