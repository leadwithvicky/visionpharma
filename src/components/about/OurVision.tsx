import React from 'react'

const OurVision = () => {
  return (
     <section className="bg-white rounded-lg shadow-md max-w-4xl m-auto  border border-border sm:p-6 p-2">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Our Vision{' '}
          </h2>
          <div className="flex items-center space-x-4 text-gray-600">
            {/* <Globe className="w-6 h-6 text-green-600" /> */}
            <p className="leading-relaxed text-foreground">
              To create a global learning ecosystem where education is
              accessible, engaging, and transformative for everyone, anytime,
              anywhere.
            </p>
          </div>
        </section>
  )
}

export default OurVision
