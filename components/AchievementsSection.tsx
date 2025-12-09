import Image from 'next/image'

export default function AchievementsSection() {
  const stats = [
    {
      icon: '/images/icons/members-icon.svg',
      number: '2,245,341',
      label: 'Members',
    },
    {
      icon: '/images/icons/clubs-stat-icon.svg',
      number: '46,328',
      label: 'Clubs',
    },
    {
      icon: '/images/icons/bookings-icon.svg',
      number: '828,867',
      label: 'Event Bookings',
    },
    {
      icon: '/images/icons/payments-icon.svg',
      number: '1,926,436',
      label: 'Payments',
    },
  ]

  return (
    <section className="py-12 bg-neutral-bgLight lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-neutral-darkGray leading-tight lg:text-[36px] lg:leading-[44px]">
              Helping a local <span className="text-brand-green">business reinvent itself</span>
            </h2>
            <p className="text-sm text-neutral-charcoal">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
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
                    {stat.number}
                  </div>
                  <div className="text-xs text-neutral-mediumGray">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}