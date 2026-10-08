import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : [];
  });

let total = 0;
for (const f of walk("out")) {
  const n = (readFileSync(f, "utf8").match(/data-todo="true"/g) || []).length;
  if (n) console.log(`${String(n).padStart(3)}  ${f.replace(/^out/, "").replace(/index\.html$/, "")}`);
  total += n;
}
console.log(`\n${total} unresolved item(s)`);
process.exit(total ? 1 : 0);
