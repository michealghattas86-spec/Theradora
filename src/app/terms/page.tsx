import Link from "next/link";
import PageShell from "@/components/PageShell";
import Todo, { DraftBanner } from "@/components/Todo";
import { pageMeta, SITE } from "@/lib/site";

export const metadata = {
  ...pageMeta(
    "Website Terms of Use | Theradora",
    "The terms for using theradora.com.au, operated by Theradora Pty Ltd.",
    "/terms/"
  ),
  robots: { index: false, follow: true },
};

export default function Terms() {
  return (
    <PageShell title="Website Terms of Use">
      <DraftBanner>
        These terms need the highlighted items confirmed and a lawyer&rsquo;s review before launch. They are marked
        noindex until then.
      </DraftBanner>

      <p>
        <strong>{SITE.legalName}</strong>
        <br />
        Effective date: <Todo>date</Todo>
      </p>

      <h2>1. About these terms</h2>
      <p>
        This website, theradora.com.au, is operated by {SITE.legalName} (ABN {SITE.abn}) (&ldquo;Theradora&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;), which trades as AlphaCare Physiotherapy and Physio To Home. By using this
        website, you agree to these terms. If you don&rsquo;t agree, please don&rsquo;t use the site.
      </p>

      <h2>2. General information only</h2>
      <p>
        The content on this website is general information about Theradora and its businesses. It isn&rsquo;t clinical,
        medical or legal advice, and it doesn&rsquo;t replace advice from a qualified health professional about your
        circumstances.
      </p>
      <p>
        <strong>In an emergency, call 000.</strong>
      </p>

      <h2>3. Referrals and enquiries</h2>
      <p>
        Submitting a form or email to us doesn&rsquo;t create a clinical relationship, and we can&rsquo;t guarantee a
        service, a timeframe or funding approval until we&rsquo;ve confirmed it with you directly.
      </p>
      <p>
        <strong>Urgent referrals must not be sent through the website or by email alone. Please call {SITE.phone}.</strong>
      </p>
      <p>We aim to confirm receipt of referrals within 2 business days.</p>

      <h2>4. Accuracy of information</h2>
      <p>
        We take reasonable care to keep the website accurate and up to date. Information such as service areas, funding
        streams and job opportunities can change without notice. Please contact us to confirm current details before
        relying on them.
      </p>

      <h2>5. Job applications</h2>
      <p>
        Information you submit through the Work with us page is handled in line with our{" "}
        <Link href="/privacy/">Privacy Policy</Link>. Applying doesn&rsquo;t create an offer or an obligation to engage
        you, and any engagement is subject to registration, insurance, screening checks and a written agreement.
      </p>

      <h2>6. Third-party links</h2>
      <p>
        This website links to other sites, including the websites of AlphaCare Physiotherapy and Physio To Home. We
        don&rsquo;t control third-party websites and aren&rsquo;t responsible for their content or privacy practices.
        Each business site has its own terms.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        The content, branding, logos and design of this website belong to {SITE.legalName} or its licensors and are
        protected by copyright and trade mark laws. You may view and print content for personal or internal business use,
        but you must not copy, reproduce, modify or distribute it for other purposes without our written permission.
      </p>

      <h2>8. Acceptable use</h2>
      <p>You must not use this website to:</p>
      <ul>
        <li>submit false, misleading or unlawful information</li>
        <li>attempt to gain unauthorised access to the site or its systems</li>
        <li>introduce malware or interfere with how the site operates</li>
        <li>send spam or unsolicited commercial messages</li>
      </ul>

      <h2>9. Disclaimer and limitation of liability</h2>
      <p>
        To the extent permitted by law, we provide this website &ldquo;as is&rdquo; and don&rsquo;t guarantee that it
        will be uninterrupted or error-free. We&rsquo;re not liable for any loss arising from your use of, or reliance on,
        the website. Nothing in these terms excludes rights you have under the Australian Consumer Law or other laws that
        can&rsquo;t be excluded.
      </p>

      <h2>10. Privacy</h2>
      <p>
        Our <Link href="/privacy/">Privacy Policy</Link> explains how we handle personal information collected through
        this website.
      </p>

      <h2>11. Changes to the website and these terms</h2>
      <p>
        We may change the website or these terms at any time. The current version is published on this site with the
        effective date above. Continued use of the website means you accept the updated terms.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These terms are governed by the laws of <Todo>Tasmania / South Australia</Todo>, and you submit to the
        non-exclusive jurisdiction of its courts.
      </p>

      <h2>13. Contact</h2>
      <p>
        {SITE.legalName}
        <br />
        {SITE.email}
        <br />
        {SITE.phone}
        <br />
        <Todo>postal address</Todo>
      </p>
    </PageShell>
  );
}
