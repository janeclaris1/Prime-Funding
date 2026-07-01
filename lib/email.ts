import nodemailer from "nodemailer"
import { COMPANY_NAME, CONTACT_EMAIL } from "@/lib/contact"

export interface EnquiryEmailPayload {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  details?: string
}

function buildEmailBody(data: EnquiryEmailPayload): string {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.details ? `\nAdditional details:\n${data.details}` : null,
    "",
    "Message:",
    data.message,
  ]
    .filter((line) => line !== null)
    .join("\n")
}

export async function sendEnquiryEmail(data: EnquiryEmailPayload): Promise<void> {
  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASSWORD

  if (!host || !user || !pass) {
    throw new Error(
      "Email is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD."
    )
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: { user, pass },
  })

  await transporter.sendMail({
    from: `"${COMPANY_NAME}" <${user}>`,
    to: CONTACT_EMAIL,
    replyTo: data.email,
    subject: `[${COMPANY_NAME}] ${data.subject}`,
    text: buildEmailBody(data),
  })
}
