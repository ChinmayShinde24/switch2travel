import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const siteUrl = "https://switch2travel.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Switch 2 Travel | India Holiday Packages",
    template: "%s | Switch 2 Travel",
  },
  description:
    "Switch 2 Travel plans clean, easy India holidays — Himachal, Kashmir, Ladakh, Kerala, Goa, Rajasthan and more. Travel made easier.",
  keywords: [
    "Switch 2 Travel",
    "India travel agency",
    "Himachal packages",
    "Kashmir tour",
    "Ladakh trip",
    "holiday packages India",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Switch 2 Travel",
    title: "Switch 2 Travel | India Holiday Packages",
    description:
      "Curated India holiday packages by region. Travel made easier.",
    images: [{ url: "/logo.jpg", width: 800, height: 800, alt: "Switch 2 Travel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Switch 2 Travel",
    description: "India holiday packages — travel made easier.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Slabo+13px&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col font-body antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
