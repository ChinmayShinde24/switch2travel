import { Mail, Phone } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import Container from "@/components/ui/Container";
import { contact, mailtoHref, telHref } from "@/lib/contact";

export const metadata = {
  title: "Contact",
  description:
    "Contact Chinmay Shinde at Switch 2 Travel to plan Himachal, Kashmir, Ladakh, Kerala and more. Call, email, or send a trip enquiry.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <p className="eyebrow mb-3 text-xs text-brand-blue-600 dark:text-brand-sky-400">Contact</p>
        <h1 className="text-brand-navy-700 dark:text-white">
          Let’s plan your next <span className="font-display text-brand-blue-600 dark:text-brand-sky-400">switch</span>
        </h1>
        <p className="measure mt-4 text-ink-600">
          Reach {contact.expertName}, your travel expert, with dates and a preferred region. We will suggest a package or sketch a custom route.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="h-fit rounded-card bg-deep-sky p-6 text-white sm:p-8">
            <p className="eyebrow text-[10px] text-brand-sky-400">Reach us</p>
            <p className="mt-2 font-heading text-2xl font-semibold">{contact.expertName}</p>
            <p className="mt-1 text-sm text-brand-sky-400">{contact.expertRole}</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href={telHref()} className="inline-flex min-h-11 items-center gap-3 hover:text-brand-sky-400">
                  <Phone className="size-5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mailtoHref()} className="inline-flex min-h-11 items-center gap-3 hover:text-brand-sky-400">
                  <Mail className="size-5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-3 hover:text-brand-sky-400"
                >
                  <InstagramIcon className="size-5 shrink-0" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-3 hover:text-brand-sky-400"
                >
                  <FacebookIcon className="size-5 shrink-0" />
                  Facebook
                </a>
              </li>
              <li className="text-white/75">{contact.hours}</li>
            </ul>
          </aside>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
