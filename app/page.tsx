import Hero from "@/components/home/Hero"
import Stats from "@/components/home/Stats"
import Services from "@/components/home/Services"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import Testimonials from "@/components/home/Testimonials"
import HomeNewsletter from "@/components/home/CTA"
import { CTA } from "@/components/home/CTA"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <HomeNewsletter />
      <CTA />
    </>
  )
}
