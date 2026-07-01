import { z } from "zod"
import { investmentPlanIds } from "@/lib/investment-plans"

export const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  details: z.string().optional(),
})

export type EnquiryFormData = z.infer<typeof enquirySchema>

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  address: z.string().optional(),
  subject: z.string().min(2, "Please enter a subject"),
  message: z.string().min(20, "Message must be at least 20 characters"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const loanApplicationSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  loan_type: z.enum(["personal", "business", "mortgage", "emergency"]),
  amount: z.number().positive("Amount must be greater than 0"),
  term_months: z.number().int().positive("Term must be at least 1 month"),
  purpose: z.string().optional(),
  employment_status: z
    .enum(["employed", "self-employed", "business-owner", "other"])
    .optional(),
  monthly_income: z.number().positive().optional(),
})

export type LoanApplicationData = z.infer<typeof loanApplicationSchema>

export const investmentEnquirySchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  plan_type: z.enum(investmentPlanIds),
  investment_amount: z.number().positive().optional(),
  message: z.string().optional(),
})

export type InvestmentEnquiryData = z.infer<typeof investmentEnquirySchema>

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
})

export type NewsletterData = z.infer<typeof newsletterSchema>
