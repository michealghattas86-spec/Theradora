import type { Metadata } from "next";

export const SITE = {
  name: "Theradora",
  legalName: "Theradora Pty Ltd",
  abn: "31 686 820 824",
  url: "https://theradora.com.au",
  email: "business@theradora.com.au",
  phone: "1300 433 233",
  phoneHref: "tel:1300433233",
  urgent: "For urgent referrals, please call 1300 433 233.",
  physioToHome: "https://physiotohome.com",
  alphaCare: "https://alphacarephysio.com.au",
  ogImage: "/og-image.png",
};

export const NAV = [
  { href: "/our-businesses/", label: "Our businesses" },
  { href: "/about/", label: "About" },
  { href: "/partners/", label: "Partners and referrers" },
  { href: "/contact/", label: "Contact" },
];

export const FOOTER_LINKS = [
  { href: "/our-businesses/", label: "Our businesses" },
  { href: "/about/", label: "About" },
  { href: "/partners/", label: "Partners and referrers" },
  { href: "/work-with-us/", label: "Work with us" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy/", label: "Privacy policy" },
  { href: "/terms/", label: "Terms of use" },
];

export function pageMeta(title: string, description: string, path: string): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title,
      description,
      url,
      locale: "en_AU",
      images: [{ url: `${SITE.url}${SITE.ogImage}`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" },
  };
}
