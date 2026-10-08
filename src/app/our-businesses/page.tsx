import PageShell from "@/components/PageShell";
import { pageMeta, SITE } from "@/lib/site";

export const metadata = pageMeta(
  "Our Businesses | Physio To Home and AlphaCare | Theradora",
  "Physio To Home brings physiotherapy into homes across Tasmania. AlphaCare Physiotherapy provides clinic-based care in south Adelaide.",
  "/our-businesses/"
);

export default function OurBusinesses() {
  return (
    <PageShell
      title="Our businesses"
      lead="Theradora Pty Ltd operates two businesses, each responding to its own community while maintaining the same professional standards."
    >
      <h2>Physio To Home</h2>
      <p>
        Mobile physiotherapy that brings professional care into people&rsquo;s homes and community settings across
        Tasmania.
      </p>
      <p>
        <em>Best for:</em> people who find it hard to travel, or who recover and function better in their own
        environment.
      </p>
      <p>
        <a href={SITE.physioToHome}>
          <strong>Visit Physio To Home &rarr;</strong>
        </a>
      </p>

      <h2>AlphaCare Physiotherapy</h2>
      <p>A patient-focused clinic providing assessment, treatment and rehabilitation in south Adelaide.</p>
      <p>
        <em>Best for:</em> people who want clinic-based care with access to equipment and facilities.
      </p>
      <p>
        <a href={SITE.alphaCare}>
          <strong>Visit AlphaCare Physiotherapy &rarr;</strong>
        </a>
      </p>
    </PageShell>
  );
}
