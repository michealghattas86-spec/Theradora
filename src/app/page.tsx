import Link from "next/link";
import { pageMeta, SITE } from "@/lib/site";

export const metadata = pageMeta(
  "Theradora | Physiotherapy and Allied Health, Tasmania and SA",
  "Theradora is the company behind Physio To Home, mobile physiotherapy across Tasmania, and AlphaCare Physiotherapy, a clinic in south Adelaide.",
  "/"
);

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: "Theradora",
  legalName: SITE.legalName,
  taxID: SITE.abn,
  url: SITE.url,
  email: SITE.email,
  telephone: "+61-1300-433-233",
  description:
    "Theradora Pty Ltd operates Physio To Home and AlphaCare Physiotherapy, providing physiotherapy and allied health care in Tasmania and South Australia.",
  areaServed: [
    { "@type": "State", name: "Tasmania" },
    { "@type": "State", name: "South Australia" },
  ],
  subOrganization: [
    { "@type": "Organization", name: "Physio To Home", url: SITE.physioToHome },
    { "@type": "Organization", name: "AlphaCare Physiotherapy", url: SITE.alphaCare },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "referrals",
      telephone: "+61-1300-433-233",
      email: SITE.email,
      areaServed: "AU",
      availableLanguage: "English",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <section className="bg-tint border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight">Building better healthcare businesses.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Theradora Pty Ltd is the company behind physiotherapy and allied health services that are accessible,
            practical and person-centred, in clinics, in homes and in the community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/our-businesses/" className="rounded-md bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark">
              Our businesses
            </Link>
            <Link href="/work-with-us/" className="rounded-md border border-brand px-5 py-3 font-semibold text-brand hover:bg-white">
              Work with us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14">
        <h2 className="text-2xl font-bold">Our businesses</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border border-line p-6">
            <h3 className="text-xl font-bold">Physio To Home</h3>
            <p className="mt-2 text-muted">
              Mobile physiotherapy across Tasmania, bringing professional care into people&rsquo;s homes and community settings.
            </p>
            <a className="mt-4 inline-block font-semibold text-brand underline" href={SITE.physioToHome}>
              Visit Physio To Home &rarr;
            </a>
          </article>
          <article className="rounded-lg border border-line p-6">
            <h3 className="text-xl font-bold">AlphaCare Physiotherapy</h3>
            <p className="mt-2 text-muted">Clinic-based assessment, treatment and rehabilitation in south Adelaide.</p>
            <a className="mt-4 inline-block font-semibold text-brand underline" href={SITE.alphaCare}>
              Visit AlphaCare Physiotherapy &rarr;
            </a>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14">
        <h2 className="text-2xl font-bold">How we can help</h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          <li className="rounded-lg bg-tint p-6">
            <p className="font-bold">Referring a patient?</p>
            <p className="mt-1 text-muted">Find out how to refer and which funding streams we work with.</p>
            <Link href="/partners/" className="mt-3 inline-block font-semibold text-brand underline">
              Partners and referrers &rarr;
            </Link>
          </li>
          <li className="rounded-lg bg-tint p-6">
            <p className="font-bold">Looking for work?</p>
            <p className="mt-1 text-muted">We&rsquo;re recruiting across Tasmania and South Australia.</p>
            <Link href="/work-with-us/" className="mt-3 inline-block font-semibold text-brand underline">
              Work with us &rarr;
            </Link>
          </li>
          <li className="rounded-lg bg-tint p-6">
            <p className="font-bold">Supplier or partnership enquiry?</p>
            <Link href="/contact/" className="mt-3 inline-block font-semibold text-brand underline">
              Get in touch &rarr;
            </Link>
          </li>
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14">
        <h2 className="text-2xl font-bold">Our approach</h2>
        <p className="mt-3 text-lg">People first. Professional care. Accessible by design.</p>
        <Link href="/about/" className="mt-2 inline-block font-semibold text-brand underline">
          Read more &rarr;
        </Link>
      </section>
    </>
  );
}
