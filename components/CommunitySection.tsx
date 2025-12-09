import Image from 'next/image'

export default function CommunitySection() {
  const features = [
    {
      icon: '/images/icons/membership-icon.svg',
      title: 'Membership Organisations',
      description: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      icon: '/images/icons/associations-icon.svg',
      title: 'National Associations',
      description: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      icon: '/images/icons/clubs-icon.svg',
      title: 'Clubs And Groups',
      description: 'Our membership management software provides full automation of membership renewals and payments',
    },
  ]

  return (
    <section id="community" className="py-16 bg-white lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-neutral-darkGray leading-tight lg:text-[25px] lg:leading-[31px] max-w-xl mx-auto">
            Manage your entire community in a single system
          </h2>
          <p className="mt-2 text-sm text-neutral-mediumGray">
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt=""
                  width={45}
                  height={39}
                  className="h-auto w-auto"
                />
              </div>
              <h3 className="text-lg font-bold text-neutral-darkGray mb-2 lg:text-[19px] lg:leading-[25px]">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-mediumGray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}