// Cloudflare Worker: serves the static site (./out) and handles POST /api/enquiry.
// Sends the contact and careers forms to the right inbox using Resend.
//
// Environment variables (Cloudflare dashboard > Workers & Pages > theradora > Settings > Variables and Secrets):
//   RESEND_API_KEY   (secret) API key from resend.com, with theradora.com.au verified as a sending domain
//   CONTACT_TO       inbox for contact enquiries   (default: business@theradora.com.au)
//   CAREERS_TO       monitored recruitment inbox   (default: business@theradora.com.au)
//   MAIL_FROM        sender address                (default: Theradora Website <no-reply@theradora.com.au>)

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CAREERS_TO?: string;
  MAIL_FROM?: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const clean = (v: unknown, max = 5000) =>
  String(v ?? "")
    .replace(/[\r\u0000]/g, "")
    .slice(0, max)
    .trim();

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const handleEnquiry = async (request: Request, env: Env) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false }, 400);
  }

  // Honeypot: bots fill this in, people don't.
  if (clean(data.website)) return json({ ok: true });

  const form = data.form === "careers" ? "careers" : "contact";
  const name = clean(data.name, 200);
  const email = clean(data.email, 200);
  const message = clean(data.message);

  if (!name || !email || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ ok: false, error: "Missing or invalid fields" }, 400);
  }
  if (!env.RESEND_API_KEY) {
    console.error("enquiry: RESEND_API_KEY is not set on the Worker");
    return json({ ok: false, error: "not_configured" }, 500);
  }

  const type = clean(data.type, 50) || "Other";
  const subject =
    form === "careers"
      ? `[Careers] ${clean(data.discipline, 80) || "Application"} - ${name}`
      : `[${type}] Website enquiry from ${name}`;

  const skip = new Set(["form", "website", "message"]);
  const rows = Object.entries(data)
    .filter(([k]) => !skip.has(k))
    .map(([k, v]) => `<tr><td><strong>${esc(k)}</strong></td><td>${esc(clean(v, 500))}</td></tr>`)
    .join("");

  const html = `<table cellpadding="6">${rows}</table><p style="white-space:pre-wrap">${esc(message)}</p>`;

  const from = env.MAIL_FROM || "Theradora Website <no-reply@theradora.com.au>";
  const to = form === "careers"
    ? env.CAREERS_TO || "business@theradora.com.au"
    : env.CONTACT_TO || "business@theradora.com.au";

  let res: Response;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject, html }),
    });
  } catch (err) {
    console.error("enquiry: could not reach Resend", String(err));
    return json({ ok: false, error: "send_failed" }, 502);
  }

  if (!res.ok) {
    // Resend explains why (unverified domain, bad key, invalid recipient). Log it for
    // Cloudflare Workers Logs; never return it to the visitor.
    const detail = (await res.text().catch(() => "")).slice(0, 500);
    console.error(`enquiry: Resend rejected the email (HTTP ${res.status}) from="${from}" to="${to}" ${detail}`);
    return json({ ok: false, error: "send_failed" }, 502);
  }

  return json({ ok: true });
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/enquiry") {
      if (request.method !== "POST") {
        return new Response("Method not allowed", { status: 405, headers: { Allow: "POST" } });
      }
      try {
        return await handleEnquiry(request, env);
      } catch (err) {
        console.error("enquiry: unexpected error", String(err));
        return json({ ok: false, error: "server_error" }, 500);
      }
    }
    return env.ASSETS.fetch(request);
  },
};
