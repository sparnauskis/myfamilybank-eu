import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, EyeOff, Globe2, GraduationCap, ShieldCheck } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Legal, Privacy and Compliance | MyFamilyBank",
  description:
    "Legal notice, privacy approach, GDPR self-assessment and EU financial education alignment summary for MyFamilyBank.",
  alternates: {
    canonical: "/legal",
    languages: {
      en: "https://myfamilybank.eu/legal",
      "x-default": "https://myfamilybank.eu/legal"
    }
  },
  openGraph: {
    title: "Legal, Privacy and Compliance | MyFamilyBank",
    description:
      "How MyFamilyBank handles privacy, educational use, GDPR principles and financial education boundaries.",
    url: "https://myfamilybank.eu/legal",
    siteName: "MyFamilyBank",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MyFamilyBank legal and privacy information"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal, Privacy and Compliance | MyFamilyBank",
    description:
      "How MyFamilyBank handles privacy, educational use, GDPR principles and financial education boundaries.",
    images: ["/og-image.svg"]
  }
};

const gdprFindings = [
  {
    title: "Data minimisation",
    text: "The family bank flow does not require email addresses, phone numbers, real names or real banking details. Families can use nicknames and internal labels."
  },
  {
    title: "No direct family identification",
    text: "The system stores operational family-bank data such as profiles, PIN access, balances, agreements and requests, but these records are not tied to direct personal identifiers that would tell us which real family they belong to."
  },
  {
    title: "Educational purpose limitation",
    text: "Stored information is used to operate the family money learning experience, not to build credit profiles, sell financial products or run behavioural advertising."
  },
  {
    title: "Sandbox without real family data",
    text: "The Sandbox can be explored with a demo family before a household creates its own family bank."
  }
];

const educationFindings = [
  {
    title: "Clear educational positioning",
    text: "MyFamilyBank is presented as a financial education tool for families, not as a bank, e-money institution, lender, investment provider or payment service."
  },
  {
    title: "No real financial products",
    text: "The service does not provide real bank accounts, cards, deposits, loans, investment products, payment execution or regulated financial advice."
  },
  {
    title: "Practical money literacy",
    text: "The product supports age-appropriate learning around pocket money, saving habits, requests, family agreements and responsibility."
  },
  {
    title: "Parent-led decisions",
    text: "Money rules, approvals and agreements remain within the family. The product structures the conversation but does not make financial decisions for the household."
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
            Legal and privacy information
          </div>
          <h1 className="text-5xl font-black leading-[1.05] tracking-normal text-ink md:text-7xl">
            Built for family learning, not real banking.
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink/70">
            MyFamilyBank is an educational family finance tool. It helps parents and children practise pocket money,
            saving habits, requests and simple agreements in a private family setting.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 md:px-8">
          <article className="rounded-3xl border border-moss/10 bg-cream p-7">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
              <GraduationCap size={24} />
            </div>
            <h2 className="mt-6 text-2xl font-black text-ink">Educational tool</h2>
            <p className="mt-3 leading-7 text-ink/65">
              MyFamilyBank is designed for learning money habits at home. It is not a licensed bank or financial
              institution.
            </p>
          </article>
          <article className="rounded-3xl border border-moss/10 bg-cream p-7">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
              <EyeOff size={24} />
            </div>
            <h2 className="mt-6 text-2xl font-black text-ink">No direct identifiers</h2>
            <p className="mt-3 leading-7 text-ink/65">
              The product does not require email, phone, real names or real banking details for the family bank flow.
            </p>
          </article>
          <article className="rounded-3xl border border-moss/10 bg-cream p-7">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
              <ClipboardCheck size={24} />
            </div>
            <h2 className="mt-6 text-2xl font-black text-ink">Audit summary</h2>
            <p className="mt-3 leading-7 text-ink/65">
              The summaries below are internal product self-assessments, not legal advice, certification or regulator
              approval.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.7fr_1fr] md:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">Privacy approach</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
            We avoid collecting information that identifies the family.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            MyFamilyBank stores the information needed to run the family bank experience: profiles, PIN access,
            balances, agreements and requests. Those records are not connected to direct personal identifiers that would
            tell us which real family they belong to.
          </p>
        </div>
        <div className="rounded-[28px] bg-linen p-4">
          <div className="space-y-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-black text-ink">What we do not require</h3>
              <p className="mt-2 leading-7 text-ink/65">
                Email addresses, phone numbers, real names, home addresses, real bank account numbers or card details.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-black text-ink">What may be stored</h3>
              <p className="mt-2 leading-7 text-ink/65">
                Family-bank profiles, PIN access data, pocket money settings, balances, agreements and requests.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-black text-ink">How families should use it</h3>
              <p className="mt-2 leading-7 text-ink/65">
                Use nicknames or first names only. Do not enter real banking credentials, sensitive documents or private
                identity information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">Product commitments</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
              Free core education and flexible family languages.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              MyFamilyBank is built for families in different countries, languages and household cultures. A parent may
              support children who live in different places and use different everyday languages. The core educational
              flow should remain accessible, and the wording can be adapted without changing the underlying family money
              method.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-moss/10 bg-cream p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-black text-ink">Free core learning flow</h3>
              <p className="mt-3 leading-7 text-ink/65">
                The basic educational family bank is free for families: pocket money rules, balances, requests and
                parent approvals. Future paid features may exist, but they should extend the experience rather than
                remove the core learning flow.
              </p>
            </article>
            <article className="rounded-3xl border border-moss/10 bg-cream p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-moss shadow-sm">
                <Globe2 size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-black text-ink">Client-editable interface text</h3>
              <p className="mt-3 leading-7 text-ink/65">
                The PWA interface text can be edited by the client. This helps families, schools or partners adapt the
                wording to each child's language, culture and preferred family money terms.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sage">GDPR self-assessment</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
              Internal audit summary for GDPR principles.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              This is a product-level self-assessment of how MyFamilyBank is designed around privacy-by-default and data
              minimisation. It is not a formal GDPR certification.
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
              Financial education alignment
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-ink md:text-5xl">
              Internal audit summary for EU financial education expectations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              MyFamilyBank is aligned with the general EU policy direction of improving financial literacy, especially
              through practical learning, transparency and informed decision-making. It does not claim approval under a
              specific EU financial services licence.
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
            <p className="text-sm font-black uppercase tracking-[0.22em] text-white/45">Try safely first</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal">Explore the Sandbox without real family data.</h2>
          </div>
          <Link
            href="/sandbox"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-black text-moss transition hover:bg-cream"
          >
            Open Sandbox <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
