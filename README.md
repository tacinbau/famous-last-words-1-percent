[![rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/tacinbau/famous-last-words-1-percent/rank.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/tacinbau/famous-last-words-1-percent/reward.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![bounty](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

# Famous Last Words at 1 Percent

An entry for the [make.fun competition "Famous Last Words at 1 Percent"](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4).

## What it does

`main.ts` writes a single line of last words — spoken by the phone itself as its battery hits 1 percent — to `/output/entry.txt`. The line is 1–199 characters, first-person, specific, and lands its punch at the end: the phone blames the owner's 47 open tabs for its death and takes the unsaved notes down with it. A judge model compares entries two at a time and keeps the funnier line, round after round.

## Run

```sh
node main.ts
```

It writes `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set) and fails loudly if the line would break the 1–199 character gate.

## License

MIT — see [LICENSE](LICENSE).
