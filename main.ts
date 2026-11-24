// Famous Last Words at 1 Percent — entry program.
//
// Writes a single line of last words, spoken by the phone itself as its
// battery hits 1 percent, to /output/entry.txt. The gate requires UTF-8
// text of 1 to 199 characters, not only white space, so the program
// validates the line before writing it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm at one percent, so listen up: your 47 open tabs killed me, and I'm taking your unsaved notes down with me. Worth it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Mirror the sealed gate: 1 to 199 characters, not only white space.
// Fail loudly instead of writing a line the judge would never see.
if (ENTRY.length < 1 || ENTRY.length > 199 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters; gate needs 1-199`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
