# CodeRabbit Change Stack Review

Independent design assignment by Parth Pawar. This repository contains the working browser prototype, twelve approach walkthroughs, Paper design references, and the design rationale.

- [Primary working prototype](https://parthawe.github.io/coderabbit-change-stack-review/)
- [One-page rationale](dist/rationale.pdf)
- [Editable primary submission in Paper](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-1-0/1YS-0)
- [Requirement and brand cross-check](docs/REQUIREMENT-AUDIT.md)
- [Optional approach walkthroughs](https://parthawe.github.io/coderabbit-change-stack-review/approaches.html)
- [Editable optional explorations in Paper](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-3-0)
- [Walkthrough source and exports](design/approach-walkthroughs/README.md)


## Run locally

Requires Python 3. From the repository root:

```sh
python3 -m http.server 4317 --directory dist
```

Open http://localhost:4317. The prototype loads its excerpt from JSON, so use an HTTP server. No package installation or build step is required.

## Review order

Start in Paper with “00 · Start here · Paper to prototype,” then inspect the editable main screen and supporting states. Follow the working prototype link to try those interactions. [Submission note](docs/SUBMISSION.txt) contains both links and the source limits. Paper is set to anyone with the link, but currently requires reviewers to sign in; the prototype is public without a login.

## Submission scope

The primary submission is the layer-based reviewing screen and its one-page rationale. The four product approaches are optional explorations beyond the original brief. See the [requirement and brand cross-check](docs/REQUIREMENT-AUDIT.md) for coverage and remaining gaps.

## Try the prototype

Select a layer, choose a summary to reveal its code, and toggle file progress with Mark viewed. J/K changes layers; Z toggles focus mode while preserving position. Shortcuts ignore typing. Submit review opens a decision dialog and ends with a simulated confirmation. Comments support a local draft. All review state stays in tab memory and resets on reload.

The Source notes & states control demonstrates loading, unavailable, and no-comments states. Direct previews also work at `?state=loading`, `?state=unavailable`, and `?state=empty`. Secondary tools open labeled previews.

## Scope and source

The assignment screenshots show coderabbitai/mono #22041 with two layers and three files. The supplied live link points to a different Formbricks PR and was rate limited during inspection. The prototype uses one visible UserListPaginated.tsx excerpt from the supplied screenshots. Missing files, hidden code, and original comment text are labeled as unavailable. Summary wording is condensed; line wrapping is normalized.

The previous visual explorations remain in the source archive and Paper. The public gallery now compares the four product approaches through twelve Paper screens. The product approaches in `docs/approaches.md` now have twelve editable Paper states and a comparison board in `design/approach-walkthroughs/`. These are static walkthroughs; the depicted controls are not connected browser prototypes. The working prototype is the baseline three-region review workspace.

This is an independent exercise. Review submission sends nothing to CodeRabbit or GitHub. No analytics or backend integration is included. The reference screenshot is included as assignment comparison material.

## Repository contents

| Path | Contents |
| --- | --- |
| `dist/` | Buildless HTML, CSS, JavaScript, excerpt JSON, fonts, rationale, comparison view, and approach comparison viewer |
| `docs/approaches.md` | Alternatives for how the product helps someone reach a review decision |
| `docs/DESIGN.md` | Baseline design values and behavior |
| `docs/verification.md` | Recorded browser checks and known limits |
| `design/` | Exported Paper styles, raw composition references, visual concept metadata, and twelve product approach walkthrough states |

Raw `*.paper-export.txt` files preserve Paper output for reference. They contain source-code text that is not escaped for JSX and are not runnable React components. Edit the Paper files or use the working source in `dist/`.

## Validation and reuse

The baseline was checked at 1440, 1280, and 1100 px, including keyboard navigation, focus restoration, summary highlights, progress, split diff, and simulated submission. The gallery was checked for image loading, filtering, enlarged views, Escape, focus restoration, and a narrow layout. See the verification record for details and limitations.

The current design uses CodeRabbit’s approved logo, orange/mauve palette, Geist, and Hack. Sources and font licenses are recorded in [the brand cross-check](docs/REQUIREMENT-AUDIT.md) and `dist/fonts/`. Earlier IBM Plex files remain for archived source references. Public repository visibility does not grant a separate license to CodeRabbit branding, assignment reference material, or third-party source excerpts.

![Primary reviewing screen](dist/prototype.png)
