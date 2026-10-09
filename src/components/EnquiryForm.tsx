"use client";

import { useState } from "react";

type Props = {
  kind: "contact" | "careers";
};

const field =
  "mt-1 w-full rounded-md border border-line bg-white px-3 py-2 text-ink";

export default function EnquiryForm({ kind }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, form: kind }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-md bg-tint p-5">
        <p className="font-semibold">Thank you, we&rsquo;ve received your message.</p>
        <p>We aim to respond within 2 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="block">
        {kind === "contact" ? "Full name" : "Name"}
        <input className={field} name="name" required autoComplete="name" />
      </label>
      {kind === "contact" && (
        <label className="block">
          Organisation (optional)
          <input className={field} name="organisation" autoComplete="organization" />
        </label>
      )}
      <label className="block">
        Email address
        <input className={field} type="email" name="email" required autoComplete="email" />
      </label>

      {kind === "contact" ? (
        <>
          <label className="block">
            Phone number (optional)
            <input className={field} type="tel" name="phone" autoComplete="tel" />
          </label>
          <label className="block">
            Enquiry type
            <select className={field} name="type" required defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>General enquiry</option>
              <option>Referral or healthcare services</option>
              <option>Partnership or collaboration</option>
              <option>Careers and professional opportunities</option>
              <option>Other</option>
            </select>
          </label>
        </>
      ) : (
        <>
          <label className="block">
            Phone
            <input className={field} type="tel" name="phone" required autoComplete="tel" />
          </label>
          <label className="block">
            Discipline
            <select className={field} name="discipline" required defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Physiotherapist</option>
              <option>Occupational therapist</option>
              <option>Exercise physiologist</option>
              <option>Allied health assistant</option>
              <option>Massage therapist</option>
              <option>Nurse</option>
            </select>
          </label>
          <label className="block">
            Registration number (if applicable)
            <input className={field} name="registration" />
          </label>
          <label className="block">
            Location
            <select className={field} name="location" required defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Tasmania</option>
              <option>South Australia</option>
            </select>
          </label>
          <label className="block">
            Availability
            <input className={field} name="availability" />
          </label>
        </>
      )}

      <label className="block">
        Message
        <textarea className={field} name="message" rows={5} required />
      </label>

      {kind === "contact" && (
        <p className="text-sm text-muted">
          Please avoid including sensitive personal or medical information in this general contact form. For a client
          referral, please contact the relevant healthcare business through its designated referral process.
        </p>
      )}
      {kind === "careers" && (
        <p className="text-sm text-muted">
          To send your CV, reply to our acknowledgement email or email it to business@theradora.com.au.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-red-700">
          Sorry, something went wrong. Please email business@theradora.com.au or call 1300 433 233.
        </p>
      )}
    </form>
  );
}
