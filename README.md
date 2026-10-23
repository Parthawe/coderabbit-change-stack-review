# CodeRabbit Change Stack · Final iteration

Design exercise by Parth Pawar, using Formbricks #8650.

- [Prototype](https://parthawe.github.io/coderabbit-change-stack-review/)
- [Paper design](https://app.paper.design/file/01M5MWMDHE2E77VV689SCNHGV7/p-4-0/1-0) (sign-in required)
- [One-page rationale](https://parthawe.github.io/coderabbit-change-stack-review/rationale.pdf)

The site opens directly into the reviewing workspace. Paper contains the editable final iteration, source evidence and supporting design decisions. The rationale explains the three priorities and tradeoffs. There is no separate presentation in the submission.

The original already has summary jumps, viewed status and Focus. This iteration adds individual targets for six summary points, a manually mapped guard/return path, independent summary expansion, clearer layer/file nesting and Undo. Gray identifies navigation and display selections; orange connects a summary statement to its code. Complexity labels retain their source values. Opening a file marks nothing viewed.

Seven of 52 diffs are included at commit 23cdac2. The PR is merged, so Submit is disabled. About this prototype contains coverage and separate simulated states. Notes and progress stay in the tab. No developer study or measured improvement is claimed.

Serve locally with `python3 -m http.server 4317 --directory dist`. No build step is required. Current Paper exports are in `design/clean-submission`; original captures and provenance are in `design/evidence`. Earlier presentation source is archived under `docs/archive/presentation` and is not published. Old presentation URLs redirect to the prototype. Source and font licenses are retained.
