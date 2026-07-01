"use client"

import { motion } from "framer-motion"
import { ArrowRight, Briefcase, LineChart, PiggyBank } from "lucide-react"
import CtaLink from "@/components/shared/CtaLink"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"
import { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation"

const services = [
  {
    icon: LineChart,
    title: "Investment Portfolio Management",
    description:
      "Tailored portfolios designed to maximise returns while managing risk across diverse asset classes.",
    subject: "Investment Enquiry",
  },
  {
    icon: PiggyBank,
    title: "Personal & Business Loans",
    description:
      "Flexible financing solutions with competitive rates for individuals and enterprises alike.",
    subject: "Loan Application",
  },
  {
    icon: Briefcase,
    title: "Financial Advisory",
    description:
      "Strategic guidance from seasoned advisors to help you navigate complex financial decisions.",
    subject: "Financial Advisory Enquiry",
  },
]

export default function Services() {
  return (
    <FadeUpSection className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <GoldAccentBar className="mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Comprehensive financial solutions crafted for high-net-worth
            individuals and institutional clients.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={staggerItem}>
              <Card className="group h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-accent" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <CtaLink
                    subject={service.subject}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-accent"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </CtaLink>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </FadeUpSection>
  )
}
