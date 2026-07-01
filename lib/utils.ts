import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function calculateLoanPayment(
  principal: number,
  annualRate: number,
  termMonths: number
): { monthlyPayment: number; totalRepayment: number; totalInterest: number } {
  if (principal <= 0 || termMonths <= 0) {
    return { monthlyPayment: 0, totalRepayment: 0, totalInterest: 0 }
  }

  const monthlyRate = annualRate / 100 / 12
  if (monthlyRate === 0) {
    const monthlyPayment = principal / termMonths
    return {
      monthlyPayment,
      totalRepayment: principal,
      totalInterest: 0,
    }
  }

  const factor = Math.pow(1 + monthlyRate, termMonths)
  const monthlyPayment = (principal * monthlyRate * factor) / (factor - 1)
  const totalRepayment = monthlyPayment * termMonths
  const totalInterest = totalRepayment - principal

  return { monthlyPayment, totalRepayment, totalInterest }
}
