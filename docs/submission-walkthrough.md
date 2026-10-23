# Final submission walkthrough

The final screen keeps layer-based, file-by-file review. The five primary Paper boards are start, source diagnosis, matched comparison, reviewing screen and rationale. Ten supporting boards live on a separate page. Earlier approaches remain archived.

The main argument is continuity while checking code. Use [Critical design decisions](critical-design-decisions.md) for the decision, demonstration and limitation behind each step.

## Three-minute recording

1. Show the original diagnosis and the matched comparison. Both show the same imports and six source-summary points. Final M uses short labels and keeps the full wording available. The original already supports summary jumps and explicit viewed status. Its historical progress and review availability remain untouched; M starts at zero local progress and reflects the merged PR.
2. Open the final prototype at access.ts. Follow L57–65 beside the workspace-access point. Choose Inspect guard to open feedback-access.ts at its captured 20–49 summary, then Return to access.ts.
3. Choose Entire layer. Explain the 14 captured summaries grouped under nine file paths, with coverage against the original total of 37. Return to This file.
4. Point to Included files and the layer’s seven reviewable files plus two unavailable patches. Mark viewed and Undo. Explain that visiting a file, seeing a summary and approving a PR are different actions.
5. Close on the limits and developer test. Show compact Split only if there is time; wrapping trades horizontal movement for vertical scrolling.

The main snapshot is merged and Submit review is disabled. If asked, Source notes & states opens a separately labeled Open-PR review demo. Its decisions are simulated. J/K and Z were preserved from the source.

## Claims and limits

The direct links are manually mapped navigation anchors. The complete source summary remains available in Read full source summary. Inspect guard supports one captured caller/guard route; it does not establish automatic dependency navigation. Full file and Captured ranges are display modes, not a semantic-diff engine. The six captured access.ts entities are available in the Outline popover. Copy path and Add file note preserve narrow source workflows.

The revised direct links, guard/return, scopes, progress/Undo, notes, Copy path, six entities and keyboard flows passed implementation checks at 1440px, 1280px and 1100px. Developer testing remains outstanding. The prototype includes seven of 52 diffs from the out-of-date 23cdac2 snapshot; modified-file review needs further work.

## Submission links

- [Paper](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-1-0/1YS-0)
- [Prototype](https://parthawe.github.io/coderabbit-change-stack-review/)
- [Rationale](https://parthawe.github.io/coderabbit-change-stack-review/rationale.pdf)

Paper requires sign-in. The prototype and rationale are public. Supporting material is optional. Nothing has been sent to CodeRabbit.
