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

function createSmtpTransport() {
  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASSWORD

  if (!host || !user || !pass) {
    throw new Error(
      "Email is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD."
    )
  }

  const port = Number(process.env.SMTP_PORT || 587)
  const secure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === "true"
      : port === 465

  return nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS: !secure,
    auth: { user, pass },
    connectionTimeout: 15000,
    tls: {
      minVersion: "TLSv1.2",
      servername: host,
    },
  })
}

export async function sendEnquiryEmail(data: EnquiryEmailPayload): Promise<void> {
  const user = process.env.SMTP_USER
  if (!user) {
    throw new Error("Email is not configured. Set SMTP_USER.")
  }

  const transporter = createSmtpTransport()

  await transporter.sendMail({
    from: `"${COMPANY_NAME}" <${user}>`,
    to: CONTACT_EMAIL,
    replyTo: data.email,
    subject: `[${COMPANY_NAME}] ${data.subject}`,
    text: buildEmailBody(data),
  })
}
