import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import InvestmentStartHero from "@/components/investments/InvestmentStartHero"
import InvestmentEnquiryForm from "@/components/investments/InvestmentEnquiryForm"
import FadeUpSection from "@/components/shared/FadeUpSection"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Start Investing",
  description:
    "Begin your investment journey with Prime Funding. Submit an enquiry and connect with a dedicated advisor.",
}

export default function InvestmentStartPage() {
  return (
    <>
      <InvestmentStartHero />

      <FadeUpSection className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Investment Enquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <Suspense
                fallback={
                  <p className="text-muted-foreground">Loading form...</p>
                }
              >
                <InvestmentEnquiryForm />
              </Suspense>
            </CardContent>
          </Card>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
            Not sure which plan suits you?{" "}
            <Button asChild variant="link" className="h-auto p-0">
              <Link href="/investments">Compare investment plans</Link>
            </Button>
          </p>
        </div>
      </FadeUpSection>

      <section className="border-t border-border bg-muted py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <strong>Risk Disclosure:</strong> All investments carry risk,
            including the potential loss of principal. Past performance is not
            indicative of future results. Returns shown are target ranges and
            are not guaranteed. Prime Funding is licensed and regulated. Please
            read all product disclosure statements before investing.
          </p>
        </div>
      </section>
    </>
  )
}
