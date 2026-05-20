import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://banquedefamille.fr"),
  title: "BanqueDeFamille - L'argent de poche sans disputes quotidiennes",
  description:
    "Une PWA familiale et chaleureuse pour l'argent de poche, l'education financiere, les textes d'interface modifiables et une demo sandbox securisee.",
  alternates: {
    canonical: "https://banquedefamille.fr",
    languages: {
      fr: "https://banquedefamille.fr",
      "x-default": "https://banquedefamille.fr"
    }
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "BanqueDeFamille",
    description:
      "Aidez les enfants a comprendre l'argent grace a des accords familiaux simples, l'argent de poche et une demo sandbox securisee.",
    url: "https://banquedefamille.fr",
    siteName: "BanqueDeFamille",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "BanqueDeFamille - l'argent de poche sans disputes quotidiennes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BanqueDeFamille",
    description:
      "Aidez les enfants a comprendre l'argent grace a des accords familiaux simples, l'argent de poche et une demo sandbox securisee.",
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
      name: "BanqueDeFamille",
      url: "https://banquedefamille.fr",
      logo: "https://banquedefamille.fr/icon.svg",
      description:
        "Une PWA d'education financiere familiale avec un coeur pedagogique gratuit, des textes d'interface modifiables, des accords familiaux et une demo sandbox securisee."
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "BanqueDeFamille",
      url: "https://banquedefamille.fr",
      inLanguage: "fr",
      description:
        "Une Progressive Web App familiale pour l'argent de poche, l'apprentissage gratuit, les textes d'interface modifiables, les accords simples et une demo sandbox securisee."
    }
  ];

  return (
    <html lang="fr">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
