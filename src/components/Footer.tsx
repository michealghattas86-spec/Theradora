import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-tint">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2">
        <div className="text-sm text-muted space-y-2">
          <p className="font-semibold text-ink">
            {SITE.legalName} &middot; ABN {SITE.abn}
          </p>
          <p>
            AlphaCare Physiotherapy and Physio To Home are registered business names of {SITE.legalName}.
          </p>
          <p>
            <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a> &middot;{" "}
            <a className="underline" href={SITE.phoneHref}>{SITE.phone}</a>
          </p>
          <p className="italic">{SITE.urgent}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap content-start gap-x-5 gap-y-2 text-sm">
          {FOOTER_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-brand underline-offset-2 hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
