export default function CTASection() {
  return (
    <section id="cta" className="py-8 bg-neutral-bgLight">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-neutral-charcoal leading-tight lg:text-[48px] lg:leading-[60px]">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <div className="mt-8">
          <a 
            href="#home"
            className="inline-block rounded-[3px] bg-brand-green px-8 py-3 text-sm font-medium text-white transition-all hover:bg-green-600"
          >
            Get a Demo
          </a>
        </div>
      </div>
    </section>
  )
}