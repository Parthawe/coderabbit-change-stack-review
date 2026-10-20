# Review 02: developer reviewing a large PR

Reviewed commit `fc06a01c0c49ec3d569fe8a4015abb2600ffab89`. Read-only code and Paper-export inspection. No shared browser, Paper changes, or repo edits. Findings below are code-derived reproduction paths, not observations from a human usability study.

The file-position control, Previous/Next, explicit viewed state, and code-position memory are useful improvements. The remaining weakness is recovery: code position is remembered more completely than the context used to make a review decision.

## 1. Saved local notes disappear from the review surface after changing files

**Rank: 1. P2. Confidence: high.**

**Evidence:** `dist/app.js:9–13` stores notes by file and line. `:33` clears `commentLine` and `thread` on every file selection. `:82–89` only renders a local note when `commentLine` is set; otherwise it renders source-comment states. `:40` uses the source comment count without any local-note indicator. `:51` renders the same empty comment-entry affordance for every line, whether or not a note exists. `:91` gives the file picker no note/draft indicator.

**Reproduce:** Open `errors.test.ts`, add a local note at a code line, and save it. Go Next, then Previous. Open Comments. Because the source count is zero, the panel says “No comments to show.” The saved local note is still in the Map, but neither this state nor the code identifies it. It can only be recovered by reopening the comment entry on the exact line.

**Consequence:** A developer returning after an interruption can reasonably think the note vanished. A more subtle case is an unfinished draft: it remains stored, but there is no cue that it needs attention before the simulated review decision.

**Bounded fix:** Add a small, separately labeled “Local notes” list to Comments for the current file, with line links, draft/saved status, and a count distinct from captured source comments. A line with a local note should expose a persistent note marker. Keep the existing file-and-line storage. Do not mix these notes into the source-comment count or imply they will be submitted.

## 2. Split view loses horizontal reading position because each row scrolls independently

**Rank: 2. P2. Confidence: high for the implementation mechanism; unverified live rendering.**

**Evidence:** `dist/app.js:57` creates a separate `.split-cell` for each code row. `dist/styles.css:5` gives each cell `overflow:auto`, while the code row inside has `width:max-content`. `dist/app.js:30–31` remembers only the outer `#diff` scroll offsets. `:58` rebuilds all row cells whenever the diff renders. The current fixture contains `access.ts` line 106 with 192 characters, so a row can exceed even a wide split pane.

**Reproduce:** Open `access.ts` in Split. Find line 106 and horizontally scroll its After cell to read the end of the message. Switch to another file, then return. The new split-cell DOM starts at horizontal offset zero. Toggling focus or another operation that rebuilds the diff has the same preservation limitation. Neighboring long rows also have separate horizontal positions.

**Consequence:** The claim that each file retains its horizontal reading position holds for the outer unified diff, but not the split-cell reading position. Reading a function across several long lines also requires repeated horizontal scrolling.

**Bounded fix:** Give each split pane one horizontal scrolling surface, or synchronize horizontal scrolling across its rows. Remember the pane offsets with the file view. Verify long-line reading, file round trips, and focus toggles in both layouts before claiming complete position preservation.

## 3. Changing files retains the sidebar scroll but rebuilds its contents

**Rank: 3. P2. Confidence: high for the state omission; exact scroll outcome depends on viewport.**

**Evidence:** `dist/styles.css:6` makes the entire `.context-panel` independently scrollable. `dist/app.js:30` records only diff offsets and the selected summary. `:33` selects a new file and `:43–47` replaces its summary contents without resetting or restoring context scroll. The Paper main export shows the selected summary at the top; there is no alternate state indicating that the file changed while the panel was scrolled.

**Reproduce:** In `schemas.ts`, scroll context down to a later summary, then use Next or the picker to open `access.ts`. The sidebar keeps its previous offset, subject to the browser clamping it to the new content height. The new file's selected first summary and context heading can be above the visible area even though its code range is selected.

**Consequence:** A user can see one file's code with a context panel positioned partway through a different file's summaries. The linked-selection design becomes harder to follow at exactly the point where file switching should establish context.

**Bounded fix:** On a first visit, put the context heading and selected summary in view. On return, restore that file's sidebar position or scroll the selected item into view. Store the selected tab, sidebar position, and open thread/note locator together if those states are meant to survive navigation. Do not mark summaries seen as a side effect.

## Future exploration: an explicit review resume point

Explore a compact “Resume review” entry in the PR header or Overview that returns to the last file, code position, context tab, and open local draft. It could also show the next unviewed included file using the existing viewed state. This would give interruption recovery a visible destination rather than relying entirely on invisible state memory.

The tradeoff is added state and another navigation choice. It can also send someone back into an old context after the PR changes, so a real product would need commit-aware invalidation. Test with developers reviewing three files, writing a note, checking a different layer, and returning after an interruption. Check whether they recover the same line and note without searching, and whether they understand the difference between returning to work and marking it complete. No speed claim is justified until that test happens.
