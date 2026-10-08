import PageShell from "@/components/PageShell";
import Todo from "@/components/Todo";
import { pageMeta, SITE } from "@/lib/site";

export const metadata = pageMeta(
  "About Theradora | Healthcare Businesses in Tasmania and SA",
  "Learn about Theradora Pty Ltd, our people-first approach, our clinical governance and the leaders behind Physio To Home and AlphaCare Physiotherapy.",
  "/about/"
);

export default function About() {
  return (
    <PageShell title="About Theradora">
      <h2>Who we are</h2>
      <p>
        Theradora Pty Ltd operates two businesses: Physio To Home, a mobile service across Tasmania, and AlphaCare
        Physiotherapy, a clinic in south Adelaide. We are an Australian healthcare company that develops and supports
        physiotherapy and allied health businesses across different care environments.
      </p>

      <h2>Why we exist</h2>
      <p>
        We believe good care should be easy to reach. Many people struggle to access physiotherapy because of mobility,
        distance, cost or complexity. Our aim is to create services that are clinically responsible, easy to access and
        genuinely useful to the people who rely on them.
      </p>

      <h2>Our approach</h2>
      <p>
        Rather than making every service look the same, we support each brand to respond to its local community while
        maintaining high professional standards.
      </p>
      <p>
        <strong>People first.</strong> We design services around real people, their goals, circumstances and everyday
        lives. Our clinicians see people in their own homes, so care fits around their routines.
      </p>
      <p>
        <strong>Professional care.</strong> We value evidence-informed practice, appropriate clinical judgement and clear
        communication. <Todo>Add one concrete example, such as how clinical work is supported or reviewed.</Todo>
      </p>
      <p>
        <strong>Accessible by design.</strong> We look for practical ways to make quality physiotherapy easier to access
        across clinic and community settings, including home visits across Tasmania and a range of funding streams.
      </p>

      <h2>Clinical governance</h2>
      <p>
        Theradora is committed to safe, high-quality, evidence-informed care. Across Physio To Home and AlphaCare
        Physiotherapy:
      </p>
      <ul>
        <li>
          <strong>Registration.</strong> All registered health practitioners hold current registration with the relevant
          national board or professional body, such as AHPRA, and practise within their scope.
        </li>
        <li>
          <strong>Insurance.</strong> Our practitioners hold appropriate professional indemnity insurance.{" "}
          <Todo>Add public liability if applicable.</Todo>
        </li>
        <li>
          <strong>Clinical standards.</strong> We practise in line with current evidence and the standards of each
          profession.
        </li>
        <li>
          <strong>Privacy and records.</strong> We handle personal and health information in accordance with the Privacy
          Act 1988 and the Australian Privacy Principles, and keep clinical records securely.
        </li>
        <li>
          <strong>Safety and risk.</strong> We maintain risk management processes, including infection prevention and
          control, and emergency planning.
        </li>
        <li>
          <strong>Feedback and complaints.</strong> We welcome feedback and take complaints seriously. Contact us at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or <a href={SITE.phoneHref}>{SITE.phone}</a>, and we&rsquo;ll
          respond <Todo>within X business days</Todo>. Patients can also contact the relevant health complaints body in
          their state. <Todo>Tasmania: Health Complaints Commissioner. South Australia: Health and Community Services Complaints Commissioner. Verify current names and links.</Todo>
        </li>
      </ul>

      <h2>Leadership</h2>
      <h3>Micheal Ghattas</h3>
      <p>
        <strong>Director, Physio To Home | Principal Physiotherapist</strong>
      </p>
      <p>
        Micheal leads Physio To Home, delivering physiotherapy to people across Tasmania in their homes and
        communities. His clinical interests include musculoskeletal care, post-surgical rehabilitation, falls prevention,
        neurological physiotherapy, chronic pain, and the assessment and treatment of cervicogenic dizziness.{" "}
        <Todo>Add qualifications, years of experience, and one line on what he cares about in care.</Todo>
      </p>
      <p>AHPRA registration: PHY0002634794</p>
    </PageShell>
  );
}
