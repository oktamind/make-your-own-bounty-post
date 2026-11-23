// Entry for post-x-promote-make-your-own-bounty-01 (Node 22, standard library only).
//
// The entry itself is the X post: one quote of make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646) from public @oktamind, with a
// photo of its own attached and the play code in its text. This program only hands the
// post's address to the grader: it copies POST.json from the repository root into
// /output/POST.json, where the gate reads it. The house then reads the post's replies,
// reposts and quotes from X itself; nothing this program writes is scored.
//
// The live post (verified via FxTwitter's public read before submit):
//   https://x.com/oktamind/status/2125011916846440737
// It quotes make.fun's post, carries its own photo, and its text holds @makefunai,
// the make.fun link and the play code makefun-trail-yoyo-chapel.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
