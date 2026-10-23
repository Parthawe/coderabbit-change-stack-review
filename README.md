# CodeRabbit Change Stack · Final iteration

Design exercise by Parth Pawar, using Formbricks #8650.

- [Prototype](https://parthawe.github.io/coderabbit-change-stack-review/)
- [Paper design](https://app.paper.design/file/01M5MWMDHE2E77VV689SCNHGV7/p-4-0/1-0) (sign-in required)
- [One-page rationale](https://parthawe.github.io/coderabbit-change-stack-review/rationale.pdf)

The site opens directly into the reviewing workspace. Paper has four pages: Problem & evidence, Design decisions, Final iteration, and Interactions & tradeoffs. Related boards sit together at full size; all PNG exports are 2× resolution. The rationale explains the four choices on one page. There is no presentation on the site.

The original already has summary jumps, viewed status and Focus. This iteration adds individual targets for six summary points, a manually mapped guard/return path, independent summary expansion, clearer layer/file nesting and Undo. Gray identifies navigation and display selections; orange connects a summary statement to its code. Complexity labels retain their source values. Opening a file marks nothing viewed.

Comments distinguish source messages from captured threads. The access.ts finding is resolved history with Major severity, not an open blocker. Its two reply bodies are not reproduced. Other files retain verified counts without invented severity totals; local notes are separate.

Seven of 52 diffs are included at commit 23cdac2. The PR is merged, so Submit is disabled. About this prototype contains coverage and separate simulated states. Notes and progress stay in the tab. No developer study or measured improvement is claimed. The new alternatives are current explorations, not A/B tests. The work exceeded the original 1–2 hour brief.

Serve locally with `python3 -m http.server 4317 --directory dist`. No build step is required. Current Paper exports are in `design/clean-submission`; original captures and provenance are in `design/evidence`. Earlier presentation source is archived under `docs/archive/presentation` and is not published. Old presentation URLs redirect to the prototype. Source and font licenses are retained.
