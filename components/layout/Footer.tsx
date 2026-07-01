"use client"

import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Globe, Mail, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { newsletterSchema, type NewsletterData } from "@/lib/validations"
import { COMPANY_NAME, CONTACT_EMAIL } from "@/lib/contact"
import { submitEnquiry } from "@/lib/submit-enquiry"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
]

const services = [
  { href: "/investments", label: "Investments" },
  { href: "/loans", label: "Loans" },
  { href: "/contact", label: "Financial Advisory" },
]

export default function Footer() {
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
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-display text-2xl font-bold">
              <span className="text-accent">Prime</span> Funding
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Expert investment management and flexible loan solutions for
              discerning clients worldwide.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-accent"
                aria-label="LinkedIn"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-accent"
                aria-label="Twitter"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-accent"
                aria-label="Facebook"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>1 Finance Street, Capital City</li>
              <li>+1 305 497 1879</li>
              <li>+44 7553 416250</li>
              <li>{CONTACT_EMAIL}</li>
              <li>Mon-Fri, 8am-6pm</li>
            </ul>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  {...register("email")}
                  className="flex-1"
                />
                <Button type="submit" disabled={status === "loading"} size="sm">
                  {status === "loading" ? "..." : "Subscribe"}
                </Button>
              </div>
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              )}
              {status === "success" && (
                <p className="text-xs text-success">Subscribed successfully!</p>
              )}
              {status === "error" && (
                <p className="text-xs text-destructive">Something went wrong.</p>
              )}
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
