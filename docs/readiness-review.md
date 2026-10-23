# Submission readiness review

Method: two independent assessments, design by `/root/readiness_design` and implementation evidence by `/root/readiness_evidence`, followed by reproduction and fixes in the main session. October 22, 2026.

## Decision

M is ready to present as a focused design prototype after the three interaction corrections below. It is not a validated replacement for the complete Change Stack workflow. The assignment asks for one strong screen, three to five diagnosed problems and a rationale or video; it does not require rebuilding all 52 diffs. Keep the four explorations archived. Do not add more frames to make the work look larger.

The submission is specific to code review: named layers and files, manually mapped statement links, a caller/guard return path, explicit viewed state and an added-file Split treatment. The strongest contribution is continuity while reading. Its main weakness is density at 1280 × 720 and the limited evidence for improvement over the original.

## The design argument

The hypothesis is plausible: a reviewer should spend less effort locating the code behind a summary and recovering their place after inspecting a dependency. The prototype demonstrates the mechanism. It does not establish that reviewers understand the change better or find more defects.

The original already has summary jumps, viewed state, keyboard navigation and focus mode. The contribution is finer statement links, explicit file/layer scope, clearer placement of actions and the return path. Preserve that distinction in the presentation.

A narrow highlighted range can also encourage overconfidence. The label is a navigation aid, not a correctness verdict. Whole-function access, surrounding code and the original summary wording must remain available. Code-first review and disagreement with the summary are important counter-tests.

## Fit against the actual assignment

| Judging criterion | Evidence in this submission | Remaining weakness |
| --- | --- | --- |
| Spot the right problems | Annotated source shows competing control rows, broad summary scope, layer orientation and distinct progress meanings. | These are designer observations; there is no developer research showing frequency or severity. |
| Better visual and micro-interaction polish | Precise selection, guard/return, deliberate viewed with Undo, fixed context controls, wrapped code and Focus. | Six statement blocks are tall on a 720px display. Tools still interrupts reading with a dialog. |
| Make the same information easier to scan | Same imports and six source points in the matched comparison; shorter labels retain full wording. | The static comparison checks content retention, not task performance. Seven complete added-file diffs and fourteen summaries are only part of the original. |
| Explain why | One-page rationale and three-minute script connect changes to the review task and acknowledge tradeoffs. | The presentation must show the task early. A long tour of limitations, counts and archived explorations would weaken it. |

The brief explicitly accepts a prototype, so the working browser link covers that deliverable. Paper is the editable design record and requires sign-in. Brand matching and frame volume are not grading criteria. The original expected effort is one to two hours; do not claim this extended iteration was completed within that time.

## Independent design assessment

The pre-fix heuristic assessment was 29/40. This is a design checklist score, not a predicted hiring score or a user-study result. The three implementation corrections have not been assigned a new score.

| Heuristic | Score / 4 | Main observation |
| --- | ---: | --- |
| Visibility of status | 3 | Scope and status are explicit; several denominators compete. |
| Match with developer practice | 3 | Paths, diffs and review terms fit; sample versus layer progress needs explanation. |
| User control | 3 | Return, Undo and cancellation exist. |
| Consistency | 3 | Coherent structure; Paper and browser differ in code styling and some metadata placement. |
| Error prevention | 3 | Merged submission is disabled and simulations are labeled. |
| Recognition | 3 | File names and code links help; numeric layer shortcuts rely on learned positions or labels. |
| Efficiency | 3 | Shortcuts and reading-state restoration help; nested scrolling adds cost. |
| Minimalist design | 2 | Secondary chrome and tall statement blocks still crowd the reading area. |
| Recovery | 3 | Unavailable, retry, local notes and Undo are represented. |
| Help | 3 | Labels and source notes exist; the task to try is clearer in Paper than on the prototype alone. |

The bounded HTML detector reported zero findings. That result does not assess developer comprehension, external CSS quality or full accessibility. Manual testing found defects the detector did not catch.

## Corrections made in this pass

Paper's interaction contract was updated first; the browser implementation and native/PNG flow exports were then updated.

1. **P2: a layer-wide complexity filter silently became a file filter.** Entire layer → High called the same function used to open an individual summary. The new path filters the current scope without changing file or code position. High returns four captured matches across four files; Medium returns ten; Low returns an explicit capture-gap state; All returns fourteen. A High filter also works while errors.test.ts, which has no High summary, remains the current file.
2. **P2: evidence links lost keyboard focus.** Replacing summary markup removed the focused button. The replacement evidence action now receives focus with no extra scrolling. Statement links, Whole function and Go to start were checked using Enter. Return from the guard restores focus to Inspect guard.
3. **P2: revealing the selected file moved the outer layer list.** Browser scrollIntoView scrolled both the file sublist and its parent, clipping the active layer heading. The correction scrolls only the bounded file list. Guard navigation now leaves the outer layer scroll at zero in the tested initial flow.

The source fixtures remain unchanged. The rationale's argument and recording sequence remain valid; these fixes make their described behavior hold in the tested cases. Two stale repository descriptions of the comparison and source summary were corrected.

## Remaining priorities

### P1 for presentation: show the task, not only the matched screenshot

The matched screenshot holds code at imports while the summary refers to a function further down. Keep it as the content-retention checkpoint. Then immediately demonstrate L57–65 → Inspect guard → Return to access.ts. The existing main and guard states are sufficient; no new concepts are needed. Do not imply that a different diff mode or shorter wording alone proves faster review.

### P2 for the next visual iteration: compact the six statement actions

At 1280 × 720, the selected summary's last point and full-source disclosure require context scrolling. A compact clickable row with the label and range together would reduce this height without smaller text. Keep the guard action subordinate. This is a candidate for the next comparison, not an untested late redesign applied to every frame.

### P2 for validation: challenge the summary-led hypothesis

The demonstration follows the exact path the prototype optimizes. Add a code-first task and ask what evidence would make the reviewer disagree with a summary. Watch whether precise anchors cause people to skip a relevant guard or branch. Success requires explanation accuracy as well as fewer wrong turns.

### P3: clarify the authority of Paper and the prototype

Paper defines the composition and intended interaction states. The browser is the executable behavior reference; it has richer syntax coloring and slightly different metadata placement. They are aligned in content and workflow, not pixel-identical. Do not claim pixel parity.

## Persona checks

- A first-time evaluator can identify the selected file but may not know why 7, 9, 6 and 52 appear together. The labels are accurate; demonstrate one task before explaining coverage.
- An experienced developer will question manual anchors, missing semantic boundaries and whether summary-led reading biases review. Acknowledge those implementation and validation questions directly.
- A keyboard user encountered the confirmed focus defect. The corrected anchor flow passes the targeted checks, but a complete screen-reader audit has not been run.

Cognitive load remains moderate. The toolbar exposes six peer controls, layer navigation has seven shortcuts, and the selected summary has six statement actions plus source/range/seen actions. These are real capabilities. Better grouping and fewer repeated rows would be more useful than hiding them simply to meet an arbitrary count.

The interaction's strongest moment is returning from the guard without losing the caller. The initial merged/stale/sample labels can make the entry feel defensive. End the presentation on the completed reading loop and the next test, rather than the disabled Submit button.

## A small, useful validation session

Recruit a few developers who review TypeScript PRs. Use the same commit and content on both interfaces; vary which interface they see first. Treat this as formative feedback, not statistical proof.

| Task | Observe | Failure signal |
| --- | --- | --- |
| Explain the workspace access check and inspect the referenced guard | Wrong turns, backtracking and explanation accuracy | They return successfully but misunderstand the entitlement or access condition. |
| Start from the code and explain what would need further inspection | Independent reading and use of surrounding code | They treat the selected AI statement as sufficient evidence. |
| Find High-complexity captured changes across the layer | Scope comprehension and missing matches | They assume a file filter is a layer filter or overlook other files. |
| Mark one file viewed, switch files, return and correct the mark | Confidence about what changed and what was submitted | They confuse viewed, summary seen or approval. |

Do not seed a fabricated finding into the real PR. Ask reviewers to explain uncertainty in the actual code. Record the observed difficulty, the smallest change that could address it and whether the next attempt improves comprehension.

## If CodeRabbit chose to build this

1. Reuse its existing semantic-diff, summary and review-state services. Do not ship the static fixture as a production engine. First implement the layout, explicit scope and local reading history with existing data.
2. Define each anchor by review run, commit, path, diff side and range. Verify that the target still belongs to the pinned snapshot. If it moves, stop the jump and offer the pinned or updated version; never silently highlight unrelated code.
3. Validate one modified-file example with additions, deletions and unchanged context before generalizing the Split treatment. Keep layer-owned changes distinct from full-file context.
4. Define persistence, server errors, permissions and review submission behavior before connecting the local prototype actions to real services. Generalized dependency traversal is a separate engineering question.

## What to present

Send the public prototype and rationale, plus Paper as the editable source. Keep M final. The archive, review reports and future concepts are supporting material if asked. The current recording script already follows the right order: diagnosis, brief comparison, code check, guard/return, scope, viewed/Undo and a testable hypothesis.

The most useful final question is whether the reviewer understands the change better after using the design. More frames, AI critiques or working buttons cannot answer that on their own.
