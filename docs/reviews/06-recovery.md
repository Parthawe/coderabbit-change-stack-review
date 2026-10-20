# Review 06: recovery and interruption

Read-only review of fc06a01. Inspected `dist/app.js`, `dist/index.html`, the Paper flow, decision and unavailable PNGs and their exported structure, and `docs/final-usability-pass.md`. Findings below come from code paths and rendered Paper exports. I did not operate the shared browser or simulate a network failure in it.

The design already separates an uncaptured patch from a source failure. Local notes survive file changes, cancel does not alter the simulated review, and the completion message explicitly says nothing was sent. The remaining weaknesses concern getting back to work after an interruption.

## 1. P2: retry has no working/loading feedback

**Evidence:** `dist/app.js:117` catches initial fixture failure and inserts Retry. Clicking it calls `loadData()` at line 100. The function leaves the error and its enabled Retry button in place until the request completes. No request guard, loading label or busy state is set. Before data exists, every other click silently returns at line 100, while the static header still offers Submit review and shows 0/52 files viewed. `dist/index.html:19,32`.

**Reproduce:** Fail or block `review-data.json`, then allow a slow retry. Press Retry; the screen still says the fixture could not load, and repeated clicks start more requests. Submit review appears available but does nothing.

**Consequence:** The recovery action looks unresponsive. The user cannot distinguish another failure from a request still in progress. Static progress can look like loaded review data.

**Bounded fix:** Define loading, ready and failed states for the fixture. On retry, disable Retry and say “Loading pinned review…”, set `aria-busy`, and gate review-dependent controls until ready. Show progress as unavailable until data loads. Restore an enabled Retry on failure. Keep the actual network read; add no artificial delay.

**Confidence:** High for the code path; not browser-verified under network throttling.

## 2. P2: retained notes are hard to find after leaving them

**Evidence:** Notes are retained by file and line in `state.notes` (`dist/app.js:9,12–13,112`), but `selectFile` and `setLayer` clear `commentLine` (`32–33`). The Comments panel only renders a local draft when `commentLine` is set (`84`). Otherwise it shows source comments or an empty state (`85–89`). Neither the file picker (`91`) nor Comments exposes a list or count of local notes.

**Reproduce:** Add and save a note on access.ts line 75. Navigate to another file, return, and open Comments. The saved note is absent from that panel until the user locates line 75 and presses its comment entry again.

**Consequence:** The data survives, but recovery depends on remembering the exact line. “Saved in this tab” promises more useful recovery than the interface currently provides.

**Bounded fix:** When a file has local notes, add a small “Local notes in this file” list in Comments, with line links and draft/saved status. Keep these separate from captured source-comment counts. Clicking one restores that editor and highlights its line. Do not add backend storage or imply external saving.

**Confidence:** High from the rendering and navigation code.

## 3. P2: the unavailable-state escape abandons the previous file

**Evidence:** `state.lastFile` already stores the last available file and K back to layer 1 restores it (`dist/app.js:9,32–33`). However `return-file` always calls `selectFile('0')` (`110`). Paper 06 offers “Return to available file”; Paper 03 describes moving around and getting back.

**Reproduce:** Open errors.test.ts or another included file, scroll into it, and press J to reach an uncaptured layer. Click Return to available file. The workspace opens access.ts instead of the file just left.

**Consequence:** The clearest recovery control loses the user's task context even though the keyboard route preserves it. This is avoidable interruption cost, not a demand to fill the missing fixture.

**Bounded fix:** Return to `state.lastFile`, with access.ts only as a fallback, and use “Return to [filename]” on the control. Preserve its remembered position. Keep the explicit access.ts action on the two uncaptured modified patches if that action is deliberately named.

**Confidence:** High; direct mismatch between the two navigation paths.

## 4. P3: unrelated feedback replaces the viewed Undo action

**Evidence:** Every `toast()` call replaces the same element's HTML (`dist/app.js:16`). Mark viewed provides Undo (`72`), but Mark seen (`104`) or Save local draft (`109`) replaces that action with a plain message. The eight-second timer can therefore end early because of unrelated work, even while the Undo was otherwise available. Bulk marking seven files viewed has no Undo at all (`109`).

**Reproduce:** Mark access.ts viewed, then mark its summary seen before using Undo. The Undo disappears immediately. The file is still reversible by revisiting its viewed control, so this is not data loss.

**Consequence:** Undo availability depends on unrelated actions. The Paper promise that Undo survives navigation is true for navigation alone but incomplete for the likely next interaction.

**Bounded fix:** Preserve a pending viewed Undo until its own timeout or another viewed action. Send low-stakes save/summary confirmations to the existing polite status region or use a separate non-action notification. Give bulk viewed an Undo based on the prior viewed set. Avoid stacking a wall of toasts.

**Confidence:** High from the shared notification function.

## Further recovery design to test

Test a review-session checkpoint tied to repository, PR, pinned commit and review run. Offer “Resume local session” after refresh, with a clear explanation that drafts and viewed flags are local, plus “Start fresh”. Restore files, ranges and notes only for the matching snapshot. A newer commit should offer inspection of the old draft rather than silently attach it to shifted lines.

This could prevent refresh loss and make longer reviews viable. It also introduces browser-storage privacy, expiry and stale-line problems. For this assignment, document it as a next experiment rather than claim it is implemented. The current reload reset is already disclosed in Source & prototype limits and should not be represented as an undisclosed backend failure.

## Paper consistency note

Paper 03 points J/K navigation to State 06, while Paper 06 depicts the observed live source error. In the prototype J/K reaches an explicit fixture-coverage state; the source error is a separate labeled dialog. Keep those two destinations distinct in the walkthrough. The wording in Paper 06 itself already makes the distinction, so this is a cross-reference correction, not a reason to reconstruct missing content.
