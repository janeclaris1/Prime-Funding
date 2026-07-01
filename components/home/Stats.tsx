"use client"

import { motion } from "framer-motion"
import { useAnimatedCounter, useScrollAnimation } from "@/hooks/useScrollAnimation"

const stats = [
  { label: "Assets Managed", value: 2.4, prefix: "$", suffix: "B", decimals: 1 },
  { label: "Clients", value: 15000, prefix: "", suffix: "+", decimals: 0 },
  { label: "Satisfaction", value: 98, prefix: "", suffix: "%", decimals: 0 },
  { label: "Years Experience", value: 12, prefix: "", suffix: "+", decimals: 0 },
]

function StatItem({
  label,
  value,
  prefix,
  suffix,
  decimals,
}: {
  label: string
  value: number
  prefix: string
  suffix: string
  decimals: number
}) {
  const { ref, isInView } = useScrollAnimation()
  const display = useAnimatedCounter(value * (decimals > 0 ? 10 : 1), isInView)
  const formatted =
    decimals > 0
      ? (display / 10).toFixed(decimals)
      : display.toLocaleString()

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <p className="font-display text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
        {prefix}
        {formatted}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="border-y border-border bg-card py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
