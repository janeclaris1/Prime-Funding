"use client"

import { useMemo, useState } from "react"
import CtaButton from "@/components/shared/CtaButton"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import FadeUpSection from "@/components/shared/FadeUpSection"
import GoldAccentBar from "@/components/shared/GoldAccentBar"
import { calculateLoanPayment, formatCurrency } from "@/lib/utils"
import { loanRates, loanTypes } from "@/components/loans/LoanTypes"

const termOptions: Record<string, number[]> = {
  personal: [6, 12, 24, 36, 48, 60],
  business: [12, 24, 36, 48, 60, 72, 84],
  mortgage: [60, 120, 180, 240, 300, 360],
  emergency: [3, 6, 9, 12],
}

export default function LoanCalculator() {
  const [loanType, setLoanType] = useState<string>("personal")
  const [amount, setAmount] = useState(25000)
  const [termMonths, setTermMonths] = useState(36)

  const selectedLoan = loanTypes.find((l) => l.id === loanType)
  const rate = loanRates[loanType] ?? 9
  const terms = termOptions[loanType] ?? termOptions.personal

  const results = useMemo(
    () => calculateLoanPayment(amount, rate, termMonths),
    [amount, rate, termMonths]
  )

  const handleLoanTypeChange = (value: string) => {
    setLoanType(value)
    const newTerms = termOptions[value] ?? termOptions.personal
    setTermMonths(newTerms[Math.floor(newTerms.length / 2)])
    const loan = loanTypes.find((l) => l.id === value)
    if (loan) setAmount(Math.min(amount, loan.max))
  }

  const applyDetails = useMemo(
    () =>
      `Loan type: ${loanType}\nAmount: ${amount}\nTerm (months): ${termMonths}`,
    [loanType, amount, termMonths]
  )

  return (
    <FadeUpSection className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <GoldAccentBar className="mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Loan Calculator
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Estimate your monthly repayments in real time.
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-2xl">
          <CardHeader>
            <CardTitle>Calculate Your Repayments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Loan Type</Label>
              <Select value={loanType} onValueChange={handleLoanTypeChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {loanTypes.map((loan) => (
                    <SelectItem key={loan.id} value={loan.id}>
                      {loan.name} (from {loan.rate})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="amount">Loan Amount</Label>
                <span className="text-sm font-semibold">{formatCurrency(amount)}</span>
              </div>
              <Input
                id="amount"
                type="range"
                min={1000}
                max={selectedLoan?.max ?? 50000}
                step={500}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label>Term</Label>
              <Select
                value={String(termMonths)}
                onValueChange={(v) => setTermMonths(Number(v))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {terms.map((term) => (
                    <SelectItem key={term} value={String(term)}>
                      {term >= 12 && term % 12 === 0
                        ? `${term / 12} year${term / 12 > 1 ? "s" : ""}`
                        : `${term} months`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 rounded-lg border border-border bg-card p-6 sm:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Payment</p>
                <p className="font-display text-2xl font-bold text-primary">
                  {formatCurrency(results.monthlyPayment)}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Repayment</p>
                <p className="font-display text-2xl font-bold">
                  {formatCurrency(results.totalRepayment)}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Interest</p>
                <p className="font-display text-2xl font-bold text-accent">
                  {formatCurrency(results.totalInterest)}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-border pt-6">
            <CtaButton variant="accent" subject="Loan Application" details={applyDetails}>
              Apply with these details
            </CtaButton>
          </CardFooter>
        </Card>
      </div>
    </FadeUpSection>
  )
}
