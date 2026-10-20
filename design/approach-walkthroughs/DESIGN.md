---
name: CodeRabbit review approach walkthroughs
description: Twelve editable desktop states comparing four proposed review workflows.
colors:
  ink: "#211F24"
  muted: "#65616A"
  brand: "#FF570A"
  reading-accent: "#582D1D"
  line: "#E3E0E7"
  surface: "#FAF8FB"
  paper: "#FDFDFE"
  selected: "#FFEAD5"
  green: "#175C3C"
  addition: "#ECF7F0"
typography:
  section:
    fontFamily: "Geist, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: "25px"
  row-title:
    fontFamily: "Geist, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "23px"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "21px"
  label:
    fontFamily: "Geist, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "19px"
  code:
    fontFamily: "Hack, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "23px"
rounded:
  control: "5px"
---

# Design System: CodeRabbit review approach walkthroughs

## Overview

The twelve static, editable Formbricks Paper screens use CodeRabbit orange, light mauve surfaces, Geist UI text, and Hack code in place of the previous blue/slate Plex direction. These four product approaches remain optional explorations; the main layer-review screen and rationale remain the assignment submission. Each approach has three successive states. Shared chrome keeps the pull request and layer visible while the review task changes.

[Editable Paper page](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-3-0). The PNGs `a1.png` through `d3.png` record the built states. This document applies to these walkthroughs; it does not replace the incumbent prototype’s design system. Frontmatter records observed values, with no claim of bound Paper variables or shared runtime tokens. The [official brand page](https://www.coderabbit.ai/brand) and its extracted light Carrot UI stylesheet values supplied the palette; the original black/orange typemark SVG remains intact. This records applied brand choices without certifying complete brand compliance. Paper separates the main submission, Formbricks approach comparison, and archives.

## Colors

Orange fills primary actions. Dark orange-family text identifies the current stage, links, and state labels. Selected rows add a pale orange fill; their written status still describes the underlying item. D2 selects **Enforce record ownership** through this fill while both entries remain suggested links.

Ink and muted text separate the task from explanatory context. The near-white base holds the main workspace; secondary mauve backs supporting notes and the layer strip. Thin neutral lines divide rows and regions. Green text, a pale green background, and a plus sign identify added source lines. A selected row does not signify verified behavior or a passing test.

## Typography

Geist supplies interface text, including labels; Hack supplies source code. Authored section headings and row titles retain weight 500 in the stored walkthrough HTML; the supplied static Geist semibold face provides the heavier rendering. Body copy uses regular 400. These values do not imply a variable font or Hack typography across every metadata label. Field values use 15px type with a 22px line height, and field headings use 13px medium type with a 20px line height.

Preserve code indentation and line numbers. The supplied semibold binary is declared for CSS weights 500–900 in the browser; it remains a static 600 face. The walkthrough source allows long code lines to wrap within the evidence panel; this differs from the incumbent working prototype’s horizontal overflow behavior.

## Layout

Each artboard is 1160 × 1000. Its vertical shell contains a PR header, a layer strip, an approach title with three numbered stages, a two-column task area, and an annotation footer. Content has 24px outer insets and a 24px column gap. The left task column is normally 500px; A2, B2, and C2 reduce it to 320px to give code more room.

The footer explains the transition, names the next state or outcome, and labels the artifact as a static walkthrough with no external actions. These are desktop compositions; no responsive layout or live navigation is implemented by the Paper screens.

## Elevation & Depth

The screens are flat. Borders, spacing, and surface fills establish hierarchy without shadows, overlays, or decorative effects.

## Shapes

Rows and large regions use straight boundaries. Buttons, notes, and fields share the small control radius. Rows use 18px padding; notes and fields use 16px padding. Buttons use 9px vertical and 14px horizontal padding with a one-pixel border.

## Components

- **Shared context:** retain Formbricks #8650, Feedback records MCP integration, layer 1 of 7, API contracts and access controls, access.ts, commit 23cdac2, and out-of-date snapshot status across states.
- **Stage progression:** dark orange-family text marks the current numbered stage. The three screens depict successive states; the controls are editable visual elements.
- **Task rows and ledgers:** rows combine a title, context, and written status. Ledgers keep inspected evidence, missing evidence, and the review decision separate.
- **Evidence panels:** code includes filename, source range, exact line numbers, addition signs, and pinned-source attribution. A2, B2, C2, and D3 reproduce identical access.ts lines 178–183 from the complete 194-line added file.
- **Buttons and fields:** primary actions use orange with dark text; secondary actions use the near-white base, a neutral border, and dark orange-family text. Fields display empty prompts or labeled illustrative text. These static states do not establish hover, focus, persistence, or submission behavior.
- **A, intended behavior:** a proposed expectation leads to attached evidence and a review decision. The expectation stays open when author confirmation, call sites, or tests are missing. File viewed status remains independent.
- **B, counterexamples:** a proposed scenario leads to static code inspection and an inconclusive result. The scenario is not executed and has no pass/fail result or established defect.
- **C, impact:** the known dependency leads to boundary inspection and a coverage ledger. Feedback record operations depends on API contracts and access controls. This is a verified layer edge; specific callers, other consumers, and execution coverage remain unverified.
- **D, author handoff:** missing author input leads to clearly labeled illustrative author input, then independent inspection and a source-linked reviewer question. D2 selects the Reset handler. D3 shows an unsent local draft awaiting reviewer action; no question or review has been sent.

## Do's and Don'ts

- Do preserve labels such as proposed, illustrative, unavailable, not run, inconclusive, and unsent wherever they qualify the content.
- Do keep source references visible beside evidence and questions. The reference to summary lines 939–945 does not supply their code.
- Do retain the same visual system across approaches so their workflow differences remain legible.
- Don’t reconstruct hidden source, utility contracts, tests, author statements, other consumers, risk scores, or repository coverage.
- Don’t treat an attached excerpt, selected row, viewed file, or author explanation as proof of correct behavior.
- Don’t import content from the separate 52-file, seven-layer Formbricks example, which remained rate limited when rechecked, or imply that these static screens perform backend writes.

## Rationale panels

Each approach has a 640px-wide native editable rationale at an 80px gap after its final state. The main rationale sits beside the main reviewing screen on page 01. Panels use 32px padding, 24px section gaps, Geist 28/34 for titles, 17/24 semibold for criteria, and 15/23 for body text. Their height fits content. The five panels answer problem diagnosis, polish, scanability, and reasoning, then state tradeoffs and evidence boundaries. These are design hypotheses without measured usability claims.
