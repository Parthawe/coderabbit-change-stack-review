# Design decisions

M is the final proposal. The design keeps CodeRabbit’s layer model and follows one task in Formbricks #8650: check a summary, inspect the access guard, then return to the call.

## Three observations

| Observed in the original | Proposal | Cost or risk |
| --- | --- | --- |
| Several rows of controls compete above the code. | Group file actions beside the filename and display controls above the diff. | Less frequent tools take another click. |
| Split gives an empty Before pane half the width for this added file. | Use Unified here; keep a compact empty pane in Split. | This example does not prove the layout works for modified files. Unified already exists in the original. |
| Six summary points link to one 82-line range. | Link each point to a smaller range and retain the full wording and whole function. | Precise links may encourage reviewers to ignore surrounding code. |

## The decision worth demonstrating

Select Require workspace access at L57–65, inspect feedback-access.ts, then return to the same call. Two simultaneous code panes would make both narrower at laptop width. A return action keeps one readable pane, at the cost of switching between locations.

The visible file list and context also use width. Focus remains available. Opening a file still marks nothing viewed; summary seen and file viewed remain distinct. Undo is added. These retained behaviors are not diagnosed defects or new inventions.

## Why M, rather than the other explorations

Behavior-first needs reliable intent. Counterexample review needs useful scenarios. Impact-first needs broader dependency coverage. Author handoff asks for more author input. Those are worthwhile product questions, but M addresses the assigned main screen with fewer new assumptions. The other approaches remain archived.

## Evidence and limits

The original and redesign use the same PR, light theme, viewport and excerpt. The original capture uses Split; the redesign uses Unified. The mode difference explains part of the width gain. It is a proposed layout comparison, not a controlled usability result.

Seven of 52 diffs are included at commit 23cdac2. Anchors are manually mapped. The PR is merged, so Submit is disabled. Secondary previews preserve destinations but do not reproduce the source engines. No developer study or measured time saving is claimed.

## What could disprove the idea

Ask developers to explain the access check on both screens, then find something the summary might miss. Vary the order and compare missed branches and wrong turns. If faster navigation comes with worse understanding, change the guidance. Then test modified files, larger text and stale links.
