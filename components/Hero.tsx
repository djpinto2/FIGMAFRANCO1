'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  return (
    <section id="home" className="relative bg-neutral-bgLight">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-semibold leading-tight text-neutral-darkGray lg:text-[44px] lg:leading-[53px]">
              Lessons and insights{' '}
              <span className="text-brand-green">from 8 years</span>
            </h1>
            <p className="text-base text-neutral-mediumGray">
              Where to grow your business as a photographer: site or social media?
            </p>
            <div>
              <button className="rounded-[3px] bg-brand-green px-8 py-3 text-sm font-medium text-white transition-all hover:bg-green-600">
                Register
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/illustrations/hero-illustration.svg"
              alt="People working with analytics and data"
              width={272}
              height={283}
              className="w-full max-w-[400px] h-auto"
            />
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'w-8 bg-brand-green' 
                  : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}