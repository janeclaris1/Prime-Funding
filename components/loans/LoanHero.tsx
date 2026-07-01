"use client"

import { motion } from "framer-motion"
import GoldAccentBar from "@/components/shared/GoldAccentBar"

export default function LoanHero() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/real-estate.png')",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GoldAccentBar className="mb-6" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl md:text-7xl"
        >
          Finance What Matters Most
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-primary-foreground/80"
        >
          Flexible loan solutions with competitive rates, fast approvals, and
          transparent terms for every stage of life.
        </motion.p>
      </div>
    </section>
  )
}
