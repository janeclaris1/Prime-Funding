import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import LoanApplyHero from "@/components/loans/LoanApplyHero"
import LoanApplicationForm from "@/components/loans/LoanApplicationForm"
import FadeUpSection from "@/components/shared/FadeUpSection"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Apply for a Loan",
  description:
    "Apply for a personal, business, mortgage, or emergency loan with Prime Funding. Fast online application with competitive rates.",
}

export default function LoanApplyPage() {
  return (
    <>
      <LoanApplyHero />

      <FadeUpSection className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Loan Application</CardTitle>
            </CardHeader>
            <CardContent>
              <Suspense
                fallback={
                  <p className="text-muted-foreground">Loading form...</p>
                }
              >
                <LoanApplicationForm />
              </Suspense>
            </CardContent>
          </Card>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
            Want to estimate repayments first?{" "}
            <Button asChild variant="link" className="h-auto p-0">
              <Link href="/loans">Use the loan calculator</Link>
            </Button>
          </p>
        </div>
      </FadeUpSection>
    </>
  )
}
