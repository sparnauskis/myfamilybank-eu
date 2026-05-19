import Link from "next/link";

const bankBaseUrl = process.env.NEXT_PUBLIC_BANK_BASE_URL || "https://seimosbankas.lt";

export default function SiteFooter() {
  return (
    <footer className="mx-auto max-w-7xl px-5 py-10 text-sm text-ink/55 md:px-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="font-bold text-moss">MyFamilyBank.eu</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/articles" className="hover:text-moss">
            Articles
          </Link>
          <Link href="/legal" className="hover:text-moss">
            Legal
          </Link>
          <a href={`${bankBaseUrl}/faq`} className="hover:text-moss">
            FAQ
          </a>
          <a href={`${bankBaseUrl}/sandbox?brand=myfamilybank&lang=en`} className="hover:text-moss">
            Sandbox
          </a>
        </div>
      </div>
      <div className="mt-8 border-t border-moss/10 pt-6 leading-7">
        <p>
          MyFamilyBank is an educational family finance tool, not a licensed bank or financial institution.
          It does not provide real bank accounts, cards, deposits, loans, investment products or payment services.
        </p>
        <p className="mt-3">
          We do not require email addresses, phone numbers, real names or real banking details to use the family bank flow.
          The system stores only the information needed to run your family bank, such as family profiles, PIN access,
          balances, agreements and requests. These records are not tied to direct personal identifiers that would tell us
          which real family they belong to. The Sandbox can be explored without entering real family information.
        </p>
      </div>
    </footer>
  );
}
