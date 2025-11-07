import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const OurPartners = () => {
    const partners = [
        {
            name: 'derive',
            logo: '/images/partners/derive.webp',
            link: ' https://www.derivesoftech.com',
        },
        {
            name: 'ransh',
            logo: '/images/partners/ransh.webp',
            link: ' https://ranshpharma.in',
        },
        {
            name: 'arpad',
            logo: '/images/partners/arpad.avif',
            link: 'https://www.arpad.in',
        },
        {
            name: 'Clinicamapletree Analytics',
            logo: '/images/partners/clinica-mapletree.webp',
            link: 'http://clinicamapletreecro.com/',
        },
        {
            name: 'BRCWeb',
            logo: '/images/partners/brc.webp',
            link: 'https://brcwebhelper.in/',
        },
        {
            name: 'Trendy Vibez',
            logo: '/images/partners/trendy_vibes.webp',
            link: 'https://www.trendyvibez.in/',
        },
    ];
    return (
        <section className="bg-transparent max-w-4xl p-2 sm:p-6 mx-auto  rounded-lg shadow-md  border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
                Our Partnered Companies
            </h2>

            <div className="flex  justify-between flex-wrap">
                {partners.map((partner) => (
                    <div key={partner.name}>
                        <div className="flex flex-col lg:px-0 px-5 justify-center items-center sm:p-6 p-2 ">
                            <div className="relative aspect-square w-[100px] mx-auto">
                                <Image
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className="object-contain"
                                    fill
                                    priority
                                />
                            </div>

                            <Link
                                href={partner.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#13AB82] font-semibold hover:underline"
                            >
                                Know More
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default OurPartners
