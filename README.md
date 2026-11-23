# make-your-own-bounty-post

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/oktamind/make-your-own-bounty-post/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/oktamind/make-your-own-bounty-post/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

A working entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X": one post of my own on X from public @oktamind that quotes make.fun's make-your-own-bounty post, https://x.com/makefunai/status/2124915864336236646, with a photo of its own attached and my play code in its text. The post itself is the entry: places go by its replies + reposts + quotes at the deadline, and the top 50 share $250. My bounty idea in the post: a tiny chess engine under 1KB that beats me.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads the post's address. That is all the program does.

---

<sub>Entered on [make.fun](https://make.fun/?ref=rrts6br6&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
