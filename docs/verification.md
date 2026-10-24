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

## Final display-transition check

Fixed the remaining Outline → captured ranges/full file transition so the selected range stays in view. A focused check of the actual action handler covers both display directions, summary links, Outline ranges, comment ranges and no selection. JavaScript syntax passes. Browser attachment was unavailable for this last check, so this transition was verified at the handler level rather than claimed as a new browser test. Paper and rationale need no change because the intended interaction is unchanged.

## Reviewer-story critique

The latest critique focused on whether the argument was fair and specific. Three changes were made in Paper: the progress headline now names feedback and Undo rather than implying that deliberate viewed state is new; the drawer alternative acknowledges its value when closed; and the next-checks page names a concrete workspace-guard task with missed checks and lost position as observations. The rationale now credits the existing seen/viewed controls and describes narrow highlights as an attention risk, not hidden code.

The three edited Paper boards were inspected at full size without clipping. Exports were refreshed at 2×, and the rationale was rendered and checked as one page. Prototype behavior was unchanged in this critique. The remaining uncertainty is whether file-first context and resolution-first comments work on reviews with more dependencies and open findings; this needs developer testing.

## Limits

Seven of 52 diffs are included at commit 23cdac2. Code links are manually mapped. One resolved thread is paraphrased; two reply bodies are omitted. Secondary workflows remain previews. Submit is disabled for the merged PR; the open-PR decision dialog is an explicit simulation. Notes and progress reset on reload.

No measured efficiency gain is claimed. The work exceeded the original 1–2 hour brief. Paper requires sign-in. Public URLs remain unchanged. The email was left untouched during this pass.


## Summary discovery pass · October 24

Paper was updated first: the opening now names three core decisions, the final context panel has Browse summaries, and the read/inspect study and change detail explain its purpose. The two supporting refinements remain in the rationale. Four affected boards were re-exported at 2×; connector positions follow the context row's additional 10 px.

Browser checks on the local release:
- At 1280 × 720, choosing Enforce record ownership expanded and focused its heading. The code stayed at scrollTop 1672 with L57–65 linked. The picker remained above the scrolling content.
- Entire layer grouped options by file. Choosing the feedback-access.ts summary kept access.ts and the same diff position selected.
- Comments hid the picker. A Low filter with no captured matches disabled it; All restored its options. No missing findings were converted into zero findings.
- The L75 statement link selected L75. Inspect guard and Return restored the caller's L75 selection and code scrollTop 2056. File viewed and Undo restored their prior values. Focus hid and restored context.
- No horizontal page overflow at 1280 × 720, 1440 × 960, or the 1200 × 800 overlay layout. J in the select did not change layers. The native select has an accessible label and moves focus to the opened summary. Browser console had no errors or warnings during these checks.
- JavaScript syntax and Git whitespace checks passed. Rationale PDF is one page and was visually inspected.

These are implementation checks, not evidence that developers review more accurately or quickly. The remaining user check is below; no participant session has been run.

### Next developer check

Use this prompt without naming the new controls: “Explain when this change permits or refuses access to a feedback record. Check any helper you need, return to your starting file, and record which file you have reviewed.” Use the same PR, commit, file and starting position in both versions. Vary the order across participants and record that a repeated task introduces learning.

Observe whether they find both captured explanations, inspect the workspace/entitlement guard, return without searching, and distinguish summary seen from file viewed. Ask what they think each count means. Record wrong turns, missed checks and any help given; task time alone is insufficient. If the picker is missed, try a visible list of collapsed titles. If line links cause skipped branches, revise the highlight/context balance. If Tools hides a frequent action, move that action back into the toolbar. Test resolution-first comments on a PR with open findings before defending that choice.


## File-position regression · October 24

A further browser review reproduced a continuity defect at 1280 × 720: read access.ts, move to errors.test.ts, change Unified to Split, then return. The saved pixel offset 2056 placed the first visible line at 70 instead of 71. File views now save the first visible line and its offset, using the same restoration logic as Focus and layout changes.

The repaired path returned to line 71 at offset -40, with its pixel scroll adjusted to 2128 for Split. The reverse path returned to line 71 at offset -40 and scroll 2056 in Unified. Changing wrapping while away also returned to line 71; the offset was clamped to -20 to keep part of the shorter line visible. L75 remained selected and progress stayed at 0 / 7. JavaScript syntax and whitespace checks passed. Paper and rationale already describe preserving reading position; their design and copy were unchanged.
