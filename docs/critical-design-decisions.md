# Design decisions

The final iteration keeps the layer model and follows a permission-review task in Formbricks #8650.

I reviewed the design with three developers through a mix of hands-on tasks and open feedback. Their feedback helped me revise the review flow. I haven’t completed a controlled comparison or measured improvements.

| Decision | Evidence and chosen behavior | Tradeoff |
| --- | --- | --- |
| Read before navigating | Original summary points share L49–130; expanding also moves the diff. I separated expansion from explicit statement links, retaining full wording and whole-range access. | Narrow targets can hide surrounding logic. Links are manually mapped. |
| Follow and return | The guard lives in another file. Developers also challenged interrupted file flow and missing signals in my version. I retained Inspect/Return, joined files across layers and restored totals and recorded severity. | Context must stay clear while scrolling; this does not discover dependencies automatically. |
| Make progress deliberate | Original reading, file and submission states have different scopes. Developers found my counts too busy. I kept Viewed as the primary total, separate from Seen, with immediate Undo. | A check records an action, not review quality. A newer commit needs an explicit reset policy. |

Supporting refinements: 92 px reviewing controls, direct Overview, range notes and optional themes. Modified files retain equal Before/After panes; added files use full width. Findings show severity beside resolution, and message counts include replies. Missing thread content remains labelled.

## Comparison and limits

Keep viewport, theme, pinned commit, file, range and diff mode equivalent. The source already scrolls continuously within a layer; the redesign extends that across seven layers. All 52 diffs and layer membership are verified. Summaries and comments remain partial; the captured access finding is resolved and two replies are unavailable. Secondary tools remain previews.

Untested alternatives are explorations. No reduced review time, successful comparison or measured improvement is claimed.

Next: explain the permission checks, inspect the guard, return and leave a range note in both versions. Vary presentation order. Record missed checks, lost position and help needed, including whether precise links hide important context.
