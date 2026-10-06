/** Single source for Switch 2 Travel contact details. */
export const contact = {
  expertName: "Chinmay Shinde",
  expertRole: "Travel expert",
  phoneDisplay: "+91 83690 25524",
  phoneTel: "+918369025524",
  phoneWhatsApp: "918369025524",
  email: "switch2travel@gmail.com",
  hours: "Mon–Sat · 10:00 am – 7:00 pm IST",
  social: {
    instagram: "https://www.instagram.com/switch2travel",
    facebook: "https://www.facebook.com/share/1DSEfnbH22/",
  },
};

export function mailtoHref() {
  return `mailto:${contact.email}`;
}

export function telHref() {
  return `tel:${contact.phoneTel}`;
}

export function whatsappHref(message = "Hi Switch 2 Travel, I’d like help planning a trip.") {
  return `https://wa.me/${contact.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
}
