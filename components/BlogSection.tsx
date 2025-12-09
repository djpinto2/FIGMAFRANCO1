import Image from 'next/image'

export default function BlogSection() {
  const blogPosts = [
    {
      image: '/images/blog/blog-1.jpg',
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
    },
    {
      image: '/images/blog/blog-2.jpg',
      title: 'What are your safeguarding responsibilities and how can you manage them?',
    },
    {
      image: '/images/blog/blog-3.jpg',
      title: 'Revamping the Membership Model with Triathlon Australia',
    },
  ]

  return (
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
            <div
              key={index}
              className="group relative flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              {/* Content Card - Overlapping */}
              <div className="relative -mt-16 mx-4 bg-white rounded-lg shadow-lg p-6 transition-shadow group-hover:shadow-xl">
                <h3 className="text-base font-semibold text-neutral-mediumGray leading-snug mb-4 line-clamp-3">
                  {post.title}
                </h3>
                <button className="flex items-center gap-2 text-base font-semibold text-brand-green hover:text-green-600 transition-colors">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}