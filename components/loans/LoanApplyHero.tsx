"use client"

import { motion } from "framer-motion"
import GoldAccentBar from "@/components/shared/GoldAccentBar"

export default function LoanApplyHero() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
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
          className="font-display text-4xl font-bold text-primary-foreground md:text-6xl"
        >
          Apply Now
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-primary-foreground/80"
        >
          Complete your loan application in minutes. Our team reviews submissions
          within 24-48 hours and responds with a tailored offer.
        </motion.p>
      </div>
    </section>
  )
}
