# What I built, and why

Final M · Formbricks #8650 · pinned commit 23cdac2 · documentation updated October 23, 2026.

I chose one review task: check a summary against code, inspect the access guard, then return without losing my place. The design should help a reviewer stay oriented through that task. Whether it improves their understanding still needs testing.

The original already had layers, summary jumps, explicit viewed state, J/K navigation and Z focus mode. I preserved those capabilities. The work below changes their presentation and demonstrates a more specific reading path.

## Four decisions to present

### 1. Keep the file and review scope visible

**Problem I saw:** file identity, layer context and actions compete above the diff. It takes attention to work out which context belongs to the current file.

**What I built:** a persistent file rail, a compact layer heading and one file toolbar. This file and Entire layer state what the context panel contains. Entire layer starts with short rows grouped by file. Less frequent review tools sit behind a disclosure.

**Show it:** switch between This file and Entire layer, then change files. The selected file remains identifiable; returning to a file restores its reading state. Opening a file does not change viewed progress.

**Tradeoff:** the rail and context panel each scroll. This leaves more room for code, but the navigation is denser at 720px height. The fixed layer switcher keeps the other layers reachable. Below 1280px, context becomes an overlay.

### 2. Make each summary point checkable

**Problem I saw:** the workspace-tenant summary covers lines 49–130. A reviewer still has to locate the code behind each of its six points.

**What I built:** six compact, full-row actions pair a behavior label with a specific range. Selecting one moves to that range and highlights the corresponding statement. Read full source summary preserves the original wording; Whole function and Go to start preserve wider context. About links explains the manual mapping.

**Show it:** select Require workspace access at L57–65, then Normalize tenant IDs at L75. Open the full source summary. All six short checks remain visible at 1280 × 720 without shrinking their labels.

**Tradeoff:** a precise highlight can create false confidence. These anchors locate code; they do not verify the summary. Nine anchors across two access.ts summaries are manually mapped to this commit. There is no automatic anchor-generation or stale-anchor repair service.

### 3. Return from the guard without rebuilding context

**Problem I’m addressing:** checking a claim can require another file. The reviewer needs a way back to the exact reading context they left.

**What I built:** Inspect guard opens feedback-access.ts at its access/entitlement check. Return to access.ts restores the caller’s selected statement, code position and context position. Neither visit marks a file viewed.

**Show it:** follow L57–65 → Inspect guard → Return to access.ts. Read the surrounding guard code before returning. This is the main interaction to demonstrate in the submission.

**Boundary:** one caller/guard route works. This does not establish that the original has no return mechanism, nor does it implement a general dependency browser. The contribution is a visible, testable continuity path for the supplied PR.

### 4. Keep progress separate from approval

**Problem I’m addressing:** visiting a file, seeing a summary and approving a PR mean different things. Missing content should not look like unfinished work the reviewer can complete here.

**What I built:** deliberate Mark viewed with Undo; a separate summary-seen action; seven included-file progress; and a layer label that separates seven reviewable files from two unavailable patches. The layer still lists all nine paths. Submit review is disabled for the merged PR; the open-PR decision flow is an explicitly labeled simulation.

**Show it:** visit the guard and return with zero files viewed. Mark access.ts viewed, then Undo. Both visible reviewable-file counts change together. Nothing is sent externally.

**Boundary:** notes, reading state and progress live in the current browser tab. Reloading resets that local session. Persistence, collaboration and real submission require a service contract.

## Supporting work worth mentioning if asked

| Work | Reason and boundary |
| --- | --- |
| Wrapped 13px code and compact added-file Split | The empty Before pane uses 96px so the added code has room. Equal panes restores 50/50. Wrapping adds vertical scrolling. Modified-file patches are not demonstrated. |
| Keyboard and recovery behavior | Statement activation restores focus and exposes the current code range to assistive technology; guard Return restores its entry point; Escape closes link help before the context overlay. Loading, retry, missing-patch and no-comments states have explicit exits. A complete assistive-technology audit remains outstanding. |
| Long filenames and secondary tools | The filename truncates before file navigation shrinks. The full name remains available. More review tools groups secondary previews; preview destinations are labeled before entry. |
| Matched comparison | Both screens show the same seven imports and six source-summary points. The original capture is untouched. It checks content retention and hierarchy; it is not a timed usability result. |

## What is observed, and what remains a hypothesis

The source capture shows stacked file controls and a summary spanning L49–130. I can point to those directly. Losing orientation or backtracking more often is my interpretation of the review task; I have not measured it. The guard return is a proposed improvement, and deliberate viewed state is an existing capability I preserved. This distinction should stay clear in the video.

## What the evidence supports

The [verification record](verification.md) documents working interactions and tested layouts. The independent reassessment is 32/40 on an AI heuristic checklist, not a CodeRabbit grade. Keep that score in the process notes rather than using it as proof in the submission.

The fixture contains seven complete added-file diffs out of 52, nine layer-1 paths and fourteen of 37 layer summaries. Missing patches, uncaptured replies and secondary workflows are disclosed. No additional findings or PR content were invented to fill those gaps.

My next test would use the same commit and content on both interfaces. First ask developers to explain the access check and inspect its guard. Then start from code and ask what could make them disagree with the summary. Record explanation accuracy, missed branches and backtracking. That counter-test matters because the current demonstration follows the path I designed to work well.

## My submission decision

Keep M. The strongest contribution is the short claim → code → guard → return sequence, supported by explicit scope and deliberate progress. The weakest demonstration is still the imports-only static comparison; use it to establish equal content, then move to the working task.

Before production, I would test one modified-file review and the code-first counter-task. The rail’s nested scrolling, commit-aware link reliability and recovery after reload also need evaluation. These are recorded limits, not completed research. The last independent heuristic assessment is 32/40; this correction pass does not establish a higher score.

## Where this reasoning lives

- [Paper](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-1-0/1YS-0): source diagnosis, matched comparison, M and design decisions. Sign-in required.
- [Prototype task](https://parthawe.github.io/coderabbit-change-stack-review/index.html?task=access-check): executable caller/guard path.
- [One-page rationale](https://parthawe.github.io/coderabbit-change-stack-review/rationale.pdf): the four decisions and the next test.
- [Requirement cross-check](REQUIREMENT-AUDIT.md): capability destinations and gaps.
- [Walkthrough](submission-walkthrough.md): presentation order. Four earlier approaches remain archived.

The current rationale copy is maintained in rationale-content.json and reflected in Paper, the HTML rationale and PDF. Earlier review reports keep their original observations; they should not be read as the current behavior specification.
