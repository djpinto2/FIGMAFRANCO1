import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ClientsSection from '@/components/ClientsSection'
import CommunitySection from '@/components/CommunitySection'
import UnlockSection from '@/components/UnlockSection'
import AchievementsSection from '@/components/AchievementsSection'
import TestimonialSection from '@/components/TestimonialSection'
import BlogSection from '@/components/BlogSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <ClientsSection />
      <CommunitySection />
      <UnlockSection
        id="features"
        imageSrc="/images/illustrations/mobile-login.svg"
        imageAlt="Person with mobile phone showing login interface"
        title="The unseen of spending three years at Pixelgrade"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
      />
      <AchievementsSection />
      <UnlockSection
        id="design"
        imageSrc="/images/illustrations/mobile-design.svg"
        imageAlt="Person with mobile phone showing design interface"
        title="How to design your site footer like we did"
        description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
        reverse
      />
      <TestimonialSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  )
}