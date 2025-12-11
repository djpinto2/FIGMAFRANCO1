'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useImagePath } from '@/hooks/useImagePath'

// Component for blog card image to use the hook
function BlogCardImage({ imagePath, alt }: { imagePath: string; alt: string }) {
  const correctedPath = useImagePath(imagePath)
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={correctedPath}
      alt={alt}
      className="w-full h-full object-cover transition-transform group-hover:scale-105"
      loading="lazy"
    />
  )
}

interface BlogPost {
  image: string
  title: string
  content: string
  author: string
  date: string
  category: string
}

export default function BlogSection() {
  const blogPosts: BlogPost[] = [
    {
      image: '/images/blog/blog-1.jpg',
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
      content: 'OneRen, a leading community organization, partnered with us to revolutionize their safeguarding processes. Through our comprehensive membership management platform, we helped them implement automated workflows that ensure compliance and protect vulnerable members. The new system reduced administrative time by 60% while improving safety protocols across all community programs. Our collaborative approach included extensive training sessions and ongoing support to ensure seamless adoption.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      category: 'Case Study',
    },
    {
      image: '/images/blog/blog-2.jpg',
      title: 'What are your safeguarding responsibilities and how can you manage them?',
      content: 'Safeguarding is a critical responsibility for any organization working with vulnerable populations. This comprehensive guide covers the essential elements of effective safeguarding management, including risk assessment, staff training, incident reporting, and compliance monitoring. We explore best practices from leading organizations and provide actionable strategies for implementing robust safeguarding frameworks. Learn how technology can streamline these processes while maintaining the highest standards of care and protection.',
      author: 'Michael Chen',
      date: 'February 28, 2024',
      category: 'Guide',
    },
    {
      image: '/images/blog/blog-3.jpg',
      title: 'Revamping the Membership Model with Triathlon Australia',
      content: 'Triathlon Australia transformed their membership experience through a complete digital overhaul. The new model focuses on personalized engagement, flexible membership tiers, and data-driven insights. By leveraging our platform\'s advanced analytics, they increased member retention by 35% and improved revenue streams through targeted offerings. The revamped system provides members with seamless access to events, training resources, and community features, creating a more connected and engaged triathlon community.',
      author: 'Emma Williams',
      date: 'January 10, 2024',
      category: 'Success Story',
    },
  ]

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  
  // Get image path for modal using the hook
  const modalImagePath = useImagePath(selectedPost?.image || '')

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPost(null)
      }
    }

    if (selectedPost) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedPost])

  const openModal = (post: BlogPost) => {
    setSelectedPost(post)
  }

  const closeModal = () => {
    setSelectedPost(null)
  }

  return (
    <>
      <section id="blog" className="py-16 bg-white lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-neutral-darkGray mb-4 lg:text-[36px]">
              Caring is the new marketing
            </h2>
            <p className="text-sm text-neutral-mediumGray leading-relaxed">
              The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.​
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col cursor-pointer"
                onClick={() => openModal(post)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden rounded-t-lg bg-gray-200">
                  {post.image && (
                  <BlogCardImage imagePath={post.image} alt={post.title} />
                  )}
                </div>

                {/* Content Card - Overlapping */}
                <div className="relative -mt-16 mx-4 bg-white rounded-lg shadow-lg p-6 transition-shadow group-hover:shadow-xl">
                  <h3 className="text-base font-semibold text-neutral-mediumGray leading-snug mb-4 line-clamp-3">
                    {post.title}
                  </h3>
                  <button
                    className="inline-flex items-center gap-2 text-base font-semibold text-brand-green hover:text-green-600 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(post)
                    }}
                  >
                    Readmore
                    <Image
                      src="/images/icons/arrow-right-green.svg"
                      alt=""
                      width={5}
                      height={3}
                      className="h-auto w-auto"
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close modal"
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
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Modal Content */}
            <div className="flex flex-col">
              {/* Image */}
              <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-t-lg bg-gray-200">
                {selectedPost.image && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={modalImagePath}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1">
                {/* Category and Date */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-neutral-mediumGray">
                  <span className="px-3 py-1 rounded-full bg-brand-green/10 text-brand-green font-medium">
                    {selectedPost.category}
                  </span>
                  <span>{selectedPost.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold text-neutral-darkGray mb-4 leading-tight">
                  {selectedPost.title}
                </h2>

                {/* Author */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <p className="text-sm text-neutral-mediumGray">
                    By <span className="font-semibold text-neutral-darkGray">{selectedPost.author}</span>
                  </p>
                </div>

                {/* Content */}
                <div className="prose max-w-none">
                  <p className="text-base text-neutral-mediumGray leading-relaxed">
                    {selectedPost.content}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
