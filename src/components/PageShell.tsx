import type { ReactNode } from "react";

export default function PageShell({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="bg-tint border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          {lead && <p className="mt-3 max-w-3xl text-lg text-muted">{lead}</p>}
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-4 py-10 prose-site">{children}</div>
    </>
  );
}
