# Prototype verification history

This is a chronological record of earlier releases. Some behaviors below were replaced during the ten-perspective review. The current checks and remaining limitations are in [the October 20 review report](ten-perspective-review.md). In particular, Low now filters, Split uses continuous panes, hidden threads clear their range, and the current Paper page has 13 artboards.

Checked October 19, 2026 in the Codex in-app Chromium browser against the running static site. This record applies to the migrated Formbricks fixture. Earlier screenshot-based results do not establish behavior of this version.

| Check | Observed result |
| --- | --- |
| Source identity | Exact assigned URL initially loaded without sign-in. Seven layer names/counts, nine layer-1 paths, 37 summaries, 15 resolved messages, and stale history captured. Later requests became rate limited. |
| Fixture integrity | Seven layer counts sum to 52. Nine file paths, seven complete added files, 14 valid summary ranges, 37 total summaries, and 15 comment messages pass consistency checks. Added-source line counts match source additions. |
| 1440 × 960 layout | No document horizontal overflow. Navigation, code, and context are readable. Main and supporting Paper boards visually inspected. |
| 1280 × 800 layout | Document width remains 1280. Toolbar controls do not overlap; long source lines scroll inside the diff. The navigation scrolls vertically to retain all tools. |
| 1100 × 800 context | Context opens as an overlay. Escape closes it and restores focus to the Context trigger. No document horizontal overflow. |
| Layer keys | J selects Feedback record operations; K returns to layer 1. Detailed content outside the fixture is labeled. |
| Summary selection | Selecting the second access.ts summary highlights exactly lines 156–186 (31 rows), scrolls to them, and preserves focus. |
| Complexity | High filters to the captured high-complexity summary. Low opens an explicit uncaptured-content preview rather than claiming no source summaries. |
| File picker | Filtering serializers.ts opens its complete 132-line added file. A modified file opens a coverage notice with Mark viewed disabled; Return to access.ts recovers. |
| Independent progress | Mark seen gives 1/37; marking two included files gives 2/52. Both persist through J/K navigation. Unmarking a file reduces viewed to 1/52 without changing seen progress. Opening files alone does not mark them viewed. |
| Focus mode | Scroll position is 1152px before, during, and after Z. Z can also exit focus after navigating to an outside-fixture layer. |
| Split | Added-file split view contains 194 blank before rows and 194 added after rows for access.ts. |
| Comments | Three resolved access.ts messages initially hidden. Show resolved reveals the historical root thread, marked Major and Resolved, at R75–90. Two replies are disclosed as not reproduced. |
| Typing | Typing j/k/z in a local comment inserts text without changing layer or focus mode. Local save explicitly sends nothing. |
| Review dialog | Escape returns focus to Submit review. Approve completes with “Simulated approval complete. Nothing was sent.” No review API is used. |
| Recovery previews | Loading skeleton restores pinned source. Observed-source-error retry shows its explanatory result inside the dialog. No-comments state is explicitly labeled. |
| Reduced motion | The implementation checks prefers-reduced-motion before smooth scrolling; reduced-motion CSS disables animation. No user preference was changed during checking. |
| PDF | Exactly one page; rendered through Poppler and visually inspected for readable type, table wrapping, and no clipping. |
| Source syntax | JavaScript syntax and git diff whitespace checks pass. |
| Design detector | One bounded pass on changed HTML/CSS produced three documentation advisories: selection border, input border, and compact 11px labels. Existing brand values and dense metadata use are documented; no new visual system was introduced. |
| Paper source | Eight current native PNG and raw JSX exports plus representative computed styles are saved in design/paper-submission. Earlier screenshot work is archived separately. |

## Limits

The source is an out-of-date snapshot. Historical resolved findings do not establish current bugs. This is a focused desktop prototype with seven complete added-file diffs, not a 52-file PR client. Modified patches, other layers' detailed content, uncaptured summaries, replies, and several secondary workflows remain outside the fixture. No backend review, full capability parity, developer usability study, or measured speed improvement is claimed.

Paper is set to anyone with the link but currently prompts signed-out reviewers to sign in. The public browser prototype is the login-free deliverable accepted by the challenge. Cookie-free published asset checks are recorded after deployment.

## Optional earlier explorations

The twelve-screen approach gallery now uses the same Formbricks PR, pinned file, and guard excerpt as the main prototype. Five adjacent Paper rationales and matching browser disclosures were added. Static product controls remain illustrative; public viewer controls are functional. Earlier gallery checks remain historical and current checks are recorded below.

## Same-PR approach comparison pass

All twelve full-size Paper states, five native rationale panels, and the refreshed overview were visually inspected. No clipping or overlap was observed. Text searches on the comparison page found no mono PR, UserList, cache, reset, or old line-747 references. Exact code excerpts are checked against the pinned fixture. The verified layer dependency was cross-checked against the saved source accessibility capture. The old screenshot study remains in archive pages. Browser layout, stage controls, disclosures, and published assets are checked as part of this release; no measured usability claim is made.

Current comparison checks: at 1440×1000 and 390×844, no document horizontal overflow was observed. All four Inspect images loaded at their native 1160px width. Stage navigation, single-approach filtering, expanded reasoning persistence, main-workspace disclosure, viewer progression, Escape, and trigger-focus restoration passed. All 24 native Paper code lines matched the pinned fixture. JavaScript syntax and whitespace checks passed. One design-detector pass returned no findings for the changed comparison page. The updated rationale PDF remains one page and was rendered and visually inspected.

## Final submission M handoff

M is explicitly final on Paper page 01 and its start/rationale boards. Page 02 retains A–D as optional explorations using the same pinned PR. The public prototype has submission links outside the simulated workspace; the exploration gallery opens with M and its rationale visible. The final site was inspected at 1440 and 1280 pixels, with no new overlap or page overflow. Summary navigation, reversible file progress, focus restoration, and all four exploration inspection states were checked. Submission and sharing limits remain labeled.

## Focused submission cleanup

Removed exploration links and the gallery from the deployed path; earlier gallery assets remain in archive/site-explorations. Legacy approaches/directions URLs redirect to the final prototype. Paper keeps A–D on an archive page. Removed the duplicated reading guide and implementation explanation from the primary Paper page; retained the original diagnosis, final screen, four design decisions, capability destinations, and interaction/recovery states.

Rebuilt the rationale as one visually checked page with observation-to-decision mapping, code-width tradeoff, a proposed usability test, and coverage limits. Inspected the prototype at 1440 and 1280 px and the rationale down to 880 px; no new page overflow or overlap was observed. Source notes retain all four demonstration controls. All relative HTML links and assets resolve; app.js passes syntax checking. The mechanical design detector reported only pre-existing reading-page type sizes outside the product UI ramp; those editorial sizes are intentional.

## Annotated diagnosis board

Board 01 now ties the four existing diagnoses to the exact captured original through editable SVG outlines, numbered markers, and short arrows. The original screenshot remains unchanged. Notes sit beneath the image. Progress controls use secondary dashed outlines to connect the three distinct states. The larger original and all annotations were visually checked for alignment, contrast, text coverage, and artboard fit; board height is 1136px with sufficient separation from the next row. No new usability or defect claim was added.

## Interaction feedback pass · October 20, 2026

Designed the linked-range label, viewed check/Undo toast, and persistent simulated confirmation in Paper before implementing them. Main, flow, focus, and confirmation exports were refreshed from native nodes; exact styles are saved in feedback-computed-styles.json. The focus state was checked for spacing, type, contrast, alignment, and fit; no clipping was observed.

In the local Chromium preview, selecting the second summary selected exactly 31 rows (156–186) and landed line 156 eight pixels below the diff viewport edge. Rapidly selecting the second then first summary settled at line 49 with the matching range label. Focus mode retained the 1144px scroll position. The metadata row stays visible while code scrolls.

Mark viewed and its inverse both support keyboard Undo. Undo after switching files restored the original file’s count without changing the selected file. Undo from an outside-fixture layer restored the count and focused that layer’s control. This focus fallback was fixed after the initial check. Opening a file still does not mark it viewed.

Approval and request-for-changes simulations produced persistent confirmations. Return and Escape restored focus to Submit review. No review API or external mutation was added. The dialog contains the keyboard focus and displays the explicit no-send statement.

At 1440×960, 1280×800, and 1100×800, no document horizontal overflow or new control overlap was observed. At 1100px, the context overlay starts at the header’s 109px lower edge. Emulating reduced motion produced no row animation and an immediate landing at the selected range; the emulation was then removed. Browser warning/error logs were empty.

One mechanical design-detector pass flagged a temporary three-pixel arrival stripe; it was removed, leaving only a short background emphasis. Other advisories concern existing palette/type values; the viewed border and surface now have documented tokens. JavaScript syntax and whitespace checks pass. These are implementation checks, not usability measurements.

## Final handoff review · October 20, 2026

Re-read the original three-page assignment and the one-page rationale. The final submission remains one reviewing screen with four source diagnoses and supporting interaction states. The editable Paper page has nine artboards; product explorations remain archived. The source is the same pinned Formbricks PR.

The public path passed summary linking (31 rows at 156–186), file Undo after navigation, J/K, focus position preservation (3712px before/during/after), historical comments, persistent approval simulation, and Escape focus restoration. At 1280px the toolbar had 24px between identity and actions with no document overflow; at 1100px the context overlay began exactly below the header. The explicit loading state recovered correctly.

Found and fixed one misleading state: returning from an open comment to Summaries previously left the comment’s code range selected. After the fix, tab switches restore 156–186 for the selected summary and 75–90 for the historical thread. Hiding resolved comments restores the summary range. A local note restored its single-line range and retained its draft through both tabs. The Paper flow specification now records this behavior and was visually checked without clipping.

JavaScript syntax, whitespace checks, and one scoped mechanical detector pass passed. The rationale is one page. A fresh unsigned-in Paper browser redirected to sign-in; the public prototype and rationale are the access-free review path. This check does not establish full capability parity or measured usability improvement.

## Reasoning copy pass · October 20, 2026

Rewrote the final Paper page’s introduction, source diagnoses, design reasoning, interaction notes, and source-error explanation in the same direct, first-person tone as the submission message. Product labels, exact source content, PR counts, and behavior were kept. Archived explorations were outside this copy pass.

The five changed Paper boards were visually inspected for wrapping and fit, then exported as current native PNGs and raw JSX. The rationale PDF and HTML use the same source copy in rationale-content.json. The PDF remains one page; its rendered page was checked for readable type, table wrapping, spacing, and clipping. The HTML was inspected at 1280px and checked at 880px with no document overflow. The wording retains the code-width tradeoff, limited content coverage, simulated submission, and the need for developer usability testing.

## Local Thursday refinement · October 20, 2026 · unpublished

Reproduced and fixed two concrete issues: focus mode restored its entry position instead of the current reading position, and local notes used one shared draft/saved value across files and lines. Focus now captures position on each layout toggle. Notes use a file-ID/line key and show that ownership in the heading. Paper flow notes and exports were updated.

After the fix, leaving focus retained 1692.5px. A second line and another file opened empty; returning restored access.ts:49's saved note and access.ts:50's separate unsaved draft. Typing J/K/Z stayed in the textarea. At 1280px there was no document overflow; at 1100px context aligned to the 109px header edge. Simulated confirmation and Escape focus restoration passed. Browser warning/error logs were empty. JS syntax, whitespace, and one scoped detector pass passed.

Public entry points returned HTTP 200 without authentication. Public rationale and fixture match local files; the PDF remains one page. Source counts and line lengths remain consistent. No publishing, pushing, messaging, submission, or permission change was performed. The public app remains at 1f6ce63 pending review of these local fixes. The Thursday handoff and a review archive are in outputs.

## Reviewed release · October 20, 2026

Parth authorized publishing the prepared focus-position and file/line-note fixes. An independent second-agent review assessed the changes, Paper screenshots, one-page rationale, source counts, and the assignment's four judging criteria. It found a P2: the saved-note block could show the previous saved value after a second save. This was fixed by updating a stable text node directly, preserving the editor and focus. The reviewer rechecked first save, A-to-B save, clearing, editor identity, note isolation, and current focus position and reported no remaining blocker in its bounded scope.

Live browser checks confirmed immediate saved A/B values, empty notes for a different file or line, restored saved and unsaved notes, clearing the saved block, and keyboard focus retained on Save. The rationale now explicitly describes current reading position and file/line ownership, and still compiles to one visually checked page. The Paper flow wording and native exports match. The design detector reported only existing editorial font sizes in rationale.html; those are intentional reading-page sizes, not a product UI change.

The independent review is documented in docs/second-review.txt. No email or message to CodeRabbit was sent. Publication and final public verification are recorded in the Thursday handoff.

## Final walkthrough and handoff alignment · October 20, 2026

Paper’s start board now leads with the three submission links. Future sketches and AI critiques are explicitly supporting material. The rationale removes the unexplained M label; the private question concept is distinguished from the implemented per-file note index. Native Paper sources, PNGs, the one-page PDF/HTML and README were refreshed together. No new layout direction was added.

The context skip link now calls the same focus handoff as Context and F6. Keyboard checks at 1100px confirmed it opens the overlay and focuses the selected tab; Escape closes it and returns to Context. At 1440px it focuses the tab without page overflow. Browser warning/error logs were empty. JS syntax, whitespace and local-link checks passed. The rendered rationale remains one page and was visually inspected.

## Specific evidence and compact added-file Split · October 20, 2026

Paper was updated first. The main and Focus states now show access.ts lines 68–85 with L75 selected alone. A native supporting Split state uses a 96px empty Before rail, a full-width After pane and wrapped 13px code. Source, flow, rationale and next-test status were refreshed from Paper exports.

All nine manually mapped access.ts anchors were exercised in the browser. Highlighted line bounds matched each chosen option, including only L75 for trimming and L179–183 for the tenant check. Go to summary start selected L49 alone. Expanded source-summary links worked and kept the disclosure open. Other summaries select their explicitly labeled start. The original fixture and captured source text are unchanged.

Compact/Equal panes switching retained the first visible code line; returning to access.ts restored its anchor. At 1440px and 1280px, Split stayed at 13px with wrapping and no page overflow. At 1100px, the overlay dropdown kept focus, Escape restored Context, and code remained readable. Unified and Split retain separate wrap choices. Active local notes remained visible in ranges-only mode, outline selection removed the old editor, and viewed Undo survived a summary-progress notice. Simulated submission and Reset passed. Browser warning/error logs were empty. The rationale remains one rendered and visually checked page. These are implementation checks, not developer usability results.
