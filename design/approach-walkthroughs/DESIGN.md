---
name: CodeRabbit review approach walkthroughs
description: Twelve editable desktop states comparing four proposed review workflows.
colors:
  ink: "#19232F"
  muted: "#596675"
  blue: "#2459C4"
  line: "#DCE2E8"
  surface: "#F4F6F8"
  paper: "#FFFFFF"
  selected: "#E9EFFB"
  green: "#175C3C"
  addition: "#ECF7F0"
typography:
  section:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: "25px"
  row-title:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "23px"
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "21px"
  label:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "19px"
  code:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "23px"
rounded:
  control: "5px"
---

# Design System: CodeRabbit review approach walkthroughs

## Overview

The twelve static, editable Paper screens extend the incumbent slate-and-blue IBM Plex system. Each approach has three successive states. Shared chrome keeps the pull request and layer visible while the review task changes.

[Editable Paper page](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-3-0). The PNGs `a1.png` through `d3.png` record the built states. This document applies to these walkthroughs; it does not replace the incumbent prototype’s design system. Frontmatter records observed values, with no claim of bound Paper variables or shared runtime tokens.

## Colors

Blue identifies actions, the current stage, links, and state labels. Selected rows add a pale blue fill; their written status still describes the underlying item. D2 selects **Reset handler** through this fill while both entries remain suggested links.

Ink and muted text separate the task from explanatory context. White holds the main workspace; cool gray backs supporting notes and the layer strip. Thin neutral lines divide rows and regions. Green text, a pale green background, and a plus sign identify added source lines. A selected row does not signify verified behavior or a passing test.

## Typography

IBM Plex Sans supplies interface text; IBM Plex Mono supplies source code. Section headings and row titles use medium weight. Body copy uses regular weight; labels remain smaller. Field values use 15px type with a 22px line height, and field headings use 13px medium type with a 20px line height.

Preserve code indentation and line numbers. The walkthrough source allows long code lines to wrap within the evidence panel; this differs from the incumbent working prototype’s horizontal overflow behavior.

## Layout

Each artboard is 1160 × 1000. Its vertical shell contains a PR header, a layer strip, an approach title with three numbered stages, a two-column task area, and an annotation footer. Content has 24px outer insets and a 24px column gap. The left task column is normally 500px; A2, B2, and C2 reduce it to 320px to give code more room.

The footer explains the transition, names the next state or outcome, and labels the artifact as a static walkthrough with no external actions. These are desktop compositions; no responsive layout or live navigation is implemented by the Paper screens.

## Elevation & Depth

The screens are flat. Borders, spacing, and surface fills establish hierarchy without shadows, overlays, or decorative effects.

## Shapes

Rows and large regions use straight boundaries. Buttons, notes, and fields share the small control radius. Rows use 18px padding; notes and fields use 16px padding. Buttons use 9px vertical and 14px horizontal padding with a one-pixel border.

## Components

- **Shared context:** retain `coderabbitai/mono #22041`, the supplied PR title, `Layers 2 / 2`, `Paginated list integration`, and `UserListPaginated.tsx` across states.
- **Stage progression:** blue marks the current numbered stage. The three screens depict successive states; the controls are editable visual elements.
- **Task rows and ledgers:** rows combine a title, context, and written status. Ledgers keep inspected evidence, missing evidence, and the review decision separate.
- **Evidence panels:** code includes the filename, source range, line numbers, change signs, and a transcription boundary note. Only `UserListPaginated.tsx` lines 719–724 and 744–749 are reproduced.
- **Buttons and fields:** primary actions use blue with white text; secondary actions use white, a neutral border, and blue text. Fields display empty prompts or labeled illustrative text. These static states do not establish hover, focus, persistence, or submission behavior.
- **A, intended behavior:** a proposed expectation leads to attached evidence and a review decision. The expectation stays open when author confirmation, call sites, or tests are missing. File viewed status remains independent.
- **B, counterexamples:** a proposed scenario leads to static code inspection and an inconclusive result. The scenario is not executed and has no pass/fail result or established defect.
- **C, impact:** the known dependency leads to boundary inspection and a coverage ledger. `Paginated list integration` depends on `Selection cache utility`; the latter’s two files are unavailable. Other consumers and test coverage remain unknown.
- **D, author handoff:** missing author input leads to clearly labeled illustrative author input, then independent inspection and a source-linked reviewer question. D2 selects the Reset handler. D3 shows an unsent local draft awaiting reviewer action; no question or review has been sent.

## Do's and Don'ts

- Do preserve labels such as proposed, illustrative, unavailable, not run, inconclusive, and unsent wherever they qualify the content.
- Do keep source references visible beside evidence and questions. The reference to summary lines 939–945 does not supply their code.
- Do retain the same visual system across approaches so their workflow differences remain legible.
- Don’t reconstruct hidden source, utility contracts, tests, author statements, other consumers, risk scores, or repository coverage.
- Don’t treat an attached excerpt, selected row, viewed file, or author explanation as proof of correct behavior.
- Don’t import content from the separate Formbricks example or imply that these static screens perform backend writes.
