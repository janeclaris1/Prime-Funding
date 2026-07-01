import { NextRequest, NextResponse } from "next/server"
import { saveEnquiry } from "@/lib/db/enquiries"
import { sendEnquiryEmail } from "@/lib/email"
import { enquirySchema } from "@/lib/validations"

function getClientErrorMessage(error: unknown): string {
  if (!(error instanceof Error)) {
    return "Submission failed. Please try again."
  }

  const message = error.message

  if (
    message.includes("MONGODB_URI") ||
    message.includes("MongoServerSelectionError") ||
    message.includes("MongoNetworkError") ||
    message.includes("ERR_SSL_TLSV1_ALERT_INTERNAL_ERROR") ||
    message.includes("SSL routines")
  ) {
    return "We could not save your enquiry right now. Please try again in a moment or email us directly."
  }

  if (message.includes("SMTP") || message.includes("Email is not configured")) {
    return "Your enquiry was saved, but we could not send the notification email. We will still follow up with you."
  }

  return "Submission failed. Please try again."
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const parsed = enquirySchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 })
  }

  try {
    await saveEnquiry(parsed.data)
  } catch (error) {
    console.error("Enquiry save failed:", error)
    return NextResponse.json(
      { error: getClientErrorMessage(error) },
      { status: 500 }
    )
  }

  try {
    await sendEnquiryEmail(parsed.data)
  } catch (error) {
    console.error("Enquiry email failed:", error)
    return NextResponse.json({ success: true, emailSent: false }, { status: 200 })
  }

  return NextResponse.json({ success: true, emailSent: true }, { status: 200 })
}
