import type { Metadata } from "next"
import ReviewsHero from "@/components/reviews/ReviewsHero"
import ReviewGrid from "@/components/reviews/ReviewGrid"
import CtaButton from "@/components/shared/CtaButton"
import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read verified client reviews of Prime Funding, covering investments, loans, and financial advisory services.",
}

export default function ReviewsPage() {
  return (
    <>
      <ReviewsHero />
      <ReviewGrid />

      <FadeUpSection className="border-t border-border bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <GoldAccentBar className="mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Ready to join our clients?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Experience the same level of service and results our reviewers describe.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton size="lg" variant="accent" subject="Investment Enquiry">
              Start Investing
            </CtaButton>
            <CtaButton size="lg" variant="outline" subject="Contact Enquiry">
              Contact Us
            </CtaButton>
          </div>
        </div>
      </FadeUpSection>
    </>
  )
}
