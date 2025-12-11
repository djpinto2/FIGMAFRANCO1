'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useRegister } from '@/contexts/RegisterContext'

interface Slide {
  title: string
  highlightedText?: string
  description: string
  buttonText: string
  buttonLink: string
  image: string
  imageAlt: string
}

export default function Hero() {
  const slides: Slide[] = [
    {
      title: 'Lessons and insights',
      highlightedText: 'from 8 years',
      description: 'Where to grow your business as a photographer: site or social media?',
      buttonText: 'Register',
      buttonLink: '#cta',
      image: '/images/illustrations/hero-illustration.svg',
      imageAlt: 'People working with analytics and data',
    },
    {
      title: 'Manage your entire community',
      highlightedText: 'in a single system',
      description: 'Our membership management software provides full automation of membership renewals and payments',
      buttonText: 'Learn More',
      buttonLink: '#community',
      image: '/images/illustrations/mobile-login.svg',
      imageAlt: 'Mobile login interface',
    },
    {
      title: 'The unseen of spending',
      highlightedText: 'three years at Pixelgrade',
      description: 'Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.',
      buttonText: 'Learn More',
      buttonLink: '#features',
      image: '/images/illustrations/mobile-design.svg',
      imageAlt: 'Mobile design interface',
    },
    {
      title: 'How to design your site footer',
      highlightedText: 'like we did',
      description: 'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu.',
      buttonText: 'Learn More',
      buttonLink: '#design',
      image: '/images/illustrations/hero-illustration.svg',
      imageAlt: 'Design process illustration',
    },
    {
      title: 'Pellentesque suscipit fringilla',
      highlightedText: 'libero eu',
      description: 'Get a demo and see how we can help you manage your community more effectively.',
      buttonText: 'Get a Demo',
      buttonLink: '#cta',
      image: '/images/illustrations/mobile-login.svg',
      imageAlt: 'Demo request illustration',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const { openModal } = useRegister()

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isPaused, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section 
      id="home" 
      className="relative bg-neutral-bgLight overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 lg:px-8">
        <div className="relative">
          {/* Slides Container */}
          <div className="relative min-h-[400px] lg:min-h-[500px]">
            <AnimatePresence mode="wait">
              {slides.map((slide, index) => (
                index === currentSlide && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 z-10"
                  >
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                  {/* Left Content */}
                  <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-semibold leading-tight text-neutral-darkGray lg:text-[44px] lg:leading-[53px]">
                      {slide.title}{' '}
                      {slide.highlightedText && (
                        <span className="text-brand-green">{slide.highlightedText}</span>
                      )}
                    </h1>
                    <p className="text-base text-neutral-mediumGray">
                      {slide.description}
                    </p>
                    <div>
                      {slide.buttonText === 'Register' ? (
                        <button
                          onClick={openModal}
                          className="inline-block rounded-[3px] bg-brand-green px-8 py-3 text-sm font-medium text-white transition-all hover:bg-green-600"
                        >
                          {slide.buttonText}
                        </button>
                      ) : (
                        <a 
                          href={slide.buttonLink}
                          className="inline-block rounded-[3px] bg-brand-green px-8 py-3 text-sm font-medium text-white transition-all hover:bg-green-600"
                        >
                          {slide.buttonText}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Illustration */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[400px] h-[283px]">
                      <Image
                        src={slide.image}
                        alt={slide.imageAlt}
                        fill
                        className="object-contain"
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                  </div>
                </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all lg:left-0"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-neutral-darkGray"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all lg:right-0"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-neutral-darkGray"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-12 relative z-20">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-brand-green' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
