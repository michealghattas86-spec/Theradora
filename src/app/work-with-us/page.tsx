import PageShell from "@/components/PageShell";
import EnquiryForm from "@/components/EnquiryForm";
import { pageMeta, SITE } from "@/lib/site";

export const metadata = pageMeta(
  "Allied Health Jobs in Tasmania and SA | Work With Us | Theradora",
  "Physiotherapists, OTs, exercise physiologists, AHAs, massage therapists and nurses wanted across Tasmania and South Australia. Flexible roles.",
  "/work-with-us/"
);

export default function WorkWithUs() {
  return (
    <PageShell title="Work with us" lead="Join a team that puts clinicians first">
      <p>
        Theradora supports allied health professionals working across Tasmania and South Australia, in people&rsquo;s
        homes, in the community and in clinic. If you want flexible work, a supportive team and the chance to make a real
        difference to people&rsquo;s lives, we&rsquo;d love to hear from you.
      </p>

      <h2>Who we&rsquo;re looking for</h2>
      <ul>
        <li>Physiotherapists</li>
        <li>Occupational therapists</li>
        <li>Exercise physiologists</li>
        <li>Allied health assistants</li>
        <li>Massage therapists</li>
        <li>Nurses</li>
      </ul>

      <h2>Where you&rsquo;d work</h2>
      <p>
        <strong>Tasmania, with Physio To Home.</strong> Mobile and community-based care, visiting people in their homes
        across Tasmania.
      </p>
      <p>
        <strong>South Australia, with AlphaCare Physiotherapy.</strong> Clinic-based care in south Adelaide.
      </p>

      <h2>What we offer</h2>
      <ul>
        <li>Contractor, casual, part-time and permanent arrangements, depending on the role</li>
        <li>Flexibility in your hours and caseload</li>
        <li>Referrals and scheduling coordinated for you</li>
        <li>Billing and administration handled for you</li>
        <li>A staff portal for messaging and communication</li>
        <li>Clinical support from experienced colleagues</li>
        <li>Work across a range of funding streams, including NDIS, DVA, My Aged Care and private clients</li>
      </ul>

      <h2>Who thrives with us</h2>
      <p>
        Clinicians who are self-motivated, communicate well with patients and referrers, and want to work in a
        supportive environment. For Physio To Home roles, you&rsquo;ll need a current driver&rsquo;s licence and a
        reliable car for home visits. Experience in aged care, neurological conditions or chronic conditions is valued.
      </p>

      <h2>What you&rsquo;ll need</h2>
      <ul>
        <li>Current registration or accreditation for your profession (for example AHPRA, or ESSA for exercise physiologists)</li>
        <li>Appropriate professional indemnity insurance</li>
        <li>Working With Children Check, NDIS Worker Screening Check and police check, as applicable to the role</li>
        <li>Right to work in Australia</li>
      </ul>

      <h2 id="apply">How to apply</h2>
      <p>
        Tell us about your discipline, registration, location and availability, and we&rsquo;ll be in touch to talk
        through the options.
      </p>
      <EnquiryForm kind="careers" />
      <p className="mt-6">
        Or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call <a href={SITE.phoneHref}>{SITE.phone}</a>.
      </p>
    </PageShell>
  );
}
