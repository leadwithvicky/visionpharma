'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'
import MentorsCart from './MentorsCart'
import montorData from "./mentors.json"
import Marquee from 'react-fast-marquee'
import { FaUserGraduate } from 'react-icons/fa'

const MentorSlider = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [startScroll, setStartScroll] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768) // md breakpoint
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setStartScroll(true)
      }, 2000) // 2 seconds delay

      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <div className='py-5 drop-shadow-2xl' ref={ref}>
      {/* Header section with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center flex flex-col justify-center items-center mb-12"
      >
        <div className="flex items-center gap-1 mb-4 px-4 py-2 bg-primary/5 rounded-full">
          <FaUserGraduate className="h-8 w-8 text-visionBlue" />
          <span className="sm:text-lg text-visionBlue font-semibold">
            Expert Mentors
          </span>
        </div>
        <div className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-foreground">
          Learn from Industry Experts
        </div>
      </motion.div>
      {startScroll && (
        <>
          {/* For large screens: single marquee */}
          {!isSmallScreen && (
            <Marquee
              gradient={false}
              speed={50}
              pauseOnHover
              aria-label="Mentors carousel"
            >
              {montorData.map((mentor, index) => (
                <div key={index} className='px-2 mx-1'>
                  <MentorsCart mentor={mentor} />
                </div>
              ))}
            </Marquee>
          )}

          {/* For small screens: two marquees, one forward, one reverse */}
          {isSmallScreen && (
            <div className='flex flex-col gap-4'>
              {/* Forward slider */}
              <Marquee
                gradient={false}
                speed={50}
                direction="left"
                pauseOnHover
                aria-label="Mentors carousel forward"
              >
                {montorData.map((mentor, index) => (
                  <div key={`forward-${index}`} className='px-2 mx-1'>
                    <MentorsCart mentor={mentor} />
                  </div>
                ))}
              </Marquee>

              {/* Reverse slider */}
              <Marquee
                gradient={false}
                speed={50}
                direction="right"
                pauseOnHover
                aria-label="Mentors carousel reverse"
              >
                {montorData.map((mentor, index) => (
                  <div key={`reverse-${index}`} className='px-2 mx-1'>
                    <MentorsCart mentor={mentor} />
                  </div>
                ))}
              </Marquee>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default MentorSlider
