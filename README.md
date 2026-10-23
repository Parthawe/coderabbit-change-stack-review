# CodeRabbit Change Stack review redesign

Design exercise by Parth Pawar, using Formbricks #8650.

- [Paper design](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-1-0/1YS-0) — sign-in required
- [Prototype](https://parthawe.github.io/coderabbit-change-stack-review/)
- [One-page rationale](https://parthawe.github.io/coderabbit-change-stack-review/rationale.pdf)

I kept layer-based review and focused on checking a summary against code, inspecting an access guard, and returning to the call. The diagnosis covers three visible issues: competing control rows, an empty pane beside added code, and six summary points sharing one large range. Existing summary jumps, viewed status and Focus are retained.

[Try the review](https://parthawe.github.io/coderabbit-change-stack-review/index.html?task=access-check): select Require workspace access, choose Inspect guard, then Return to access.ts. The [comparison](https://parthawe.github.io/coderabbit-change-stack-review/comparison.html) shows the same content at the same size. The original uses Split and the redesign uses Unified; the original already offers Unified, so the display mode explains part of the width gain.

The prototype includes seven of 52 diffs at commit 23cdac2. Links are manually mapped. The PR is merged, so Submit is disabled. About this prototype explains the sample and provides separate simulated states. Nothing is sent. Developer testing is still needed.

M is the final proposal. Other approaches and earlier reviews are supporting history, not additional submissions. [Design decisions](docs/critical-design-decisions.md) and [verification](docs/verification.md) document the current work.

Serve locally with `python3 -m http.server 4317 --directory dist`. No build step is required. `dist/` contains the site; `design/paper-submission/` contains the Paper exports. Raw Paper JSX is a composition reference, not a runnable React component. CodeRabbit branding follows its official reference; bundled source and fonts retain their licenses.
