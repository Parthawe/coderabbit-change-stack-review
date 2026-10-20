# Prototype verification

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
