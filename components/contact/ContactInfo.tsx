"use client"

import { Clock, Mail, MessageCircle } from "lucide-react"
import FadeUpSection from "@/components/shared/FadeUpSection"
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/contact"

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: CONTACT_EMAIL,
    href: CONTACT_MAILTO,
    iconClass: "text-blue-400",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp / Call",
    lines: [
      { value: "+1 305 497 1879", href: "tel:+13054971879" },
      { value: "+44 7553 416250", href: "tel:+447553416250" },
    ],
    iconClass: "text-emerald-400",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "24/7 Client Support",
    href: null,
    iconClass: "text-blue-400",
  },
]

export default function ContactInfo() {
  return (
    <FadeUpSection className="rounded-2xl border border-white/5 bg-[#0d1322]/60 p-8 md:p-10">
      <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-white">
        Get in Touch
      </h2>

      <ul className="mt-10 space-y-8">
        {contactDetails.map((item) => {
          const content = (
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                <item.icon className={`h-5 w-5 ${item.iconClass}`} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-white">
                  {item.label}
                </p>
                {"lines" in item && item.lines ? (
                  <div className="mt-1 space-y-1">
                    {item.lines.map((line) => (
                      <a
                        key={line.href}
                        href={line.href}
                        className="block text-slate-400 transition-opacity hover:text-slate-300"
                      >
                        {line.value}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="mt-1 text-slate-400">{item.value}</p>
                )}
              </div>
            </div>
          )

          return (
            <li key={item.label}>
              {"href" in item && item.href ? (
                <a
                  href={item.href}
                  className="block transition-opacity hover:opacity-80"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          )
        })}
      </ul>
    </FadeUpSection>
  )
}
