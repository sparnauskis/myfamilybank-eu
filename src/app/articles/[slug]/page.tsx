import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, CalendarDays } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { articles, getArticle, getRelatedArticles } from "@/content/articles";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticle(params.slug);

  if (!article) {
    return {
      title: "Article not found | MyFamilyBank"
    };
  }

  return {
    title: `${article.title} | MyFamilyBank`,
    description: article.description,
    alternates: {
      canonical: `/articles/${article.slug}`,
      languages: {
        en: `https://myfamilybank.eu/articles/${article.slug}`,
        "x-default": `https://myfamilybank.eu/articles/${article.slug}`,
        ...(article.originalLtUrl ? { lt: article.originalLtUrl } : {})
      }
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://myfamilybank.eu/articles/${article.slug}`,
      type: "article",
      siteName: "MyFamilyBank",
      locale: "en_GB",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: ["MyFamilyBank"],
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: article.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/og-image.svg"]
    }
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(article.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: "MyFamilyBank"
    },
    publisher: {
      "@type": "Organization",
      name: "MyFamilyBank",
      url: "https://myfamilybank.eu"
    },
    mainEntityOfPage: `https://myfamilybank.eu/articles/${article.slug}`
  };

  return (
    <main className="min-h-screen bg-cream text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />

      <article className="mx-auto max-w-4xl px-5 pb-20 pt-8 md:px-8 md:pt-14">
        <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-black text-moss hover:text-coral">
          <ArrowLeft size={17} />
          All articles
        </Link>

        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-ink/55">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-moss shadow-sm">
              <BookOpen size={16} />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={16} />
              {article.readingTime}
            </span>
          </div>
          <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-normal text-ink md:text-7xl">
            {article.title}
          </h1>
          <p className="mt-7 text-xl leading-9 text-ink/70">{article.intro}</p>
        </header>

        <div className="mt-12 rounded-[28px] bg-white p-5 shadow-sm md:p-8">
          <div className="space-y-12">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-black tracking-normal text-moss">{section.heading}</h2>
                <div className="mt-5 space-y-5">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-lg leading-8 text-ink/70">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <section className="mt-12 rounded-[28px] bg-moss p-7 text-white md:p-9">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-white/45">Put it into practice</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal">Try a demo family bank in the Sandbox.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/75">
            Explore pocket money, saving rules and parent approvals before creating your own family bank.
            It works in the browser as a Progressive Web App, with a mobile app feel and no app store download.
            No email, phone number,
            real names or real banking details are required for the demo flow.
          </p>
          <Link
            href="/sandbox"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-black text-moss transition hover:bg-cream"
          >
            Open Sandbox <ArrowRight size={20} />
          </Link>
        </section>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-black text-ink">Related articles</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/articles/${item.slug}`}
                  className="rounded-2xl border border-moss/10 bg-white p-5 shadow-sm transition hover:border-moss/25"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-sage">{item.category}</p>
                  <h3 className="mt-3 text-lg font-black leading-tight text-ink">{item.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <SiteFooter />
    </main>
  );
}
