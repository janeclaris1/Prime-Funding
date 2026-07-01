export const COMPANY_NAME = "Prime Funding"
export const CONTACT_EMAIL = "hello@primefundings.com"
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`

export function mailtoLink(subject?: string, body?: string): string {
  const params = new URLSearchParams()
  if (subject) params.set("subject", subject)
  if (body) params.set("body", body)
  const query = params.toString()
  return query ? `${CONTACT_MAILTO}?${query}` : CONTACT_MAILTO
}

export function openMailto(subject?: string, body?: string): void {
  window.location.href = mailtoLink(subject, body)
}
