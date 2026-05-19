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
    title: "One weekly money check-in",
    text: "Turn pocket money, saving habits and requests into a small family rhythm instead of daily arguments."
  },
  {
    icon: HeartHandshake,
    title: "Agreements children understand",
    text: "Parents and children see the same rules, balances and pending requests in plain language."
  },
  {
    icon: PiggyBank,
    title: "Try it before real money",
    text: "Use the demo family bank to explore the flow safely before creating your own."
  }
];

const steps = [
  "Create a parent profile and add children.",
  "Agree weekly pocket money, saving rules and limits.",
  "Let children make deposit or withdrawal requests.",
  "Approve together and keep the conversation calm."
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
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage">Family dashboard</p>
              <h2 className="mt-1 text-2xl font-black text-moss">Sunday plan</h2>
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
                  <p className="text-sm font-bold text-ink">Mia's child view</p>
                  <p className="text-xs text-ink/55">Pocket money and requests</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-linen/70 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-moss/60">Balance</span>
                    <span className="text-2xl font-black text-moss">€146.00</span>
                  </div>
                </div>
                <div className="rounded-2xl bg-linen/70 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-ink">Saving rule</span>
                    <span className="font-black text-sage">25%</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 rounded-2xl bg-linen/70 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss/60">Pending request</p>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-ink">Withdraw €12 for cinema</p>
                  <BadgeCheck className="shrink-0 text-sage" size={22} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-moss p-4 text-white">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/12">
                <HandCoins size={24} />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/50">Parent view</p>
              <p className="mt-2 text-4xl font-black">€8.00</p>
              <div className="mt-6 space-y-3 text-sm text-white/75">
                <div className="flex items-center justify-between">
                  <span>Weekly pocket money</span>
                  <span className="font-bold text-white">Ready</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Parent PIN</span>
                  <span className="font-bold text-white">Ready</span>
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
            Built for calm family money habits
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-normal text-ink md:text-7xl">
            Pocket money without daily arguments.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70">
            MyFamilyBank helps parents and children agree on pocket money, saving rules and requests in one warm,
            transparent place. Children learn by managing, not by being lectured.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/sandbox"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 text-base font-black text-white shadow-lg shadow-coral/20 transition hover:bg-[#d8624b]"
            >
              Try the Sandbox <ArrowRight size={20} />
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-moss/15 bg-white px-7 py-4 text-base font-black text-moss shadow-sm transition hover:border-moss/30"
            >
              Create your family bank
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold text-ink/55">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-sage" /> Educational system
            </span>
            <span className="inline-flex items-center gap-2">
              <LockKeyhole size={16} className="text-sage" /> Safe demo mode
            </span>
            <span className="inline-flex items-center gap-2">
              <EyeOff size={16} className="text-sage" /> No email, phone or real names required
            </span>
          </div>
        </div>
        <ProductPreview />
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">How it helps</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
              A small structure for a calmer home.
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
          <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">The flow</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
            From “can I have money?” to a shared plan.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            MyFamilyBank is not a real bank. It is a shared family space for financial education,
            responsibility and trust.
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
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">Parent to parent</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
              A family method before it became a product.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">
              MyFamilyBank grew out of a real family method, used at home for years while raising two children.
              It began as a calmer way to talk about pocket money, responsibility and trust, and later became a
              tool other families can try.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/70">
              My own children are now building independent paths in research and startups. MyFamilyBank does not
              promise those outcomes. It simply shares the family money structure that helped our home talk about
              responsibility without daily arguments.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-moss px-5 py-20 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-white/45">Sandbox first</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal md:text-5xl">
              Explore a demo family bank before creating your own.
            </h2>
          </div>
          <Link
            href="/sandbox"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-black text-moss transition hover:bg-cream"
          >
            Open Sandbox <ArrowRight size={20} />
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
              Mobile app experience, PWA
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
              A Progressive Web App for family money habits.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">
              MyFamilyBank works like a mobile app, but runs as a PWA in the browser. Families can add it to a phone
              home screen for quick access, without downloading anything from the App Store or Google Play.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">For families everywhere</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
              Free core learning, flexible family languages.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              The basic educational family bank is free for families: pocket money rules, balances, requests and parent
              approvals. If paid features are added later, they will extend the experience, not take away the core
              learning flow.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-moss/10 bg-cream p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-black text-ink">Core educational features stay free</h3>
              <p className="mt-3 leading-7 text-ink/65">
                Families can use the essential learning flow without a subscription: rules, balances, child requests
                and parent approvals.
              </p>
            </article>
            <article className="rounded-3xl border border-moss/10 bg-cream p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
                <Globe2 size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-black text-ink">Editable PWA interface text</h3>
              <p className="mt-3 leading-7 text-ink/65">
                The PWA interface text can be edited by the client. A parent supporting children in different
                countries can adapt each family bank to the child's language, culture and household rules.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">Learn at home</p>
              <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
                Guides for family money conversations.
              </h2>
            </div>
            <Link href="/articles" className="inline-flex items-center gap-2 text-base font-black text-coral">
              View all articles <ArrowRight size={20} />
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
