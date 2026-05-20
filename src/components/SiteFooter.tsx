import Link from "next/link";

const bankBaseUrl = process.env.NEXT_PUBLIC_BANK_BASE_URL || "https://seimosbankas.lt";

export default function SiteFooter() {
  return (
    <footer className="mx-auto max-w-7xl px-5 py-10 text-sm text-ink/55 md:px-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="font-bold text-moss">BanqueDeFamille.fr</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/articles" className="hover:text-moss">
            Articles
          </Link>
          <Link href="/legal" className="hover:text-moss">
            Mentions
          </Link>
          <a href={`${bankBaseUrl}/faq`} className="hover:text-moss">
            FAQ
          </a>
          <a href={`${bankBaseUrl}/sandbox?brand=banquedefamille&lang=fr`} className="hover:text-moss">
            Sandbox
          </a>
        </div>
      </div>
      <div className="mt-8 border-t border-moss/10 pt-6 leading-7">
        <p>
          BanqueDeFamille est un outil d'education financiere familiale, pas une banque ni un etablissement financier agree.
          Il ne fournit pas de vrais comptes bancaires, cartes, depots, credits, produits d'investissement ou services de paiement.
        </p>
        <p className="mt-3">
          Nous ne demandons pas d'adresse e-mail, de numero de telephone, de noms reels ou de coordonnees bancaires
          pour utiliser le parcours de banque familiale. Le systeme stocke uniquement les informations necessaires au
          fonctionnement de votre banque familiale, comme les profils, les codes PIN, les soldes, les accords et les
          demandes. Ces donnees ne sont pas rattachees a des identifiants personnels directs permettant de savoir a
          quelle famille reelle elles appartiennent. Le Sandbox peut etre explore sans saisir de vraies informations familiales.
        </p>
      </div>
    </footer>
  );
}
