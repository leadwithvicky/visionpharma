import VerifyCertificate from '@/components/verify'
import React from 'react'

export async function generateMetadata({ params }: { params: { certificateId: string } }) {
  return {
    title: 'Verified Certificate',
    description: 'I have successfully completed my certification from VisionTech! 🎉',
    openGraph: {
      title: 'Verified Certificate',
      description: 'I have successfully completed my certification from VisionTech! 🎉',
      images: [{
        url: 'https://visiontech.world/visiontech-logo-no-background.webp',
        width: 1200,
        height: 630,
        alt: 'VisionTech Logo',
      }],
      type: 'website',
      siteName: 'VisionTech',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Verified Certificate',
      description: 'I have successfully completed my certification from VisionTech! 🎉',
      images: ['https://visiontech.world/visiontech-logo-no-background.webp'],
    },
  }
}

const page = () => {
  return (
    <div>
      <VerifyCertificate />
    </div>
  )
}

export default page
