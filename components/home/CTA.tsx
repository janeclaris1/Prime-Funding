"use client"

import { ArrowRight } from "lucide-react"
import CtaButton from "@/components/shared/CtaButton"
import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"
import NewsletterSignup from "@/components/home/NewsletterSignup"

export default function HomeNewsletter() {
  return (
    <section className="border-y border-border bg-primary py-16">
      <FadeUpSection className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-primary-foreground md:text-4xl">
          Stay ahead of the markets
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Get exclusive insights, market updates, and financial tips delivered
          to your inbox.
        </p>
        <div className="mt-8">
          <NewsletterSignup />
        </div>
      </FadeUpSection>
    </section>
  )
}

export function CTA() {
  return (
    <section className="bg-foreground py-24 dark:bg-card">
      <FadeUpSection className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <GoldAccentBar className="mx-auto mb-6" />
        <h2 className="font-display text-3xl font-semibold text-background dark:text-foreground md:text-4xl">
          Ready to grow your wealth?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-background/70 dark:text-muted-foreground">
          Take the first step toward financial excellence with Prime Funding.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaButton size="lg" variant="accent" subject="Investment Enquiry">
            Start Investing
            <ArrowRight className="h-4 w-4" />
          </CtaButton>
          <CtaButton
            size="lg"
            variant="outline"
            subject="Loan Application"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            Apply for a Loan
          </CtaButton>
        </div>
      </FadeUpSection>
    </section>
  )
}
