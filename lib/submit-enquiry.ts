import type { EnquiryFormData } from "@/lib/validations"

export async function submitEnquiry(
  data: EnquiryFormData
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      const payload = await res.json().catch(() => ({}))
      return {
        ok: false,
        error:
          typeof payload.error === "string"
            ? payload.error
            : "Submission failed. Please try again.",
      }
    }

    return { ok: true }
  } catch {
    return { ok: false, error: "Submission failed. Please try again." }
  }
}
