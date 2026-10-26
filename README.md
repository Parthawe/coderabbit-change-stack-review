# CodeRabbit Change Stack · Final iteration

Design exercise by Parth Pawar. The prototype uses Formbricks #8650 at commit `23cdac2d791cf1a0f25d80d82bc02a1f3922793c`.

- [Interactive prototype](https://parthawe.github.io/coderabbit-change-stack-review/)
- [Paper design and decisions](https://app.paper.design/file/01M5MWMDHE2E77VV689SCNHGV7/p-1-0/5FN-0), sign-in required
- [One-page rationale](https://parthawe.github.io/coderabbit-change-stack-review/rationale.pdf)

The four Paper pages cover source observations, feedback on my first version, three core decisions, final review states and next checks. The site opens directly into the review. Previous presentation URLs redirect to it.

The review contains all 52 pinned diffs in seven verified layers, compact change and finding signals, explicit summary-to-code links, Inspect/Return, Viewed/Undo, multiline local notes, Overview and Light/Dark/System themes. Modified files use equal Before/After panes; added files use the full width, as in the original. The original scrolls continuously within a layer; this prototype extends the stream across layers.

## Source verification

The pinned live review was accessible on October 26. All 52 layer memberships and guided file order were checked. Source content keys confirmed comparison base `e54641b01c838a57c9794807e76e0fc893f491a9`. All 52 GitHub patches reconstruct their before/after content at that base, totalling +5,722 / −127. The 24 source patches available for direct export matched their changed content. Live Split wrapping, gutters, shared scrolling and added-file behavior were inspected. See `design/evidence/continuous-source-verification.json` for evidence and limits.

## Run and check

Serve `dist` with `python3 -m http.server 4318 --bind 127.0.0.1 --directory dist`.

Run:

```sh
python3 scripts/reconcile-live-source.py
python3 scripts/verify-continuous.py --release
node scripts/verify-signals-theme.cjs
node --check dist/app.js
```

GitHub Pages runs the release gate before deployment. The prototype has no backend or runtime dependency on GitHub. Notes, drafts and progress stay in browser storage. The source PR is merged, so review submission is disabled.

Summary and thread coverage is partial. Semantic outlines, blame and other secondary tools remain previews. Dark colors are derived from the product palette. I reviewed the design with three developers through a mix of hands-on tasks and open feedback. Their feedback helped me revise the review flow. I haven’t completed a controlled comparison or measured improvements. The revisions exceeded the original 1–2 hour assignment scope.

The 2× Paper exports are in `design/continuous-review`. Earlier explorations remain recoverable in Git and the separate working Paper file. The submission pack contains no video. Nothing has been sent to CodeRabbit.
