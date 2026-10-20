# Final submission walkthrough

The final direction is the file-by-file review workspace previously labeled M. I kept it because a reviewer can check each explanation against the diff without learning a new reading order. The other four approaches remain archived explorations.

## Start with the original and the matched comparison

Paper 01 points to four source problems: several rows of controls above the diff, a weak connection between layer and file position, unclear file/layer summary counts, and progress signals that mean different things. These are the problems I chose to address; their effect on developer performance remains a hypothesis.

Paper 01b compares the same access.ts imports at lines 1–7, the complete workspace-tenant summary, file position and captured layer progress. All imports wrap so their tokens remain visible. Paper 02 then shows the next action: following its trimming statement to line 75, with the summary start at line 49 still reachable. The comparison checks content and hierarchy; it is not a measured speed result.

## What changed after the ten reviews

- The code keeps its green addition text and plus signs when a summary selects a range. The selected tab also has an underline and stronger type.
- Previous/Next and the searchable file position keep file switching direct. Each file retains code and context position. Opening a file leaves viewed status alone.
- The header separates real PR progress from the seven included demo files. File viewed, summary seen and the final review decision remain separate. Single-file and bulk viewed changes have Undo.
- Local notes have a visible per-file index and code markers. Changing from a note to the outline closes the old editor; an active note remains visible in ranges-only mode. Source comment totals stay separate.
- Full source-summary disclosures remain open when marked seen. Split has continuous panes; Wrap and Focus preserve the visible code line. Focus also condenses the heading.
- Keyboard navigation uses one roving line-comment action, F6 and Skip to context. The narrow context panel opens before focus moves into it; Escape works while typing. Retry shows a real loading state and gates unavailable actions.

Paper 07 shows recovery and keyboard behavior. Paper 09 records ten independent AI critiques of the same saved baseline and the decisions afterward. Those critiques helped find issues; developer usability testing is still outstanding.

## What still feels weak

The two access.ts summaries now offer manually mapped code anchors. A precise highlight still does not prove that someone understands the behavior. Split gives added code more width by compacting its empty Before panel, but modified-file patches are outside this fixture. Local notes add another state alongside source comments and progress. Seven added-file diffs cannot establish how this works across the whole 52-file PR or a changing review run.

Paper 08 now distinguishes the implemented anchors from the two remaining concepts: paired caller/guard inspection and a review-wide private question queue. The next anchor test asks developers to explain the trimming behavior, with the full function still available. The current note index stays within a file. The proposed queue spans the review. Each concept states its tradeoff. The anchor controls work; paired inspection and the queue remain unimplemented.

## What to send to CodeRabbit

Send these three links with the short draft in SUBMISSION.txt:

1. [Editable Paper](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-1-0/1YS-0): original diagnosis, matched comparison, final screen and supporting states.
2. [Public prototype](https://parthawe.github.io/coderabbit-change-stack-review/): working interactions using the same pinned Formbricks PR.
3. [One-page rationale](https://parthawe.github.io/coderabbit-change-stack-review/rationale.pdf): observations, decisions, tradeoffs, checks and next tests.

The public prototype links to the comparison and optional future sketches. The ten-review record and earlier explorations are supporting process material; they do not need separate attachments. The repository and downloadable source remain available if requested.

The snapshot is out of date at 23cdac2. Seven of 52 diffs are included, other content is labeled, and review submission is simulated. Paper may ask reviewers to sign in; the prototype and rationale are public. Nothing has been sent to CodeRabbit. Parth will send it Thursday.
