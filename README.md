# CodeRabbit Change Stack review redesign

Design exercise by Parth Pawar, using Formbricks #8650. M is the final proposal.

[Start with the problem and comparison](https://parthawe.github.io/coderabbit-change-stack-review/comparison.html), then [try the access check](https://parthawe.github.io/coderabbit-change-stack-review/index.html?task=access-check). The route takes you from a summary to the guard and back to the caller.

- [Paper design](https://app.paper.design/file/01M5MWMDHE2E77VV689SCNHGV7/p-1-0/5FN-0) (sign-in required)
- [One-page rationale](https://parthawe.github.io/coderabbit-change-stack-review/rationale.pdf)

The original already has summary jumps, viewed status and Focus. This proposal adds individual targets for six summary points, a manually mapped guard/return path, clearer action grouping and Undo. Opening a file marks nothing viewed.

Both comparison captures use Light and Unified at 1280 × 720, beginning at access.ts line 54. Both come from running interfaces, with spacing and type sizes unchanged. The original fits more surrounding code; M gives files and summary links more room. The comparison documents the remaining differences.

Seven of 52 diffs are included at commit 23cdac2. The PR is merged, so Submit is disabled. About this prototype contains coverage and separate simulated states. Notes and progress stay in the tab. Developer testing is still needed; no measured improvement is claimed.

Four earlier approaches remain explorations. The current [design decisions](docs/critical-design-decisions.md), [presentation route](docs/submission-walkthrough.md) and [verification](docs/verification.md) describe M.

Serve locally with `python3 -m http.server 4317 --directory dist`. No build step is required. `dist/` contains the site. `design/clean-submission/` contains the current five-page Paper submission exports; `design/paper-submission/` contains earlier exports. current browser captures and their provenance are in `design/evidence/`. Raw Paper JSX is a composition reference, not a runnable React component. Bundled source and fonts retain their licenses.
