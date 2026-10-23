# Three-minute recording script

Revision 8. Read the spoken text; leave the action cues outside the recording.

## 0:00-0:16 · Explain the assignment

Click: Show final M in Paper. Explain the task and the review problem you chose. Keep the cursor still.

> Hi, I'm Parth. I kept Change Stack's layer model and focused on one review question: can I check what the summary says, inspect the access guard, and get back to the call?

## 0:16-0:36 · Explain the three observed issues

Click: Point to the controls, empty Before pane and shared summary range. Name visible issues; do not imply a user study.

> The original already has summary jumps and viewed status. I picked three layout issues: several rows of controls, an empty Before pane in an added file, and six summary points sharing one large code range.

## 0:36-1:04 · Explain the layout tradeoff

Click: At 0:36 show Before at full width and pause. At 0:40 switch to After at the same size; acknowledge the different display modes after it appears. At 0:46 show Original · Unified. At 0:53 return to final M and point to grouped controls and summary links. Do not put the screens side by side.

> Both show the same content, but different display modes.

> Switching the original to Unified already fixes the empty pane. So extra code width isn't my main argument. I'm grouping the controls and linking each summary point to the code behind it.

## 1:04-1:20 · Check the summary against code

Click: At 1:10 open Read full source summary. At 1:14 close it and select L57-65. Wait for the highlight. Say the last sentence at 1:17, after the correct range is visible.

> The full wording is still here. I can read it, then pick the point I want to check.

> This calls the access guard.

## 1:20-1:50 · Inspect the guard and return

Click: At 1:20 click Inspect guard. At 1:25 scroll to the access check and entitlement gate. At 1:33 click Return to access.ts. Pause on the restored highlight before speaking at 1:36.

> Here I can read the workspace check and the feature-enabled check. The surrounding code still matters.

> Now I'm back at the same call. I chose a return action because keeping caller and guard side by side would squeeze both code panes at this width.

## 1:50-2:12 · Switch context

Click: At 1:56 click Entire layer. Let the grouped summaries appear before describing them. At 2:09 return to This file. No need to read the coverage counts aloud.

> Keeping files and context visible also costs code width.

> Focus gives that space back. This file and Entire layer make the context clear, so I can choose what to inspect next.

## 2:12-2:35 · Show deliberate progress

Click: Point to the unchanged viewed count. At 2:20 click Mark viewed. At 2:26 click Undo while its toast is visible. Briefly point to disabled Submit review.

> Opening a file still marks nothing viewed. I kept that distinction.

> Mark viewed updates the count.

> I added Undo. Submit stays disabled because this PR is merged.

## 2:35-3:00 · Explain what needs testing

Click: Hold on the final state. Show Paper, prototype and rationale at 2:57. Paper needs sign-in. Put clickable links beside your recording.

> This sample covers seven of fifty-two diffs, with manually mapped links. I haven't tested it with developers. I'd ask them to explain the access check, then find something the summary might miss. If these links make people overlook more code, I'd change the approach.
