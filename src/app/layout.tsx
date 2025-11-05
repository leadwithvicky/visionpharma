import type { Metadata } from 'next';
import { Inter, Roboto, Urbanist } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from 'sonner';
import Script from 'next/script'; // Import Script for Google Analytics
import { Suspense } from 'react';
import FullScreenLoader from '@/components/loader/fullScreenLoader';
import Providers from '@/Redux/providers';
import AuthProvider from '@/Redux/authProvider';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: 'VisionPharma | Job-Ready Programs in Pharmacy, Management',
  description: 'VisionTech offers industry-certified job-ready programs in Engineering, Pharmacy, Agriculture, Management, and Emerging Technologies. Learn practical skills, get hands-on experience, and build your career faster with VisionTech.',
  icons: '/logo-small.webp',
  metadataBase: new URL('https://visiontech.world'),
  openGraph: {
    title: 'VisionTech | Job-Ready Programs in Engineering, Agriculture, Pharmacy, Management & Tech',
    description: 'VisionTech offers industry-certified job-ready programs in Engineering, Pharmacy, Agriculture, Management, and Emerging Technologies. Learn practical skills, get hands-on experience, and build your career faster with VisionTech.',
    url: 'https://visiontech.world/',
    siteName: 'VisionTech',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'VisionTech Online Education Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VisionTech – Learn B.Tech, MBA, MCA & Pharmacy Courses Online',
    description: 'Join VisionTech to learn B.Tech, MBA, MCA, and Pharmacy online. Gain real-world skills, mentorship, and 100% certification guarantee to build your dream career.',
    images: ['/images/og-image.webp'],
  },
  alternates: {
    canonical: 'https://visiontech.world/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* <!-- Trustpilot script --> */}
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
        {/* <!-- End Trustpilot script --> */}
      </head>
      <body className={`${urbanist.className} `}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Providers>
          <AuthProvider>
            <Suspense fallback={<FullScreenLoader />}>
              <div className="flex flex-col min-h-[100vh] ">
                <Header />
                <div className="flex-1">{children}</div>
                <div className="flex-end w-full">
                  <Footer />
                </div>
                <Toaster />
              </div>
            </Suspense>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
