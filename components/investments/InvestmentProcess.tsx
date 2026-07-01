"use client"

import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"

const steps = [
  { step: 1, title: "Register & KYC", description: "Complete identity verification securely online." },
  { step: 2, title: "Choose plan", description: "Select the portfolio that matches your goals." },
  { step: 3, title: "Fund portfolio", description: "Transfer funds via bank transfer or wire." },
  { step: 4, title: "Track & earn", description: "Monitor performance and receive returns." },
]

export default function InvestmentProcess() {
  return (
    <FadeUpSection className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <GoldAccentBar className="mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            How It Works
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="relative text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
                {item.step}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FadeUpSection>
  )
}
