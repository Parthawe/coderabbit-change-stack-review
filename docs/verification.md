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
| Mechanical design detector | Original baseline: no findings. Brand pass: seven font/token advisories, documented below. |
| Independent finish review | Pass after fixing split pairing, split container width, and summary focus preservation. No open material findings in the reviewed scope. |
| Rationale | One PDF page, rendered and visually inspected. |
| Paper | Four editable artboards: main workspace, focus mode, review dialog, unavailable layer. Exported JSX and computed styles retained. |

## Limits

This is a desktop design prototype, not a complete PR client. Only one source screenshot file excerpt is reproduced. Other tools are explicitly labeled previews. No developer usability study or speed measurement was conducted. Signed-out access to the published URL is checked separately after deployment.


## Approach comparison viewer

The public gallery now shows the twelve Paper walkthrough states. Checked at 1440 × 1000 and 390 × 844. Shared stage selection, individual approach filtering, enlarged-view progression, actual-size reading, Home/End stage keys, Escape and focus restoration passed. The unavailable-image state was tested by temporarily withholding an asset; Retry restored the image after the asset was returned. The old directions route redirects to the comparison and retains valid journey hashes. Skip to walkthroughs preserves the selected journey and stage while moving focus to the gallery. The independent finish review passed after that skip-link fix.

The viewer controls are functional. Product controls inside the images remain illustrative.


## Requirement and brand alignment pass

Cross-checked the original three-page assignment and its attached screenshot. The original Formbricks live session still returned “Review is unavailable” and temporary public-repository rate limiting. No sign-in was attempted. See [the requirement audit](REQUIREMENT-AUDIT.md) for covered, partial, and undemonstrated requirements.

Applied the official CodeRabbit orange typemark, orange/mauve colors, Geist interface type, and Hack code type. All twelve optional Paper states and the primary Paper screen/supporting states were refreshed. The primary prototype and rationale are the recommended submission; the four approach walkthroughs are optional explorations beyond the brief.

The brand pass was rendered at 1440 × 960 and 1280 × 960 for the prototype, and at 1440 and 390 px wide for the gallery. No document horizontal overflow was observed. A navigation subtitle overflow introduced by the Hack override was corrected by keeping reading/navigation subtitles in Geist. The left navigation then measured 239 px client width and 239 px scroll width at 1280. Approved logo proportions are retained, with spacing before the header separator. Semantic red/green diff colors remain distinct from orange selection.

The one detector pass returned seven advisories: the overused-Geist warning is an intentional official-brand exception; the two font, one color, one radius, and two small-text-size advisories were documentation drift and are recorded in the refreshed design documents. The detector does not establish usability or full accessibility compliance.

The refreshed PDF remains one page and was rendered and visually inspected. JavaScript syntax checks and git diff whitespace checks passed. Earlier interaction results above remain applicable; brand changes did not replace their handlers.

The full 52-file/seven-layer PR, secondary workflows, live sync, and measured reviewer performance remain unverified. One excerpt and placement previews do not establish capability parity.

Independent finish review disposition: ship for the narrow brand alignment and scope presentation. No material fixes remained in that reviewed scope. This does not resolve the full-PR and secondary-workflow limits above.
