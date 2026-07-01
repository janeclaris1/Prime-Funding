"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contactFormSchema, type ContactFormData } from "@/lib/validations"
import { submitEnquiry } from "@/lib/submit-enquiry"

const fieldClass =
  "bg-[#0a0f1c] border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-blue-500/50 focus-visible:ring-offset-0"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading")
    const details = [
      data.phone ? `Phone: ${data.phone}` : null,
      data.address ? `Address: ${data.address}` : null,
    ]
      .filter(Boolean)
      .join("\n")

    const result = await submitEnquiry({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      details: details || undefined,
    })

    if (result.ok) {
      setStatus("success")
      reset()
      return
    }

    setStatus("error")
  }

  return (
    <div className="rounded-2xl border border-white/5 bg-[#0d1322]/60 p-8 md:p-10">
      <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-white">
        Send a Message
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-400">
              Your Name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              className={fieldClass}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-400">
              Your Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className={fieldClass}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-slate-400">
              Phone Number
            </Label>
            <Input
              id="phone"
              placeholder="+1 234 567 8900"
              className={fieldClass}
              {...register("phone")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address" className="text-slate-400">
              Address
            </Label>
            <Input
              id="address"
              placeholder="123 Main St, City, Country"
              className={fieldClass}
              {...register("address")}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-slate-400">
            Subject
          </Label>
          <Input
            id="subject"
            placeholder="How can we help you?"
            className={fieldClass}
            {...register("subject")}
          />
          {errors.subject && (
            <p className="text-sm text-red-400">{errors.subject.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-slate-400">
            Message
          </Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="How can we help you?"
            className={fieldClass}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-700 to-blue-400 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
          <Send className="h-4 w-4" />
        </button>

        {status === "success" && (
          <p className="text-emerald-400">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  )
}
