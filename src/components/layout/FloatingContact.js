"use client";

import { Phone } from "lucide-react";
import { contact, telHref, whatsappHref } from "@/lib/contact";
import { focusRing } from "@/lib/styles";
import { cn } from "@/lib/cn";

export default function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-5 z-40 flex flex-col gap-3">
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${contact.expertName}`}
        className={cn(
          "inline-flex size-12 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-navy-lg transition duration-300 hover:-translate-y-0.5",
          focusRing
        )}
      >
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
          <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l6-1.6A11 11 0 0 0 20.5 3.5zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.6.9.9-3.5-.2-.3A9.1 9.1 0 1 1 12 20.5zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 15 15 0 0 0 1.5.5 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3z" />
        </svg>
      </a>
      <a
        href={telHref()}
        aria-label={`Call ${contact.expertName}`}
        className={cn(
          "inline-flex size-12 items-center justify-center rounded-full bg-brand-blue-600 text-white shadow-navy-lg transition duration-300 hover:bg-brand-blue-500 hover:-translate-y-0.5",
          focusRing
        )}
      >
        <Phone className="size-5" strokeWidth={1.5} />
      </a>
    </div>
  );
}
