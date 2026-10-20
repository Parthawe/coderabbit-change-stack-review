# Review 07: state consistency

Reviewed the frozen `fc06a01` baseline read-only. This is a source trace of `dist/app.js`, `dist/index.html`, `dist/styles.css`, and the actual fixture ranges. I did not use or modify the browser, Paper, or repository. The steps below are reproducible from the event handlers; I have not claimed browser observation.

## 1. P1: The outline can leave a comment editor attached to code that is no longer selected

**Steps:** Open `access.ts`. Add a local note at line 75 and type a draft. With the Comments tab still active, open File tools and select `Enforce record ownership · 156–186` from the semantic outline. The central selection moves to lines 156–186, but Comments still displays the old line-75 note editor. Type another sentence and click Save local draft.

**Evidence:** `selectSummary()` at app.js:70 clears `state.commentLine` and `state.codeRange`, then only renders summaries and diff. It does not change `state.tab` or refresh the Comments panel. The outline calls this same function (103). `noteKey()` now returns null. The input handler ignores further typing because it requires a valid key (112), while Save uses `currentNote()` and stores under that null key (109). The previous legitimate draft survives in its original Map entry, but the new visible edits are not attached to it. The UI can toast a successful save while hiding its Saved block and retaining the old editor text. The historical-thread version is also inconsistent: open the resolved thread at 75–90, then choose the 156–186 outline entry; the old thread stays visibly open beside the new code selection.

**Consequence:** The most important promise of the redesign, explanation and code staying connected, fails across a supported interaction path. A note can appear editable after it has lost its file/line identity.

**Bounded fix:** Make outline selection an explicit context transition. Switch to Summaries, clear the thread/note selection, rerender Comments so an old editor cannot survive, and preserve the existing draft in its keyed Map entry. Reject Save if no valid file/line key exists. Centralize this transition so complexity filters and outline choices behave alike.

**Confidence:** High. The cleared key, stale DOM, ignored input, and null-key save follow directly from the handlers.

## 2. P2: Captured-ranges mode can hide the line that the UI says is linked

**Steps:** In full-file `access.ts`, add a local note at line 140. Open File tools and choose Show captured ranges only. The note remains labeled line 140, and the diff status still promises `Linked · L140–140`, but line 140 is replaced by a collapsed gap. The view scrolls toward the selected summary at line 49 instead.

**Evidence:** The fixture includes summary ranges 49–130 and 156–186. `renderDiff()` only includes rows inside summary ranges when `fullFile` is false (56); it does not include `state.codeRange`. The range badge is still derived from that active codeRange (53). The full-file action rerenders and scrolls to `currentSummary().start`, disregarding the active note/thread (109). `scrollToLine()` silently returns if its row is absent (62).

**Consequence:** The code and note can contradict each other despite an apparently successful navigation state. The reviewer cannot inspect the exact line they are commenting on without discovering how to restore full-file mode.

**Bounded fix:** A selected note or thread range must remain rendered in ranges-only mode. Include active `codeRange` rows in the row predicate, then scroll to the active range before falling back to a summary. An alternative is to restore full-file mode automatically when the requested target is outside captured ranges, with a brief explanation. Keep the linked badge conditional on an actual rendered target.

**Confidence:** High. Line 140 is verifiably outside both access.ts fixture ranges.

## 3. P2: Mark seen silently closes the source detail the reviewer is reading

**Steps:** Expand Read full source summary on the workspace-tenant summary. Read the six source points, then click Mark seen. The full source summary closes. Selecting the same summary again also closes it.

**Evidence:** `renderSummaries()` replaces the complete list with `innerHTML` (47), reconstructing every `<details>` without `open` and without saved disclosure state. Both Mark seen (104) and summary selection (70) call it. Focus restoration only covers summary/seen buttons (48); disclosure state is not restored.

**Consequence:** Completing a small progress action changes the reading layout and can remove the text a reviewer was still checking. The full-source disclosure is specifically part of the fair comparison, so it should not behave as disposable content.

**Bounded fix:** Track open source-summary IDs and restore `open`, or update only the affected seen label/pressed state without rebuilding the cards. Preserve disclosure through summary selection, filters when that card remains included, and a file round trip. This requires no new animation or new UI surface.

**Confidence:** High. Native `<details>` open state is discarded by this replacement.

## 4. P2: Reset demo can leave an Undo that restores progress from before the reset

**Steps:** Mark `access.ts` viewed, then mark it unviewed. While its Undo toast is still visible, open Source & prototype limits and choose Reset demo. Click the surviving Undo promptly. The file becomes viewed again even though reset cleared all progress.

**Evidence:** `toggleViewed()` stores the prior value in an Undo closure (72). Reset clears Sets, Maps, and several display fields (108), but never calls `dismissToast()` or invalidates pending Undo closures. The second toggle captured `wasViewed=true`, so Undo adds the old file ID to the newly reset Set.

**Consequence:** Reset is not a clean starting point. A stale action can silently change the newly reset review, undermining progress consistency during demonstration or evaluation.

**Bounded fix:** Dismiss and invalidate outstanding Undo when resetting. A reset generation token can guard closures as well. Reset should also restore the default layer-summary disclosure and close the context overlay so a fresh demo has one predictable presentation.

**Confidence:** High for stale Undo; the remaining presentation defaults are a separate low-risk completeness detail.

## One useful future design test

Ask a developer to read the full tenant summary, mark it seen, leave a line-140 note, use the outline to inspect ownership, and return to that note. Ask them to identify which code the visible explanation belongs to at each step. Record wrong associations, lost reading position, and recovery actions. This tests the connected-context idea under realistic switching, rather than only testing whether an isolated summary jump works.
