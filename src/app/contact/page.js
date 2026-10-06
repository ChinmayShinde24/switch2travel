import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { getAllRegions } from "@/lib/trips";

export const metadata = {
  title: "Contact Switch 2 Travel",
  description:
    "Contact Switch 2 Travel to plan Himachal, Kashmir, Ladakh, Kerala and more. Get a free trip plan for your India holiday.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const regions = getAllRegions();

  return (
    <Section
      eyebrow="Contact"
      title="Let’s plan your next switch"
      description="Share a few details and we’ll suggest packages or customise an itinerary. Demo form — wire it to your CRM later."
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="space-y-6 rounded-2xl bg-navy p-6 text-white sm:p-8">
          <div>
            <p className="tagline text-[10px] text-amber-bright">Reach us</p>
            <h2 className="mt-2 font-display text-2xl text-white">Travel desk</h2>
          </div>
          <ul className="space-y-4 text-sm text-white/80">
            <li>
              <span className="block text-xs uppercase tracking-wide text-white/50">Phone</span>
              <a href="tel:+919999999999" className="mt-1 inline-block hover:text-white">
                +91 99999 99999
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wide text-white/50">Email</span>
              <a href="mailto:hello@switch2travel.com" className="mt-1 inline-block hover:text-white">
                hello@switch2travel.com
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wide text-white/50">Hours</span>
              <p className="mt-1">Mon–Sat · 10:00 am – 7:00 pm IST</p>
            </li>
          </ul>
        </aside>

        <form className="space-y-5 rounded-2xl border border-line bg-white p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-2 block font-medium text-navy">Full name</span>
              <input
                name="name"
                required
                className="w-full rounded-md border border-line bg-sand/40 px-3 py-3 outline-none ring-amber/40 focus:ring-2"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block font-medium text-navy">Phone</span>
              <input
                name="phone"
                type="tel"
                required
                className="w-full rounded-md border border-line bg-sand/40 px-3 py-3 outline-none ring-amber/40 focus:ring-2"
                placeholder="+91"
              />
            </label>
          </div>

          <label className="block text-sm">
            <span className="mb-2 block font-medium text-navy">Email</span>
            <input
              name="email"
              type="email"
              className="w-full rounded-md border border-line bg-sand/40 px-3 py-3 outline-none ring-amber/40 focus:ring-2"
              placeholder="you@email.com"
            />
          </label>

          <label className="block text-sm">
            <span className="mb-2 block font-medium text-navy">Preferred region</span>
            <select
              name="region"
              className="w-full rounded-md border border-line bg-sand/40 px-3 py-3 outline-none ring-amber/40 focus:ring-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select a region
              </option>
              {regions.map((region) => (
                <option key={region.slug} value={region.slug}>
                  {region.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm">
            <span className="mb-2 block font-medium text-navy">Trip notes</span>
            <textarea
              name="notes"
              rows={4}
              className="w-full resize-y rounded-md border border-line bg-sand/40 px-3 py-3 outline-none ring-amber/40 focus:ring-2"
              placeholder="Dates, group size, budget, special requests..."
            />
          </label>

          <Button type="submit" variant="primary">
            Send enquiry
          </Button>
          <p className="text-xs text-muted">
            This is a demo UI. Connect the form to WhatsApp, email or your booking system when ready.
          </p>
        </form>
      </div>
    </Section>
  );
}
