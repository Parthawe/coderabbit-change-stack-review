---
name: CodeRabbit Change Stack prototype
description: Screenshot-based code review workspace for an independent take-home.
colors:
  surface: "#f4f6f8"
  paper: "#fff"
  text: "#19232f"
  muted: "#596675"
  line: "#dce2e8"
  blue: "#2459c4"
  selected: "#e9effb"
  green: "#175c3c"
  red: "#8e3540"
  context: "#f8fafc"
  addition: "#ecf7f0"
  deletion: "#fceeef"
  selected-code: "#edf3ff"
  selected-code-text: "#244d91"
  primary-hover: "#1c479e"
  control-hover: "#eef2f7"
typography:
  headline:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: "28px"
    letterSpacing: "-0.025em"
  title:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
  code:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "24px"
rounded:
  control: "5px"
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
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
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
    rounded: "{rounded.control}"
    padding: "16px 12px"
---

# Design System: CodeRabbit Change Stack prototype

## Overview

This is the implemented visual system for Parth Pawar’s independent CodeRabbit take-home. It gives reviewers a layer list, a code excerpt, and connected summaries in one desktop workspace. Compact typography, flat panels, and restrained state colors keep the code readable.

The working HTML/CSS/JavaScript in `dist/` governs browser behavior. `design/paper-styles.json` records the exported Paper composition at 1440 × 960; it is a design reference, not the responsive implementation. This document describes that existing system.

## Colors

### Primary

Blue identifies actions, keyboard focus, the active diff mode, selected layers, and selected summaries. The selected surface is a pale blue tint. Blue code highlighting identifies the summary’s range and overrides the addition/deletion fill for selected rows.

### Neutral

The surface token backs navigation and hunk bars. Paper backs the main code area, header, controls, and comment container. Context uses a slightly lighter cool surface. Text and muted text separate primary content from paths, line numbers, and explanatory copy; the line token separates panels and rows.

### Diff semantics

Green text on the addition surface marks added code. Red text on the deletion surface marks removed code. Old/new line columns and plus/minus signs preserve the change meaning alongside color. Unchanged code uses a white background.

## Typography

Self-hosted IBM Plex Sans supplies interface text at regular, medium, and semibold weights. IBM Plex Mono supplies code and summary ranges at regular weight. Keep their system sans-serif and monospace fallbacks.

The main layer heading uses the headline token. Context headings use the title token; the PR title is 15px medium. Body and filenames use 14px. Summary copy, tabs, progress, and several dialog labels use 13px; paths and keyboard hints use 11–12px. Dialog titles use 24px semibold. Code stays on a 24px line grid, with line numbers at 12px. Summary ranges use 11px mono. There is no marketing display scale.

## Layout

The viewport is a vertical shell with a 72px header and 36px prototype footer. Between them, navigation is 240px wide, the code workspace flexes, and context is 320px wide. At 1440px the main workspace is 880px wide. Navigation, code, and context scroll independently; the code area supports horizontal overflow without wrapping source lines.

Panel padding follows the spacing tokens: navigation uses 24px by 16px, context uses 24px by 20px, and the layer heading uses 24px 28px 20px. The file toolbar uses 16px by 20px. At widths below 1440px, file controls tighten and heading side padding becomes 24px.

Below 1280px, context leaves the column layout and opens through the Context control as a 360px overlay between header and footer. The close control and Escape dismiss it. Navigation remains 240px. The body has an 880px minimum width; this is a desktop prototype, with no mobile composition. Heights below 800px reduce vertical padding in navigation, headings, context, and summaries.

## Elevation & Depth

At rest, panels use borders and surface changes. The selected summary has a one-pixel inset outline. Shadows appear on the narrow-screen context overlay, dialogs, and toast notifications. The dialog backdrop dims the existing workspace. Exact shadow and breakpoint values live in `.impeccable/design.json` as extensions to these tokens.

## Shapes

Controls, summaries, comment containers, and toasts share the control radius. Dialogs use the dialog radius; keyboard keys use the key radius. Tabs have square corners. Keep panel boundaries straight and use one-pixel dividers. Small line icons use 16px boxes and a 1.5px stroke.

## Components

- **Navigation:** layers contain a number, title, file count, and disclosure arrow. Selection uses the pale blue fill, blue text, a tinted border, and semibold title. Clicking the current layer toggles its file list; J/K changes layers. Unavailable source retains a labeled place in navigation.
- **Buttons and fields:** primary actions use blue with white text; secondary buttons use white with a neutral border; quiet buttons remove the visible border. Hover and pressed states change the fill. Textareas use the same control radius and body type. Disabled buttons reduce opacity and suppress the pointer cursor.
- **Summaries:** each button shows a mono line range, title, and short explanation. Selecting one updates `aria-pressed`, selects its code range, and scrolls that range into view. The final summary points to a labeled source gap because its code is outside the screenshot.
- **Diff:** Unified and Split are pressed-state controls. Split pairs before/after rows, with independent overflow inside each half. Fold controls expose an explanation of the omitted source rather than fabricated code. Line comment controls appear on hover or keyboard focus.
- **Focus mode:** Z or the Focus control hides navigation and context and gives the code the available width. Entering and leaving preserves the file and saved scroll position; the control indicates its pressed state.
- **Progress and reviews:** Mark viewed applies only to the one reproduced file. Review decisions open in a native modal dialog and submission is explicitly simulated. Supporting tools are explanatory previews.
- **Accessibility:** retain the skip link, labeled navigation and code region, semantic tabs with arrow/Home/End handling, pressed and expanded states, status announcements, and native dialog containment. Closing a dialog restores focus to its trigger. Interactive controls receive a 2px blue focus outline with a 3px offset. Shortcuts ignore typing, modified keys, and open dialogs. Reduced-motion preferences disable smooth scrolling and animation.
- **Source states:** normal loading announces status; the explicit loading preview shows skeleton rows. Unavailable source has retry and return actions. The comments view distinguishes an absent thread from missing original comment text and local drafts.

## Do's and Don'ts

- Do keep selection, review progress, keyboard focus, and diff meaning visually distinct.
- Do retain line numbers, signs, labels, and state attributes alongside color.
- Do preserve the source boundary: one visible `UserListPaginated.tsx` excerpt from `coderabbitai/mono #22041`, with two layers and three source files identified by the screenshots.
- Do label the public Formbricks PR as a different example. Its 52-file contents do not supply code for this excerpt.
- Don’t reconstruct hidden lines, other files, original comment authors or text, or backend analysis.
- Don’t imply that viewed state covers the whole PR or that simulated reviews reach CodeRabbit or GitHub. Drafts and viewed state live in tab memory and reset on reload.
