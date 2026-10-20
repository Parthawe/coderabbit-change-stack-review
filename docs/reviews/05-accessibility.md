# Review 05: keyboard and accessibility

Reviewed commit `fc06a01`, `dist/index.html`, `dist/app.js`, `dist/styles.css`, `dist/live.css`, `dist/brand.css`, and the exported Paper main/focus screens. This is a read-only code and visual review. I did not run a screen reader or conduct user testing. The steps below are reproduction paths derived from the current DOM and handlers; the parent should confirm them in the browser after fixing.

## 1. P2: the diff puts a comment button in the tab sequence for every line

**Evidence:** `dist/app.js:51` emits an enabled `button.comment-entry` for each code line. `:56–58` renders the full file by default. `access.ts` has 194 lines. In `dist/index.html:32–35`, the focusable diff and all its child buttons precede the entire context panel. `dist/styles.css:5` makes comment buttons invisible until hover or focus, but opacity does not remove them from the tab sequence.

**Steps:** Start in access.ts with full-file mode. Tab from the file tools through the diff. Every line's Add local comment control receives focus before the Summaries tab. Selecting a summary and then Shift+Tab also sends the user through the comment controls in reverse.

**Consequence:** A keyboard user must traverse 194 line actions to move between the code and its explanations in the normal forward sequence. This undercuts the redesign's central code-to-summary relationship. Visible focus on each comment button helps recognition but does not solve the navigation cost.

**Bounded fix:** Make the line-comment affordances a composite with one active line in the tab sequence and arrow-key movement, or keep them out of the sequential order and provide a keyboard-accessible Add comment at line action. Add an explicit route between code and context. Do not remove keyboard comment entry entirely. Paper should document that navigation behavior beside the interaction flow.

**Confidence:** High. The number and placement of focusable buttons follow directly from the generated DOM.

## 2. P2: changing a layer or entering focus mode can discard keyboard focus

**Evidence:** `dist/app.js:26` replaces the complete layer list with `innerHTML`. `:32` calls `renderScreen()` during J/K navigation, and `:100–101` does so after clicking a different layer; neither restores focus to the replacement selected layer or a stable heading. Collapsing the current layer also rebuilds its focused button. `:71` enters focus mode by adding a class; `dist/styles.css:7` then hides both side panels. No focus handoff occurs if Z was pressed while a layer, summary, tab, or seen control had focus. `:115` allows Z on those buttons. `setLayer` also has no layer-change status announcement.

**Steps:** Focus a layer button and press J, or activate that layer with Enter. Then press Tab and observe where navigation resumes. Separately focus a summary button, press Z, and press Tab. In both paths the previous focused element is removed or hidden rather than deliberately handed off.

**Consequence:** The scroll position survives, but the keyboard reading position does not. A user can lose their place just as the workspace changes. This is a gap in the claim that focus mode preserves position, even though the code scroll behavior is correct.

**Bounded fix:** Preserve the identity of the keyboard trigger before rebuilding. For layer navigation, focus the newly selected layer and announce its title/position. For focus mode entered from a disappearing panel, move focus to the stable diff container or Exit focus control, retain the origin, and restore it when the panel returns if still relevant. Preserve existing focus if it is already in the code or a persistent control.

**Confidence:** High for the missing focus handoff; browser confirmation is needed for the exact fallback focus position on each platform.

## 3. P2: narrow-screen context opens visually without becoming a keyboard destination

**Evidence:** `dist/styles.css:9,33` turns context into a fixed overlay below 1280px. `dist/app.js:81` only changes classes and `aria-expanded`. It does not focus the panel's Close control, selected tab, or a programmatically focusable heading. From `#context-toggle`, the next forward Tab reaches the diff before context (`dist/index.html:30–35`). The Escape handler at `dist/app.js:115` runs only after `:114` returns early for input/textarea/select, so Escape in the local draft textarea does not close the overlay.

**Steps:** At 1100px, keyboard-activate Context. Press Tab: focus proceeds to the underlying diff rather than into the now-visible panel. Open a line comment, type a local draft, and press Escape: the panel stays open because the typing guard runs first.

**Consequence:** The overlay is available visually but awkward to reach by keyboard, and the close behavior changes depending on which control has focus. Without an explicit interaction contract, keyboard users can tab into content obscured by the panel.

**Bounded fix:** Decide whether this is a nonmodal side panel or a modal dialog. For the smaller scope, retain a nonmodal panel, move focus to its selected tab when opened from Context, provide a direct return/close route, and handle Escape before the typing shortcut guard while preserving the draft. If made modal, use native dialog semantics/containment instead of adding `aria-modal` to an unconstrained aside. Do not trap focus merely because the panel overlays the code.

**Confidence:** High for the missing handoff and textarea Escape path. No claim is made about actual screen reader output.

## Details worth preserving

The main dialogs use native `showModal()` and a close event that attempts focus restoration. Tabs have roving tab stops and Arrow/Home/End support. Typing fields suppress J/K/Z. Reduced motion removes animation and smooth scrolling in both CSS and JavaScript. Selection has a “Linked to code” label, viewed status has a check and text, and diff additions retain plus signs. The Paper main and focus exports are readable at their saved sizes. The 28px file-switch buttons are reasonable for the desktop scope; the 22px line-comment controls deserve attention if touch becomes a supported use case.

## Next research question

How do keyboard users want to move among a summary, its code range, and a local note without losing their place? Test the proposed focus handoffs with real keyboard and screen reader users before choosing between roving line navigation, a line-number comment action, and region shortcuts. A shortcut alone should not be the only usable route.
