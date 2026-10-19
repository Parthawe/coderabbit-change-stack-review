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
| Paper source | Seven current native PNG and raw JSX exports plus representative computed styles are saved in design/paper-submission. Earlier screenshot work is archived separately. |

## Limits

The source is an out-of-date snapshot. Historical resolved findings do not establish current bugs. This is a focused desktop prototype with seven complete added-file diffs, not a 52-file PR client. Modified patches, other layers' detailed content, uncaptured summaries, replies, and several secondary workflows remain outside the fixture. No backend review, full capability parity, developer usability study, or measured speed improvement is claimed.

Paper is set to anyone with the link but currently prompts signed-out reviewers to sign in. The public browser prototype is the login-free deliverable accepted by the challenge. Cookie-free published asset checks are recorded after deployment.

## Optional earlier explorations

The twelve-screen approach gallery retains the supplied mono screenshot case. Its existing filters, stage navigation, image dialog, image recovery, and narrow viewer layout were checked in the earlier gallery pass. The current change only clarifies that the primary submission now uses Formbricks; the product controls inside those images remain illustrative.
