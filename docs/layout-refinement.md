# Layout and reasoning review — October 23

The concern was valid: accumulated controls and explanations had made the presentation harder to follow. This pass keeps M and the existing source content. It removes competing controls and makes the decision record explain costs and uncertainty.

## Decisions implemented in Paper first

- File identity, Mark viewed and Tools share one row. Display controls occupy the strip immediately above the diff. This separates file actions from reading preferences.
- Files and layers share one scrollbar. File rows have a consistent 32px target. Later layers may sit below the fold; J/K remains available. The tradeoff favors keeping the active layer's file paths together.
- Added-file Unified omits its unused old-line gutter. Added-file Split retains the compact 96px Before rail. No code was removed to create space.
- PR overview contains the three overview destinations. Continue moves to More review tools, and Diagrams moves inside About layer. These destinations remain labeled; the implementation boundary is unchanged.
- Context starts with scope and tabs. Summary options and mapping help follow the content. The selected statement carries the highlight without another enclosing box.
- The rationale connects each problem to a decision, its cost and a proposed test. It acknowledges existing source capabilities and the risk that precise anchors could encourage narrow inspection.

## What was checked

Browser checks on the local release at 1440×960, 1280×720 and 1100×800 found no document-level horizontal overflow. At 1100, context opens as a 320px overlay. The menu fits within the rail.

The caller/guard/return route restored L57–65 and the exact 1383px scroll position in the tested 1440px state. Focus restored that position after reflow. Previous/Next kept progress unchanged. Mark viewed changed the count and indicator; immediate Undo restored zero. File navigation has one scrolling region, with no nested file scroller. J/K changed layers. The guard's Comments tab showed the explicit no-comments state.

Architecture preview opens a dialog; Escape closes it and restores focus to PR overview. The overview menu also closes on Escape or outside interaction. About layer still exposes Diagrams as unavailable. Console error inspection returned no entries. JavaScript syntax, whitespace checks and the scoped layout scan passed.

Paper screenshots were inspected for spacing, type hierarchy, contrast, alignment, clipping and repeated-row alignment. Main, matched comparison, Split, guard and rationale exports were refreshed. The original screenshot remains unchanged. The one-page rationale was rendered and inspected.

## Presentation

Show the problem, the same-content comparison, one guard/return task and reversible progress. Keep the explorations and AI scores out of the main route. The recording pack uses fresh Paper exports and browser states with the existing plain-language narration. It is an edited rehearsal, not a continuous recording or evidence of user research.

## Still unproven

Working navigation does not establish improved comprehension. Ask developers to explain the guard and find a reason the summary might be incomplete on both screens. Compare missed branches, wrong turns and time spent finding their place. The prototype still covers seven of 52 diffs, with manually mapped links; modified-file Split and larger code type need further evaluation.
