import React from 'react'
import {
    GraduationCap,
    Users,
    Award,
    Brain,
    MonitorSmartphone,
} from 'lucide-react';
const offerings = [
    {
        icon: <MonitorSmartphone className="w-5 h-5 text-green-600" />,
        title: 'Interactive Online Programs',
        description: 'AI, Data Science, Medical Coding, Business, and more',
    },
    {
        icon: <Users className="w-5 h-5 text-green-600" />,
        title: 'Personalized Learning Paths',
        description: 'Adaptive learning experiences tailored to individual needs',
    },
    {
        icon: <GraduationCap className="w-5 h-5 text-green-600" />,
        title: 'Live Classes & Expert Mentorship',
        description: 'Hands-on training from industry professionals',
    },
    {
        icon: <Award className="w-5 h-5 text-green-600" />,
        title: 'Certification Programs',
        description: 'Recognized credentials to boost your career',
    },
    {
        icon: <Brain className="w-5 h-5 text-green-600" />,
        title: 'AI-Powered Learning',
        description: 'Smart analytics for better progress tracking',
    },
];

const OurOffers = () => {
    return (
        <section className="bg-white rounded-lg shadow-md max-w-4xl m-auto  border border-border sm:p-6 p-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">
                What We Offer
            </h2>
            <div className="space-y-4">
                {offerings.map((offering, index) => (
                    <div
                        key={index}
                        className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                        <div className="flex-shrink-0 mt-1">{offering.icon}</div>
                        <div className="ml-4">
                            <h3 className="font-semibold text-foreground">
                                {offering.title}
                            </h3>
                            <p>{ }</p>
                            <p className="text-foreground mt-1">{offering.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurOffers
