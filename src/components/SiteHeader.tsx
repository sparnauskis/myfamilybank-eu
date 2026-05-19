import Link from "next/link";
import { ArrowRight, HandCoins } from "lucide-react";

export default function SiteHeader() {
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 md:px-8">
      <Link href="/" className="flex items-center gap-3" aria-label="MyFamilyBank home">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-moss text-white">
          <HandCoins size={24} strokeWidth={2.4} />
        </span>
        <span className="text-xl font-black tracking-tight text-moss">MyFamilyBank</span>
      </Link>
      <div className="flex items-center gap-2 md:gap-3">
        <Link href="/articles" className="rounded-full px-4 py-2 text-sm font-bold text-moss hover:bg-moss/8">
          Articles
        </Link>
        <Link
          href="/sandbox"
          className="hidden rounded-full px-4 py-2 text-sm font-bold text-moss hover:bg-moss/8 md:inline-flex"
        >
          Sandbox
        </Link>
        <Link
          href="/register"
          className="inline-flex items-center gap-2 rounded-full bg-moss px-5 py-3 text-sm font-bold text-white shadow-lg shadow-moss/15 transition hover:bg-ink"
        >
          Start <ArrowRight size={17} />
        </Link>
      </div>
    </nav>
  );
}
