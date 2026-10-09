import Link from "next/link";
import PageShell from "@/components/PageShell";
import UrgentBox from "@/components/UrgentBox";
import { pageMeta, SITE } from "@/lib/site";

export const metadata = pageMeta(
  "Partners & Referrals | Theradora",
  "Working together to support people and communities. Refer to Physio To Home (Tasmania) or AlphaCare Physiotherapy (Mitchell Park, South Australia), or discuss a partnership with Theradora.",
  "/partners/"
);

const primaryButton = "inline-block rounded-md bg-brand px-5 py-3 font-semibold hover:bg-brand-dark";
const secondaryButton = "inline-block rounded-md border border-brand px-5 py-3 font-semibold hover:bg-tint";

export default function Partners() {
  return (
    <PageShell title="Partners & Referrals" lead="Working together to support people and communities.">
      <p>At Theradora, we believe the best outcomes happen when people work together.</p>
      <p>
        As a growing Australian family business, we are committed to building trusted relationships with healthcare
        professionals, support coordinators, aged care providers, community organisations and other service partners who
        share our passion for supporting people.
      </p>
      <p>
        Through our healthcare businesses, we aim to make accessing care easier, provide dependable support and help
        individuals maintain their independence, wellbeing and quality of life.
      </p>
      <p>
        We value every referral and every partnership, recognising that behind every enquiry is a person who deserves
        care, respect and understanding.
      </p>
      <div className="mb-8 flex flex-wrap gap-3">
        <a href="#our-healthcare-services" className={primaryButton} style={{ color: "#fff", textDecoration: "none" }}>
          Make a Referral
        </a>
        <Link href="/contact/" className={secondaryButton} style={{ textDecoration: "none" }}>
          Discuss a Partnership
        </Link>
      </div>

      <UrgentBox />

      <h2>Building Partnerships That Make a Difference</h2>
      <p>
        We understand that referring someone to a healthcare provider involves trust. You want to know that the person you
        support will be treated with respect, that their needs will be understood and that communication will be clear.
      </p>
      <p>
        We aim to make the referral process straightforward, maintain professional communication and work collaboratively
        with clients, families and their support networks.
      </p>
      <p>Our approach is built around four key principles:</p>

      <h3>People First</h3>
      <p>
        We take the time to understand individual needs, preferences and goals, recognising that every person&rsquo;s
        circumstances are different.
      </p>

      <h3>Reliable Communication</h3>
      <p>
        We value clear, timely communication with referral partners and relevant members of a person&rsquo;s support
        network, subject to appropriate consent and privacy requirements.
      </p>

      <h3>Collaborative Care</h3>
      <p>
        We believe better outcomes come from working together. We welcome collaboration with other healthcare
        professionals, families and community services to support coordinated care.
      </p>

      <h3>Trust and Accountability</h3>
      <p>
        We are committed to professionalism, respect and responsible service delivery, with a focus on building
        relationships that last.
      </p>

      <h2 id="our-healthcare-services">Our Healthcare Services</h2>
      <p>Through our healthcare businesses, we support people across different settings and stages of life.</p>

      <h3>Physio To Home</h3>
      <p>
        <strong>Mobile physiotherapy, delivered where people feel most comfortable.</strong>
      </p>
      <p>
        Physio To Home provides mobile physiotherapy services across Tasmania, helping people access professional care in
        their own homes and communities.
      </p>
      <p>
        We work with individuals and relevant referral partners to support mobility, strength, balance, recovery and
        independence, with services tailored to each person&rsquo;s needs and goals.
      </p>
      <p>
        We welcome enquiries and referrals from support coordinators, aged care providers, care managers, healthcare
        professionals, families and individuals.
      </p>
      <p>
        <strong>Suitable referral pathways may include:</strong>
      </p>
      <ul>
        <li>NDIS participants who are self-managed or plan-managed</li>
        <li>Veterans accessing eligible DVA-funded services</li>
        <li>Older people accessing eligible aged care funding arrangements</li>
        <li>Private clients and other eligible funding arrangements</li>
      </ul>
      <p>
        <a href={SITE.physioToHome}>
          <strong>Refer to Physio To Home &rarr;</strong>
        </a>
      </p>

      <h3>AlphaCare Physiotherapy</h3>
      <p>
        <strong>Personalised physiotherapy in a welcoming clinic environment.</strong>
      </p>
      <p>
        AlphaCare Physiotherapy provides clinic-based physiotherapy in Mitchell Park, South Australia, supporting people
        with rehabilitation, physical function, pain management and movement goals.
      </p>
      <p>
        We value collaboration with general practitioners, healthcare professionals, support coordinators, families and
        other organisations to help people access appropriate physiotherapy care.
      </p>
      <p>
        <a href={SITE.alphaCare}>
          <strong>Refer to AlphaCare Physiotherapy &rarr;</strong>
        </a>
      </p>

      <h2>Who We Work With</h2>
      <p>
        We welcome connections with organisations and professionals who share our commitment to person-centred care,
        including:
      </p>
      <ul>
        <li>Support coordinators and disability support organisations</li>
        <li>Aged care providers and care managers</li>
        <li>General practitioners and other healthcare professionals</li>
        <li>Occupational therapists and allied health practitioners</li>
        <li>Community organisations and support services</li>
        <li>Hospitals, rehabilitation services and discharge planning teams</li>
        <li>Families, carers and individuals seeking appropriate services</li>
      </ul>
      <p>We are always open to discussing new referral pathways and opportunities to work together.</p>

      <h2>How Our Referral Process Works</h2>
      <p>We aim to keep the process simple, respectful and focused on the person receiving care.</p>

      <h3>1. Get in Touch</h3>
      <p>
        Contact the relevant healthcare business with the person&rsquo;s details, service needs and preferred location,
        sharing personal information only where authorised.
      </p>

      <h3>2. Discuss the Requirements</h3>
      <p>
        We review the referral, clarify the person&rsquo;s needs and confirm whether the requested service is suitable,
        available and compatible with the relevant funding arrangements.
      </p>

      <h3>3. Coordinate the Next Steps</h3>
      <p>
        Where we can accept the referral, we work with the person and relevant stakeholders to arrange the next steps,
        including appointments and any required documentation or approvals.
      </p>

      <h3>4. Maintain Communication</h3>
      <p>
        Where appropriate and with the necessary consent, we communicate with referral partners about service
        coordination and relevant updates.
      </p>

      <p>
        <em>
          Referrals are subject to clinician availability, service suitability, location and applicable funding
          requirements.
        </em>
      </p>

      <h2>Let&rsquo;s Build a Stronger Network of Care</h2>
      <p>We believe meaningful partnerships begin with a conversation.</p>
      <p>
        Whether you have a referral, are looking for a reliable healthcare partner or would like to explore a longer-term
        collaboration, we would be happy to hear from you.
      </p>
      <p>
        As Theradora continues to grow, we remain committed to building relationships that help us reach more people,
        support more communities and make a positive difference across Australia.
      </p>

      <h3>Contact Our Team</h3>
      <p>For service-specific enquiries or referrals, please contact the relevant business directly.</p>
      <p>
        <strong>Physio To Home</strong> &mdash; Tasmania
        <br />
        <strong>AlphaCare Physiotherapy</strong> &mdash; Mitchell Park, South Australia
      </p>
      <p>We look forward to working together.</p>
      <p>
        <Link href="/contact/" className={primaryButton} style={{ color: "#fff", textDecoration: "none" }}>
          Contact Our Team
        </Link>
      </p>
    </PageShell>
  );
}
