"use client"

import { motion } from "framer-motion"
import GoldAccentBar from "@/components/shared/GoldAccentBar"

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GoldAccentBar className="mb-6" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl font-bold text-primary-foreground md:text-7xl"
        >
          Built on Trust.
          <br />
          Driven by Results.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-primary-foreground/80"
        >
          For over a decade, Prime Funding has been the trusted partner for
          individuals and institutions seeking excellence in financial services.
        </motion.p>
      </div>
    </section>
  )
}
