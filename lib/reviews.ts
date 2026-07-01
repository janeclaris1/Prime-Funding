export interface Review {
  name: string
  role: string
  service: string
  quote: string
  country: string
  countryCode: string
  image?: string
}

export const reviews: Review[] = [
  {
    name: "Sarah Mitchell",
    role: "Private Investor",
    service: "Investment Portfolio",
    country: "United States",
    countryCode: "US",
    image: "/images/review-sarah-mitchell.png",
    quote:
      "Prime Funding transformed my investment approach. Their advisors understood my goals and delivered exceptional returns within the first year.",
  },
  {
    name: "James Chen",
    role: "Homeowner",
    service: "Personal Loan",
    country: "Singapore",
    countryCode: "SG",
    image: "/images/review-james-chen.png",
    quote:
      "The loan process was seamless and transparent. I had funds in my account within days, with rates far better than my bank offered.",
  },
  {
    name: "Elena Rodriguez",
    role: "CEO, Rodriguez Logistics",
    service: "Business Loan",
    country: "Spain",
    countryCode: "ES",
    image: "/images/review-elena-rodriguez.jpg",
    quote:
      "As a business owner, I needed flexible financing. Prime Funding delivered a tailored solution that scaled with my company's growth.",
  },
  {
    name: "Michael Okonkwo",
    role: "Property Developer",
    service: "Real Estate Investment",
    country: "Canada",
    countryCode: "CA",
    image: "/images/review-michael-okonkwo.png",
    quote:
      "Their real estate portfolio gave me exposure I couldn't access alone. Clear reporting and consistent communication throughout.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Director",
    service: "Travel & Tour Investment",
    country: "India",
    countryCode: "IN",
    image: "/images/review-priya-sharma.png",
    quote:
      "I invested in the travel sector through Prime Funding and saw strong returns. The team explained every risk upfront, with no surprises.",
  },
  {
    name: "David Thompson",
    role: "Retired Executive",
    service: "Premium Portfolio",
    country: "United Kingdom",
    countryCode: "GB",
    image: "/images/review-david-thompson.png",
    quote:
      "After decades in corporate finance, I'm selective about who manages my wealth. Prime Funding earned my trust with transparency and results.",
  },
  {
    name: "Amara Diallo",
    role: "Small Business Owner",
    service: "Emergency Loan",
    country: "France",
    countryCode: "FR",
    quote:
      "When cash flow tightened, Prime Funding approved my emergency loan quickly. Professional, respectful, and fair terms throughout.",
  },
  {
    name: "Robert Hayes",
    role: "Mining Investor",
    service: "Mining Investment",
    country: "Australia",
    countryCode: "AU",
    quote:
      "The mining investment plan was thoroughly explained with realistic return projections. Exactly the level of detail I expect from a serious firm.",
  },
  {
    name: "Lisa Park",
    role: "Financial Controller",
    service: "Mortgage Loan",
    country: "South Korea",
    countryCode: "KR",
    image: "/images/review-lisa-park.png",
    quote:
      "We refinanced through Prime Funding and saved significantly on monthly repayments. The calculator on their site matched the final offer exactly.",
  },
]

export const reviewStats = [
  { label: "Client Satisfaction", value: "98%" },
  { label: "Average Rating", value: "4.9/5" },
  { label: "Verified Reviews", value: "500+" },
  { label: "Would Recommend", value: "96%" },
]
