import PageShell from "@/components/PageShell";
import UrgentBox from "@/components/UrgentBox";
import EnquiryForm from "@/components/EnquiryForm";
import Todo from "@/components/Todo";
import { pageMeta, SITE } from "@/lib/site";

export const metadata = pageMeta(
  "Contact Theradora | Referrals, Partnerships and Careers",
  "Contact Theradora for referrals, partnerships, supplier enquiries or careers. Email business@theradora.com.au or call 1300 433 233.",
  "/contact/"
);

export default function Contact() {
  return (
    <PageShell title="Contact">
      <p>
        <strong>{SITE.legalName}</strong>
        <br />
        Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        <br />
        Phone: <a href={SITE.phoneHref}>{SITE.phone}</a>
      </p>

      <UrgentBox />

      <p>
        Use the form below for referrals, partnerships, supplier enquiries or careers. Please let us know which applies,
        so it reaches the right person. We aim to respond within 2 business days.
      </p>
      <EnquiryForm kind="contact" />

      <p className="mt-8">
        <Todo>Postal or registered address</Todo>
      </p>
    </PageShell>
  );
}
