"use client"

import { motion } from "framer-motion"
import CtaButton from "@/components/shared/CtaButton"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"
import { formatCurrency } from "@/lib/utils"
import { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation"

export const loanTypes = [
  {
    id: "personal" as const,
    name: "Personal Loans",
    max: 50000,
    term: "6-60 months",
    rate: "9% p.a.",
  },
  {
    id: "business" as const,
    name: "Business Loans",
    max: 500000,
    term: "12-84 months",
    rate: "7.5% p.a.",
  },
  {
    id: "mortgage" as const,
    name: "Mortgage Loans",
    max: 2000000,
    term: "5-30 years",
    rate: "6.5% p.a.",
  },
  {
    id: "emergency" as const,
    name: "Emergency Loans",
    max: 5000,
    term: "3-12 months",
    rate: "12% p.a.",
  },
]

export const loanRates: Record<string, number> = {
  personal: 9,
  business: 7.5,
  mortgage: 6.5,
  emergency: 12,
}

export default function LoanTypes() {
  return (
    <FadeUpSection className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <GoldAccentBar className="mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Loan Types
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {loanTypes.map((loan) => (
            <motion.div key={loan.id} variants={staggerItem}>
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{loan.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-2 text-sm">
                  <p>
                    <span className="text-muted-foreground">Up to </span>
                    <span className="font-semibold">{formatCurrency(loan.max)}</span>
                  </p>
                  <p className="text-muted-foreground">{loan.term}</p>
                  <p>
                    <span className="text-muted-foreground">From </span>
                    <span className="font-semibold text-primary">{loan.rate}</span>
                  </p>
                </CardContent>
                <CardFooter>
                  <CtaButton
                    variant="outline"
                    className="w-full"
                    subject={`Loan Application - ${loan.name}`}
                  >
                    Apply
                  </CtaButton>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </FadeUpSection>
  )
}
