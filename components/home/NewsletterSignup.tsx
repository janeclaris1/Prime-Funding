"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { newsletterSchema, type NewsletterData } from "@/lib/validations"
import { COMPANY_NAME } from "@/lib/contact"
import { submitEnquiry } from "@/lib/submit-enquiry"

export default function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
  })

  const onSubmit = async (data: NewsletterData) => {
    setStatus("loading")
    const result = await submitEnquiry({
      name: "Newsletter subscriber",
      email: data.email,
      subject: "Newsletter Subscription",
      message: `Please subscribe this email to the ${COMPANY_NAME} newsletter.`,
    })

    if (result.ok) {
      setStatus("success")
      reset()
      return
    }

    setStatus("error")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <Input
        type="email"
        placeholder="Enter your email"
        {...register("email")}
        className="flex-1 bg-card"
      />
      <Button type="submit" variant="accent" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </Button>
      {errors.email && (
        <p className="w-full text-sm text-destructive">{errors.email.message}</p>
      )}
      {status === "success" && (
        <p className="w-full text-sm text-success">
          Subscribed successfully!
        </p>
      )}
      {status === "error" && (
        <p className="w-full text-sm text-destructive">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
