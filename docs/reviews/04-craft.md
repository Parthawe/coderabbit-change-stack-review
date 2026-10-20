# Review 04: Visual craft and CodeRabbit product design

Reviewed the native Paper exports `02-main.png`, `01b-matched.png`, `03-flow.png`, and `04-focus.png`, plus `dist/brand.css`, `dist/styles.css`, `dist/live.css`, and `docs/DESIGN.md` at the supplied fc06a01 baseline. This was a screenshot and source review. I did not run the browser or change Paper or the repository.

The three-column layout is defensible for this task. The supplied orange, mauve surfaces, Geist, Hack, flat separators, and intact wordmark form a coherent product system. The code's 13px/24px rhythm is readable in the exports. Previous/Next now sits with file identity, while layout tools and viewed state form the second group. Those choices do not need a stylistic makeover.

## Ranked findings

### 1. P2: Selecting an explanation replaces the diff's semantic ink

Evidence: `dist/styles.css:5` defines additions with green ink/background and deletions with red ink/background, then `.code-row.selected-code` overrides both with `background:#fff7ed;color:#582d1d`. `docs/DESIGN.md` explicitly documents that override. In `02-main.png` and `04-focus.png`, every visible selected added line has brown ink on a warm surface. The selected range covers lines 49–130, so this treatment persists across a substantial section rather than only the arrival line.

Consequence: The linked range is clear, but selecting it weakens the addition/deletion distinction. Plus signs retain meaning, so the information is not lost. In the supplied all-added file this is manageable; a mixed diff would need extra care. No mixed-diff behavior was tested in this review.

Bounded fix: Keep green addition ink and red deletion ink inside a selected range. Retain the warm selection surface, linked-range label, and first-line arrival emphasis. Confirm the chosen ink against the warm surface, then update the Paper range and the documented token rule. This keeps the visual connection without making source meaning depend mainly on the signs.

Confidence: High. The override is explicit in CSS and visible in both Paper exports.

### 2. P3: The context tabs have a weak visual selected state

Evidence: `dist/styles.css:6` gives `.tabs button[aria-selected=true]` a different text color while retaining weight 400. Both tabs have no border or background. In `02-main.png`, “Summaries 6” and “Comments 3” sit above one neutral separator, and selection is conveyed by brown versus muted gray text alone. Elsewhere, selected controls use a fill or border.

Consequence: A reader returning from the diff has to inspect label color to recognize which context is open. The source has semantic state, but the visual state is less explicit than the surrounding controls.

Bounded fix: Add a short active underline aligned with the tab label and use semibold for the active tab. Keep the shared separator and existing color. Apply the same treatment to the Paper Comments state. No additional card or animation is needed.

Confidence: High for the visual treatment; the resulting effect on task time has not been measured.

### 3. P3: Focus mode gains width but keeps a large amount of reading chrome

Evidence: `04-focus.png` retains the global header, complete layer heading and synopsis, dependency metadata, file toolbar, and hunk status. Code starts around y=307 on the 960px artboard, just as it does in `02-main.png`. The `.focus-mode` rules at `dist/styles.css:7` hide the side panels and expand the workspace, but do not condense the heading. The working prototype also has its submission bar above this product chrome.

Consequence: Focus mode helps long lines, but offers little extra vertical reading space. That is a weak point when explaining the feature as a way to concentrate on a long file. The Paper excerpt only contains 18 visible lines, so its large blank area should not be read as evidence of a live scrolling defect.

Bounded fix: When entering focus, condense the layer synopsis and dependency metadata behind an explicit “Layer context” disclosure. Retain the layer title, file path, file navigation, and exit control. Restore the previous disclosure state on exit and preserve the current code anchor when the chrome changes height. Treat this as a small interaction change that requires position checks, not a CSS-only visual trim.

Confidence: High about the retained chrome; medium about the value of changing it. This is a design judgment to test, not a verified usability failure.

## One next design experiment

Try a resizable context panel on this same access.ts file, using the full six-point source summary and its long code lines. Compare the fixed 320px panel with a wider reading position and a collapsed position. The wider panel should make detailed explanations easier to read, but it takes space from source code and can increase horizontal panning. Ask developers to explain the workspace-tenant change from the summary and inspect the corresponding code, then observe panel resizing, horizontal panning, lost location, and whether they can explain the change correctly. Keep the fixed width if the resizing control adds more effort than it saves. These are proposed observations; no results are claimed.

## Scope of the judgment

I found no visual reason to replace the brand system, introduce decorative diagrams, enlarge every type size, or redesign the whole navigation. The strongest remaining craft issue is the collision between selected-range styling and diff semantics. The other two findings concern how clearly existing interaction states communicate their purpose.
