import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://myfamilybank.eu"),
  title: "MyFamilyBank - Family money habits without daily arguments",
  description:
    "A warm family money PWA with free core education, editable multilingual interface text and a safe sandbox demo.",
  alternates: {
    canonical: "https://myfamilybank.eu",
    languages: {
      en: "https://myfamilybank.eu",
      "x-default": "https://myfamilybank.eu"
    }
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "MyFamilyBank",
    description:
      "Teach children money through calm family agreements, pocket money and a safe sandbox demo.",
    url: "https://myfamilybank.eu",
    siteName: "MyFamilyBank",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MyFamilyBank - family money habits without daily arguments"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MyFamilyBank",
    description:
      "Teach children money through calm family agreements, pocket money and a safe sandbox demo.",
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff8ec"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "MyFamilyBank",
      url: "https://myfamilybank.eu",
      logo: "https://myfamilybank.eu/icon.svg",
      description:
        "An educational family finance PWA with free core learning, editable multilingual interface text, family agreements and a safe sandbox demo."
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "MyFamilyBank",
      url: "https://myfamilybank.eu",
      inLanguage: "en",
      description:
        "A warm family money Progressive Web App with free core learning, editable multilingual interface text, simple agreements and a safe sandbox demo."
    }
  ];

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
