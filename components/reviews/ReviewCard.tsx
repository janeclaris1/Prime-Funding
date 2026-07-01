import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { countryCodeToFlag } from "@/lib/country-flag"
import type { Review } from "@/lib/reviews"
import { cn } from "@/lib/utils"

interface ReviewCardProps {
  review: Review
  className?: string
  compact?: boolean
}

export default function ReviewCard({
  review,
  className,
  compact = false,
}: ReviewCardProps) {
  return (
    <Card
      className={cn(
        "h-full overflow-hidden border-0 shadow-none",
        compact && "bg-transparent",
        className
      )}
    >
      <CardContent className={cn("p-0", !compact && "p-0")}>
        <div className="flex h-full flex-col items-stretch gap-4 md:flex-row md:gap-8">
          {review.image && (
            <div
              className={cn(
                "shrink-0 overflow-hidden rounded-lg",
                compact
                  ? "aspect-[4/3] w-full md:aspect-auto md:w-56 lg:w-64"
                  : "aspect-[4/3] w-full md:aspect-auto md:w-2/5 md:max-w-[340px]"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={review.image}
                alt={`${review.name}, ${review.service}`}
                className="h-full w-full object-cover object-center md:min-h-[300px]"
              />
            </div>
          )}

          <div className="flex min-w-0 flex-1 flex-col justify-center py-1 md:py-2">
            <div className={cn("mb-3 flex gap-1", compact && "mb-2.5")}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "fill-accent text-accent",
                    compact ? "h-4 w-4 md:h-5 md:w-5" : "h-5 w-5"
                  )}
                />
              ))}
            </div>

            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {review.quote}
            </p>

            <div className={cn("mt-4", compact && "mt-3")}>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "leading-none",
                    compact ? "text-xl md:text-2xl" : "text-2xl"
                  )}
                  role="img"
                  aria-label={review.country}
                >
                  {countryCodeToFlag(review.countryCode)}
                </span>
                <p className={cn("font-medium", compact ? "text-base md:text-lg" : "text-lg")}>
                  {review.name}
                </p>
              </div>
              <p
                className={cn(
                  "mt-1 text-muted-foreground",
                  compact ? "text-sm md:text-base" : "text-base"
                )}
              >
                {review.role} · {review.country}
              </p>
            </div>

            <Badge variant="secondary" className="mt-3 w-fit text-sm">
              {review.service}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
