import PageShell from "@/components/PageShell";
import UrgentBox from "@/components/UrgentBox";
import EnquiryForm from "@/components/EnquiryForm";
import { pageMeta, SITE } from "@/lib/site";

export const metadata = pageMeta(
  "Contact Theradora | We'd Love to Hear from You",
  "Contact Theradora about our healthcare businesses, referrals, partnerships and careers. Physio To Home (Tasmania) and AlphaCare Physiotherapy (Mitchell Park, South Australia).",
  "/contact/"
);

const GENERAL_EMAIL = "Admin@alphacarephysio.com.au";
const PHYSIO_TO_HOME_EMAIL = "info@physiotohome.com";

export default function Contact() {
  return (
    <PageShell title="Contact Theradora" lead="We’d love to hear from you.">
      <p>At Theradora, we believe strong relationships start with a conversation.</p>
      <p>
        Whether you&rsquo;re looking for information about our healthcare businesses, exploring a partnership, making a
        referral or interested in working with us, we&rsquo;re happy to hear from you.
      </p>
      <p>
        As an Australian family business, we value every connection and welcome opportunities to support people, work
        alongside our partners and make a positive difference in our communities.
      </p>

      <UrgentBox />

      <h2>How Can We Help?</h2>

      <h3>General Enquiries</h3>
      <p>
        For questions about Theradora, our business activities or general information, please get in touch with our team.
      </p>
      <p>
        <strong>Email:</strong> <a href={`mailto:${GENERAL_EMAIL}`}>{GENERAL_EMAIL}</a>
      </p>

      <h3>Referrals and Healthcare Services</h3>
      <p>
        Looking for physiotherapy services or wishing to make a referral? Contact the relevant healthcare business so we
        can direct your enquiry to the right team.
      </p>
      <p>
        <strong>Physio To Home</strong>
        <br />
        Mobile physiotherapy across Tasmania.
      </p>
      <p>
        <strong>Website:</strong> <a href={SITE.physioToHome}>physiotohome.com</a>
        <br />
        <strong>Email:</strong> <a href={`mailto:${PHYSIO_TO_HOME_EMAIL}`}>{PHYSIO_TO_HOME_EMAIL}</a>
      </p>
      <p>
        <strong>AlphaCare Physiotherapy</strong>
        <br />
        Clinic-based physiotherapy in Mitchell Park, South Australia.
      </p>
      <p>
        <strong>Website:</strong> <a href={SITE.alphaCare}>alphacarephysio.com.au</a>
        <br />
        <strong>Email:</strong> <a href={`mailto:${GENERAL_EMAIL}`}>{GENERAL_EMAIL}</a>
        <br />
        <strong>Phone:</strong> <a href={SITE.phoneHref}>{SITE.phone}</a>
      </p>

      <h3>Partnerships and Collaboration</h3>
      <p>
        We welcome conversations with aged care providers, support coordinators, healthcare professionals, community
        organisations and businesses interested in working together.
      </p>
      <p>
        If you would like to explore a referral arrangement, service partnership or another opportunity to collaborate,
        please contact us. We&rsquo;d be happy to start a conversation.
      </p>

      <h3>Careers and Professional Opportunities</h3>
      <p>
        We&rsquo;re interested in connecting with healthcare professionals and like-minded people who share our
        commitment to compassionate care, professionalism and community support.
      </p>
      <p>
        If you&rsquo;re interested in joining our growing network or exploring future opportunities, we&rsquo;d love to
        hear from you.
      </p>

      <h2>Send Us an Enquiry</h2>
      <p>
        Have a question or an idea you&rsquo;d like to discuss? Complete the contact form below, and our team will direct
        your enquiry to the appropriate person.
      </p>
      <EnquiryForm kind="contact" />

      <h2>Growing Together</h2>
      <p>
        Theradora is a family business built on genuine relationships, a commitment to helping people and a vision for
        supporting more Australian communities.
      </p>
      <p>
        Whether you&rsquo;re a client, a family member, a healthcare professional or a potential partner, we look forward
        to connecting with you.
      </p>
      <p>
        <strong>Let&rsquo;s make a difference together.</strong>
      </p>
    </PageShell>
  );
}
