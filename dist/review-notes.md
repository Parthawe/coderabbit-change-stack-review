# Ten perspectives on the Change Stack redesign

Reviewed October 20, 2026. Ten independent AI review passes inspected the same saved baseline, `fc06a01`. Each had a different objective and returned a separate report. They were read-only reviews of source and exported designs, not ten human moderators or a developer study. I checked the findings, changed Paper first, then updated and exercised the prototype.

I kept M as the final submission. A developer can read file by file and check each explanation against the diff. The alternative approaches change the reading order; I would test that before making it the default. The purpose of this review was to find where that choice still breaks down, not to make the submission look approved.

## The ten passes

| Perspective | Objective | Result carried into the design |
| --- | --- | --- |
| 01 · Assignment fit | Can the comparison support the design argument? | All seven imports now wrap. Source and matched redesign keep the same summary and progress. |
| 02 · Developer workflow | Can someone leave and return to evidence? | Notes have a file/line index. Code and context positions return with the file. |
| 03 · First use | Is the current scope obvious? | PR and demo counts are separate. Search says which paths it covers; the checkbox actually toggles viewed. |
| 04 · Visual craft | Do states keep their meaning? | Selection keeps green addition text. Tabs have an underline. Focus removes the tall synopsis. |
| 05 · Keyboard access | Can the reviewer get through the screen? | One line-comment tab stop, arrow navigation, F6 context switch, and Escape from the overlay. |
| 06 · Recovery | What happens after a failure or wrong action? | Retry has a busy state; viewed Undo survives unrelated notices. Returning from a gap restores the last file. |
| 07 · State integrity | Can two controls contradict each other? | Outline selection clears the old editor. Ranges mode keeps an active note. Reset removes stale Undo. |
| 08 · Evidence | Are counts, code, and claims supported? | Missing captured findings restored in Paper. Stale audit rows corrected; omitted workflows named. |
| 09 · Feasibility | Does the implementation support the design? | Split now scrolls continuously. Layout changes preserve the visible code line; no framework needed. |
| 10 · Design judgment | Why M, and where would I take it? | Keep file-by-file verification. Separately test statement anchors, paired inspection, and parked questions. |

## Material findings and decisions

| Finding in the saved version | Disposition |
| --- | --- |
| Selected additions turned brown across an 82-line range. | Fixed in Paper and CSS: green addition text and plus signs stay visible under the warm selection surface. The range label remains the connection cue. |
| The matched image clipped imports that wrapped in the original. | Fixed in Paper: all seven imports wrap at the same viewport and type size. The prototype has an optional Wrap long lines control. The shared-content transcript remains available. |
| PR progress implied the seven-file demo could finish all 52 files. | Fixed: keep the real PR denominator and show a separate seven-file demo count. Bulk viewed touches only included diffs and has Undo. |
| A square beside the filename looked like a checkbox but only navigated. | Fixed: a native checkbox toggles viewed; the adjacent filename independently opens the file. Opening never marks viewed. |
| PR search quietly searched only nine paths. | Fixed: PR search is explicitly a preview; it explains the limit and opens Search layer 1 files. No-match text states the boundary. |
| Low complexity behaved like a preview launcher rather than a filter. | Fixed: it selects the filter and shows a coverage empty state with a separate About link. Missing ranges are not called absent. |
| Saved notes existed in memory but had no visible way back. | Fixed: a local-note index in Comments lists file/line notes and draft status. Persistent code markers open them. Source comment totals stay unchanged, including files with zero source comments. |
| Tools outline could clear the note key while leaving the old editor visible. | Fixed: choosing a summary switches the visible tab, clears the old editor, and reveals the summary range. Saving also requires a valid file and line. |
| Ranges-only mode hid an active note outside captured summaries. | Fixed: the active note or thread range is included even when other unlinked code is collapsed. The linked badge describes visible selected code. |
| Mark seen rebuilt and closed the full source summary. | Fixed: the control updates in place; native disclosure state survives file switching. Seen remains separate from viewed. |
| Split created a separate horizontal scroll region on every line. | Fixed: two continuous panes with synchronized vertical scrolling. Reading positions survive file changes. Wrap and Focus preserve the visible line as widths change. |
| Context scroll from one file carried into unrelated content. | Fixed: each file retains its context position and selected tab; a new file starts at its own content. |
| Every code line entered the Tab sequence. | Fixed: one roving comment action uses Up/Down; Enter in code opens a note. F6 switches code/context. This is a keyboard implementation check, not a screen-reader study. |
| Rail replacement and Focus could remove keyboard focus. | Fixed: rail controls restore their identity after replacement. Focus hands off to a stable control and restores the origin on return. |
| Escape did not close context when typing a draft. | Fixed: overlay Escape is handled before the typing shortcut guard. The draft survives; focus returns to Context. J/K/Z still ignore typing. |
| Retry had no busy state and left inappropriate controls enabled. | Fixed: real fetch loading disables review controls, announces busy state, removes Retry during the request, and coalesces repeat requests. Original disabled controls stay disabled after recovery. |
| Returning from a layer coverage gap always chose access.ts. | Fixed: return targets the last selected file. Uncaptured modified patches still state their own fixture boundary. |
| Unrelated notices replaced viewed Undo; bulk viewed had none; Reset left stale Undo. | Fixed: generic notices use the status region while Undo is pending. Bulk viewed restores the prior set; Reset clears the toast and invalidates its action. |
| Hiding a resolved thread could leave its old linked badge and code highlight behind. | Fixed during regression: hiding resolved messages clears the rendered range as well as the context state. |
| Active tabs depended on text color alone; Focus retained a tall synopsis. | Fixed in Paper and CSS: underline and weight identify the tab; Focus condenses the heading and removes synopsis detail. |
| Two verified layer finding counts were missing from Paper. | Fixed in main and matched navigation: layer 4 has one finding, layer 6 has two. No new findings were invented. |
| The audit described old comparison positions and removed arrows. | Fixed: audit now describes the matched checkpoint and restored Previous/Next controls. |
| Capability-preservation wording overstated the prototype. | Fixed in the audit: global Files rail mode, full command palette, path copy, file-level threads, resizing and uncaptured filters are explicitly outside the implementation. |
| The story described lower density without explaining the final choice. | Fixed: start, Paper rationale, README and one-page rationale explain the connection between file, explanation and progress, why M stays file-based, and what I would test next. |

## What still feels weak

The summary-to-code link still covers 82 lines. It gives a clear destination, but does not tell us whether a developer can verify each statement. The right panel takes code width, especially in Split; Focus and Wrap are useful controls, but their availability does not prove the default is comfortable. Local notes add a review state alongside source comments, seen, viewed and submitted. Their labels and return path are clearer, but developers may still find the bookkeeping unnecessary.

Seven included added-file diffs are enough to demonstrate this flow. They cannot establish how it behaves through a full 52-file review, modified-file context, multiple unresolved threads or changing review runs. The original run was intermittent and out of date. This prototype does not infer current PR defects or mergeability.

## What I would explore next

The [Paper concept board](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-1-0/37R-0) and [public sketches](https://parthawe.github.io/coderabbit-change-stack-review/next.html) use the same verified snapshot. These are proposed interactions, not working prototype features.

1. **Statement anchors:** link the trimming statement to access.ts line 75, with the whole function still available. Test whether a developer can explain the supported behavior. The risk is treating one line as sufficient context.
2. **Paired inspection:** retain the caller at access.ts line 57 while opening the verified guard in feedback-access.ts. Test which responsibility belongs to each file. The cost is narrower panes and another navigation surface.
3. **Private questions:** park a personal question at a file and line, then return after an interruption without changing viewed state. Test whether it helps resumption enough to justify another state. It creates no source finding or author message.

A reviewer also proposed explicit Next unviewed navigation. I left that out for now: Previous/Next already supports a sequence, and the seven-file fixture is too small to justify a second route. I would compare an explicit continuation cue with the existing controls before adding automatic advancement.

## Checks after the fixes

I exercised the outline/editor transition, local-note recovery on files with and without source comments, active-note visibility in ranges mode, full-summary expansion, per-file navigation, independent checkbox behavior, Low filtering and search scope. I checked single and bulk viewed Undo, pending Undo after unrelated notices, Reset, continuous Split panes, Wrap and Focus line anchors, one roving line-comment tab stop, F6, overlay Escape while typing, typing shortcut guards, dialog focus and simulated submission.

Layout was inspected at 1440px, 1280px and an 1100px context-overlay breakpoint. A controlled local server returned a real 503 once and delayed the next fixture response to verify loading and recovery; production navigation has no artificial delay. The one-page rationale was rendered and inspected. Published deployment checks are recorded in the final handoff.

The next useful validation is with developers using the assigned content: find a file, verify a summary statement, leave a question, switch files, resume, and explain what remains. No measured speed improvement or exhaustive absence of bugs is claimed.

Raw review reports are saved in `docs/reviews/`. Their findings describe the saved baseline; the table above records the changes afterward.
