"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitEnquiry } from "@/lib/submit-enquiry"
import { enquirySchema, type EnquiryFormData } from "@/lib/validations"

export interface CtaFormOptions {
  subject: string
  details?: string
  messagePlaceholder?: string
}

interface CtaFormContextValue {
  openCtaForm: (options: CtaFormOptions) => void
}

const CtaFormContext = createContext<CtaFormContextValue | null>(null)

export function useCtaForm(): CtaFormContextValue {
  const context = useContext(CtaFormContext)
  if (!context) {
    throw new Error("useCtaForm must be used within CtaFormProvider")
  }
  return context
}

export function CtaFormProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [formOptions, setFormOptions] = useState<CtaFormOptions>({
    subject: "General Enquiry",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  )
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      subject: "General Enquiry",
    },
  })

  const openCtaForm = useCallback(
    (options: CtaFormOptions) => {
      setFormOptions(options)
      reset({
        subject: options.subject,
        details: options.details ?? "",
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      setStatus("idle")
      setErrorMessage(null)
      setOpen(true)
    },
    [reset]
  )

  const onSubmit = async (data: EnquiryFormData) => {
    setStatus("loading")
    setErrorMessage(null)

    const result = await submitEnquiry({
      ...data,
      details: data.details || formOptions.details || undefined,
    })

    if (result.ok) {
      setStatus("success")
      reset({ subject: formOptions.subject, details: formOptions.details ?? "" })
      setTimeout(() => {
        setOpen(false)
        setStatus("idle")
      }, 1500)
      return
    }

    setStatus("error")
    setErrorMessage(result.error ?? "Something went wrong. Please try again.")
  }

  const value = useMemo(() => ({ openCtaForm }), [openCtaForm])

  return (
    <CtaFormContext.Provider value={value}>
      {children}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Send a Message</DialogTitle>
            <DialogDescription>
              Complete the form below and our team will get back to you shortly.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input type="hidden" {...register("details")} />

            <div className="space-y-2">
              <Label htmlFor="cta-subject">Subject</Label>
              <Input
                id="cta-subject"
                placeholder="Investment Enquiry"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-sm text-destructive">{errors.subject.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cta-name">Your Name</Label>
              <Input id="cta-name" placeholder="John Doe" {...register("name")} />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cta-email">Your Email</Label>
              <Input
                id="cta-email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cta-phone">Phone Number (optional)</Label>
              <Input
                id="cta-phone"
                placeholder="+1 234 567 8900"
                {...register("phone")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cta-message">Message</Label>
              <Textarea
                id="cta-message"
                rows={4}
                placeholder={
                  formOptions.messagePlaceholder ?? "How can we help you?"
                }
                {...register("message")}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </Button>

            {status === "success" && (
              <p className="text-sm text-emerald-600">
                Message sent successfully!
              </p>
            )}
            {status === "error" && errorMessage && (
              <p className="text-sm text-destructive">{errorMessage}</p>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </CtaFormContext.Provider>
  )
}
