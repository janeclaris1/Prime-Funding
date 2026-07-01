"use client"

import { motion } from "framer-motion"
import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"
import ReviewCard from "@/components/reviews/ReviewCard"
import { reviewStats, reviews } from "@/lib/reviews"
import { staggerItem } from "@/hooks/useScrollAnimation"

function pairReviews<T>(items: T[]): T[][] {
  const pairs: T[][] = []
  for (let i = 0; i < items.length; i += 2) {
    pairs.push(items.slice(i, i + 2))
  }
  return pairs
}

export default function ReviewGrid() {
  const reviewPairs = pairReviews(reviews)

  return (
    <>
      <FadeUpSection className="border-b border-border bg-card py-10 sm:py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-4 lg:px-8">
          {reviewStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeUpSection>

      <FadeUpSection className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <GoldAccentBar className="mx-auto mb-6" />
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Verified reviews from investors, business owners, and individuals
              across all Prime Funding services.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            {reviewPairs.map((pair, rowIndex) => (
              <motion.div
                key={rowIndex}
                variants={staggerItem}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                className="py-10 first:pt-0 last:pb-0 md:py-16"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-16">
                  <ReviewCard review={pair[0]} compact />
                  {pair[1] ? (
                    <>
                      <div
                        className="my-6 hidden w-px bg-border md:my-0 md:block"
                        aria-hidden="true"
                      />
                      <ReviewCard review={pair[1]} compact />
                    </>
                  ) : (
                    <div className="hidden md:block" aria-hidden="true" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeUpSection>
    </>
  )
}
