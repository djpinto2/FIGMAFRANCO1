'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0px_4px_8px_rgba(171,190,209,0.4)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2"
          aria-label="Nexcent Home"
        >
          <Image 
            src="/images/logo.svg" 
            alt="Nexcent" 
            width={108} 
            height={17}
            className="h-[17px] w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <Link 
            href="#home" 
            className="text-sm font-medium text-neutral-darkGray transition-colors hover:text-brand-green"
          >
            Home
          </Link>
          <Link 
            href="#features" 
            className="text-sm font-medium text-neutral-darkGray transition-colors hover:text-brand-green"
          >
            Features
          </Link>
          <Link 
            href="#community" 
            className="text-sm font-medium text-neutral-darkGray transition-colors hover:text-brand-green"
          >
            Community
          </Link>
          <Link 
            href="#blog" 
            className="text-sm font-medium text-neutral-darkGray transition-colors hover:text-brand-green"
          >
            Blog
          </Link>
          <Link 
            href="#pricing" 
            className="text-sm font-medium text-neutral-darkGray transition-colors hover:text-brand-green"
          >
            Pricing
          </Link>
          <button 
            className="flex items-center gap-2 rounded-[3px] bg-brand-green px-6 py-2 text-sm font-medium text-white transition-all hover:bg-green-600"
            aria-label="Register Now"
          >
            Register Now
            <Image 
              src="/images/icons/arrow-right-white.svg" 
              alt="" 
              width={9} 
              height={5}
              className="h-[5px] w-auto"
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-neutral-darkGray"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            <Link 
              href="#home" 
              className="block text-sm font-medium text-neutral-darkGray hover:text-brand-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#features" 
              className="block text-sm font-medium text-neutral-darkGray hover:text-brand-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#community" 
              className="block text-sm font-medium text-neutral-darkGray hover:text-brand-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link 
              href="#blog" 
              className="block text-sm font-medium text-neutral-darkGray hover:text-brand-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="#pricing" 
              className="block text-sm font-medium text-neutral-darkGray hover:text-brand-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <button 
              className="w-full flex items-center justify-center gap-2 rounded-[3px] bg-brand-green px-6 py-2 text-sm font-medium text-white"
            >
              Register Now
              <Image 
                src="/images/icons/arrow-right-white.svg" 
                alt="" 
                width={9} 
                height={5}
                className="h-[5px] w-auto"
              />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}