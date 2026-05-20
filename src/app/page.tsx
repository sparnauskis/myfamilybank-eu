import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  EyeOff,
  Globe2,
  HandCoins,
  HeartHandshake,
  Home as HomeIcon,
  LockKeyhole,
  PiggyBank,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WalletCards
} from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { articles } from "@/content/articles";

const features = [
  {
    icon: CalendarCheck,
    title: "Un rendez-vous d'argent par semaine",
    text: "Transformez l'argent de poche, l'epargne et les demandes en petit rythme familial au lieu de disputes quotidiennes."
  },
  {
    icon: HeartHandshake,
    title: "Des accords que les enfants comprennent",
    text: "Parents et enfants voient les memes regles, les soldes et les demandes en attente dans un langage simple."
  },
  {
    icon: PiggyBank,
    title: "Essayez avant de creer la votre",
    text: "Utilisez la banque familiale de demonstration pour explorer le parcours en securite avant de creer votre propre espace."
  }
];

const steps = [
  "Creez un profil parent et ajoutez les enfants.",
  "Fixez l'argent de poche hebdomadaire, les regles d'epargne et les limites.",
  "Laissez les enfants faire des demandes de depot ou de retrait.",
  "Validez ensemble et gardez une conversation calme."
];

function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -left-8 top-16 hidden h-28 w-28 rounded-full bg-coral/20 blur-2xl md:block" />
      <div className="absolute -right-6 bottom-8 hidden h-32 w-32 rounded-full bg-sage/25 blur-2xl md:block" />
      <div className="relative rounded-[28px] border border-moss/10 bg-white p-4 shadow-soft">
        <div className="rounded-[22px] bg-cream p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage">Tableau familial</p>
              <h2 className="mt-1 text-2xl font-black text-moss">Plan du dimanche</h2>
            </div>
            <div className="rounded-full bg-moss px-4 py-2 text-sm font-bold text-white">Demo</div>
          </div>

          <div className="grid gap-3 md:grid-cols-[1fr_0.78fr]">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-coral/15 text-coral">
                  <WalletCards size={23} />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">Vue enfant de Mia</p>
                  <p className="text-xs text-ink/55">Argent de poche et demandes</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-linen/70 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-moss/60">Solde</span>
                    <span className="text-2xl font-black text-moss">€146.00</span>
                  </div>
                </div>
                <div className="rounded-2xl bg-linen/70 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-ink">Regle d'epargne</span>
                    <span className="font-black text-sage">25%</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 rounded-2xl bg-linen/70 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss/60">Demande en attente</p>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-ink">Retirer €12 pour le cinema</p>
                  <BadgeCheck className="shrink-0 text-sage" size={22} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-moss p-4 text-white">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/12">
                <HandCoins size={24} />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/50">Vue parent</p>
              <p className="mt-2 text-4xl font-black">€8.00</p>
              <div className="mt-6 space-y-3 text-sm text-white/75">
                <div className="flex items-center justify-between">
                  <span>Argent de poche hebdomadaire</span>
                  <span className="font-bold text-white">Pret</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Code PIN parent</span>
                  <span className="font-bold text-white">Pret</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <SiteHeader />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-8 md:grid-cols-[0.96fr_1fr] md:px-8 md:pb-28 md:pt-16">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-moss/10 bg-white/70 px-4 py-2 text-sm font-bold text-moss shadow-sm">
            <Sparkles size={16} />
            Concu pour des habitudes d'argent plus calmes en famille
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-normal text-ink md:text-7xl">
            L'argent de poche sans disputes quotidiennes.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70">
            BanqueDeFamille aide parents et enfants a se mettre d'accord sur l'argent de poche, les regles d'epargne
            et les demandes dans un espace chaleureux et transparent. Les enfants apprennent en gerant, pas en ecoutant
            une lecon.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/sandbox"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 text-base font-black text-white shadow-lg shadow-coral/20 transition hover:bg-[#d8624b]"
            >
              Essayer le Sandbox <ArrowRight size={20} />
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-moss/15 bg-white px-7 py-4 text-base font-black text-moss shadow-sm transition hover:border-moss/30"
            >
              Creer votre banque familiale
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold text-ink/55">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-sage" /> Systeme educatif
            </span>
            <span className="inline-flex items-center gap-2">
              <LockKeyhole size={16} className="text-sage" /> Mode demo securise
            </span>
            <span className="inline-flex items-center gap-2">
              <EyeOff size={16} className="text-sage" /> Aucun e-mail, telephone ou nom reel requis
            </span>
          </div>
        </div>
        <ProductPreview />
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">Ce que cela change</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
              Une petite structure pour une maison plus calme.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-3xl border border-moss/10 bg-cream p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
                  <feature.icon size={24} />
                </div>
                <h3 className="mt-6 text-xl font-black text-ink">{feature.title}</h3>
                <p className="mt-3 leading-7 text-ink/65">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.82fr_1fr] md:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">Le parcours</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
            De "je peux avoir de l'argent ?" a un plan partage.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            BanqueDeFamille n'est pas une vraie banque. C'est un espace familial partage pour l'education financiere,
            la responsabilite et la confiance.
          </p>
        </div>
        <div className="rounded-[28px] bg-linen p-4">
          <div className="grid gap-3">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-moss text-sm font-black text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-lg font-bold text-ink">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.72fr_1fr] md:px-8">
          <div className="grid h-16 w-16 place-items-center rounded-3xl bg-cream text-moss shadow-sm">
            <HomeIcon size={30} />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">De parent a parent</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
              Une methode familiale avant de devenir un produit.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">
              BanqueDeFamille vient d'une vraie methode familiale, utilisee a la maison pendant des annees avec deux
              enfants. Elle a commence comme une facon plus calme de parler d'argent de poche, de responsabilite et de
              confiance, puis elle est devenue un outil que d'autres familles peuvent essayer.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/70">
              Mes propres enfants construisent aujourd'hui leur chemin dans la recherche et les startups. BanqueDeFamille
              ne promet pas ces resultats. Elle partage simplement la structure d'argent familial qui a aide notre foyer
              a parler de responsabilite sans disputes quotidiennes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-moss px-5 py-20 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-white/45">Sandbox d'abord</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal md:text-5xl">
              Explorez une banque familiale de demonstration avant de creer la votre.
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

      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.72fr_1fr] md:px-8">
          <div className="grid h-16 w-16 place-items-center rounded-3xl bg-white text-moss shadow-sm">
            <Smartphone size={30} />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">
              Experience d'application mobile, PWA
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
              Une Progressive Web App pour les habitudes d'argent en famille.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">
              BanqueDeFamille fonctionne comme une application mobile, mais tourne comme une PWA dans le navigateur.
              Les familles peuvent l'ajouter a l'ecran d'accueil du telephone pour un acces rapide, sans rien telecharger
              depuis l'App Store ou Google Play.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">Pour les familles partout</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
              Un coeur educatif gratuit, des mots adaptes a chaque famille.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              La banque familiale educative de base est gratuite pour les familles : regles d'argent de poche, soldes,
              demandes et validations parentales. Si des fonctions payantes sont ajoutees plus tard, elles prolongeront
              l'experience sans retirer le parcours d'apprentissage essentiel.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-moss/10 bg-cream p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-black text-ink">
                Les fonctions educatives essentielles restent gratuites
              </h3>
              <p className="mt-3 leading-7 text-ink/65">
                Les familles peuvent utiliser le parcours essentiel sans abonnement : regles, soldes, demandes des
                enfants et validations des parents.
              </p>
            </article>
            <article className="rounded-3xl border border-moss/10 bg-cream p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
                <Globe2 size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-black text-ink">Textes d'interface PWA modifiables</h3>
              <p className="mt-3 leading-7 text-ink/65">
                Les textes de l'interface PWA peuvent etre modifies par le client. Un parent qui accompagne des enfants
                dans differents pays peut adapter chaque banque familiale a la langue, a la culture et aux regles du foyer.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">Apprendre a la maison</p>
              <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
                Des guides pour parler d'argent en famille.
              </h2>
            </div>
            <Link href="/articles" className="inline-flex items-center gap-2 text-base font-black text-coral">
              Voir tous les articles <ArrowRight size={20} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="rounded-3xl border border-moss/10 bg-cream p-7 transition hover:-translate-y-1 hover:border-moss/25 hover:shadow-soft"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-sage">{article.category}</p>
                <h3 className="mt-4 text-2xl font-black leading-tight text-ink">{article.title}</h3>
                <p className="mt-4 leading-7 text-ink/65">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
