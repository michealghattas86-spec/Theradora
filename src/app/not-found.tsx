import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell title="Page not found">
      <p>Sorry, we couldn&rsquo;t find that page.</p>
      <p>
        <Link href="/">Go to the home page</Link>
      </p>
    </PageShell>
  );
}
