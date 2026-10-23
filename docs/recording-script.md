# Recording script

Read the quoted text. Click cues and timestamps include pauses. Paper requires sign-in.

## 0:00–0:20 · Start on the final Paper screen

Click: Keep the cursor still. Let them see the design.

> Hi, I’m Parth. I kept the layer-based review model and focused on staying oriented while checking a summary against the code. I’ll show you the source, the changes I made, and one short review path.

## 0:20–0:45 · Show the source diagnosis

Click: Point to the source summary, file controls and layer progress.

> The original already has summary jumps and explicit viewed status. What I found difficult was keeping track of the file, the scope of the context, and the code behind each point. Several controls also compete for space above the diff.

Pause: Pause on the annotations.

## 0:45–1:05 · Show the matched comparison

Click: Point to the same imports and six source points. Note the original capture is untouched; final M shows the later merged status.

> I kept the same imports and six source points for this comparison. The complete wording is still available. In the final screen, the file list stays available in the rail, and the layer description starts collapsed. I brought the frequent file actions together above the code.

## 1:05–1:50 · Follow the workspace access check

Click: Switch to the prototype at access.ts. Click L57–65 beside the first workspace-access bullet. Click Inspect guard in feedback-access.ts. Pause on the 20–49 summary, then click Return to access.ts.

> I retained all six source points as short checks with direct code links. The full wording is still here. This first check calls the workspace access guard.

> I can follow that call into the guard, read the captured explanation there, and return to the caller without finding my place again.

> I manually mapped these links. They give you a starting point; you still need to read the surrounding code. This is one captured cross-file route, rather than automatic dependency navigation.

Pause: Keep the cursor away from the highlighted code while speaking.

## 1:50–2:15 · Show context scope

Click: Choose Entire layer. Point to file groups and 14 of 37 coverage. Return to This file.

> This file keeps the explanation close to what I’m reading. Entire layer starts with short rows grouped by file, so I can scan before choosing one. The coverage label tells me where the sample ends.

## 2:15–2:35 · Show progress and Undo

Click: Point to Included files 0 / 7 and the two unavailable layer patches. Click Mark viewed, then Undo.

> Opening a file doesn’t mark it reviewed. I kept that deliberate action and added Undo. Progress is labeled by scope. This PR is merged, so Submit review is disabled.

## 2:35–3:00 · Close on the limits and next test

Click: Hold on the final screen. Show the three submission links at about 2:55. Split is optional if asked afterward.

> My hypothesis is less searching and backtracking without losing understanding. I’d compare both screens with developers: explain the access check, inspect its guard, then return. Working clicks don’t prove that. This sample includes seven diffs; modified files and stale links still need testing.
