# Five approaches to the same Formbricks review

[Editable Paper comparison](https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-3-0/1VE-0) · [Public comparison](https://parthawe.github.io/coderabbit-change-stack-review/approaches.html)

All five approaches use Formbricks #8650 at commit 23cdac2 and the file apps/web/app/api/v3/feedbackRecords/lib/access.ts. The common review question is whether feedback-record access stays within the permitted tenant. Four inspection states reproduce the same exact pinned lines 178–183. The main prototype includes the complete 194-line added file; select Enforce record ownership to inspect the same code.

The main workspace is the primary submission and has a working browser prototype. A–D are three-state editable Paper walkthroughs. Their pictured product controls remain illustrative; the browser viewer's stage, filter, image-dialog, and reasoning-disclosure controls work.

The primary rationale is beside the main screen on page 01. On page 02, each row has start, inspect, and decide states, followed by its rationale at the right. The overview includes the main workspace and all twelve exploration states. Original screenshot work remains in archive pages.

The review snapshot is out of date. No PR requests or tests were executed. Scenario expectations are proposed, sample author input is synthetic, and operation call-site coverage remains outside this fixture. A verified layer dependency does not establish a complete call graph or a current defect.

## M · Main workspace

Review unit: Layers, files, and linked explanations. Primary assignment submission · working browser prototype.

**Problems addressed**

I prioritized competing toolbars, separated layer/file navigation, unclear summary scope, and three progress signals. These affect where a reviewer looks, what a control acts on, and what completion means.

**Visual and interaction decisions**

I gave navigation, code, and context distinct regions. One file toolbar groups frequent actions. Linked highlights, J/K, Z with scroll preservation, reversible progress, filtered comments, and focus-restoring dialogs make the path predictable.

**Scanability**

The selected layer, filename, path, and explanation remain visible together. File and layer counts are explicit. The original already links summaries to code; matching selection makes that connection easier to follow.

**Reasoning**

The layout follows the task: locate the change, inspect evidence, understand its explanation, then record a judgment. Seen, viewed, and submitted remain distinct states.

**Tradeoff and evidence boundary**

Closest fit to the brief. Seven added-file diffs support the browser path; several secondary workflows remain previews. No measured speed gain or complete capability parity is claimed.

## A · Behavior-first

Review unit: A proposed intended outcome. Optional product exploration · three editable static states.

**Problems addressed**

I explored how a reviewer decides what the change should accomplish. Layers identify where code lives, but an explicit outcome gives the reviewer a question to evaluate. The tenant-isolation expectation is proposed and needs confirmation.

**Visual and interaction decisions**

The expectation stays beside its source links. Selecting tenant membership reveals the same pinned guard. Attaching a note records evidence while leaving the expectation open; missing call sites and execution remain visible.

**Scanability**

Tenant resolution and record ownership are grouped around one outcome. The reviewer can distinguish the visible guard from missing caller coverage. The expectation and evidence ledger are additions to the existing review model.

**Reasoning**

Connecting an outcome to supporting code could make the reason for each inspection clearer. Evidence recorded should never silently become behavior verified.

**Tradeoff and evidence boundary**

Broader than the main-screen brief. Needs reliable intent and developer testing; plausible AI wording must not become an assumed requirement.

## B · Counterexamples

Review unit: A proposed cross-tenant scenario. Optional product exploration · three editable static states.

**Problems addressed**

I explored how a reviewer challenges a change after reading its summary. The proposed sequence uses a permitted context with a record from another tenant, then inspects the ownership guard. It is not a discovered bug or an executed test.

**Visual and interaction decisions**

Scenario steps sit beside the relevant code. Selection distinguishes the allowed tenant set from the denial branch. The result separates supported observation, verified defect, dismissal, and an inconclusive investigation.

**Scanability**

The same access.ts guard answers a concrete question. Lines 179–182 show tenant-set selection and the forbidden branch. Caller coverage and runtime results remain explicit unknowns.

**Reasoning**

A specific scenario gives the reviewer a reason to inspect those lines. Separate suggestion, observation, and execution states help prevent unsupported findings.

**Tradeoff and evidence boundary**

Useful investigative direction, but scenario quality can create noise. No requests were executed and no vulnerability or pass/fail result is claimed.

## C · Impact-first

Review unit: A verified layer dependency. Optional product exploration · three editable static states.

**Problems addressed**

I explored how a reviewer chooses an inspection order across connected layers. The captured source says Feedback record operations depends on API contracts and access controls. That relationship gives a concrete starting point.

**Visual and interaction decisions**

The dependency, selected guard, and coverage gap stay together. The path ends with an explicit ledger of inspected source, missing operation callers, unknown consumers, and uncaptured execution evidence.

**Scanability**

The same guard is read in relation to layer 2. A reviewed guard and verified layer edge are kept separate from an unverified call graph. The map does not imply complete repository coverage.

**Reasoning**

Code can satisfy a local condition while callers fail to enforce it. Naming the boundary helps reviewers explain why they inspected it and what evidence they still need.

**Tradeoff and evidence boundary**

Fits existing impact capabilities, but this demonstration has one verified layer relationship. It adds no numerical risk score and does not establish every caller.

## D · Author handoff

Review unit: An explicitly sourced author account. Optional product exploration · three editable static states.

**Problems addressed**

I explored context the patch may not explain: intent, tradeoffs, and requested scrutiny. No author handoff was captured. The walkthrough starts empty and labels its later sample as synthetic demonstration input.

**Visual and interaction decisions**

Three prompts organize the handoff. Suggested links to tenant resolution and ownership sit beside the claims. The reviewer can inspect the same guard and prepare a source-linked question with an unsent status.

**Scanability**

Intent and proposed code links appear together, making each claim easier to inspect. Author input adds information beyond the original review screen, so the benefit depends on useful and accurate input.

**Reasoning**

The author can explain constraints behind the implementation. Independent inspection and questions remain available so their framing can be challenged.

**Tradeoff and evidence boundary**

Largest departure from the brief. Adds author effort and a collaboration workflow; sample input is not attributed to the PR author and no message is sent.
