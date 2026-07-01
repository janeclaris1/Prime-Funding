"use client"

import GoldAccentBar from "@/components/shared/GoldAccentBar"
import { motion } from "framer-motion"

export default function InvestmentHero() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/stock-options.png')",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GoldAccentBar className="mb-6" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl font-bold text-primary-foreground md:text-7xl"
        >
          Invest with Confidence,
          <br />
          Grow with Purpose
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-primary-foreground/80"
        >
          Structured investment portfolios designed to deliver consistent returns
          while protecting your capital.
        </motion.p>
      </div>
    </section>
  )
}
