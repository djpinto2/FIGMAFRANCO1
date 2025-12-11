'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Stat {
  icon: string
  targetNumber: number
  label: string
}

export default function AchievementsSection() {
  const stats: Stat[] = useMemo(() => [
    {
      icon: '/images/icons/members-icon.svg',
      targetNumber: 2245341,
      label: 'Members',
    },
    {
      icon: '/images/icons/clubs-stat-icon.svg',
      targetNumber: 46328,
      label: 'Clubs',
    },
    {
      icon: '/images/icons/bookings-icon.svg',
      targetNumber: 828867,
      label: 'Event Bookings',
    },
    {
      icon: '/images/icons/payments-icon.svg',
      targetNumber: 1926436,
      label: 'Payments',
    },
  ], [])

  const [displayNumbers, setDisplayNumbers] = useState<number[]>(
    stats.map(() => 0)
  )
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US')
  }

  // Animate number from start to end
  const animateNumber = (
    start: number,
    end: number,
    duration: number,
    callback: (value: number) => void
  ) => {
    const startTime = performance.now()
    const difference = end - start

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(start + difference * easeOutQuart)

      callback(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  useEffect(() => {
    const currentRef = sectionRef.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated && !isAnimating) {
            setHasAnimated(true)
            setIsAnimating(true)
            setDisplayNumbers(stats.map(() => 0)) // Reset to 0

            // Animate all numbers simultaneously
            stats.forEach((stat, index) => {
              animateNumber(0, stat.targetNumber, 2000, (value) => {
                setDisplayNumbers((prev) => {
                  const newNumbers = [...prev]
                  newNumbers[index] = value
                  return newNumbers
                })
              })
            })

            // Reset animation flag after animation completes
            setTimeout(() => {
              setIsAnimating(false)
            }, 2000)
          } else if (!entry.isIntersecting && hasAnimated) {
            // Reset when section leaves viewport so it can animate again when scrolled back
            setHasAnimated(false)
            setDisplayNumbers(stats.map(() => 0))
          }
        })
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible (more sensitive)
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before the section is fully visible
      }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [hasAnimated, isAnimating, stats])

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="py-12 bg-neutral-bgLight lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-neutral-darkGray leading-tight lg:text-[36px] lg:leading-[44px]">
              Helping a local{' '}
              <span className="text-brand-green">business reinvent itself</span>
            </h2>
            <p className="text-sm text-neutral-charcoal">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={stat.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="h-auto w-auto"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold text-neutral-darkGray lg:text-[28px]">
                    {formatNumber(displayNumbers[index])}
                  </div>
                  <div className="text-xs text-neutral-mediumGray">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}