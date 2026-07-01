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
    <section className="relative -mt-16 flex min-h-[85vh] items-center justify-center overflow-hidden pt-16 sm:min-h-[90vh]">
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
          className="absolute left-4 top-20 z-20 max-w-[calc(100%-2rem)] sm:left-8 sm:top-24 lg:left-12"
        >
          <button
            type="button"
            onClick={() => openCtaForm({ subject: activeSlide.subject })}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground sm:px-4 sm:text-sm"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
            <span className="truncate">{activeSlide.label}</span>
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <GoldAccentBar className="mx-auto mb-6" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-4xl font-bold text-white sm:text-5xl md:text-7xl"
        >
          Your Wealth, Intelligently Managed
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:mt-6 sm:text-lg md:text-xl"
        >
          Expert investment strategies and flexible loan solutions designed for
          your financial future.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
        >
          <CtaButton
            size="lg"
            variant="accent"
            subject="Investment Enquiry"
            className="w-full sm:w-auto"
          >
            Explore Investments
            <ArrowRight className="h-4 w-4" />
          </CtaButton>
          <CtaButton
            size="lg"
            variant="outline"
            subject="Loan Application"
            className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto"
          >
            Apply for a Loan
          </CtaButton>
        </motion.div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-3 px-4 sm:bottom-8 sm:gap-4">
        <button
          type="button"
          onClick={prev}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <span className="min-w-[3rem] text-center text-sm font-medium text-white/90 sm:hidden">
          {current + 1} / {slides.length}
        </span>

        <div className="hidden gap-2 sm:flex">
          {slides.map((slide, index) => (
            <button
              key={slide.label}
              type="button"
              onClick={() => goTo(index)}
              className={cn(
                "min-h-[12px] min-w-[12px] rounded-full transition-all",
                index === current
                  ? "w-8 bg-accent"
                  : "w-3 bg-white/40 hover:bg-white/70"
              )}
              aria-label={`Go to ${slide.label} slide`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
