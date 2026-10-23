# Current submission · October 23

The public submission is the prototype, Paper and one-page rationale. The design is labeled Final iteration. The site has no presentation flow; earlier presentation URLs redirect to the prototype. Historical implementation notes below retain earlier names and decisions.

---
name: CodeRabbit Change Stack prototype
description: Pinned Formbricks code review workspace for an independent take-home.
colors:
  surface: "#faf8fb"
  paper: "#fdfdfe"
  text: "#211f24"
  muted: "#65616a"
  line: "#e3e0e7"
  brand: "#ff570a"
  merged: "#8250df"
  blue: "#582d1d"
  selected: "#ffead5"
  selection-border: "#e57340"
  input-border: "#bdb9c2"
  viewed-border: "#8db39e"
  viewed-surface: "#e9f4ed"
  green: "#175c3c"
  red: "#8e3540"
  context: "#faf8fb"
  addition: "#ecf7f0"
  deletion: "#fceeef"
  selected-code: "#fff7ed"
  selected-code-text: "#175c3c"
  primary-hover: "#ef4f00"
  control-hover: "#f1eff3"
typography:
  pr-title:
    fontSize: "15px"
    lineHeight: "20px"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: "28px"
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  compact-metadata:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 400
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
  code:
    fontFamily: "Hack, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "24px"
rounded:
  merged-badge: "12px"
  control: "4px"
  summary: "5px"
  dialog: "8px"
  key: "3px"
spacing:
  compact: "4px"
  small: "8px"
  control: "12px"
  group: "16px"
  panel: "20px"
  section: "24px"
  heading: "28px"
  dialog: "32px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  summary-selected:
    backgroundColor: "{colors.selected}"
    rounded: "{rounded.summary}"
    padding: "16px 12px"
---

# Design System for the Change Stack prototype

## Authority and scope

The working HTML, CSS and JavaScript in `dist/` govern browser behavior. `brand.css` supplies the applied CodeRabbit overrides. The main Paper screen, rationale and prototype describe one final reviewing workspace. The clean Paper file has five pages: brief and priorities; source comparison and directions; editable M; interaction details; decisions and scope. The original file remains the exploration archive.

The official CodeRabbit brand page supplies the orange typemark, orange accent, light mauve surfaces, Geist and Hack. Diff green and red retain their semantic roles. This records provenance, not complete brand certification. Existing font binaries and source licenses remain bundled.

## Source boundary

The fixture is Formbricks #8650 at the out-of-date 23cdac2 review snapshot. The PR is merged. Seven layer names/counts total 52 files; layer 1 has nine verified paths. Seven complete added-file diffs and fourteen of the layer's 37 summaries are captured. The full six-point workspace-tenant summary is preserved. One resolved source thread is paraphrased; uncaptured replies are disclosed.

Summary navigation, explicit viewed status, J/K and Z existed in the source. The redesign changes placement, scope and continuity; it does not claim to invent those capabilities. Manually mapped anchors support nine destinations across two access.ts summaries. The source semantic-diff engine, automatic dependency mapping and full capability parity are outside the implementation.

## Layout and type

The desktop shell has an 88px PR header (102px below 1280px), a 240px navigation rail, a flexible code workspace and a 320px context panel. The layer description starts collapsed in a compact 56px heading. The footer discloses the seven-of-52 diff boundary. All nine layer paths remain available in the rail’s shared layer-and-file scroll region; layer progress sits with them.

Below 1280px, Context opens a 320px overlay between header and footer. The body retains an 880px minimum width. This is a desktop prototype, without a mobile composition. Focus mode hides surrounding panels and preserves the current reading position. Lower-height windows reduce vertical spacing.

Geist supplies interface text; Hack supplies code and technical metadata. Code is 13px on a 24px line grid. Body and filenames use 14px; summary text and several controls use 13px; paths and range labels use 11–12px. The main layer title is 22px. The rationale has a separate editorial type ramp. Keep existing token colors and radii from the frontmatter.

## Navigation and context

Previous/Next and the searchable position control navigate nine verified layer paths without skipping uncaptured patches. Opening a file never marks it viewed. Each file retains its summary, context tab and reading position. Revealing the selected file scrolls the shared navigation region only when needed; switching retains its position. Unavailable patches keep their labeled navigation destination and recovery path.

This file and Entire layer are explicit context scopes. File scope shows the source file's summary count and captured coverage. Entire layer groups fourteen captured summaries under the nine file paths and discloses the source total of 37; missing summaries remain coverage notices. Complexity filters retain the chosen scope and current file in Entire layer. They apply to captured summaries, with a coverage empty state for uncaptured Low details. Summary options holds complexity filters and independent seen-summary progress.

The selected workspace-tenant summary shows six short behavior labels, each with a line link. Read full source summary preserves the original wording in a disclosure. Entire layer uses compact summary rows. Selecting an evidence link retains keyboard focus on that action and highlights its manually mapped statement or branch and labels the destination Evidence. Go to summary start retains access to the full function. Other captured summaries use their start as a navigation destination. Selection preserves diff signs and addition/deletion colors; reduced motion removes arrival animation while retaining labels.

Inspect guard on the workspace-access bullet opens feedback-access.ts at its captured 20–49 summary. Return to access.ts restores the caller's reading state. This is one captured caller/guard route; automatic dependency browsing and simultaneous paired panes are not implemented.

## Diff and tools

Unified and Split wrap by default at 13px/24px. Their wrap preferences are separate. The visible Wrap control, pane sizing and Focus preserve the visible code line. Added-file Split uses a 96px Before rail labeled File added / No previous version. Equal panes restores 50/50. Modified-file behavior is outside the fixture.

Full file shows all captured added-file lines; Captured ranges limits the display to captured summary ranges, retaining an active note's code. These are display modes, not a semantic-diff engine. Tools includes Copy file path and collapse. Sample review progress holds bulk viewed. Outline lists six manually mapped access.ts entities: TResolveParams, TResolvedFeedbackTenant, resolveWorkspaceFeedbackTenant, TRequireOwnedRecordParams, requireOwnedFeedbackRecord and forbidFeedbackRecord. Other files' entities are not fabricated.

## Progress and decisions

The header labels progress Included files and uses seven included diffs as its denominator. The rail labels layer progress against nine paths. The footer discloses seven of 52 PR diffs. Uncaptured patches cannot be marked viewed. Summary seen is independent of viewed state and review decisions.

Mark viewed changes the file control, rail and sample counts together. Undo lasts eight seconds, pauses on hover/focus and restores the previous state even after navigation. Other notices do not displace pending Undo. Bulk viewed also has Undo; Reset invalidates it.

The merged snapshot disables Submit review and explains why. About this prototype exposes a separately labeled Open-PR review demo. Its simulated decision confirmation stays open until dismissed and says nothing was sent. This demo does not change the captured PR state.

## Notes and recovery

Comments includes Add file note and local file/line notes. Notes retain draft and saved text by file or line and reset on reload. The local-note index provides a return path without altering captured source-comment counts. Source threads retain their resolved status and start hidden; hiding one clears its code range.

Loading gates review actions, announces busy state and coalesces retries. The explicit loading preview shows skeleton rows. Unavailable source offers retry and a return path. No-comments and source-coverage states distinguish missing data from an absent source thread. Nothing is sent to CodeRabbit or GitHub.

## Accessibility and verification

Preserve skip links, labeled navigation/code regions, tabs with arrow/Home/End handling, pressed/expanded states, status announcements and native modal containment. One roving line-comment action uses Up/Down; F6 moves between code and context. Escape closes the context overlay even while typing. J/K/Z ignore typing, modified keys and open dialogs. Closing a dialog restores its trigger focus. Reduced motion preserves state feedback while disabling smooth movement and fades.

The October 22 implementation checks passed for direct links, guard/return, scopes, progress/Undo, notes, Copy path, six entities, keyboard access and 1440px/1280px/1100px layouts. The verification document separates these results from historical releases. Developer testing and measured usability improvement remain unverified.

## Matched comparison

Both captures show access.ts from line 54 at 1280 × 720 in Light and Unified, at pinned commit 23cdac2. The original screenshot is unaltered. M selects the workspace-access point at L57–65 and uses short labels, with full source wording available. Original progress is retained; M starts at zero. The original fits more code. See design/evidence/task-comparison-provenance.json.

## Arc consistency follow-up

The global header uses the actual PR title as a GitHub link, with the captured stack name labeled separately. This file / Entire layer and the summary/comment tabs stay fixed; only the context body scrolls. Per-file and guard-return history preserve that body’s position. Continue and Follow review sit in More review tools; Files stays beside Layers; Diagrams sits inside About layer. Each opens a labeled preview. None claims an uncaptured workflow is implemented.

## October 23 compact review pass

Statement actions use 13px/18px labels and 12px/18px right-aligned ranges in a 64px slot, with a 32px minimum row height. The whole row is clickable; long labels wrap. The separate guard action follows the first statement. Full source wording stays in its disclosure.

The header says Included files; Layer 1 shows seven reviewable files and two unavailable patches above the file list. More review tools groups secondary previews. About links explains manual mapping in a dismissible popover. The matched-content page links directly to the access-check task. See improvement-plan.md for acceptance checks and the developer test still needed.

At narrow desktop widths, filename text truncates before file navigation shrinks. The complete filename remains in its title and selected rail row. Preview destinations are labeled at entry. Escape dismisses About links before closing the context overlay.

## October 23 layout and reasoning pass

File identity, Mark viewed and Tools share one row. Unified, Split, Focus, Outline and Wrap form a separate 44px strip directly above the diff. Added-file Unified omits the unused old-line gutter. PR overview groups the three overview destinations. Summary options and About links follow the summary content. Statement selection retains its orange highlight; the enclosing summary no longer adds another bordered box.

The decision record explains each cost: menus add a click, visible navigation takes code width, and precise anchors can narrow attention. One code pane plus Return is the chosen route; paired panes are not part of the final submission. No measured time saving or external score is claimed.

## Clean submission file

The active Paper submission is https://app.paper.design/file/01M5MWMDHE2E77VV689SCNHGV7/p-1-0/5FN-0. It has five pages: start and choice of direction; original and M comparison; editable M; interactions; decisions and next test. The original Paper file is retained as an archive. Current exports are in design/clean-submission.

The PR header retains the source’s merged badge, PR #8650, 52-file count, verified branch name, copy action and stack context. Its 88px height accommodates those details; narrow desktop uses 102px. The purple 12px-radius badge is a semantic status preserved from the source. Icons accompany labels. Layer and file positions remain visible.

## Presentation hierarchy

The submission page leads with the brief and three ranked priorities, then the source comparison, four directions and the reason for choosing M. Numbered SVG observations sit above unaltered comparison captures and can be hidden. The working route follows, with a capability map under a disclosure to keep the main read short. Section links provide direct access.

The presentation page overrides the code workspace’s desktop minimum width. Its body can reflow below 880px; the prototype remains a desktop assignment. Capability tables have a labeled horizontal scroll region. Annotation controls use pressed state, and comparison controls retain keyboard focus. No automatic scroll animation is added.
