"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"
import { fadeUp, useScrollAnimation } from "@/hooks/useScrollAnimation"
import { cn } from "@/lib/utils"

interface FadeUpSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function FadeUpSection({
  children,
  className,
  id,
}: FadeUpSectionProps) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={fadeUp.initial}
      animate={isInView ? fadeUp.animate : fadeUp.initial}
      transition={fadeUp.transition}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
