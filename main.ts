// One Word for Your Wi-Fi — make.fun bounty entry.
//
// The task: one word describing my Wi-Fi, judged on funniness and truth.
// My Wi-Fi is there when you need it least and gone the moment it matters:
// full bars in the hallway, nothing at the desk. It does not drop, it
// ghosts — present one second, vanished the next, no explanation, no
// goodbye. No buffering wheel, no error message: just silence where the
// signal used to be. So the word is "Ghosting".

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "Ghosting";

function main(): void {
  // The gate: entry.txt must be UTF-8, a single word, 1-20 characters.
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error(`entry must be a single word, got: ${JSON.stringify(word)}`);
  }
  if (word.length < 1 || word.length > 20) {
    throw new Error(`entry must be 1-20 characters, got ${word.length}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the gate counts characters, and the word alone
  // is the whole entry.
  writeFileSync(join(outDir, "entry.txt"), word, "utf8");
}

main();
