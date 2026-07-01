export const investmentPlanIds = [
  "starter",
  "growth",
  "premium",
  "mining",
  "construction",
  "real-estate",
  "travel-and-tour",
  "car-export",
] as const

export type InvestmentPlanId = (typeof investmentPlanIds)[number]

export function isInvestmentPlanId(value: string): value is InvestmentPlanId {
  return (investmentPlanIds as readonly string[]).includes(value)
}

export interface InvestmentPlan {
  id: InvestmentPlanId
  name: string
  min: number
  returns: string
  term: string
  support: string
  popular?: boolean
  features: string[]
}

export const investmentPlans: InvestmentPlan[] = [
  {
    id: "starter",
    name: "Starter Portfolio",
    min: 1000,
    returns: "8-12% p.a.",
    term: "Fixed 6 months",
    support: "Standard support",
    features: ["Diversified ETF portfolio", "Monthly statements", "Online dashboard"],
  },
  {
    id: "growth",
    name: "Growth Portfolio",
    min: 10000,
    returns: "12-18% p.a.",
    term: "Fixed 12 months",
    support: "Priority support",
    popular: true,
    features: ["Active portfolio management", "Quarterly reviews", "Tax optimisation"],
  },
  {
    id: "premium",
    name: "Premium Portfolio",
    min: 100000,
    returns: "18-25% p.a.",
    term: "Flexible terms",
    support: "Dedicated advisor",
    features: ["Custom asset allocation", "Direct advisor access", "Exclusive opportunities"],
  },
  {
    id: "mining",
    name: "Mining",
    min: 25000,
    returns: "15-22% p.a.",
    term: "12-24 months",
    support: "Sector specialist",
    features: [
      "Precious & industrial minerals",
      "Licensed extraction partners",
      "Quarterly yield reports",
    ],
  },
  {
    id: "construction",
    name: "Construction",
    min: 15000,
    returns: "12-18% p.a.",
    term: "6-18 months",
    support: "Project oversight",
    features: [
      "Infrastructure & development projects",
      "Milestone-based returns",
      "Risk-assessed contracts",
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    min: 20000,
    returns: "10-16% p.a.",
    term: "12-36 months",
    support: "Property advisory",
    features: [
      "Residential & commercial assets",
      "Rental income distribution",
      "Capital appreciation focus",
    ],
  },
  {
    id: "travel-and-tour",
    name: "Travel & Tour",
    min: 5000,
    returns: "14-20% p.a.",
    term: "6-12 months",
    support: "Operations team",
    features: [
      "Tour packages & hospitality",
      "Seasonal revenue models",
      "Partner network access",
    ],
  },
  {
    id: "car-export",
    name: "Car Export",
    min: 10000,
    returns: "16-24% p.a.",
    term: "3-12 months",
    support: "Trade desk",
    features: [
      "International vehicle trade",
      "Logistics & customs handled",
      "Per-shipment reporting",
    ],
  },
]
