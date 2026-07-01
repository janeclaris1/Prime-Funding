import type { Metadata } from "next"
import AboutHero from "@/components/about/AboutHero"
import Mission from "@/components/about/Mission"
import Values from "@/components/about/Values"
import Team from "@/components/about/Team"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Prime Funding, our mission, values, leadership team, and commitment to client success.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Values />
      <Team />
    </>
  )
}
