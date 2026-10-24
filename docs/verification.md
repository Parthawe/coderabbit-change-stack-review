# Submission check · October 23, 2026

## Current submission

Paper has four pages: Problem & evidence, Design decisions, Final iteration, and Tradeoffs & next steps. Five section studies explain the selected decisions. Eight separate before/after details surround the final screen, with expanded comments and open Tools shown separately. The pack contains 22 PNG/JSX pairs and a one-page rationale. Video and archived explorations are excluded.

The five decisions cover reading separately from code navigation, nested files with Return, control placement, file/layer scope, and deliberate viewed progress with Undo. Comments retain severity and resolution. Their ordering remains a hypothesis based on limited content.

## Two independent reviews

One reviewer inspected interaction state and code; the other checked the design story, source evidence and exports. Both were AI-assisted reviews, not developer usability tests.

- Restored an Outline selection and its code range when returning to a file. It no longer falls back to the first summary.
- Separated comment expansion from navigation. Reading a thread leaves the file and code position alone. Its explicit line link opens L75–90 and expands a collapsed diff if necessary.
- Prevented a pending Focus scroll restoration from overriding Reset.
- Kept keyboard focus on the replacement control after returning from a note or revealing the diff.
- Restored the captured layer’s nitpick label beside its major and minor findings. The source comments filters record one of each.
- Corrected two Paper connectors to point at the statement link and Inspect guard.
- Replaced the weak automatic-viewed alternative with a credible checkbox-only option. The chosen addition is immediate Undo.

## Verification

Browser checks at 1280 × 720 passed for Outline → next file → previous file, summary links, thread expansion without code movement, independent thread code links, collapsed-diff recovery, and Entire layer comments while a different file stays open. The line link returns to access.ts while retaining Entire layer. Reset from Focus restores the initial selection and position.

Earlier checks in this pass covered summary expansion, L75 selection, Inspect guard and Return, Focus, Split/Unified, viewed and Undo, J/K, Z, typing shortcuts in notes, local drafts, file/layer counts, empty and unavailable states, file search, bulk viewed Undo and the explicitly simulated review dialog. The layout pass checked 1440 × 960, 1280 × 960, the narrower context overlay, dialog focus and reduced motion. These unchanged cases were not all repeated after the final targeted fixes.

The behavior reviewer rechecked the repaired state transitions and found no further concrete defect. JavaScript syntax passes. Updated Paper sections were inspected for spacing, type, contrast, alignment and clipping. The rationale was rendered and inspected as one page. Current PNG/JSX exports and connector metadata were refreshed.

## Limits

Seven of 52 diffs are included at commit 23cdac2. Code links are manually mapped. One resolved thread is paraphrased; two reply bodies are omitted. Secondary workflows remain previews. Submit is disabled for the merged PR; the open-PR decision dialog is an explicit simulation. Notes and progress reset on reload.

No measured efficiency gain is claimed. The work exceeded the original 1–2 hour brief. Paper requires sign-in. Public URLs remain unchanged. The email was left untouched during this pass.
