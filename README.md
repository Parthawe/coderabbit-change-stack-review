# CodeRabbit Change Stack review redesign

Design exercise by Parth Pawar for the assigned Formbricks PR #8650.

## What to send

Send these three links. Paper contains the original diagnosis, matched comparison, final screen and supporting states. The browser demonstrates the interactions; the one-page rationale explains the choices.

- [Editable Paper design](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-1-0/1YS-0)
- [Working prototype](https://parthawe.github.io/coderabbit-change-stack-review/)
- [One-page rationale](https://parthawe.github.io/coderabbit-change-stack-review/rationale.pdf)

[Walk through the final submission](docs/submission-walkthrough.md). The final direction keeps file-by-file review. Earlier approaches are archived. [Before and after](https://parthawe.github.io/coderabbit-change-stack-review/comparison.html) and [future sketches](https://parthawe.github.io/coderabbit-change-stack-review/next.html) are supporting links inside the prototype. [Ten review perspectives](docs/ten-perspective-review.md) records the AI critiques and decisions; it is process evidence, not a required attachment or developer research.

## Design argument

I wanted to keep the file, explanation, and review progress connected. I kept file-by-file review so each explanation can be checked against the diff, then brought the frequent controls together. The header separates PR progress from the seven included demo files. Summary seen stays inside context, separate from file progress and the review decision. Paper shows the original screen, what I changed, and why.

## Try it

Select a summary to reveal its linked code range. Use Previous and Next beside the filename, or open the position to search all nine paths. Each file keeps its code and context position. Comments has a separate index for local file/line notes. Toggle Mark viewed and try Undo after switching files. Move between layers with J/K, use Z to focus, then open Submit review. The confirmation stays open until dismissed; decisions are simulated and nothing is sent. Loading, unavailable-source, and no-comments demonstrations are under Source notes & states.

## Scope

Pinned, out-of-date snapshot 23cdac2. Seven of 52 file diffs and fourteen short summaries support the demonstration; the full captured workspace-tenant summary can be expanded. Other content is labeled as preview. Complete capability parity and measured usability improvement are unverified. Paper may require sign-in; the prototype and rationale are public.

Serve locally with `python3 -m http.server 4317 --directory dist`. No build step is required.

`dist/` is the submission. `design/paper-submission/` contains Paper exports; `docs/` holds evidence and checks. Earlier concepts remain in `archive/` and Paper's archive pages. Their controls are outside the final submission.

CodeRabbit branding follows the [official brand reference](https://www.coderabbit.ai/brand). Formbricks source and bundled fonts retain their licenses. Raw Paper exports are composition references, not runnable React components.
