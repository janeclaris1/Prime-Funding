import type { Metadata } from "next"
import LoanHero from "@/components/loans/LoanHero"
import LoanTypes from "@/components/loans/LoanTypes"
import LoanCalculator from "@/components/loans/LoanCalculator"
import LoanProcess from "@/components/loans/LoanProcess"
import CtaButton from "@/components/shared/CtaButton"
import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"

export const metadata: Metadata = {
  title: "Loans",
  description:
    "Flexible personal, business, mortgage, and emergency loans with competitive rates from Prime Funding.",
}

export default function LoansPage() {
  return (
    <>
      <LoanHero />
      <LoanTypes />
      <LoanCalculator />
      <LoanProcess />

      <FadeUpSection className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <GoldAccentBar className="mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Ready to apply?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Use the calculator above to estimate repayments, then complete your
            application with our team.
          </p>
          <CtaButton
            size="lg"
            variant="accent"
            className="mt-8"
            subject="Loan Application"
          >
            Apply Now
          </CtaButton>
        </div>
      </FadeUpSection>
    </>
  )
}
