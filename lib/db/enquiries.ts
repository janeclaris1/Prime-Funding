import { getDb } from "@/lib/mongodb"
import type { EnquiryFormData } from "@/lib/validations"

export interface EnquiryDocument extends EnquiryFormData {
  status: "new" | "read" | "archived"
  createdAt: Date
}

export async function saveEnquiry(data: EnquiryFormData): Promise<void> {
  const db = await getDb()

  await db.collection<EnquiryDocument>("enquiries").insertOne({
    ...data,
    status: "new",
    createdAt: new Date(),
  })
}
