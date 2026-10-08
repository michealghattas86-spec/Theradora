import { SITE } from "@/lib/site";

export default function UrgentBox() {
  return (
    <div className="my-6 rounded-lg border-l-4 border-alert-line bg-alert px-5 py-4 font-semibold" role="note">
      For urgent referrals, please call{" "}
      <a className="underline" href={SITE.phoneHref}>
        {SITE.phone}
      </a>
      .
    </div>
  );
}
