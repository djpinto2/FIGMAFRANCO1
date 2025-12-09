import Image from 'next/image'

export default function ClientsSection() {
  const clients = [
    { src: '/images/clients/client-1.svg', alt: 'Client 1', width: 28, height: 28 },
    { src: '/images/clients/client-2.svg', alt: 'Client 2', width: 28, height: 19 },
    { src: '/images/clients/client-6.svg', alt: 'Client 3', width: 38, height: 21 },
    { src: '/images/clients/client-3.svg', alt: 'Client 4', width: 33, height: 20 },
    { src: '/images/clients/client-4.svg', alt: 'Client 5', width: 29, height: 19 },
    { src: '/images/clients/client-5.svg', alt: 'Client 6', width: 36, height: 14 },
    { src: '/images/clients/client-7.svg', alt: 'Client 7', width: 38, height: 21 },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-neutral-darkGray lg:text-[25px]">
            Our Clients
          </h2>
          <p className="mt-2 text-sm text-neutral-mediumGray">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <Image
                src={client.src}
                alt={client.alt}
                width={client.width}
                height={client.height}
                className="h-auto w-auto max-h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}