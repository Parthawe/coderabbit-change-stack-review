# Internal evidence-to-decision checklist

Evidence types remain separate. This is a consistency checklist, not a research report.

I reviewed the design with three developers through a mix of hands-on tasks and open feedback. Their feedback helped me revise the review flow. I haven’t completed a controlled comparison or measured improvements.

| Type | Evidence or claim | Decision / check |
| --- | --- | --- |
| Source observation | Six summary points share L49–130; expansion moves the diff. | Page 1 pointers 1–2; expand in place and use explicit statement links. |
| Source observation | Layer and file controls are separate; the guard is in another file. | Pointers 3–4; nested files plus Inspect/Return. |
| Source observation | File/display actions span groups; Seen, Viewed and Submit have different scopes. | Pointers 5–6; compact controls, deliberate progress and Undo. |
| Source observation | Severity, resolution and message totals describe different things. | Pointer 7; adjacent Major · Resolved, messages including replies and missing-content notice. |
| Developer feedback | My first version interrupted file flow and removed useful review signals. | Continuous stream across verified layers; restored totals and recorded severity. Never use the original capture as evidence of this redesign regression. |
| Developer feedback | Competing counts and stacked toolbars took attention and space. | One Viewed total; 92 px reviewing controls. |
| Developer feedback | Overview discovery and range commenting needed attention. | Direct Overview with Return; multiline notes tied to file, side and range. |
| Design hypothesis | Explicit links and stable return may reduce effort reconnecting explanation and code. | No efficiency claim. Test orientation and missed surrounding logic. |
| Design hypothesis | Compact signals may make the first scan easier. | No measured improvement or agreement across all participants claimed. |
| Verified implementation | 52 pinned diffs, seven layer assignments, comparison base and source Split behavior. | Source verification JSON and release verifier; all-file reconstruction passes. |
| Verified implementation | Original already scrolls continuously within a layer. | Describe the extension across layers accurately. |
| Verified implementation | access.ts L194 is followed by errors.ts L1 in the stream. | Paper boundary uses pinned lines and full-width added files. Scrolling updates context, not Viewed. |
| Verified implementation | Explicit navigation, Return, Focus, Overview, Viewed/Undo, range drafts and themes. | Existing release checks plus this pass’s focused browser recheck. |

Next comparison: explain permission checks, inspect the guard, return and leave a range note in both versions. Record missed checks, lost position and help needed. No results have been invented or filled in.
