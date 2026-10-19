# Review approach viewer

[Public viewer](https://parthawe.github.io/coderabbit-change-stack-review/approaches.html) · [Editable Paper screens](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-3-0)

This page presents twelve static Paper screen images through working filters, stage controls, and an image dialog. Actions pictured inside the screens remain illustrative. The viewer has no connected review, messaging, test execution, or product backend functionality.

## Layout and visual system

The page uses a centered container up to 1720px wide with 32px vertical and 40px horizontal padding. A title and source context sit beside links to Paper and the working baseline. Approach filters precede a shared stage bar, a reading note, the screen grid, and the source footer.

Comparison mode uses two columns with 36px row and 28px column gaps. Each approach includes its review unit, description, current step, image, caption, expected result, and enlarge control. Following one approach uses a single column up to 1160px wide. At 760px and below, comparison also becomes one column; page padding becomes 24px by 20px and controls reflow. The stage bar starts wrapping below 1100px.

The deliberate page heading ramp is 28px semibold with a 36px line height for the page title and 20px medium with a 28px line height for approach headings. At 760px and below, these become 24px and 18px respectively. This page-specific ramp leaves the baseline workspace’s 22px/16px hierarchy intact.

Self-hosted IBM Plex Sans supplies the live interface at weights 400, 500, and 600. IBM Plex Mono remains part of the exported code imagery. The page shares the baseline’s text (`#19232f`), muted text (`#596675`), line (`#dce2e8`), blue (`#2459c4`), selected fill (`#e9effb`), white, and hover (`#eef2f7`) values. Its outer canvas is `#edf0f2`. Active approach filters use dark text-color fill with white text; selected stages use pale blue with blue borders and text. Controls use 5px corners, and the dialog uses 8px corners. Borders and tonal surfaces supply separation without decorative shadows.

## Navigation and stages

**Start**, **Inspect**, and **Decide** select stages 1–3 across every visible approach. Previous and Next move through the same shared state and disable at the endpoints. Changing an approach filter preserves the current stage. **Follow this approach** selects that journey and returns to Start. A polite live region announces the current stage and visible approach.

Permalinks encode the filter and stage, for example `#A-2` opens Behavior-first at Inspect and `#all-3` compares all four at Decide. Valid hashes are read on load and hash changes; invalid hashes show all approaches at Start. Controls update the URL using `history.replaceState`, so each click does not add a browser-history entry.

The baseline footer’s **Compare four approaches** link opens this page. The old `directions.html` redirects here, preserving its hash through JavaScript and providing a refresh redirect and fallback link. Header and footer links provide the baseline, editable Paper file, complete twelve-screen overview, and GitHub source exports.

## Image dialog and loading states

Selecting a screen or **Enlarge screen** opens a native modal dialog for that approach at the current stage. Previous step, Next step, and Left/Right arrows change the shared stage and update the underlying comparison. **Actual size** displays the image at its native 1160px width inside a scrollable canvas; **Fit width** restores scaling. Close or Escape dismisses the dialog and restores focus to its trigger.

Preview images reserve their 1160:1000 ratio and show “Loading screen…” during loading. Failed previews show a retry action and disable the image button; retry requests the same asset again. Dialog failures hide the image and expose a retry action. The dialog has no separate loading indicator. Image descriptions include the approach, step, and caption. A skip link, visible focus outlines, pressed-state controls, and keyboard stage navigation support access. Without JavaScript, links expose the overview image and Paper file.

## Source boundaries

All journeys still use the supplied screenshot excerpt from `coderabbitai/mono #22041`, “Keep seat selection cumulative across pages.” Reproduced code remains limited to `UserListPaginated.tsx` lines 719–724 and 744–749. Missing implementation and tests remain unavailable. Proposed scenarios, illustrative author input, and reviewer drafts retain their labels. D3 shows an unsent local draft. The viewer sends no review or message and does not save the illustrative product state shown inside an image.
