# Submission check · October 23, 2026

## Current submission

Paper has four pages: Problem & evidence, Design decisions, Final iteration, and Tradeoffs & next steps. Five section studies explain the selected decisions. The final screen has eight separate before/after details, an expanded comment thread and an open Tools state. There are 22 PNG/JSX export pairs. The rationale is one page. Video and archived explorations are excluded from the submission pack.

The five decisions are reading a summary separately from following its code link, nested file navigation with Return, control placement, explicit file/layer scope, and deliberate viewed progress with Undo. Comments retain severity and resolution; their ordering remains a limited refinement, not a proven improvement.

## Corrections in this pass

- Matched the first three summary points across the decision sketches. The original-behavior sketch is labeled simplified; all six source points remain available in the prototype.
- Standardized primary Paper links to the opening page. Explicit final-screen and interaction links still open their named states.
- Fixed the no-comments preview when entered from a local-note editor or Entire layer. It now switches to This file, clears stale thread highlighting and preserves local drafts.
- Moved the old public review report and accumulated verification history into archive. They describe earlier versions and are excluded from the submission pack.
- Refreshed the affected Paper PNG/JSX and rationale links. Wrote an unsent review-request email.

## Browser checks

Checked the main flow at 1280 × 720 on the public prototype before the supporting-state fix:

- Summary expansion preserved code position. The normalization link selected only L75.
- Inspect guard opened feedback-access.ts; Return restored access.ts, L75 and the prior position.
- Focus and Split/Unified retained the selected line. No horizontal page overflow was present.
- Opening the resolved thread selected L75–90; closing cleared its highlight. Returning to Summaries restored the statement selection.
- File navigation alone left viewed progress unchanged. Mark viewed and Undo updated the count correctly. Summary seen remained separate.
- J/K changed layers; Z toggled Focus. Typing j/k/z in a local note did neither.
- Loading and unavailable previews stayed labeled. Retry explained its simulated behavior.

After the fix, checked locally that the no-comments preview works from both a local-note editor and Entire layer, preserves the draft, selects This file and clears stale code highlighting. The direct ?state=empty URL also showed the labeled empty state.

The preceding layout pass inspected 1440 × 960, 1280 × 960 and the context overlay below 1280. It checked Tools focus return and reduced-motion behavior. This pass did not repeat those unchanged layout checks. Historical observations are retained in archive/verification-history.md.

## Limits

Seven of 52 diffs are included at commit 23cdac2. Code links are manually mapped. One resolved thread is paraphrased, with two reply bodies omitted. Secondary workflows remain previews. Submit is disabled for the merged PR; the open-PR decision dialog is an explicit simulation. Notes and progress reset on reload.

These are implementation checks and design hypotheses, not developer research. No measured efficiency gain is claimed. The work exceeded the original 1–2 hour brief. Paper requires sign-in. Nothing was sent to CodeRabbit or Nimra.
