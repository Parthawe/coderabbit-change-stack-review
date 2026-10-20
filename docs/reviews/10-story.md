# Review 10 · Submission story and next design moves

Read-only review of fc06a01: main, matched, flow and rationale Paper exports; rationale JSON/HTML; README; DESIGN and capability audit. This is a designer's critique, not a usability result.

The screen now makes a coherent argument. File identity, linked summaries and file progress belong together. The matched comparison is a useful correction. The story is still more convincing about organizing controls than about helping a developer make a review decision.

## Three weaknesses in what the hiring team sees

1. **The opening undersells the problem.** “The original has a lot competing with the code” and “making the code easier to follow” could describe many dashboard redesigns. The concrete problem is losing the connection between the explanation, the evidence and what the reviewer has checked. Start there. The flow already demonstrates it, so this needs sharper framing rather than another feature. Suggested copy: “I wanted to keep three things connected while reviewing: the file, the explanation beside it, and what I'd already checked. I kept the layers and changed how you move between those things.”

2. **The final choice is explained mostly through its benefits.** The right-panel width tradeoff is explicit, which helps. But the submission does not explain why M beat the other approaches, or what a more ambitious workflow would require. The start board, rationale and README all lead into instructions and scope. Add one compact designer's decision beside the main screen, with an optional next-steps board after the rationale. Suggested copy: “I chose this direction because a reviewer can still read the PR file by file and check each explanation against the diff. A guided route through claims could help with a large PR, but I'd test that before letting it decide the reading order.” This makes a defensible choice without pretending the archived directions were tested.

3. **The evidence record still contradicts the updated work.** REQUIREMENT-AUDIT says the original starts at imports and the redesign at line 49, and says Previous/Next arrows were consolidated into the picker. Both are stale after the matched checkpoint and restored arrows. DESIGN explains the newer state correctly. A hiring team opening the repository could reasonably wonder which version is final. Update the audit and date its verification; retain the distinction between the matched checkpoint and the main screen's subsequent summary jump. This is a P2 submission accuracy fix, not an argument for more UI.

## Three follow-on experiments

These belong in a clearly labeled “What I'd explore next” Paper board. They are proposed experiments, not shipped capabilities or proven improvements. Keep the main submission first.

### 1. Check one claim at a time

**Interaction hypothesis:** The six-point workspace-tenant summary covers lines 49–130. Selecting a specific statement, such as trimming directory IDs, could make verification easier than highlighting all 82 lines.

**Paper sketch:** Use the same full captured summary. Show three states: expanded summary; the exact trimming statement selected; the corresponding code at line 75 emphasized while the larger summary range remains identifiable. Include a way back to the whole function. Use only statement/range pairs that can be verified in the fixture.

**Leave unimplemented:** Automatic sentence-to-code mapping, correctness judgments, generated tests and inferred missing behavior. The sketch would use manually verified anchors and say so.

**Test:** Give developers the captured summary and ask them to locate the code supporting the trimming statement, then explain the behavior in their own words. Compare broad-range selection with statement selection. Observe wrong destinations and extra searching; do not count a click as understanding.

**Tradeoff:** A precise anchor can make one line look sufficient when the behavior depends on surrounding control flow. Always keep the surrounding function accessible.

### 2. Follow an access check across files

**Interaction hypothesis:** Keeping the caller visible while inspecting its imported access gate could reduce the effort of reconstructing the access-control flow.

**Paper sketch:** Start at access.ts calling requireUnifyFeedbackWorkspaceAccess. Open its verified definition in feedback-access.ts in a temporary comparison space, with the caller retained and an explicit return action. Both complete files are already in the fixture. Show returning to the original reading position. This is a code relationship visible in the source, not an inferred dependency graph.

**Leave unimplemented:** Project-wide symbol navigation, execution traces, layer-2 call sites and automatic impact analysis. The experiment covers one verified call and definition.

**Test:** Ask developers where the workspace/entitlement gate is enforced and what access.ts checks afterward. Compare sequential file switching with the paired view. Observe whether they can explain which responsibility belongs to which function.

**Tradeoff:** A paired view narrows both code panes and introduces another place to navigate. It should open on demand and close cleanly; it should not become the default layout.

### 3. Resume a review with an unresolved question

**Interaction hypothesis:** File viewed status is too coarse to remember “I read this, but still need to check one thing.” A private checkpoint could help reviewers resume without treating a question as a published comment or a completed review.

**Paper sketch:** On access.ts, let the reviewer park their own question at a selected line. Show a compact personal queue with that file/range and its text. Switch to errors.test.ts, then return through the queue. Keep the current viewed state explicit and independent; adding a question must not mark the file viewed or change the captured source findings. Use an empty composer or label any example as hypothetical reviewer text.

**Leave unimplemented:** Shared tasks, persistent accounts, notifications, assigned owners, author messaging and automatic question generation. No claim that a parked question is a new defect in this resolved, historical PR.

**Test:** Interrupt a review after a developer parks a question, then ask them to resume. Observe whether they return to the intended evidence and can distinguish their private question from CodeRabbit's resolved thread and file-viewed status.

**Tradeoff:** This adds another state beside seen, viewed and submitted. It earns its place only if it reduces re-reading enough to outweigh that extra mental bookkeeping. Start with a small private queue, not another progress percentage.

## Draft closing copy for Paper

“I'd next test whether a reviewer can check one statement against its code, follow an access check into another file, and return to a question they left open. I can sketch those with this PR. I haven't built or tested those workflows yet. The tradeoff is adding more review states and navigation, so I'd test each one separately before putting it into the main screen.”
