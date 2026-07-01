import type { Metadata } from "next"
import ContactHero from "@/components/contact/ContactHero"
import ContactInfo from "@/components/contact/ContactInfo"
import ContactForm from "@/components/contact/ContactForm"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Prime Funding for investment enquiries, loan applications, or general questions.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="bg-[#0a0f1c] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
