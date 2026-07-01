"use client"

import { motion } from "framer-motion"
import { Award, Heart, Lightbulb, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"
import { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with honesty and transparency in every interaction.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue the highest standards in service and outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously evolve to deliver cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our success, always.",
  },
]

export default function Values() {
  return (
    <FadeUpSection className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <GoldAccentBar className="mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Core Values
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={staggerItem}>
              <Card className="h-full text-center">
                <CardContent className="pt-6">
                  <value.icon className="mx-auto h-10 w-10 text-accent" />
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </FadeUpSection>
  )
}
