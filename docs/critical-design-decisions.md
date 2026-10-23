# Design decisions

M keeps the layer model and follows one task in Formbricks #8650: check a summary, inspect the access guard, then return to the call.

| Observation | Decision | Cost or risk |
| --- | --- | --- |
| Six summary points share lines 49–130. | Give each point a smaller target; retain the full summary and whole function. | A precise highlight could encourage people to ignore surrounding code. |
| The access check continues in feedback-access.ts. | Open the checks at L27 and L38, then restore the caller’s selection and reading position. | This is one manually mapped route, not dependency discovery. |
| File and display actions sit across several controls. | Group file actions beside the filename and display controls above the code. | Secondary tools take another click; M still uses several control rows. |

## The comparison

The main comparison uses unaltered browser captures of Original and M in Light, Unified, at 1280 × 720. Both begin at access.ts L54 and show the access call at L57–65. M’s selected summary point matches those highlighted lines. The original fits more surrounding code. M uses more space for persistent files, clearer labels and summary targets. Original progress is preserved; M starts local progress at zero. Source provenance is in design/evidence/task-comparison-provenance.json.

Unified already exists in CodeRabbit. Compact Split for an added file is a supporting choice, not the main improvement. Paper’s earlier matched-import export remains design history; the public comparison now uses the working prototype.

## Why one code pane

Caller and guard side by side would narrow both at laptop width. Return preserves place without introducing a second pane. Persistent files and context still cost space, so Focus remains available. Smaller links are not automatically better: code outside the highlighted range may change the interpretation.

## Why M

The explorations change the review model or require new information: behavior-first needs intent, counterexamples need scenarios, impact-first needs reliable dependencies, and author handoff needs author input. M improves the existing screen within the available source material. These are design tradeoffs, not conclusions from user testing.

## What would change the decision

Ask developers to explain the access check on both screens and identify something the summary misses. Alternate which screen they use first. Watch for wrong turns and missed branches, not just faster clicks. If precise links increase missed context, revise or remove them. Test a modified-file diff and moved/outdated anchors next.

Seven added-file diffs from the 52-file PR are included, with manually mapped links. Full semantic diff, global file search and developer validation remain outside this sample. The prototype demonstrates the interaction; it does not prove review quality improved.
