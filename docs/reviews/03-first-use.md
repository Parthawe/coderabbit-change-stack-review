# Review 03: first use and information architecture

Reviewed commit fc06a01 read-only. Evidence: Paper exports 00-start.png, 02-main.png, 01b-matched.png, 03-flow.png; dist/index.html, app.js, comparison.html, rationale.html. No live browser or usability test. Behavioral findings below are based on source inspection. Their user consequences are hypotheses.

The main screen establishes the selected layer, filename, and summary range well. Previous/Next now gives file navigation a visible destination. The submission starts with an explicit reading order, and the matched comparison discloses why its layer-scoped progress differs from the final PR-scoped header. These are useful improvements. The remaining weaknesses are about promises made by labels and controls.

## 1. P2: the dominant remaining-work count cannot be completed in this prototype

**Evidence:** The main Paper screen and index.html lead with “0 / 52 files viewed” and “52 left.” app.js updateProgress always subtracts viewed.size from 52. Only seven files have diffs and can be marked viewed; even Tools → Mark 7 included files viewed leaves 45 left. The footer states “7 of 52 diffs included,” but the progress itself has no scope qualifier.

**Consequence (hypothesis):** A first-time evaluator can read “52 left” as the work this demonstration expects them to finish. It also makes it difficult to recognize when they have exhausted the available path. Accurate source totals are being used as an actionable completion goal.

**Bounded fix:** Keep the real PR total, but qualify it beside the progress, for example “PR · 0 / 52 viewed” with a concise secondary “7 diffs available in this prototype.” At seven viewed, explicitly state that all included diffs have been checked and 45 source files remain outside the prototype. Do not fabricate completion for the other files. Mirror the distinction in Paper and the review dialog.

**Confidence:** High that the goal is unreachable; medium that this will confuse evaluators without the walkthrough.

## 2. P2: “Search pull request” promises a broader search than it performs

**Evidence:** The left rail labels the action “Search pull request.” app.js preview('Search pull request') calls showFiles(), which opens “Files in layer 1” and filters only nine paths. It searches neither other layers nor code, summaries, or comments. The same dialog is already correctly described by “All 9 files · search list.”

**Consequence (hypothesis):** A reviewer looking for an unfamiliar symbol or a file in another layer may infer it does not exist because the search silently operates on a narrower inventory. It creates an avoidable inconsistency in an otherwise careful scope story.

**Bounded fix:** Preserve the PR-search capability's named destination as a preview if it is not implemented. Use “Search layer 1 files” for the working file picker. If retaining one shared dialog, title it “Search captured files,” state the layer boundary before the input, and show a clear no-results message. Do not imply PR-wide search works.

**Confidence:** High. Direct label-to-behavior mismatch.

## 3. P2: the empty square beside the selected file looks like a checkbox but cannot mark it viewed

**Evidence:** 02-main.png shows a square immediately before access.ts. renderNav creates it as an aria-hidden span inside button.file-nav. Clicking anywhere in that button reselects the file through selectFile(); only the toolbar's Mark viewed changes the viewed set. The square later displays viewed state, so it uses the visual language of a checkbox without its expected action.

**Consequence (hypothesis):** Someone may click the square, see no progress change, and interpret the prototype as broken. A status indicator and a navigation target share one control without explaining the boundary.

**Bounded fix:** Either make the checkbox an independent, keyboard-accessible toggle with a file-specific label, or replace it with a non-checkbox status treatment and label it “Viewed” only after completion. Keep the filename as the file navigation target. Maintain the rule that opening a file does not mark it viewed.

**Confidence:** High that the square does not toggle; medium-high on the expected affordance.

## 4. P3: one item in the complexity filter behaves as a different kind of control

**Evidence:** All, High, Medium, and Low are presented as one segmented filter group with aria-pressed states. app.js treats Low specially: it opens a “Low complexity” preview dialog and never selects the filter. High and Medium filter immediately. The tooltip says “Uncaptured low-complexity summary preview,” but touch and keyboard users must discover the behavior by activation.

**Consequence (hypothesis):** The interface teaches one action and breaks it on the next button. This can look like a missing filter or a bug, especially because the source count confirms there are six summaries while only two appear.

**Bounded fix:** Make Low a genuine selected filter and display an honest empty coverage state (“Low-complexity summaries exist in the source; their details aren't included here”) with a separate Preview control. Alternatively label the button “Low · preview” and remove it from the pressed-state filter group. Do not count uncaptured summaries as absent.

**Confidence:** High. Direct behavior inconsistency; user impact is a hypothesis.

## Future exploration: a next-unviewed path

Explore an optional “Next unviewed” action after marking a file viewed, while keeping plain Previous/Next and never advancing automatically. Use verified file order and viewed state; do not invent a risk ranking.

Test with developers using the same PR: ask them to resume a partially completed review, locate an unchecked file, read its summary, and explain what remains. Watch whether they can distinguish PR progress from prototype coverage and whether they prefer choosing the next file or accepting the suggestion. The tradeoff is a clearer continuation path versus another toolbar action and a potentially prescriptive review order. This is a direction to test, not a claimed improvement.
