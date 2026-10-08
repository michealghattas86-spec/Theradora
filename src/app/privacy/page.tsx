import PageShell from "@/components/PageShell";
import Todo, { DraftBanner } from "@/components/Todo";
import { pageMeta, SITE } from "@/lib/site";

export const metadata = {
  ...pageMeta(
    "Privacy Policy | Theradora",
    "How Theradora Pty Ltd collects, uses and protects personal and health information.",
    "/privacy/"
  ),
  robots: { index: false, follow: true },
};

export default function Privacy() {
  return (
    <PageShell title="Privacy Policy">
      <DraftBanner>
        This policy needs the highlighted items confirmed and a review by a lawyer or privacy adviser before launch. It is
        marked noindex until then.
      </DraftBanner>

      <p>
        <strong>{SITE.legalName}</strong>
        <br />
        Effective date: <Todo>date</Todo>
      </p>

      <h2>1. About this policy</h2>
      <p>
        {SITE.legalName} (ABN {SITE.abn}) (&ldquo;Theradora&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates
        AlphaCare Physiotherapy and Physio To Home as registered business names. We are committed to protecting your
        privacy and handling personal information in accordance with the <em>Privacy Act 1988</em> (Cth), the Australian
        Privacy Principles and <Todo>applicable Tasmanian and South Australian health records laws</Todo>.
      </p>
      <p>
        This policy explains how we handle personal information collected through theradora.com.au and through our
        corporate dealings, including referrals, partnership and supplier enquiries and job applications.{" "}
        <Todo>Patients receiving care should also read the privacy policy of the relevant business: AlphaCare Physiotherapy (link) or Physio To Home (link).</Todo>
      </p>

      <h2>2. Information we collect</h2>
      <p>Depending on how you deal with us, we may collect:</p>
      <ul>
        <li><strong>Contact details</strong>, such as your name, email address, phone number and organisation</li>
        <li><strong>Referral information</strong>, including a patient&rsquo;s name, contact details, health information, relevant history and funding source</li>
        <li><strong>Job application information</strong>, including your CV, qualifications, professional registration, referee details, screening check results and right-to-work information</li>
        <li><strong>Business information</strong> from suppliers and partners</li>
        <li><strong>Website information</strong>, such as your IP address, device and browser type, pages visited and how you reached the site</li>
      </ul>
      <p>
        Health information is sensitive information. We collect it only where it is reasonably necessary to provide,
        coordinate or fund care, and with consent or as otherwise permitted by law.
      </p>

      <h2>3. How we collect information</h2>
      <p>
        We collect information directly from you, through website forms, email, phone and our recruitment process. We also
        collect it from other people with your consent or where the law allows, such as a GP, hospital, support
        coordinator, funder or referee.
      </p>

      <h2>4. Why we collect, use and disclose it</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>assess and respond to referrals and arrange care</li>
        <li>respond to enquiries from partners, suppliers and the public</li>
        <li>recruit, screen and onboard clinicians and staff</li>
        <li>manage funding, billing and claims</li>
        <li>meet legal, professional and funder requirements</li>
        <li>operate, secure and improve our website and services</li>
      </ul>
      <p>
        We use health information only for the purpose it was collected for, or a directly related purpose you would
        reasonably expect, unless you consent or the law permits otherwise.
      </p>

      <h2>5. Who we share it with</h2>
      <p>We may share information with:</p>
      <ul>
        <li>treating clinicians and staff within Theradora and its businesses</li>
        <li>the referrer and your other health providers, where relevant to your care</li>
        <li>funders and agencies, such as <Todo>the NDIS, DVA and My Aged Care</Todo></li>
        <li>service providers who help us operate, such as <Todo>practice management, email, website, cloud storage and IT providers</Todo></li>
        <li>professional advisers, insurers and regulators</li>
        <li>others where you consent or the law requires</li>
      </ul>

      <h2>6. Overseas disclosure</h2>
      <p>
        <Todo>Choose one: &ldquo;Some of our service providers may store or access information outside Australia, in (countries). We take reasonable steps to ensure they handle information in line with Australian privacy standards.&rdquo; OR &ldquo;We do not disclose personal information overseas.&rdquo;</Todo>
      </p>

      <h2>7. Security and retention</h2>
      <p>
        We take reasonable steps to protect personal information from misuse, loss and unauthorised access, including{" "}
        <Todo>secure systems, access controls and staff training</Todo>. Health records are kept for the periods required
        by law, which can be <Todo>confirm periods for Tasmania and South Australia</Todo>, and are then securely destroyed
        or de-identified.
      </p>

      <h2>8. Emailing referrals</h2>
      <p>
        Email isn&rsquo;t completely secure. <Todo>If a secure referral option exists, describe it here.</Todo> If you
        choose to send information by email, please understand there is some risk. For urgent referrals, call {SITE.phone}.
      </p>

      <h2>9. Cookies and analytics</h2>
      <p>
        <Todo>Choose one: describe the cookies and analytics used (for example Google Analytics), OR &ldquo;Our website does not use cookies or analytics.&rdquo;</Todo>
      </p>

      <h2>10. Access and correction</h2>
      <p>
        You can ask to see the personal information we hold about you, or ask us to correct it. Contact us using the
        details below. We&rsquo;ll respond within <Todo>30 days</Todo> and may need to verify your identity. In some cases
        we may be unable to give access, and we&rsquo;ll explain why.
      </p>

      <h2>11. Data breaches</h2>
      <p>
        If a data breach is likely to cause you serious harm, we will notify you and the Office of the Australian
        Information Commissioner (OAIC) as required by the Notifiable Data Breaches scheme.
      </p>

      <h2>12. Complaints</h2>
      <p>If you&rsquo;re concerned about how we&rsquo;ve handled your information, contact us first:</p>
      <p>
        <strong>{SITE.legalName}</strong>
        <br />
        {SITE.email}
        <br />
        {SITE.phone}
        <br />
        <Todo>postal address</Todo>
      </p>
      <p>
        We&rsquo;ll acknowledge your complaint within <Todo>X business days</Todo> and respond within{" "}
        <Todo>30 days</Todo>. If you&rsquo;re not satisfied, you can contact:
      </p>
      <ul>
        <li>The <strong>Office of the Australian Information Commissioner</strong> (oaic.gov.au)</li>
        <li><Todo>Health Complaints Commissioner (Tasmania)</Todo></li>
        <li><Todo>Health and Community Services Complaints Commissioner (South Australia)</Todo></li>
      </ul>

      <h2>13. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The current version will be published on this website, with the
        effective date at the top.
      </p>
    </PageShell>
  );
}
