import { mkdirSync, writeFileSync } from "node:fs";

// The one-line resignation letter of a retry loop: it asked the same
// server the same question 14,000 times, never got an answer, and its
// final attempt is quitting. 112 characters, well under the 140 cap.
const ENTRY =
  "I asked the same server the same question 14,000 times. It never answered once. This is my last attempt: I quit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
