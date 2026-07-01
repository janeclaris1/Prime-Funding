import { NextRequest, NextResponse } from "next/server"
import { saveEnquiry } from "@/lib/db/enquiries"
import { sendEnquiryEmail } from "@/lib/email"
import { enquirySchema } from "@/lib/validations"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const parsed = enquirySchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 })
  }

  try {
    await saveEnquiry(parsed.data)
    await sendEnquiryEmail(parsed.data)
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to submit enquiry"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
