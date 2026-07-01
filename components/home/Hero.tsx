"use client"

import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import CtaButton from "@/components/shared/CtaButton"
import GoldAccentBar from "@/components/shared/GoldAccentBar"
import { useCtaForm } from "@/components/shared/CtaFormProvider"
import { cn } from "@/lib/utils"

const SLIDE_INTERVAL_MS = 6000

const slides = [
  {
    label: "Travel & Tour",
    image: "/images/travel-and-tour.png",
    subject: "Investment Enquiry - Travel & Tour",
  },
  {
    label: "Mining",
    image: "/images/mining.png",
    subject: "Investment Enquiry - Mining",
  },
  {
    label: "Gold Mining",
    image: "/images/gold-mining.png",
    subject: "Investment Enquiry - Gold Mining",
  },
  {
    label: "Construction",
    image: "/images/mining.png",
    subject: "Investment Enquiry - Construction",
  },
  {
    label: "Real Estate",
    image: "/images/real-estate.png",
    subject: "Investment Enquiry - Real Estate",
  },
  {
    label: "Stock Options",
    image: "/images/stock-options.png",
    subject: "Investment Enquiry - Stock Options",
  },
  {
    label: "Car Export",
    image: "/images/travel-and-tour.png",
    subject: "Investment Enquiry - Car Export",
  },
]

export default function Hero() {
  const { openCtaForm } = useCtaForm()
  const [current, setCurrent] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(media.matches)
    const handler = (event: MediaQueryListEvent) =>
      setReducedMotion(event.matches)
    media.addEventListener("change", handler)
    return () => media.removeEventListener("change", handler)
  }, [])

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (reducedMotion) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [reducedMotion])

  const activeSlide = slides[current]

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.label}
            initial={false}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{
              duration: reducedMotion ? 0.01 : 1.2,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/85 dark:from-background/85 dark:via-background/75 dark:to-background/90" />

      {/* Slide label */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.4 }}
          className="absolute left-4 top-24 z-20 sm:left-8 lg:left-12"
        >
          <button
            type="button"
            onClick={() => openCtaForm({ subject: activeSlide.subject })}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            {activeSlide.label}
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <GoldAccentBar className="mx-auto mb-8" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-5xl font-bold text-white md:text-7xl"
        >
          Your Wealth, Intelligently Managed
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl"
        >
          Expert investment strategies and flexible loan solutions designed for
          your financial future.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <CtaButton size="lg" variant="accent" subject="Investment Enquiry">
            Explore Investments
            <ArrowRight className="h-4 w-4" />
          </CtaButton>
          <CtaButton
            size="lg"
            variant="outline"
            subject="Loan Application"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            Apply for a Loan
          </CtaButton>
        </motion.div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-4 px-4">
        <button
          type="button"
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.label}
              type="button"
              onClick={() => goTo(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                index === current
                  ? "w-8 bg-accent"
                  : "w-2 bg-white/40 hover:bg-white/70"
              )}
              aria-label={`Go to ${slide.label} slide`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
