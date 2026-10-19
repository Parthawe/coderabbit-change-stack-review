# Alternatives for the review experience

The goal is to help a developer understand a change, inspect evidence, and decide what still needs attention. The alternatives below change the unit of review and the role of CodeRabbit. They are product hypotheses, not implemented features or findings about the supplied PR.

The existing prototype organizes review around layers, files, and linked summaries. The four visual explorations rearrange that material. A different product approach needs to change how someone reaches a decision.

## 1. Review by intended behavior

Start with a concise statement of what should work after the change. Organize the review around behavioral expectations, each linked to the relevant layers, code, and any available tests. The reviewer records evidence or an open question against each expectation.

For the supplied excerpt, the visible cache and reset code could support a proposed question: “What should happen to selected users when the page or selection scope changes?” The intended answer must come from the author or verified requirements. Code alone does not establish that intent.

Flow: confirm intended behavior → inspect the relevant code → check available evidence → record unresolved expectations → submit a review.

This approach makes completion about understood behavior. It needs reliable intent and must leave unsupported expectations open. An expectation with a viewed excerpt is not automatically verified.

Small demonstration: one editable expectation, links to the cache and reset excerpts, and three evidence states: needs inspection, evidence recorded, open question. Test whether reviewers can explain the behavior and identify uncertainty without treating AI wording as a requirement.

## 2. Review through counterexamples

Start with situations that could challenge the implementation. CodeRabbit proposes questions, and the reviewer follows each question into the relevant code or test evidence. The reviewer can dismiss an irrelevant scenario with a reason or keep a question open.

An illustrative scenario for this excerpt is selecting users on one page, moving to another page, then resetting the selection. This is a proposed review scenario, not a reproduced bug, original comment, or executed test.

Flow: choose a scenario → state the expected result → inspect the implementation → attach available evidence → keep or resolve the question.

This approach helps someone investigate whether the change holds up under a specific sequence of actions. The main risk is plausible AI scenarios sounding like discovered defects. Every proposed scenario needs a clear status and source; unsupported answers stay unknown.

Small demonstration: one scenario with its steps, a source-linked inspection path, and an explicit “not executed” status. Test whether reviewers can distinguish a suggestion, a supported finding, and a test result.

## 3. Review from impact outward

Start by asking what depends on the changed behavior. Navigate from a changed layer through verified consumers, contracts, or affected surfaces. Inspect the highest-consequence unknown first, then expand into the implementation.

The supplied material establishes one layer dependency. It does not establish a complete consumer graph, production impact, or numerical risk score. A demonstration can show that known edge and disclose the missing coverage.

Flow: inspect known relationships → choose an impact question → follow it to code and available tests → review connected layers → record coverage gaps.

This approach gives reviewers a reason for their review order. It requires dependable dependency data and can mislead if a sparse graph appears complete. Unknown relationships must remain visible as a limitation.

Small demonstration: the verified two-layer relationship, an impact question, and the linked excerpt. Test whether reviewers understand what the map does and does not cover and can explain why they inspected one layer first.

## 4. Review as an author-to-reviewer handoff

Start with the author's explanation of why the change exists, what tradeoffs they made, and where they want scrutiny. CodeRabbit structures that explanation and links it to the patch. The reviewer builds a list of questions and decisions while reading.

This approach depends on author input. The supplied excerpt does not contain an author handoff, so a prototype must ask for it or show it as missing. It must not generate a handoff and attribute it to the author.

Flow: author records intent and concerns → CodeRabbit links those statements to code → reviewer inspects and asks questions → author addresses them → reviewer decides.

This could help with ambiguous or architectural changes where the patch cannot explain the tradeoffs by itself. It adds work for the author and can anchor the reviewer too strongly to the author's framing. Reviewers need a separate inspection pass and a way to challenge the handoff.

Small demonstration: an empty handoff with prompts for intent, tradeoffs, and requested scrutiny; the reviewer adds a local question linked to the excerpt. External communication stays outside the demonstration.

## Recommended next experiment

Develop approach 1, review by intended behavior, first. It gives the review a completion criterion while retaining layers and code as evidence. It also fits a focused demonstration without needing a complete impact graph or an author collaboration backend.

Use one author-confirmed expectation and the same supplied excerpt. Compare it with the existing baseline by asking reviewers to describe the intended behavior, locate supporting code, and name what remains unverified. Record confusion and unsupported conclusions before making claims about improvement.

Approach 2 is the stronger alternative if the assignment should emphasize investigation and critical thinking. Approach 3 needs more verified repository context. Approach 4 needs an author handoff to demonstrate its main value.
