import React from 'react'
import CertificateValidation from './certificateValidation'
import Image from 'next/image'

const CertificateSection = () => {
    return (
        <section className="bg-gradient-to-b max-w-4xl m-auto from-[#ffff] via-gray-100 to-[#ffff] rounded-lg shadow-md bg-transparent  border border-border relative">
            <div className="w-full h-20 absolute top-0">
                <Image   src="/images/vector.webp" alt="vector" width={800} height={80} className="w-full"  loading='lazy'/>
            </div>
            <h2 className="relative lg:text-2xl text-xl font-bold text-foreground sm:p-6 p-2 ml-5 mt-5  text-black">
                {`We are Legally Certified`.toUpperCase()}
            </h2>
            <div className="pb-16 sm:p-6 p-2">
                <CertificateValidation />
            </div>
        </section>
    )
}

export default CertificateSection
