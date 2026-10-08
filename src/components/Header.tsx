import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b border-line bg-white">
      <div className="bg-brand-dark text-white text-sm">
        <div className="mx-auto max-w-6xl px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <span>{SITE.urgent.replace("1300 433 233.", "")}<a className="font-semibold underline" href={SITE.phoneHref}>{SITE.phone}</a>.</span>
          <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="text-2xl font-bold tracking-tight text-brand">
          Theradora
        </Link>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.95rem]">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-brand font-medium">
              {n.label}
            </Link>
          ))}
          <Link
            href="/work-with-us/"
            className="rounded-md bg-brand px-4 py-2 font-semibold text-white hover:bg-brand-dark"
          >
            Work with us
          </Link>
        </nav>
      </div>
    </header>
  );
}
