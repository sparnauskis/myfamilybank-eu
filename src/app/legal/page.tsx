import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, EyeOff, Globe2, GraduationCap, ShieldCheck } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Mentions, confidentialite et conformite | BanqueDeFamille",
  description:
    "Mentions legales, approche de confidentialite, auto-evaluation RGPD et synthese d'alignement avec l'education financiere europeenne pour BanqueDeFamille.",
  alternates: {
    canonical: "/legal",
    languages: {
      fr: "https://banquedefamille.fr/legal",
      "x-default": "https://banquedefamille.fr/legal"
    }
  },
  openGraph: {
    title: "Mentions, confidentialite et conformite | BanqueDeFamille",
    description:
      "Comment BanqueDeFamille aborde la confidentialite, l'usage educatif, les principes RGPD et les limites de l'education financiere.",
    url: "https://banquedefamille.fr/legal",
    siteName: "BanqueDeFamille",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Informations legales et confidentialite de BanqueDeFamille"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentions, confidentialite et conformite | BanqueDeFamille",
    description:
      "Comment BanqueDeFamille aborde la confidentialite, l'usage educatif, les principes RGPD et les limites de l'education financiere.",
    images: ["/og-image.svg"]
  }
};

const gdprFindings = [
  {
    title: "Minimisation des donnees",
    text: "Le parcours de banque familiale ne demande pas d'adresse e-mail, de numero de telephone, de noms reels ou de coordonnees bancaires. Les familles peuvent utiliser des prenoms ou des surnoms."
  },
  {
    title: "Pas d'identification directe de la famille",
    text: "Le systeme stocke les donnees operationnelles de la banque familiale, comme les profils, les codes PIN, les soldes, les accords et les demandes, sans les relier a des identifiants personnels directs."
  },
  {
    title: "Finalite educative limitee",
    text: "Les informations stockees servent a faire fonctionner l'experience d'apprentissage familial, pas a creer des profils de credit, vendre des produits financiers ou faire de la publicite comportementale."
  },
  {
    title: "Sandbox sans donnees familiales reelles",
    text: "Le Sandbox peut etre explore avec une famille de demonstration avant qu'un foyer cree sa propre banque familiale."
  }
];

const educationFindings = [
  {
    title: "Positionnement educatif clair",
    text: "BanqueDeFamille est presente comme un outil d'education financiere pour les familles, pas comme une banque, un etablissement de monnaie electronique, un preteur, un fournisseur d'investissement ou un service de paiement."
  },
  {
    title: "Aucun produit financier reel",
    text: "Le service ne fournit pas de vrais comptes bancaires, cartes, depots, credits, produits d'investissement, execution de paiement ou conseil financier reglemente."
  },
  {
    title: "Litteratie financiere pratique",
    text: "Le produit soutient un apprentissage adapte a l'age autour de l'argent de poche, de l'epargne, des demandes, des accords familiaux et de la responsabilite."
  },
  {
    title: "Decisions guidees par les parents",
    text: "Les regles, validations et accords restent dans la famille. Le produit structure la conversation mais ne prend pas de decisions financieres pour le foyer."
  }
];

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-8 md:pb-20 md:pt-16">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-moss/10 bg-white/70 px-4 py-2 text-sm font-bold text-moss shadow-sm">
            <ShieldCheck size={16} />
            Informations legales et confidentialite
          </div>
          <h1 className="text-5xl font-black leading-[1.05] tracking-normal text-ink md:text-7xl">
            Concu pour apprendre en famille, pas pour faire de la vraie banque.
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink/70">
            BanqueDeFamille est un outil d'education financiere familiale. Il aide parents et enfants a pratiquer
            l'argent de poche, l'epargne, les demandes et les accords simples dans un cadre familial prive.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 md:px-8">
          <article className="rounded-3xl border border-moss/10 bg-cream p-7">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
              <GraduationCap size={24} />
            </div>
            <h2 className="mt-6 text-2xl font-black text-ink">Outil educatif</h2>
            <p className="mt-3 leading-7 text-ink/65">
              BanqueDeFamille est concu pour apprendre les habitudes d'argent a la maison. Ce n'est pas une banque ni
              un etablissement financier agree.
            </p>
          </article>
          <article className="rounded-3xl border border-moss/10 bg-cream p-7">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
              <EyeOff size={24} />
            </div>
            <h2 className="mt-6 text-2xl font-black text-ink">Pas d'identifiants directs</h2>
            <p className="mt-3 leading-7 text-ink/65">
              Le produit ne demande pas d'e-mail, de telephone, de noms reels ou de coordonnees bancaires pour le
              parcours de banque familiale.
            </p>
          </article>
          <article className="rounded-3xl border border-moss/10 bg-cream p-7">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
              <ClipboardCheck size={24} />
            </div>
            <h2 className="mt-6 text-2xl font-black text-ink">Synthese d'audit</h2>
            <p className="mt-3 leading-7 text-ink/65">
              Les syntheses ci-dessous sont des auto-evaluations internes du produit, pas un avis juridique, une
              certification ou une approbation d'un regulateur.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.7fr_1fr] md:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">Approche confidentialite</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
            Nous evitons de collecter ce qui identifie la famille.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            BanqueDeFamille stocke les informations necessaires au fonctionnement de l'experience familiale : profils,
            codes PIN, soldes, accords et demandes. Ces donnees ne sont pas reliees a des identifiants personnels
            directs indiquant a quelle famille reelle elles appartiennent.
          </p>
        </div>
        <div className="rounded-[28px] bg-linen p-4">
          <div className="space-y-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-black text-ink">Ce que nous ne demandons pas</h3>
              <p className="mt-2 leading-7 text-ink/65">
                Adresses e-mail, numeros de telephone, noms reels, adresses postales, vrais numeros de compte bancaire
                ou donnees de carte.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-black text-ink">Ce qui peut etre stocke</h3>
              <p className="mt-2 leading-7 text-ink/65">
                Profils de banque familiale, donnees d'acces PIN, parametres d'argent de poche, soldes, accords et
                demandes.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-black text-ink">Comment les familles devraient l'utiliser</h3>
              <p className="mt-2 leading-7 text-ink/65">
                Utilisez des prenoms ou surnoms. Ne saisissez pas de vrais identifiants bancaires, documents sensibles
                ou informations d'identite privees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">Engagements produit</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
              Education de base gratuite et langues familiales flexibles.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              BanqueDeFamille est pense pour des familles de pays, langues et cultures domestiques differentes. Un
              parent peut accompagner des enfants qui vivent dans des lieux differents et utilisent des langues
              quotidiennes differentes. Le parcours educatif essentiel doit rester accessible, et les mots peuvent etre
              adaptes sans changer la methode familiale.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-moss/10 bg-cream p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-black text-ink">Parcours educatif de base gratuit</h3>
              <p className="mt-3 leading-7 text-ink/65">
                La banque familiale educative de base est gratuite pour les familles : regles d'argent de poche, soldes,
                demandes et validations parentales. Des fonctions payantes futures peuvent exister, mais elles doivent
                prolonger l'experience plutot que retirer le coeur d'apprentissage.
              </p>
            </article>
            <article className="rounded-3xl border border-moss/10 bg-cream p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
                <Globe2 size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-black text-ink">Textes d'interface modifiables</h3>
              <p className="mt-3 leading-7 text-ink/65">
                Les textes de l'interface PWA peuvent etre modifies par le client. Cela aide les familles, ecoles ou
                partenaires a adapter les mots a la langue, a la culture et aux termes financiers familiaux de chaque
                enfant.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">Auto-evaluation RGPD</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
              Synthese interne pour les principes RGPD.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              Il s'agit d'une auto-evaluation produit sur la conception de BanqueDeFamille autour de la confidentialite
              par defaut et de la minimisation des donnees. Ce n'est pas une certification RGPD formelle.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {gdprFindings.map((finding) => (
              <article key={finding.title} className="rounded-3xl border border-moss/10 bg-cream p-7">
                <h3 className="text-2xl font-black text-ink">{finding.title}</h3>
                <p className="mt-3 leading-7 text-ink/65">{finding.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">
              Alignement education financiere
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
              Synthese interne pour les attentes europeennes d'education financiere.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              BanqueDeFamille s'aligne avec l'orientation generale europeenne visant a ameliorer la litteratie
              financiere, notamment par l'apprentissage pratique, la transparence et la prise de decision informee. Le
              produit ne revendique aucune approbation au titre d'une licence de services financiers specifique.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {educationFindings.map((finding) => (
              <article key={finding.title} className="rounded-3xl border border-moss/10 bg-white p-7">
                <h3 className="text-2xl font-black text-ink">{finding.title}</h3>
                <p className="mt-3 leading-7 text-ink/65">{finding.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-moss px-5 py-16 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-white/45">Essayez sans risque</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal">
              Explorez le Sandbox sans donnees familiales reelles.
            </h2>
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
