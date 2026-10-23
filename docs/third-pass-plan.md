# Third evaluation and implementation plan

October 22, 2026. M remains the final direction. Nothing is sent to CodeRabbit.

The assignment asks for one clearer review screen while retaining capability. The third evaluation used independent design and static-consistency reviews, the original Arc evidence, saved Paper exports, and the public prototype. Review A scored the pre-change design 29/40 on an internal heuristic checklist; this is not a hiring score or user study. The HTML detector returned zero findings. Workflow and content checks identified the meaningful changes below.

## Changes in order

1. Paper: expose the original summary bullets with direct code links; restore File/Layer context; retain all nine file names and viewed indicators; use a compact layer header; show merged state and a reachable seven-file sample count.
2. Supporting Paper states: demonstrate workspace access in access.ts, the referenced feedback-access.ts guard, and return with position preserved. Show layer summaries grouped by file. Distinguish historical matched capture from current merged status and the hypothetical open-PR decision state.
3. Prototype: implement those interactions from exported Paper values, plus Copy file path and an explicit Add file note entry. Preserve existing keyboard, Undo, wrapping, Split and recovery behavior. Label full-file versus captured-range scope honestly.
4. Submission: update the matched comparison, one-page rationale, recording script, Google Doc, exports and current documentation. Remove superseded claims rather than stacking another correction below them.
5. Verification: inspect at 1440×960 and 1280×720, check the narrower context overlay, exercise direct anchors, cross-file return, layer context, progress and Undo, notes, dialogs, shortcuts and unavailable states. Verify public links after deployment.

## Acceptance

- The source's summary jumps and deliberate viewed state are credited as existing behavior.
- A summary claim can be followed to a narrow code range, with the whole function still reachable.
- The reviewer can inspect the referenced guard and return without losing position or selection.
- Layer context contains captured summaries, not merely a progress count.
- Counts identify file, layer and sample scope; opening a file does not mark it viewed.
- M shows the observed merged state; submission simulation is entered explicitly as an open-PR demo.
- Seven complete added diffs, nine layer paths, fourteen captured summaries and missing modified patches remain accurately disclosed.
- Paper, prototype, rationale and recording instructions describe the same current behavior.

The source's full semantic engine, automatic follow-code, global file inventory, resizable panes and uncaptured analyses are not claimed as implemented. A meaningful two-file workflow is the demonstration boundary. Developer usability testing remains outstanding.

## Implemented

Paper was revised before prototype implementation. The final pass also corrected the full-card summary tint so only the active source statement receives emphasis. Current Paper PNG/JSX, matched comparison, rationale, recording DOCX/PDF and Google Doc were refreshed. Browser checks passed at 1440×960, 1280×720 and the 1100px overlay breakpoint. The original fixture and original screenshot were left intact. Public deployment verification is recorded in verification.md.
