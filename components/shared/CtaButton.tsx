"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { useCtaForm, type CtaFormOptions } from "@/components/shared/CtaFormProvider"

interface CtaButtonProps extends ButtonProps, CtaFormOptions {}

export default function CtaButton({
  subject,
  details,
  messagePlaceholder,
  onClick,
  children,
  ...props
}: CtaButtonProps) {
  const { openCtaForm } = useCtaForm()

  return (
    <Button
      {...props}
      onClick={(event) => {
        openCtaForm({ subject, details, messagePlaceholder })
        onClick?.(event)
      }}
    >
      {children}
    </Button>
  )
}
