# Independent design assessment A

Method: isolated design assessment, completed without prior scores, reviews, detector output, or the other assessment. Target: `outputs/coderabbit-change-stack-review/dist/index.html`, served at `http://localhost:4317/`. Reviewed the assignment PDF, current DESIGN.md, rationale PDF, original reference image, supplied 1440px image, and a fresh live 1280 × 720 browser tab. No viewport changes or implementation edits. Review tab closed.

The screen feels designed for a code reviewer. File identity, code ranges, explicit viewed state and the caller/guard return path determine the composition. The three-column structure is familiar, but the interaction details give it product-specific purpose. Orange is reserved mostly for selection and actions; code retains semantic diff coloring. There is no decorative dashboard scaffolding competing with the task.

This is a strong focused take-home prototype. The strongest evidence is the working path from a short claim to its code, into the guard, then back to the previous reading position. It does not establish broad capability parity or measured review improvement, and the submission says so.

## Nielsen scores

All ten heuristics apply. Scores assess the demonstrated prototype, not an imagined production backend. A 4 means excellent within this scope.

| Heuristic | Score / 4 | Evidence and remaining limit |
|---|---:|---|
| Visibility of system status | 3 | File, layer, scope, selected range, merged status and captured coverage are visible. Mark viewed updates the header and rail together. Nine-path layer progress still mixes reviewable and uncaptured files. |
| Match between system and real world | 4 | PR, layer, file, line range, diff, summary, comment and viewed are familiar review concepts. The short behavior labels describe the actual access-control work. The merged state correctly removes the ability to submit a review. |
| User control and freedom | 3 | Tested guard Return, viewed Undo, missing-patch Return and Z focus mode. They provide direct exits. Local work is intentionally session-only, limiting recovery after reload. |
| Consistency and standards | 3 | Selection, tabs, disclosure and file controls mostly behave predictably. Some preview actions say preview in place while Overview and Architecture impact reveal that limitation only after activation. |
| Error prevention | 3 | Visiting a file does not mark it viewed; unavailable patches cannot be marked viewed; merged submission is disabled with a reason. About links explicitly warns against treating a mapped range as proof. This prevents several meaningful review errors. |
| Recognition rather than recall | 3 | Short checks sit beside line ranges; file identity and context scope remain visible. At 720px height, nested rail scrolling and lower summary actions still require discovery. |
| Flexibility and efficiency | 4 | Multiple useful navigation paths coexist: layer controls, file navigation, summary links, outline, guard return and keyboard focus mode. Wrapping and layout controls support reading preferences. The tested Z transition preserved the selected reading area. |
| Aesthetic and minimalist design | 3 | Code has clear priority, short statement rows scan well, and secondary tools are grouped. The 1280px toolbar remains crowded and preview controls still occupy prominent places. |
| Error recovery | 3 | The unavailable modified-file state explains the missing patch and offers a direct return; Undo restored viewed state. Recovery is convincing for the exercised paths, but this was not an exhaustive failure-state test. |
| Help and documentation | 3 | About links provides useful contextual trust guidance; Review task gives a concrete evaluation path; rationale explains tradeoffs. Less visible keyboard behavior and dense navigation still depend partly on discovery. |
| **Total** | **32 / 40** | **Good. A credible submission with a few focused refinements; insufficient evidence for “Excellent.”** |

## Strongest decisions

- The six behavior rows are concise enough to scan while preserving the original explanation behind Read full source summary. Their destinations keep the reviewer close to the source. The About links popover makes the manual mappings and their limits explicit.
- The guard excursion has a visible return path. I opened feedback-access.ts, then returned to access.ts and recovered the previous L75 selection. Neither visit changed viewed progress. This is a concrete interaction improvement beyond rearranging panels.
- Progress has separate meanings. Included files, layer paths, summary seen and merged PR status are not presented as interchangeable completion signals. Mark viewed changed both visible counts, and Undo restored them.

## Remaining issues

1. **P2: the file toolbar runs out of room at 1280px for a longer filename.** In the live feedback-access.ts guard state, the next-file button was visibly squeezed/clipped against the Unified control. access.ts fits more comfortably. Reserve an unshrinkable navigation group and truncate the filename before the controls collide, or move a secondary control into Tools at this width. Suggested command: `$impeccable adapt`.
2. **P2: layer completion can still look unattainable.** The header counts seven included files, while the rail reads “0 of 9 viewed.” Two of those nine cannot be marked viewed. The disclosure is honest, but a reviewer must reconcile the different totals. Give the rail a compact “7 reviewable · 9 total” cue, or distinguish viewed from unavailable in its completion label. This requires clearer labeling, not more captured code. Suggested command: `$impeccable clarify`.
3. **P2: prototype-only destinations retain conspicuous positions.** Continue · preview, Files · preview and Diagrams · unavailable sit next to real task controls; Overview and Architecture impact look functional until opened. Keeping the source capabilities represented is reasonable, but these destinations can pull a first evaluator away from the supported flow. Label all preview entry points consistently and group low-value ones where the task does not compete with them. Suggested command: `$impeccable distill`.

A smaller observation: at 1280 × 720, the rail exposes only part of its nine-file list and little of the remaining layer list. The fixed layer numbers keep navigation possible, but the separate scroll regions are less immediately legible than the 1440px screenshot suggests. This is a density tradeoff to test, not a reason to abandon the rail.

## Cognitive load and emotional journey

Two of the five checklist items are imperfect: minimal choices and one thing at a time. The file toolbar has more than four visible action groups, the layer jump has seven choices, and the selected summary presents six checks plus scope/navigation actions. Hierarchy and grouping keep this moderate rather than high. The main reading task is clear, context is nearby, and complexity filters are disclosed only when requested.

The satisfying moment is arriving at highlighted code and returning from the guard without rebuilding context. Clear merged and coverage labels provide reassurance. The weaker moments are encountering a preview action and discovering another unavailable patch; these interrupt momentum even though recovery is clear.

For Alex, the power user, the available accelerators and local return state work well; narrow toolbar crowding and preview destinations are the remaining friction. For Sam, the keyboard-dependent reviewer, labeled regions, skip links and visible focus are encouraging, but this assessment did not run a full keyboard-only or screen-reader review. For a first-time evaluator, the denominator distinction and multiple nested scroll areas require more attention than the central check-and-code task.

## Fit against the four assignment criteria

| Assignment criterion | Assessment |
|---|---|
| Spot the right problems | Strong. The work targets competing controls, broad summary ranges, unclear scope and ambiguous progress. These are supported by the original reference, which gives substantial space to an empty Before pane and spreads controls across several bars. |
| Better visual and micro-interaction polish | Strong, with one width issue. Compact checks, nearby controls, range feedback, guard Return, Undo and focus mode are tangible improvements. The feedback-access.ts toolbar at 1280px still needs attention. |
| Make the same information easier to scan | Credible for the matched content and demonstrated subset. Six source points remain available, short labels reduce reading cost, and file/layer scopes organize context. Seven complete added files, fourteen captured summaries and one guard route cannot prove parity across all 52 files or modified-file review. |
| Explain why | Strong. The one-page rationale links the diagnosis to specific decisions, records the wrap tradeoff, and separates implementation checks from developer testing. The Review task gives the evaluator a concrete way to inspect the proposal. |

## Limits and next test

No prior assessment or detector findings informed these scores. This review inspected a 1440px screenshot and exercised the live 1280px view without resizing. It did not independently verify every source transcript, mobile behavior, contrast measurements, full assistive-technology behavior, all loading/retry states, or live GitHub integration. Those omissions do not require a full backend for this assignment.

The next useful test is whether a reviewer can challenge one of the six claims, inspect sufficient surrounding code, and return without mistaking a highlighted range or seen state for completed review. Measure wrong turns and explanation accuracy before claiming a speed improvement.

## Bounded correction recheck

Original result: **32/40, Good**, from the independent live assessment above.

Revised result after the corrections: **32/40, Good**. The fixes remove the three concrete defects called out in that assessment, but the limited recheck does not establish the consistently excellent behavior required for another 4. All ten heuristic scores remain unchanged: status 3, real-world match 4, control 3, consistency 3, prevention 3, recognition 3, efficiency 4, minimalism 3, recovery 3, help 3.

| Original finding | Disposition |
|---|---|
| 1280px file navigation squeezed by feedback-access.ts | Resolved in the supplied `guard-1280-fixed.png`. The filename truncates, both arrow buttons remain fully visible, and Next is separated from Unified. The CSS keeps navigation from shrinking and allows the filename to truncate first; the full filename remains in the rail and its title attribute. Parent separately measured a 12px gap in the live browser. |
| Nine-path layer progress appears impossible to finish | Resolved in the supplied screenshot and rendering code. The layer now reads “0 / 7 viewed · 2 unavailable” below its nine-file heading, matching the included-file denominator while preserving total scope. |
| Inconsistently labeled preview destinations | Labeling resolved. Overview and Architecture impact now explicitly say preview, matching the nearby preview entries. Their prominent placement remains a density tradeoff, but it no longer hides their status. No further rearrangement is required for this bounded pass. |

The parent also reported an 1100px nested-Escape correction. Source inspection confirms that the About links popover handles Escape and restores focus before the context-overlay Escape branch runs. The parent verified that the first Escape closes help while leaving context open and the second closes context. I did not independently replay that interaction and have not changed the control or recovery score on that basis.

Live recheck unavailable: creating a fresh IAB tab returned “Browser is not available: iab,” and browser inventory was empty. This disposition uses the supplied 1280px screenshot and narrow source inspection, with parent live evidence identified separately. No tab was created, no viewport was changed, and no implementation files were edited. No broader audit or new findings were added.
