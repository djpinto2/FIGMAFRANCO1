import Image from 'next/image'

interface UnlockSectionProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  reverse?: boolean
}

export default function UnlockSection({
  imageSrc,
  imageAlt,
  title,
  description,
  reverse = false,
}: UnlockSectionProps) {
  return (
    <section className="py-12 bg-white lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          <div className={`flex justify-center ${reverse ? 'lg:order-2' : ''}`}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={300}
              height={300}
              className="w-full max-w-[400px] h-auto"
            />
          </div>

          {/* Content */}
          <div className={`flex flex-col gap-4 ${reverse ? 'lg:order-1' : ''}`}>
            <h2 className="text-2xl font-semibold text-neutral-darkGray leading-tight lg:text-[36px] lg:leading-[44px]">
              {title}
            </h2>
            <p className="text-sm text-neutral-mediumGray leading-relaxed">
              {description}
            </p>
            <div>
              <button className="flex items-center gap-2 text-sm font-medium text-brand-green hover:text-green-600 transition-colors">
                Learn More
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
        </div>
      </div>
    </section>
  )
}