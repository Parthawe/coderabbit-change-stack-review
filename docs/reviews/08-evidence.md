# Review 08 · Evidence integrity and capability preservation

Frozen baseline: fc06a01. Read-only source and exported-image review. No browser, Paper, or source mutations.

## Ranked findings

### 1. P2 · Paper drops verified findings from two layers

**Fact.** The original accessibility capture identifies layer 4, MCP feedback-record tools, as having one finding, and layer 6, OAuth metadata and documentation, as having two. `design/evidence/layer-1-summary-ax.txt:48` and `:60` preserve those counts. `design/evidence/live-review.json` and `dist/review-data.json` agree. The Paper main export instead shows only “3 files” for layer 4 (`design/paper-submission/02-main.paper-export.txt:119`) and “10 files” for layer 6 (`:145`). The matched Paper export has the same omissions. Layer 1 and 2 do display finding counts. The browser renders all nonzero counts (`dist/app.js:26`), so this is also Paper/prototype drift.

**Impact / judgment.** The omission can make the two layers appear to have no findings. It removes a source orientation signal while making the redesigned rail look cleaner. This undercuts the assignment's same-information comparison.

**Bounded correction.** Add “1 finding” and “2 findings” to those two Paper layer rows in the main and matched states, then refresh affected exports. Keep the counts exactly as captured. Severity distributions are a separate design decision; do not invent a priority ranking from the total counts.

**Confidence:** High.

### 2. P2 · The matched comparison preserves code in the document, but clips it in the image

**Fact.** `dist/comparison.html` says both views show imports 1–7 and provides their full text in a disclosure. The untouched original image wraps the imports so the complete text is visible. The matched Paper image clips long imports at the code region's right edge: lines 3, 4, and 6 lose module-path or symbol text. Its export gives the code rows `width: 'max-content'` inside an `overflow: 'clip'` ancestor (`design/paper-submission/01b-matched.paper-export.txt:264`, `:310–323`). The Paper comparison explicitly allocates a large empty area beneath seven single-line rows. The working prototype offers horizontal scrolling, but the static before/after image has no way to reveal the cut text.

**Impact / judgment.** Matching the source strings is useful, but the image does not yet demonstrate that the same visible information is easier to scan. The reduction in wrapping is partly the result of hiding the rest of each line. This is a presentation weakness rather than fabricated source content.

**Bounded correction.** In the matched Paper checkpoint, wrap those seven import lines to keep every token visible and export that image. There is room beneath the excerpt. Alternatively disclose the scrolling tradeoff directly beside the image and provide an additional horizontally shifted crop, but wrapping gives reviewers the fairest direct comparison. Keep the original capture untouched and retain the full-source disclosure.

**Confidence:** High.

### 3. P3 · The capability audit is stale and ends with a stronger preservation claim than it supports

**Fact.** `docs/REQUIREMENT-AUDIT.md:13` still says the redesign starts at line 49 as the comparison boundary; it does not document the new matched checkpoint. `:32` still says previous/next arrows were consolidated, although the current Paper and prototype restore them. The audit's final paragraph (`:52`) says existing product capabilities remain reachable through labeled controls and previews. Yet its own table states dedicated path-copy and file-level thread workflows are not implemented (`:36`). The source also exposes a global Layers/Files rail switch and a Command palette (`design/evidence/layer-1-summary-ax.txt`, nodes 19–22 and 151–154); neither has an explicit destination in the current audit. The README correctly says complete capability parity is unverified.

**Impact / judgment.** A reviewer checking the source can find the handoff internally inconsistent. The broad preservation sentence reads as a completion claim despite honest qualifications elsewhere.

**Bounded correction.** Update the audit to the current matched comparison and file controls. Replace the absolute preservation sentence with a precise statement that the demonstrated review path is retained and named omissions remain. Add explicit rows for global Files mode, Command palette, path copy, and file-level comments with their current status and intended future destination. A capability inventory correction is enough; it does not require implementing all source workflows.

**Confidence:** High.

## What held up

The fixture's seven layer file counts sum to 52; the nine captured file summary counts sum to 37; captured file comment-message counts sum to 15. Seven added-file source arrays match their addition counts. The workspace-tenant six-point detail agrees with the captured original summary. Shorter summary titles and descriptions are edits of captured material, not fabricated findings. The historical access-control thread is labeled paraphrased, resolved, and tied to the stale snapshot. Missing diffs, uncaptured summaries, reply bodies, and unknown layer details are generally distinguished from absence. Source comments and local notes use separate headings and explicit local-only wording. I found no basis to demand a 52-file reconstruction or a live backend.

## Further design exploration · A switch between file context and layer context

**Verified starting point.** The source uses a layer-wide context with 37 summaries and 15 comment messages. The redesign makes context file-scoped: access.ts has six summaries and three messages. This is a deliberate simplification, but it narrows cross-file scanning.

**Explore.** Keep “This file” as the default and let the same panel switch to “This layer.” The layer view would group the captured summaries by file and retain explicit captured/uncaptured labels. Selecting an item would switch the file and reveal its exact range. This preserves a route through the source's layer-wide context without reopening a separate screen. No inferred severity or invented summary content is needed.

**Tradeoff.** The scope switch adds a decision and needs strong file headings. It could bring back the count confusion the redesign is trying to remove.

**Test.** Give developers two tasks using the same captured content: inspect the workspace guard in access.ts, then find the schema rule for create-body fields. Compare file-only context with the scope switch. Observe whether they understand which scope the counts describe and can cross files without losing their original reading position. Treat speed and preference as unknown until tested.
