# Review 09: frontend feasibility and interaction precision

Reviewed frozen baseline `fc06a01`: `dist/app.js`, `dist/styles.css`, `dist/live.css`, `dist/brand.css`, `dist/index.html`, `dist/review-data.json`, and the exported Paper main/focus images. This is a static source and image review. I did not run the interface in a browser or change the baseline.

## 1. P2: Split mode gives each code line its own horizontal scrollbar

**Evidence:** `dist/app.js:57` wraps each line in a separate `.split-pair`, containing two `.split-cell` elements. `dist/styles.css:5` sets `overflow:auto` on every `.split-cell` and `width:max-content` on each child code row. The split content itself is capped at 100% width. Long lines therefore overflow individual cells rather than a shared before/after pane. This matters with current content: `errors.ts` line 43 has 279 characters, `access.ts` line 106 has 192, and `schemas.ts` line 291 has 205.

**Source-derived reproduction:** Open `errors.ts`, choose Split, and inspect lines 34 and 43. At a 1440px workspace, the after column is about half the 880px code workspace. Each long line has to be panned independently. Selecting a summary rebuilds those cells, discarding their individual horizontal offsets.

**Consequence:** A developer cannot pan across several related lines together. Some platforms also show a scrollbar under each overflowing row, creating uneven row heights. The file-level horizontal position memory only tracks `#diff`, so it does not restore these nested offsets.

**Bounded fix:** Give each before/after pane one shared horizontal scroll surface, with aligned row heights and a common vertical position. Since all seven included diffs are added files, an alternative within this submission scope is to explain that the before file is empty and present a full-width added-file view, while retaining the chosen layout preference for future mixed diffs. Do not claim split interaction is complete while it uses independent row scrollbars.

**Confidence:** High in the overflow and position-memory mechanism; browser verification is still needed for platform-specific scrollbar appearance.

## 2. P2: The range filter can remove the code that an open note claims to target

**Evidence:** `dist/app.js:56` includes a line in ranges-only mode only if it falls inside one of `f.summaries`. It does not include the selected `state.codeRange`. The comment entry handler at line 107 sets `codeRange` to the comment line. The Full file action at line 109 then rebuilds the diff and unconditionally jumps to the current summary. The linked badge at line 53 still reports the selected comment line.

**Source-derived reproduction:** In `access.ts`, use the full file to add a local note at line 20. Its captured summary ranges are 49–130 and 156–186. Open Tools and choose “Show captured ranges only.” Line 20 disappears, while the context still contains the line-20 note and the code badge still says Linked L20–20. The action also scrolls to line 49, which belongs to a different explanation.

**Consequence:** The code and context can contradict one another during a demonstrated path. This weakens the submission's central promise that selecting an explanation or comment keeps its code visible.

**Bounded fix:** When a note or thread is selected, retain its range as an exception to the ranges-only filter and jump to that target. If the filter must hide it, clear the link explicitly and explain that the target is hidden, with a “Show target” control. Use the active target (`codeRange` before summary) consistently for filtering, badges, and scrolling.

**Confidence:** High; the fixture ranges and render branches are explicit.

## 3. P3: Marking a summary seen closes its full-source explanation

**Evidence:** The source summary disclosure is rendered by `dist/app.js:47` without an `open` state. The Mark seen handler at line 104 calls `renderSummaries()`, which replaces the entire list with `innerHTML`. Focus is restored, but the disclosure state is not stored or restored.

**Source-derived reproduction:** Expand “Read full source summary” on the workspace-tenant card, read the six points, then press Mark seen. The disclosure is recreated closed. Marking the other summary also closes an open source explanation in the first card.

**Consequence:** A progress action changes reading state unnecessarily. A developer who wants to cross-check the explanation after acknowledging it has to reopen it.

**Bounded fix:** Update the clicked seen button and progress text in place, or retain disclosure openness by summary ID before rebuilding. Keep the existing focus restoration.

**Confidence:** High; DOM replacement necessarily discards the disclosure's local open state.

## What is already proportionate

The fixture is about 71 KB and the longest included file is 294 lines. Rendering one file at a time is a sensible scope. I found no source evidence that virtualization, a framework migration, or production-scale data architecture would improve this submission. Paper's main and focus exports keep the same file, range, and content, and use focus space for code rather than another layer of controls.

## Future experiment: make added-file layout an explicit design decision

Compare the current split presentation with an added-file view that gives all available width to the new code and labels the empty before state once. Use the same real `errors.ts` and `schemas.ts` content, including their long lines. Ask a developer to inspect a long validation string and then the adjacent checks, and observe horizontal panning, lost position, and whether the absence of a before file remains clear.

The constraint is that every included diff is an added file. The experiment cannot establish that split should disappear for modified files. The tradeoff is extra code width versus consistency with a user's chosen comparison layout. Keep a manual layout choice, and test genuine mixed patches separately when source coverage is available.
