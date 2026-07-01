import type { Metadata } from "next"
import InvestmentHero from "@/components/investments/InvestmentHero"
import InvestmentPlans from "@/components/investments/InvestmentPlans"
import InvestmentProcess from "@/components/investments/InvestmentProcess"
import CtaButton from "@/components/shared/CtaButton"
import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"

export const metadata: Metadata = {
  title: "Investments",
  description:
    "Explore Prime Funding investment portfolios with competitive returns and expert management.",
}

export default function InvestmentsPage() {
  return (
    <>
      <InvestmentHero />
      <InvestmentPlans />
      <InvestmentProcess />

      <FadeUpSection className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <GoldAccentBar className="mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Ready to invest?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Compare our plans above, then start your application with a dedicated
            advisor review.
          </p>
          <CtaButton
            size="lg"
            variant="accent"
            className="mt-8"
            subject="Investment Enquiry"
          >
            Start Your Investment Journey
          </CtaButton>
        </div>
      </FadeUpSection>

      <section className="border-t border-border bg-muted py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <strong>Risk Disclosure:</strong> All investments carry risk, including
            the potential loss of principal. Past performance is not indicative of
            future results. Returns shown are target ranges and are not guaranteed.
            Prime Funding is licensed and regulated. Please read all product
            disclosure statements before investing.
          </p>
        </div>
      </section>
    </>
  )
}
