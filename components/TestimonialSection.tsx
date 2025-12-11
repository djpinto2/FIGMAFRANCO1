import Image from 'next/image'

export default function TestimonialSection() {
  const clientLogos = [
    { src: '/images/clients/testimonial-1.svg', width: 13, height: 13 },
    { src: '/images/clients/testimonial-2.svg', width: 13, height: 9 },
    { src: '/images/clients/client-6.svg', width: 18, height: 10 },
    { src: '/images/clients/testimonial-3.svg', width: 16, height: 10 },
    { src: '/images/clients/testimonial-4.svg', width: 14, height: 9 },
    { src: '/images/clients/testimonial-5.svg', width: 17, height: 7 },
  ]

  return (
    <section id="testimonials" className="py-12 bg-neutral-bgLight lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/testimonial-tesla.jpg"
              alt="Tesla"
              width={300}
              height={300}
              className="rounded-lg w-full max-w-[400px] h-auto object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6">
            <p className="text-sm text-neutral-mediumGray leading-relaxed">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>

            <div>
              <div className="text-base font-semibold text-brand-green">
                Tim Smith
              </div>
              <div className="text-xs text-neutral-lightGray">
                British Dragon Boat Racing Association
              </div>
            </div>

            {/* Client Logos */}
            <div className="flex items-center gap-4 flex-wrap overflow-hidden">
              {clientLogos.map((logo, index) => (
                <div key={index} className="grayscale hover:grayscale-0 transition-all flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt=""
                    width={logo.width}
                    height={logo.height}
                    className="h-auto w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}