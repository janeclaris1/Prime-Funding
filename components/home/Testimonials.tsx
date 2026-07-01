"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"
import HomeTestimonialCard from "@/components/home/HomeTestimonialCard"
import { reviews } from "@/lib/reviews"
import { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation"

const featuredReviews = reviews.filter((review) =>
  ["Marcus Williams", "Angela Brooks", "Elena Rodriguez"].includes(review.name)
)

export default function Testimonials() {
  return (
    <FadeUpSection className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <GoldAccentBar className="mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real stories from clients who trust Prime Funding with their investments
            and financing needs.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {featuredReviews.map((testimonial) => (
            <motion.div key={testimonial.name} variants={staggerItem} className="h-full">
              <HomeTestimonialCard review={testimonial} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/reviews">
              Read all reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </FadeUpSection>
  )
}
