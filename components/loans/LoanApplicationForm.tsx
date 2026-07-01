"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  loanApplicationSchema,
  type LoanApplicationData,
} from "@/lib/validations"
import { submitEnquiry } from "@/lib/submit-enquiry"

const loanTypeIds = ["personal", "business", "mortgage", "emergency"] as const

type LoanTypeId = (typeof loanTypeIds)[number]

function isLoanTypeId(value: string): value is LoanTypeId {
  return (loanTypeIds as readonly string[]).includes(value)
}

interface LoanApplicationFormProps {
  defaultLoanType?: LoanTypeId
}

export default function LoanApplicationForm({
  defaultLoanType = "personal",
}: LoanApplicationFormProps) {
  const searchParams = useSearchParams()
  const loanParam = searchParams.get("loan_type") ?? searchParams.get("type")
  const amountParam = searchParams.get("amount")
  const termParam = searchParams.get("term_months")
  const initialLoanType =
    loanParam && isLoanTypeId(loanParam) ? loanParam : defaultLoanType
  const initialAmount =
    amountParam && !Number.isNaN(Number(amountParam))
      ? Number(amountParam)
      : undefined
  const initialTerm =
    termParam && !Number.isNaN(Number(termParam))
      ? Number(termParam)
      : 36

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<LoanApplicationData>({
    resolver: zodResolver(loanApplicationSchema),
    defaultValues: {
      loan_type: initialLoanType,
      term_months: initialTerm,
      ...(initialAmount !== undefined ? { amount: initialAmount } : {}),
    },
  })

  const loanType = watch("loan_type")
  const employmentStatus = watch("employment_status")

  useEffect(() => {
    if (loanParam && isLoanTypeId(loanParam)) {
      setValue("loan_type", loanParam)
    }
    if (amountParam && !Number.isNaN(Number(amountParam))) {
      setValue("amount", Number(amountParam))
    }
    if (termParam && !Number.isNaN(Number(termParam))) {
      setValue("term_months", Number(termParam))
    }
  }, [loanParam, amountParam, termParam, setValue])

  const onSubmit = async (data: LoanApplicationData) => {
    setStatus("loading")
    const details = [
      `Loan type: ${data.loan_type}`,
      `Amount: $${data.amount}`,
      `Term (months): ${data.term_months}`,
      data.purpose ? `Purpose: ${data.purpose}` : null,
      data.employment_status
        ? `Employment: ${data.employment_status}`
        : null,
      data.monthly_income
        ? `Monthly income: $${data.monthly_income}`
        : null,
    ]
      .filter(Boolean)
      .join("\n")

    const result = await submitEnquiry({
      name: data.full_name,
      email: data.email,
      phone: data.phone,
      subject: "Loan Application",
      message: data.purpose || "I would like to apply for a loan.",
      details,
    })

    if (result.ok) {
      setStatus("success")
      reset({ loan_type: initialLoanType, term_months: 36 })
      return
    }

    setStatus("error")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="full_name">Full Name</Label>
          <Input id="full_name" {...register("full_name")} />
          {errors.full_name && (
            <p className="text-sm text-destructive">{errors.full_name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" {...register("phone")} />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>Loan Type</Label>
          <Select
            value={loanType}
            onValueChange={(value) =>
              setValue("loan_type", value as LoanApplicationData["loan_type"])
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personal">Personal</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="mortgage">Mortgage</SelectItem>
              <SelectItem value="emergency">Emergency</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="amount">Loan Amount ($)</Label>
          <Input id="amount" type="number" min="1" {...register("amount", { valueAsNumber: true })} />
          {errors.amount && (
            <p className="text-sm text-destructive">{errors.amount.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="term_months">Term (months)</Label>
          <Input
            id="term_months"
            type="number"
            min="1"
            {...register("term_months", { valueAsNumber: true })}
          />
          {errors.term_months && (
            <p className="text-sm text-destructive">{errors.term_months.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="purpose">Purpose (optional)</Label>
        <Textarea id="purpose" rows={2} {...register("purpose")} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Employment Status (optional)</Label>
          <Select
            value={employmentStatus ?? ""}
            onValueChange={(value) =>
              setValue(
                "employment_status",
                value as LoanApplicationData["employment_status"]
              )
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="employed">Employed</SelectItem>
              <SelectItem value="self-employed">Self-employed</SelectItem>
              <SelectItem value="business-owner">Business Owner</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="monthly_income">Monthly Income (optional)</Label>
          <Input
            id="monthly_income"
            type="number"
            min="0"
            {...register("monthly_income", { valueAsNumber: true })}
          />
        </div>
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </Button>

      {status === "success" && (
        <p className="text-success">Application submitted successfully!</p>
      )}
      {status === "error" && (
        <p className="text-destructive">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
