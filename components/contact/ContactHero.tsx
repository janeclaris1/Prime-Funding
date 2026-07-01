"use client"

import { motion } from "framer-motion"
import GoldAccentBar from "@/components/shared/GoldAccentBar"

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GoldAccentBar className="mb-6" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-xl text-lg text-primary-foreground/80"
        >
          Our team is ready to help you with investments, loans, or any financial
          inquiry.
        </motion.p>
      </div>
    </section>
  )
}
