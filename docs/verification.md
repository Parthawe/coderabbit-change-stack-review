# Prototype verification

Checked October 19, 2026, in the Codex in-app Chromium browser. Tests used the running static site rather than a component mock.

| Check | Result |
| --- | --- |
| 1440 × 960 layout | Pass. Navigation 240 px, code workspace 880 px, context 320 px. No document overflow. |
| 1280 × 800 layout | Pass. Controls remain visible; long code scrolls inside the diff. |
| 1100 × 800 context | Pass. Context opens as a fixed overlay and closes back to its trigger. |
| Layer navigation | Pass. K opens the unavailable source layer; J returns to the reproduced file. Viewed progress persists across this navigation. |
| Summary selection | Pass. Selection highlights the corresponding code range. Enter and Space preserve focus on the activated summary. |
| Split diff | Pass. Both panes are visible at 1280 px with independent scrolling. The blank before-side row aligns with added line 747; unchanged lines stay paired. |
| Focus mode | Pass. Stable scroll position was 136.5 px before, during, and after toggling Z. File identity is retained. |
| Typing shortcut guard | Pass. Typing j, k, and z into the comment textarea inserts text without changing layer or focus mode. |
| Viewed progress | Pass. Mark viewed updates both the file indicator and the reproduced-file count; it can be reversed. |
| Review simulation | Pass. Approve completes with an explicit simulated confirmation. Dialog closes and focus returns to Submit review. No review API is called. |
| Dialog Escape | Pass. Escape closes the dialog and returns focus to Submit review. |
| Comment handling | Pass. The source thread marker opens with missing original content disclosed. Local drafts stay in this tab. |
| Loading and recovery | Pass. Loading preview renders; Load available excerpt restores code. Retry for the unavailable layer reports the unchanged source limitation. |
| No-comments state | Pass. Demonstration is labeled and can return to the source thread. |
| Browser errors | No console errors or warnings observed during the local interaction checks. |
| Mechanical design detector | No findings. |
| Independent finish review | Pass after fixing split pairing, split container width, and summary focus preservation. No open material findings in the reviewed scope. |
| Rationale | One PDF page, rendered and visually inspected. |
| Paper | Four editable artboards: main workspace, focus mode, review dialog, unavailable layer. Exported JSX and computed styles retained. |

## Limits

This is a desktop design prototype, not a complete PR client. Only one source screenshot file excerpt is reproduced. Other tools are explicitly labeled previews. No developer usability study or speed measurement was conducted. Signed-out access to the published URL is checked separately after deployment.
