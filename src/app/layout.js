import { Inter, Lobster_Two, Poppins } from "next/font/google";
import FloatingContact from "@/components/layout/FloatingContact";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SkipLink from "@/components/layout/SkipLink";
import JsonLd from "@/components/seo/JsonLd";
import Providers from "@/components/theme/Providers";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const lobster = Lobster_Two({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
  display: "swap",
  variable: "--font-lobster",
});

const siteUrl = "https://switch2travel.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Switch 2 Travel | India Holiday Packages",
    template: "%s | Switch 2 Travel",
  },
  description:
    "Switch 2 Travel plans India holidays — Himachal, Kashmir, Ladakh, Kerala, Goa and more. Flip a switch and you're on your way. Travel made easier.",
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
    description: "Curated India holiday packages by region. Travel made easier.",
    images: [{ url: "/final.png", width: 1200, height: 630, alt: "Switch 2 Travel — Travel Made Easier" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Switch 2 Travel",
    description: "India holiday packages — travel made easier.",
    images: ["/final.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
    shortcut: ["/favicon-32x32.png"],
  },
  applicationName: "Switch 2 Travel",
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "#0B1437",
  width: "device-width",
  initialScale: 1,
};

const themeBootScript = `(function(){try{if(localStorage.getItem("s2t-theme")==="dark"){document.documentElement.classList.add("dark");}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${poppins.variable} ${lobster.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans antialiased" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <JsonLd data={organizationJsonLd()} />
        <Providers>
          <SkipLink />
          <Navbar />
          <main id="main" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <Footer />
          <FloatingContact />
        </Providers>
      </body>
    </html>
  );
}
