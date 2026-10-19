# Assignment cross-check

Reviewed October 19, 2026 against the full three-page challenge, the exact assigned [review run](https://app.coderabbit.ai/change-stack/formbricks/formbricks/pull/8650/layers/1?toCommitId=23cdac2d791cf1a0f25d80d82bc02a1f3922793c&reviewRunId=c113c318-3aac-4dfd-8805-a01976d73f5b), and the resulting Paper and browser artifacts.

The primary submission remains one main layer-based reviewing screen. The newly accessible Formbricks evidence replaces the earlier screenshot fallback in the primary Paper page, prototype, comparison, and rationale. The four product approaches remain optional explorations using their original screenshot case.

| Challenge | Result | Boundary |
| --- | --- | --- |
| Understand the assigned review | Exact run initially loaded. Seven named layers, nine layer-1 files, summaries, filters, hidden resolved comments, and stale history were inspected. | Access became intermittent and rate limited; all 52 diffs were not inspected. |
| Diagnose 3–5 parsing problems | Four observations concern competing toolbars, separated navigation, summary scope/linking, and three progress signals. | Design hypotheses, without measured reviewer-speed claims. |
| Redesign one main reviewing screen | Native editable Paper main screen with supporting focus, decision, and recovery states. | Supporting frames explain the same screen, not a larger product redesign. |
| Retain capability | Navigation, file selection, diff layout, range selection, comment entry, viewed status, seen progress, and review decision have destinations. | Some secondary workflows are labeled previews; complete capability parity is not demonstrated. |
| Same information easier to scan | Both source and redesign use Formbricks #8650, layer 1, access.ts, and captured summary ranges. | Original screenshot starts at imports; redesign starts at line 49. Different visible positions are disclosed. |
| Interaction polish | Keyboard navigation, focus preservation, local progress, comment filtering, and dialog focus are implemented. | Prototype state is local; no remote writes. |
| Viewable design or prototype + one-pager/video | Public prototype and one-page rationale, plus editable Paper with process boards. | Paper currently prompts signed-out reviewers to sign in. |
| Focused 1–2 hour exercise | Main screen and four diagnoses remain the primary deliverable shape. | Later exploration and implementation extend the original exercise; no claim of completing all work in two hours. |

The challenge asks to inspect a 52-file, seven-layer reference. It does not ask for every file to be rebuilt. Seven verified added files provide a focused browser path; nine layer-1 paths and all seven layer names/counts preserve orientation. Missing patches and summaries are explicitly disclosed.

## Capability destinations

| Source capability | Design/prototype destination |
| --- | --- |
| Layers, files, J/K | Layer rail and nine-file picker; outside-fixture layers keep verified metadata. |
| PR search | Labeled Search control; the demonstrated search filters nine known paths. Full-PR search remains outside scope. |
| Sidebar resizing/collapse | Fixed 240px rail; Z focus mode provides collapse. Drag resizing is not implemented. |
| Overview | Labeled metadata preview. |
| Security blast radius | Disabled, matching repository unavailability in the source. |
| Security architecture impact | Labeled Architecture impact preview; uncaptured analysis is not fabricated. |
| History and Settings | Labeled previews. History preserves stale/out-of-date snapshot status. |
| Files/Diagram | File workspace retained. Diagram is described in Tools; source control was disabled. |
| Previous/next file | Nine-file position control opens direct selection; separate arrows are consolidated. |
| View settings, full file, collapse | Unified/Split, Tools full-file/ranges toggle, and collapse-current-diff. No unchanged code exists in the seven added files. |
| Mark layer files viewed | Tools marks only seven included diffs viewed; never all 52. |
| Semantic outline/diff | Captured range outline and full-file/range view; complete semantic-diff engine remains a preview. |
| Copy path, file/line comments | Path shown; per-line local drafts work. Dedicated path-copy and file-level thread workflows are not implemented. |
| Layer context, complexity, follow code | File-scoped context with explicit layer counts. All/High/Medium filter captured summaries; Low and automatic follow-code are labeled previews. |
| Summary seen progress | Explicit Mark seen, independent of file viewed and final decision. |
| Resolved/outdated filters | Captured resolved thread starts hidden. Show resolved works; full outdated-filter workflow remains outside fixture. |
| Final review | Separate decision dialog with explicitly simulated confirmation. |

## Brand and scope

Brand matching was not graded in the challenge; it was added at the user's request. The design uses the intact official orange logo, CR Orange `#FF570A`, light mauve neutrals, Geist, and Hack from the [official brand reference](https://www.coderabbit.ai/brand). Small links use dark orange `#582D1D`; diff red/green remains semantic. No claim of full brand certification or usability validation is made.

The optional Behavior-first, Counterexamples, Impact-first, and Author handoff concepts introduce new workflows. They stay outside the recommended primary submission. The main screen, Paper process, and rationale are what reviewers should assess first.
