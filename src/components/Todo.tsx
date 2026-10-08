import type { ReactNode } from "react";

/**
 * Marks content that still needs to be confirmed before launch.
 * Renders as a highlighted block so it cannot be missed, and the
 * `data-todo` attribute lets `npm run check:todos` count what is left.
 */
export default function Todo({ children }: { children: ReactNode }) {
  return (
    <mark data-todo="true" className="bg-yellow-200 px-1 text-ink">
      [{children}]
    </mark>
  );
}

export function DraftBanner({ children }: { children: ReactNode }) {
  return (
    <div data-todo="true" className="mb-8 rounded-md border border-yellow-400 bg-yellow-50 p-4 text-sm">
      <strong>Draft, not for publishing.</strong> {children}
    </div>
  );
}
