// Laugh Track: The Crypto Trading Joke Contest — u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a
// Writes a single original one-line crypto trading joke to /output/entry.txt.
// Node 22, stdlib only. Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I bought the dip. Then the dip dipped, so I bought that dip too — my portfolio is now a dip museum, and the chart charges me admission to look at it.";

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

// The gate only accepts 1-200 characters, so refuse to write anything out of range.
// One line only: no newline inside the joke, and it must not be only whitespace.
if (
  JOKE.length < 1 ||
  JOKE.length > 200 ||
  JOKE.trim().length === 0 ||
  JOKE.includes("\n")
) {
  throw new Error(`joke is ${JOKE.length} characters, outside the 1-200 gate`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to ${outFile}`);
