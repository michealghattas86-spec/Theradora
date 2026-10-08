import PageShell from "@/components/PageShell";
import UrgentBox from "@/components/UrgentBox";
import { pageMeta, SITE } from "@/lib/site";

export const metadata = pageMeta(
  "Refer a Patient | Partners and Referrers | Theradora",
  "Refer a patient to Physio To Home or AlphaCare. Funding includes NDIS, DVA, My Aged Care and private. Urgent referrals: call 1300 433 233.",
  "/partners/"
);

export default function Partners() {
  return (
    <PageShell title="Partners and referrers" lead="Easy to refer. Reliable to work with.">
      <p>
        Theradora&rsquo;s businesses provide physiotherapy and allied health care in clinics, in people&rsquo;s homes and
        in the community. We accept referrals from GPs, specialists, hospitals, support coordinators, aged care providers
        and other health professionals.
      </p>

      <UrgentBox />

      <h2>How to refer</h2>
      <ol>
        <li>
          <strong>Send your referral</strong> to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, including the
          patient&rsquo;s details, relevant history, funding source and any clinical concerns.
        </li>
        <li>
          <strong>We&rsquo;ll confirm receipt within 2 business days</strong> and contact the patient to arrange care.
        </li>
        <li>
          <strong>You&rsquo;ll receive updates</strong> from the treating clinician as care progresses.
        </li>
      </ol>

      <h2>Which business to refer to</h2>
      <ul>
        <li>
          <strong>Physio To Home:</strong> home and community-based care anywhere in Tasmania
        </li>
        <li>
          <strong>AlphaCare Physiotherapy:</strong> clinic-based care in south Adelaide
        </li>
      </ul>

      <h2>Funding streams we work with</h2>
      <ul>
        <li>NDIS (self-managed and plan-managed participants)</li>
        <li>DVA</li>
        <li>My Aged Care / CHSP</li>
        <li>GP Chronic Condition Management Plans (Medicare)</li>
        <li>Private clients</li>
      </ul>

      <h2>Partnership enquiries</h2>
      <p>
        Interested in working with us at an organisational level? Contact us at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or on <a href={SITE.phoneHref}>{SITE.phone}</a>.
      </p>
    </PageShell>
  );
}
