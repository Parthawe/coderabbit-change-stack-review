# CodeRabbit Change Stack review redesign

Design exercise by Parth Pawar for the assigned Formbricks PR #8650.

- [Paper design](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-1-0/1YS-0)
- [Working prototype](https://parthawe.github.io/coderabbit-change-stack-review/)
- [One-page rationale](https://parthawe.github.io/coderabbit-change-stack-review/rationale.pdf)
- [Original and redesign](https://parthawe.github.io/coderabbit-change-stack-review/comparison.html)

## Design argument

The original has a lot competing with the code. I kept the layers, brought the frequent file controls together, and made the link between a summary and its code clearer. Marking a file viewed stays separate from submitting a review. Paper shows the original screen, what I changed, and why.

## Try it

Select a summary to reveal its linked code range. Toggle Mark viewed and try Undo after switching files. Move between layers with J/K, use Z to focus, then open Submit review. The confirmation stays open until dismissed; decisions are simulated and nothing is sent. Loading, unavailable-source, and no-comments demonstrations are under Source notes & states.

## Scope

Pinned, out-of-date snapshot 23cdac2. Seven of 52 file diffs and fourteen condensed summaries support the demonstration. Other content is labeled as preview. Complete capability parity and measured usability improvement are unverified. Paper may require sign-in; the prototype and rationale are public.

Serve locally with `python3 -m http.server 4317 --directory dist`. No build step is required.

`dist/` is the submission. `design/paper-submission/` contains Paper exports; `docs/` holds evidence and checks. Earlier concepts remain in `archive/` and Paper's archive pages. Their controls are outside the final submission.

CodeRabbit branding follows the [official brand reference](https://www.coderabbit.ai/brand). Formbricks source and bundled fonts retain their licenses. Raw Paper exports are composition references, not runnable React components.
