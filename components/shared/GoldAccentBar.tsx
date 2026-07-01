"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GoldAccentBarProps {
  className?: string
  delay?: number
}

export default function GoldAccentBar({ className, delay = 0.2 }: GoldAccentBarProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={cn(
        "h-1 w-24 origin-left bg-accent skew-x-[-12deg]",
        className
      )}
      aria-hidden="true"
    />
  )
}
