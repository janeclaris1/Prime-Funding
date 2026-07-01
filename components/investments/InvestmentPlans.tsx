"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import CtaButton from "@/components/shared/CtaButton"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"
import { investmentPlans } from "@/lib/investment-plans"
import { formatCurrency } from "@/lib/utils"
import { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation"

export default function InvestmentPlans() {
  return (
    <FadeUpSection className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <GoldAccentBar className="mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Investment Plans
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Choose the portfolio or sector that aligns with your investment
            goals and capital commitment.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {investmentPlans.map((plan) => (
            <motion.div key={plan.id} variants={staggerItem}>
              <Card
                className={`relative h-full ${
                  plan.popular
                    ? "border-accent shadow-xl shadow-accent/10 lg:scale-105"
                    : ""
                }`}
              >
                {plan.popular && (
                  <Badge
                    variant="accent"
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                  >
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>
                    Min {formatCurrency(plan.min)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-display text-2xl font-bold text-primary">
                      {plan.returns}
                    </p>
                    <p className="text-sm text-muted-foreground">{plan.term}</p>
                  </div>
                  <p className="text-sm font-medium">{plan.support}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <CtaButton
                    className="w-full"
                    variant={plan.popular ? "accent" : "default"}
                    subject={`Investment Enquiry - ${plan.name}`}
                  >
                    Get Started
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
