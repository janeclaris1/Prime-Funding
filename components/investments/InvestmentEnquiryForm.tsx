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
  investmentPlans,
  isInvestmentPlanId,
  type InvestmentPlanId,
} from "@/lib/investment-plans"
import {
  investmentEnquirySchema,
  type InvestmentEnquiryData,
} from "@/lib/validations"
import { submitEnquiry } from "@/lib/submit-enquiry"

interface InvestmentEnquiryFormProps {
  defaultPlan?: InvestmentPlanId
}

export default function InvestmentEnquiryForm({
  defaultPlan = "growth",
}: InvestmentEnquiryFormProps) {
  const searchParams = useSearchParams()
  const planParam = searchParams.get("plan")
  const initialPlan =
    planParam && isInvestmentPlanId(planParam) ? planParam : defaultPlan

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<InvestmentEnquiryData>({
    resolver: zodResolver(investmentEnquirySchema),
    defaultValues: {
      plan_type: initialPlan,
    },
  })

  const planType = watch("plan_type")

  useEffect(() => {
    if (planParam && isInvestmentPlanId(planParam)) {
      setValue("plan_type", planParam)
    }
  }, [planParam, setValue])

  const onSubmit = async (data: InvestmentEnquiryData) => {
    setStatus("loading")
    const plan = investmentPlans.find((p) => p.id === data.plan_type)
    const details = [
      `Plan: ${plan?.name ?? data.plan_type}`,
      data.investment_amount
        ? `Investment amount: $${data.investment_amount}`
        : null,
    ]
      .filter(Boolean)
      .join("\n")

    const result = await submitEnquiry({
      name: data.full_name,
      email: data.email,
      phone: data.phone,
      subject: "Investment Enquiry",
      message: data.message || "I would like to enquire about investing.",
      details,
    })

    if (result.ok) {
      setStatus("success")
      reset({ plan_type: initialPlan })
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
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" {...register("phone")} />
        </div>
        <div className="space-y-2">
          <Label>Plan Type</Label>
          <Select
            value={planType}
            onValueChange={(value) =>
              setValue("plan_type", value as InvestmentEnquiryData["plan_type"])
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select plan" />
            </SelectTrigger>
            <SelectContent>
              {investmentPlans.map((plan) => (
                <SelectItem key={plan.id} value={plan.id}>
                  {plan.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.plan_type && (
            <p className="text-sm text-destructive">{errors.plan_type.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="investment_amount">Investment Amount (optional)</Label>
        <Input
          id="investment_amount"
          type="number"
          min="0"
          step="1000"
          {...register("investment_amount", { valueAsNumber: true })}
        />
        {errors.investment_amount && (
          <p className="text-sm text-destructive">
            {errors.investment_amount.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea id="message" rows={4} {...register("message")} />
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Submitting..." : "Submit Enquiry"}
      </Button>

      {status === "success" && (
        <p className="text-success">Enquiry submitted successfully!</p>
      )}
      {status === "error" && (
        <p className="text-destructive">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
