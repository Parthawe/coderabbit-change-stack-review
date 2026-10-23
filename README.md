# CodeRabbit Change Stack review redesign

Design exercise by Parth Pawar using the assigned Formbricks PR #8650.

## What to send

- [Editable Paper design](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-1-0/1YS-0)
- [Working prototype](https://parthawe.github.io/coderabbit-change-stack-review/)
- [One-page rationale](https://parthawe.github.io/coderabbit-change-stack-review/rationale.pdf)

Paper contains the diagnosis, matched comparison, final reviewing screen and rationale. Supporting states have their own page. Paper requires sign-in; the prototype and rationale are public. The [walkthrough](docs/submission-walkthrough.md) gives the presentation sequence.

## Design argument

I kept layer-based review and focused on staying oriented while checking an explanation against code. The original already has summary navigation, explicit viewed status, J/K and Z. The comparison pairs the untouched original capture with final M using the same imports and six source points. M shows the later observed merged status. This version keeps short checks visible and the full source wording one click away, links its individual points to code, and provides a return path after inspecting a guard in another file. File and layer context have explicit scopes. Sample, layer and PR coverage are labeled separately.

## Try it

Start with access.ts. Follow L57–65 beside the workspace-access point, choose Inspect guard, then Return to access.ts. Switch between This file and Entire layer to inspect captured summaries grouped by file. All nine layer paths remain in the rail. Mark viewed updates sample and layer progress; Undo reverses it.

Unified and added-file Split wrap at 13px. Wrap toggles horizontal reading; Equal panes restores a 50/50 split. Tools includes Copy path and Full file / Captured ranges. Outline opens the six captured access.ts entities beside the toolbar. Comments includes Add file note and file/line notes stored in this tab.

The primary snapshot is merged, so Submit review is disabled. Source notes & states contains a separately labeled Open-PR review demo with simulated decisions. Nothing is sent. Loading and unavailable-source demonstrations are there too.

## Scope and checks

The out-of-date 23cdac2 snapshot includes seven of 52 complete file diffs, nine layer-1 paths, 14 of 37 layer summaries, and one paraphrased resolved thread. The full six-point workspace-tenant summary is retained. Code anchors are manually mapped; Full file and Captured ranges do not reproduce the source semantic-diff engine. Modified-file patches, full-PR search and other uncaptured workflows remain outside the implementation.

Direct links, guard/return, scope, progress/Undo, notes, Copy path, six entities and keyboard checks passed at 1440px, 1280px and the 1100px overlay breakpoint. [Verification](docs/verification.md) separates the current check list from earlier release records. Developer testing and measured usability improvement remain unverified. [Ten review perspectives](docs/ten-perspective-review.md) is historical AI critique, not developer research.

Serve locally with `python3 -m http.server 4317 --directory dist`. No build step is required. `dist/` is the submission; `design/paper-submission/` holds Paper exports. Earlier concepts remain in `archive/` and Paper's archive pages.

CodeRabbit branding follows the [official reference](https://www.coderabbit.ai/brand). Formbricks source and bundled fonts retain their licenses. Raw Paper exports are composition references, not runnable React components.

Current native design exports are in `design/paper-submission/`. Other files under `design/` record earlier studies and are not the final submission.
