"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"
import { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation"

const team = [
  {
    name: "Richard Ashford",
    title: "Chief Executive Officer",
    bio: "25+ years in investment banking and wealth management across global markets.",
    initials: "RA",
  },
  {
    name: "Dr. Maya Patel",
    title: "Chief Investment Officer",
    bio: "Former portfolio manager with expertise in alternative investments and risk strategy.",
    initials: "MP",
  },
  {
    name: "Thomas Wright",
    title: "Head of Lending",
    bio: "Specialist in structured finance with a track record of innovative loan products.",
    initials: "TW",
  },
  {
    name: "Catherine Brooks",
    title: "Chief Compliance Officer",
    bio: "Ensures regulatory excellence and client protection across all operations.",
    initials: "CB",
  },
]

export default function Team() {
  return (
    <FadeUpSection className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <GoldAccentBar className="mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Leadership Team
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={staggerItem}>
              <Card className="h-full">
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-muted font-display text-2xl font-bold text-primary">
                    {member.initials}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-accent">{member.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <p className="mx-auto mt-16 max-w-2xl text-center text-sm text-muted-foreground">
          Licensed and regulated by the Financial Services Authority. Registration
          No. PF-2012-00487
        </p>
      </div>
    </FadeUpSection>
  )
}
