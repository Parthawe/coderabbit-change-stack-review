# CodeRabbit Change Stack — continuous review working draft

Design exercise by Parth Pawar, using Formbricks #8650 at commit `23cdac2d791cf1a0f25d80d82bc02a1f3922793c`.

This branch is a local revision responding to a developer’s exploration. It has not replaced the public submission. The source review is rate limited; the release gate deliberately fails until the remaining source checks are complete.

The existing submission links are unchanged:

- [Public prototype](https://parthawe.github.io/coderabbit-change-stack-review/)
- [Public Paper file](https://app.paper.design/file/01M5MWMDHE2E77VV689SCNHGV7/p-1-0/5FN-0), sign-in required
- [Public one-page rationale](https://parthawe.github.io/coderabbit-change-stack-review/rationale.pdf)

Working revision:

- [Paper working draft](https://app.paper.design/file/01M5W961Q440DVSB0QZ7E48E14/p-1-0/5FN-0), sign-in required. It retains four pages.
- Run `python3 -m http.server 4318 --bind 127.0.0.1 --directory dist`, then open `http://127.0.0.1:4318/`.
- The local rationale is `dist/rationale.pdf`. Affected 2× Paper exports are in `design/continuous-review`.

The draft includes all 52 pinned GitHub diffs and one vertical code stream, equal-width Split and Unified, expandable unchanged context, a direct Overview screen, stable Inspect/Return and Focus, explicit file-viewed progress with Undo, and range-based local notes. Severity and resolution remain adjacent. Source message counts include replies; missing thread bodies remain labelled.

Nine file assignments to layer 1 are verified. The other 43 diffs are accessible under “Layer assignment pending”; their source layer order is not invented. The comparison base and live CodeRabbit Split wrapping/scrolling still need verification. Matching +5,722 / −127 totals is insufficient proof of semantic parity.

Run `python3 scripts/verify-continuous.py` to reconstruct every before/after file from the captured hunks. Run `python3 scripts/verify-continuous.py --release` before publishing. GitHub Pages deployment now runs that release check too. Do not bypass it.

There is no backend or runtime GitHub dependency. Notes, drafts and progress stay in browser storage, keyed to the pinned commit. The PR is merged, so submission is disabled. No completed usability comparison or measured review-time improvement is claimed. The work exceeded the assignment’s original 1–2 hour scope.

See `docs/continuous-review-status.txt` for checks, limitations and the next developer task. Earlier explorations remain recoverable in Git and the unchanged public Paper file. They are excluded from the working-draft ZIP. No video is included.
