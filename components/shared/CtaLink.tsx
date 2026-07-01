"use client"

import { useCtaForm, type CtaFormOptions } from "@/components/shared/CtaFormProvider"
import { cn } from "@/lib/utils"

interface CtaLinkProps extends CtaFormOptions {
  className?: string
  children: React.ReactNode
}

export default function CtaLink({
  subject,
  details,
  messagePlaceholder,
  className,
  children,
}: CtaLinkProps) {
  const { openCtaForm } = useCtaForm()

  return (
    <button
      type="button"
      className={cn("text-left", className)}
      onClick={() => openCtaForm({ subject, details, messagePlaceholder })}
    >
      {children}
    </button>
  )
}
