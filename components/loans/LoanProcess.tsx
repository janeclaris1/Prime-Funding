"use client"

import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"

const steps = [
  {
    step: 1,
    title: "Apply online",
    description: "Complete your application in just 5 minutes.",
  },
  {
    step: 2,
    title: "Document review",
    description: "Our team reviews your application within 24-48 hours.",
  },
  {
    step: 3,
    title: "Approval & offer",
    description: "Receive a tailored loan offer with clear terms.",
  },
  {
    step: 4,
    title: "Funds disbursed",
    description: "Approved funds transferred directly to your account.",
  },
]

export default function LoanProcess() {
  return (
    <FadeUpSection className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <GoldAccentBar className="mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Application Process
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-accent-foreground">
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
