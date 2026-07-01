"use client"

import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"
import { Separator } from "@/components/ui/separator"

export default function Mission() {
  return (
    <FadeUpSection className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <GoldAccentBar className="mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Mission & Vision
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl font-semibold text-primary">
              Our Mission
            </h3>
            <p className="mt-4 text-muted-foreground">
              To empower our clients with intelligent financial solutions that
              build lasting wealth, delivered with integrity, transparency, and
              personalised service at every touchpoint.
            </p>
          </div>
          <div className="relative lg:pl-12">
            <Separator
              orientation="vertical"
              className="absolute left-0 top-0 hidden h-full w-1 bg-accent lg:block"
            />
            <h3 className="font-display text-2xl font-semibold text-primary">
              Our Vision
            </h3>
            <p className="mt-4 text-muted-foreground">
              To be the most trusted financial services firm globally,
              recognised for exceptional client outcomes, innovative solutions,
              and unwavering commitment to ethical practice.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-center font-display text-2xl font-semibold">
            Company Timeline
          </h3>
          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-px" />
            {[
              { year: "2012", event: "Prime Funding founded in Capital City" },
              { year: "2015", event: "Reached $500M in assets under management" },
              { year: "2018", event: "Launched business lending division" },
              { year: "2021", event: "Expanded to serve 10,000+ clients globally" },
              { year: "Today", event: "$2.4B AUM with industry-leading satisfaction" },
            ].map((item, index) => (
              <div
                key={item.year}
                className={`relative mb-8 flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden w-1/2 md:block" />
                <div className="absolute left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-accent md:left-1/2" />
                <div className="ml-10 w-full md:ml-0 md:w-1/2 md:px-8">
                  <p className="font-display text-lg font-bold text-accent">
                    {item.year}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeUpSection>
  )
}
