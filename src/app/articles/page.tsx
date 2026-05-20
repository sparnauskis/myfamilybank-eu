import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Articles sur l'argent en famille | BanqueDeFamille",
  description:
    "Articles pratiques pour les parents sur l'argent de poche, l'epargne, les accords familiaux et l'education financiere des enfants.",
  alternates: {
    canonical: "/articles",
    languages: {
      fr: "https://banquedefamille.fr/articles",
      "x-default": "https://banquedefamille.fr/articles"
    }
  },
  openGraph: {
    title: "Articles sur l'argent en famille | BanqueDeFamille",
    description:
      "Articles pratiques pour les parents sur l'argent de poche, l'epargne et l'education financiere des enfants.",
    url: "https://banquedefamille.fr/articles",
    siteName: "BanqueDeFamille",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Articles BanqueDeFamille sur l'argent en famille"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles sur l'argent en famille | BanqueDeFamille",
    description:
      "Articles pratiques pour les parents sur l'argent de poche, l'epargne et l'education financiere des enfants.",
    images: ["/og-image.svg"]
  }
};

const categories = Array.from(new Set(articles.map((article) => article.category)));

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-8 md:pb-20 md:pt-16">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-moss/10 bg-white/70 px-4 py-2 text-sm font-bold text-moss shadow-sm">
            <BookOpen size={16} />
            Guide d'argent familial
          </div>
          <h1 className="text-5xl font-black leading-[1.05] tracking-normal text-ink md:text-7xl">
            Des habitudes d'argent pratiques pour des familles plus calmes.
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink/70">
            Guides pour les parents qui veulent transmettre l'argent de poche, l'epargne, les demandes et la
            responsabilite financiere sans transformer chaque decision en lecon.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          {categories.map((category) => (
            <span key={category} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-moss shadow-sm">
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2 md:px-8 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex min-h-[280px] flex-col justify-between rounded-3xl border border-moss/10 bg-cream p-7 transition hover:-translate-y-1 hover:border-moss/25 hover:shadow-soft"
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-xs font-black uppercase tracking-[0.18em] text-sage">
                  <span>{article.category}</span>
                  <span>{article.readingTime}</span>
                </div>
                <h2 className="mt-5 text-2xl font-black leading-tight text-ink group-hover:text-moss">
                  {article.title}
                </h2>
                <p className="mt-4 leading-7 text-ink/65">{article.description}</p>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-black text-coral">
                Lire l'article <ArrowRight size={17} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-moss px-5 py-16 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-white/45">Essayez en pratique</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal">Explorez le sandbox d'argent familial.</h2>
          </div>
          <Link
            href="/sandbox"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-black text-moss transition hover:bg-cream"
          >
            Ouvrir le Sandbox <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
