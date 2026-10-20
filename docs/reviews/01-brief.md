# Review 01 — Hiring designer / assignment fit

Reviewed commit fc06a01. Read-only review of REQUIREMENT-AUDIT.md, rationale-content.json, dist/comparison.html, the exported main, matched comparison and diagnosis boards, README and relevant prototype source. No browser interaction or developer usability study. The original assignment PDF was not independently extracted in this review because the available Python and shell lacked a PDF reader; the supplied challenge criteria and repository audit were used.

The submission is still recognizably the assigned Change Stack problem. It diagnoses four specific places in the captured original, preserves the layer model, and shows a coherent main screen. The strongest choice is tying a summary to its destination in the code. The first-person rationale reads like a designer making practical choices, especially where it acknowledges the context panel's width cost. The main remaining concerns are the visibility of identical information in the comparison and the visual meaning of selected diff lines.

## Ranked findings

### 1. Selected code loses the addition color across a large range

- Type: Verified visual difference; its effect on review accuracy is a hypothesis.
- Priority: P2.
- Evidence: design/paper-submission/02-main.png shows added access.ts lines 49–66 as brown text on a warm selection field. design/paper-submission/01b-matched.png shows the added imports in green. The selected summary covers lines 49–130, so the selection treatment can occupy most of the diff viewport. The original screenshot retains green addition semantics.
- Consequence: The new summary selection is obvious, but it competes with the code-review meaning of color. A large selected addition can read like an explanatory excerpt rather than a diff. The plus glyph remains, so this is not information loss, but it is weaker redundant encoding.
- Bounded fix: Keep the green/red diff text and addition/deletion tint when a range is selected. Use a low-opacity selection treatment and a clear range label for the connection. Verify a selected added range and an unselected added range side by side before changing the whole palette.
- Confidence: High on the visual difference; medium on its effect on a developer.

### 2. The matched comparison uses identical source text, but not equally visible text

- Type: Verified presentation limitation.
- Priority: P2.
- Evidence: In design/paper-submission/01b-matched.png, import lines 3, 4 and 6 continue beyond the right edge of the code viewport. The captured original in 01-evidence.png wraps those imports and exposes their contents. dist/comparison.html correctly includes the seven full imports and complete six-point summary in the expandable “Check the shared code and full summary” section. This makes the content auditable, but a hiring reviewer comparing the images first will see a cleaner redesign partly because text extends off-screen.
- Consequence: “Same information easier to scan” is not fully demonstrated by the images alone. The comparison is much fairer than before, but its advantage still combines hierarchy changes with a wrap/overflow change.
- Bounded fix: Add a visible overflow cue in the matched design and a one-sentence caption explaining the different wrapping behavior. Prefer a comparison-only wrap setting showing all seven imports if it can fit without shrinking the type. Keep the shared-content transcript. Do not claim that these images prove faster reading.
- Confidence: High.

### 3. The requirement audit contradicts the current design

- Type: Verified documentation defect.
- Priority: P2.
- Evidence: docs/REQUIREMENT-AUDIT.md still says the original starts at imports while the redesign starts at line 49 and different visible positions are disclosed. The live comparison now shows the same imports. The capability table says separate previous/next arrows are consolidated into a position control, while both current Paper exports show previous and next arrows. A later paragraph again describes the main screen's default workspace-summary position without distinguishing the new matched checkpoint.
- Consequence: A reviewer reading the process files cannot tell which limitations remain. It also makes the submission look less considered than the actual screen, because the criticism we have addressed remains documented as current.
- Bounded fix: Update only these audit rows to distinguish the matched checkpoint from the interactive line-49 state, and describe Previous/Next plus the searchable position picker. Keep the honest capability-parity limits.
- Confidence: High.

## Judgment against the four criteria

- Right problems: The four diagnoses are tied to visible source elements. The count-scope distinction is concrete. “Layer and file are apart” is more debatable because the original has both visible; the case is stronger when phrased as a weak relationship between selected layer, file position and path rather than distance alone.
- Visual and micro-interaction polish: Range linking, explicit viewed state, local Undo and stable file positions are purposeful. Preserve diff semantics while showing selection. I have not independently verified the working interactions in this review.
- Same information easier to scan: Better grouping is visible. Content equality is now inspectable, but overflow still affects the image comparison. The prototype's seven-of-52 coverage is stated and does not need to become a 52-file rebuild to satisfy a focused exercise.
- Explain why: The rationale is direct and owns tradeoffs. Its strongest sentence is the width tradeoff and focus-mode response. Avoid replacing it with a claim that every source capability is retained; the audit correctly lists partial and preview workflows.

## One further design exploration

Explore a review continuation cue that uses only verified state: “Next unviewed file” beside the current file's viewed action, with the full file list still available. This would test whether progress helps reviewers decide what to do next rather than merely reporting a count. Use the same PR and compare current Previous/Next against the continuation cue with developers asked to review three files, revisit an earlier file, then identify what remains. Observe wrong-file openings, backtracking and whether they understand that viewed is their explicit choice. Do not infer priority from complexity or invent risk findings.

Tradeoff: Advancing automatically after Mark viewed would be faster for some sequential reviews but could interrupt someone who still wants to inspect a summary or write a note. Test an explicit continuation control before introducing automatic navigation.
