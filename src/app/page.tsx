import Link from "next/link";
import { pageMeta, SITE } from "@/lib/site";

export const metadata = pageMeta(
  "Theradora | A Family Business Growing Healthcare Across Australia",
  "Theradora is an Australian family business dedicated to people, connection and better healthcare, including Physio To Home and AlphaCare Physiotherapy.",
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
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight">Growing together, caring for our communities.</h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold">
            A family business dedicated to people, connection and better healthcare.
          </p>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            At Theradora, we believe that making a difference starts with people. As an Australian family business, we
            are passionate about supporting individuals, strengthening communities and making quality healthcare more
            accessible.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Through our growing family of healthcare businesses, we aim to reach more people, build meaningful
            relationships and provide services that make a positive difference in everyday life.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            As we grow, our values remain the same: compassion, integrity, respect and a genuine commitment to the people
            and communities we serve.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/our-businesses/" className="rounded-md bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark">
              Our Businesses
            </Link>
            <Link href="/contact/" className="rounded-md border border-brand px-5 py-3 font-semibold text-brand hover:bg-white">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pt-14">
        <h2 className="text-2xl font-bold">People First. Community Always.</h2>
        <p className="mt-3 text-lg">We believe everyone deserves to feel supported, valued and connected.</p>
        <p className="mt-4 text-muted">
          For us, healthcare is about more than providing a service. It is about listening, understanding individual
          needs and building relationships based on trust. It is about reaching out to people who need support, working
          alongside families and healthcare professionals, and helping individuals maintain their independence and
          quality of life.
        </p>
        <p className="mt-4 text-muted">
          We are committed to growing in a way that allows us to make a meaningful difference, one person, one
          relationship and one community at a time.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14">
        <h2 className="text-2xl font-bold">Our Healthcare Businesses</h2>
        <p className="mt-3 max-w-3xl text-muted">
          Through our growing network of healthcare businesses, we are working to make professional care more accessible
          and create positive experiences for the people we serve.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border border-line p-6">
            <h3 className="text-xl font-bold">Physio To Home</h3>
            <p className="mt-1 font-semibold">Bringing care closer to home.</p>
            <p className="mt-3 text-muted">
              Physio To Home provides mobile physiotherapy services, helping people access professional care in the
              comfort of their own homes. We support individuals to improve mobility, maintain independence and work
              towards their personal goals.
            </p>
            <p className="mt-3 text-muted">
              By bringing physiotherapy to people where they feel most comfortable, we aim to make care more convenient,
              personal and accessible.
            </p>
            <a className="mt-4 inline-block font-semibold text-brand underline" href={SITE.physioToHome}>
              Explore Physio To Home &rarr;
            </a>
          </article>
          <article className="rounded-lg border border-line p-6">
            <h3 className="text-xl font-bold">AlphaCare Physiotherapy</h3>
            <p className="mt-1 font-semibold">Supporting recovery, health and independence.</p>
            <p className="mt-3 text-muted">
              AlphaCare Physiotherapy provides professional physiotherapy in a welcoming clinic environment, with
              personalised care focused on each person&rsquo;s needs and goals.
            </p>
            <p className="mt-3 text-muted">
              Our aim is to help people move with greater confidence, manage physical challenges and return to the
              activities that matter most to them.
            </p>
            <a className="mt-4 inline-block font-semibold text-brand underline" href={SITE.alphaCare}>
              Explore AlphaCare Physiotherapy &rarr;
            </a>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pt-14">
        <h2 className="text-2xl font-bold">A Family Business with a Bigger Vision</h2>
        <p className="mt-3 text-lg">
          Theradora was built on the belief that strong businesses grow through genuine relationships, trust and a shared
          commitment to helping others.
        </p>
        <p className="mt-4 text-muted">
          Being a family business shapes how we approach our work. We value personal connections, take pride in what we do
          and believe that success means more than business growth alone.
        </p>
        <p className="mt-4 text-muted">
          It means creating opportunities for healthcare professionals, building trusted partnerships and making a
          positive contribution to the communities around us.
        </p>
        <p className="mt-4 text-muted">
          As Theradora continues to grow, we remain committed to preserving these values and ensuring that people stay at
          the heart of everything we do.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pt-14">
        <h2 className="text-2xl font-bold">Reaching More People. Supporting More Communities.</h2>
        <p className="mt-3 text-lg">
          Our vision is to continue growing our healthcare services across Australia, reaching more individuals and
          communities while maintaining the personal approach that defines us.
        </p>
        <p className="mt-4 text-muted">
          We recognise that every community has its own needs and that meaningful support begins with listening and
          understanding. That is why we value collaboration with families, healthcare professionals, support
          coordinators, care providers and community organisations.
        </p>
        <p className="mt-4 text-muted">
          By working together, we can build stronger connections, improve access to care and create opportunities to make
          a lasting difference.
        </p>
        <p className="mt-4 text-muted">
          Our journey is one of steady, purposeful growth, guided by the belief that when we support people, we help
          communities thrive.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-lg bg-tint p-8">
          <h2 className="text-2xl font-bold">Let&rsquo;s Make a Difference Together</h2>
          <p className="mt-3 max-w-3xl text-muted">
            We welcome opportunities to connect with people and organisations who share our commitment to care, community
            and positive outcomes.
          </p>
          <p className="mt-4 max-w-3xl text-muted">
            Whether you are looking for healthcare support, exploring a referral or business partnership, or interested
            in joining our growing team, we would love to hear from you.
          </p>
          <p className="mt-4 max-w-3xl text-muted">
            Together, we can build meaningful relationships, support our communities and help create a healthier future
            for more Australians.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/contact/" className="rounded-md bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark">
              Get in Touch with Theradora
            </Link>
            <Link href="/partners/" className="font-semibold text-brand underline">
              Partners and referrers &rarr;
            </Link>
            <Link href="/work-with-us/" className="font-semibold text-brand underline">
              Work with us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
