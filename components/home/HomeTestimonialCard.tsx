import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { countryCodeToFlag } from "@/lib/country-flag"
import type { Review } from "@/lib/reviews"

interface HomeTestimonialCardProps {
  review: Review
}

export default function HomeTestimonialCard({ review }: HomeTestimonialCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border border-border shadow-sm">
      {review.image && (
        <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={review.image}
            alt={`${review.name}, ${review.service}`}
            className="h-full w-full object-cover object-top"
          />
        </div>
      )}

      <CardContent className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
          {review.quote}
        </p>

        <div className="mt-5 border-t border-border pt-5">
          <div className="flex items-center gap-2">
            <span className="text-xl leading-none" role="img" aria-label={review.country}>
              {countryCodeToFlag(review.countryCode)}
            </span>
            <p className="font-medium">{review.name}</p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {review.role} · {review.country}
          </p>
          <Badge variant="secondary" className="mt-3 text-xs">
            {review.service}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
