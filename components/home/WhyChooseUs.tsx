"use client"

import { CheckCircle2 } from "lucide-react"
import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"

const reasons = [
  {
    title: "Regulatory compliance & security",
    description:
      "Prime Funding operates under strict financial regulations, giving you the confidence that your capital is held to the highest legal and ethical standards. We maintain full licensing, undergo regular third-party audits, and follow international anti-money laundering protocols on every account.",
    highlights: [
      "Licensed and regulated by the Financial Services Authority (Reg. No. PF-2012-00487)",
      "256-bit encryption and multi-factor authentication on all client portals",
      "Segregated client accounts: your funds are never mixed with company assets",
      "Continuous monitoring and annual compliance reviews by independent auditors",
    ],
    image: "/images/stock-options.png",
  },
  {
    title: "Personalised financial planning",
    description:
      "We believe exceptional outcomes start with understanding you. Before any recommendation is made, our advisors conduct a thorough review of your financial position, goals, and appetite for risk, then build a strategy designed exclusively around your life, not a generic product catalogue.",
    highlights: [
      "Dedicated advisor assigned from day one, with direct phone and email access",
      "Comprehensive needs assessment covering income, assets, liabilities, and goals",
      "Quarterly portfolio reviews with rebalancing recommendations as markets shift",
      "Integrated planning across investments, loans, tax efficiency, and wealth preservation",
    ],
    image: "/images/real-estate.png",
  },
  {
    title: "Competitive interest rates",
    description:
      "Through long-standing relationships with institutional lenders and capital markets partners, we secure rates that individual borrowers and retail investors typically cannot access alone. Whether you are financing a business expansion or growing an investment portfolio, we negotiate on your behalf.",
    highlights: [
      "Loan rates from 6.5% p.a. on mortgages and 7.5% p.a. on business lending",
      "Investment portfolios targeting 8-25% p.a. depending on plan and risk profile",
      "Rate-matching review: we assess your existing products and identify savings",
      "Flexible terms from 3 months to 30 years across personal, business, and property finance",
    ],
    image: "/images/gold-mining.png",
  },
  {
    title: "Transparent fee structure",
    description:
      "Financial services should never feel opaque. Every fee, charge, and commission is disclosed in writing before you commit, with plain-language explanations so you understand exactly what you are paying and the value you receive in return. No surprises, no fine print buried in footnotes.",
    highlights: [
      "All management fees, advisory charges, and loan origination costs stated upfront",
      "Itemised monthly and quarterly statements with full transaction history",
      "No hidden withdrawal penalties on standard investment plans",
      "Your advisor walks through every cost before any agreement is signed",
    ],
    image: "/images/mining.png",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUpSection className="text-center">
          <GoldAccentBar className="mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Why Choose Prime Funding
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Four pillars that define how we serve every client, from first
            enquiry to long-term wealth growth.
          </p>
        </FadeUpSection>

        <div className="mt-16 space-y-16">
          {reasons.map((reason, index) => (
            <FadeUpSection key={reason.title}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl lg:[direction:ltr]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="lg:[direction:ltr]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-accent" />
                    <div>
                      <h3 className="font-display text-2xl font-semibold">
                        {reason.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">
                        {reason.description}
                      </p>
                      <ul className="mt-5 space-y-2.5">
                        {reason.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  )
}
