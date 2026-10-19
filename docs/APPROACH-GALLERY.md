# Review approach viewer

[Public viewer](https://parthawe.github.io/coderabbit-change-stack-review/approaches.html) · [Editable Paper screens](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-3-0)

This optional appendix presents twelve static Paper screen images through working filters, stage controls, and an image dialog. The main layer-review screen and one-page rationale remain the assignment submission. An explicit appendix note links back to that primary submission. Actions pictured inside the screens remain illustrative. The viewer has no connected review, messaging, test execution, or product backend functionality.

## Layout and visual system

The page uses a centered container up to 1720px wide with 32px vertical and 40px horizontal padding. The intact official black/orange typemark, title, and source context sit beside links to Paper and the working baseline. Approach filters precede a shared stage bar, a reading note, the screen grid, and the source footer.

Comparison mode uses two columns with 36px row and 28px column gaps. Each approach includes its review unit, description, current step, image, caption, expected result, and enlarge control. Following one approach uses a single column up to 1160px wide. At 760px and below, comparison also becomes one column; page padding becomes 24px by 20px and controls reflow. The stage bar starts wrapping below 1100px.

The deliberate page heading ramp is 28px semibold with a 36px line height for the page title and 20px regular with a 28px line height for approach headings. At 760px and below, these become 24px and 18px respectively. This page-specific ramp leaves the baseline workspace’s 22px/16px hierarchy intact.

Self-hosted Geist supplies reading text and headings. The page title uses 600; the more specific approach-heading rule remains 400. The bundled semibold binary is a static 600 face declared for CSS weights 500–900. Hack regular supplies screen-step identifiers, stage counts, and dialog position metadata; other live labels remain Geist. The refreshed Paper images use Geist UI text and Hack code.

The page now shares the [official CodeRabbit brand](https://www.coderabbit.ai/brand) direction applied to the baseline: near-white `#FDFDFE`, secondary mauve `#FAF8FB`, line `#E3E0E7`, muted text `#65616A`, and primary text `#211F24`. Orange `#FF570A` fills the selected stage with dark text. Selection uses `#FFEAD5`; links and small accent text use `#582D1D`. Active approach filters retain dark fill with near-white text. Buttons now use 4px corners; the dialog retains 8px corners. Flat borders and surface changes separate the content. `brand.css` follows `approaches.css` and governs these overrides. This is a record of applied values, not a claim of complete brand certification.

## Navigation and stages

**Start**, **Inspect**, and **Decide** select stages 1–3 across every visible approach. Previous and Next move through the same shared state and disable at the endpoints. Changing an approach filter preserves the current stage. **Follow this approach** selects that journey and returns to Start. A polite live region announces the current stage and visible approach.

Permalinks encode the filter and stage, for example `#A-2` opens Behavior-first at Inspect and `#all-3` compares all four at Decide. Valid hashes are read on load and hash changes; invalid hashes show all approaches at Start. Controls update the URL using `history.replaceState`, so each click does not add a browser-history entry.

The baseline footer’s **Optional approach explorations** link opens this page. The old `directions.html` redirects here, preserving its hash through JavaScript and providing a refresh redirect and fallback link. Header and footer links provide the baseline, editable Paper file, complete twelve-screen overview, and GitHub source exports.

## Image dialog and loading states

Selecting a screen or **Enlarge screen** opens a native modal dialog for that approach at the current stage. Previous step, Next step, and Left/Right arrows change the shared stage and update the underlying comparison. **Actual size** displays the image at its native 1160px width inside a scrollable canvas; **Fit width** restores scaling. Close or Escape dismisses the dialog and restores focus to its trigger.

Preview images reserve their 1160:1000 ratio and show “Loading screen…” during loading. Failed previews show a retry action and disable the image button; retry requests the same asset again. Dialog failures hide the image and expose a retry action. The dialog has no separate loading indicator. Image descriptions include the approach, step, and caption. A skip link, visible focus outlines, pressed-state controls, and keyboard stage navigation support access. Without JavaScript, links expose the overview image and Paper file.

## Source boundaries

All journeys still use the supplied screenshot excerpt from `coderabbitai/mono #22041`, “Keep seat selection cumulative across pages.” Reproduced code remains limited to `UserListPaginated.tsx` lines 719–724 and 744–749. Missing implementation and tests remain unavailable. Proposed scenarios, illustrative author input, and reviewer drafts retain their labels. D3 shows an unsent local draft. Paper page 1 holds the primary submission, page 2 archives the earlier visual explorations, and page 3 holds these optional approaches. The separate Formbricks reference has 52 files across seven layers and remained rate limited when rechecked; it supplies no missing code for these images. The viewer sends no review or message and does not save the illustrative product state shown inside an image.
