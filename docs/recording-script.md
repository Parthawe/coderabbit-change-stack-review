# Three-minute recording script

Revision 9. Matches the final three-minute rehearsal. Read the spoken text; keep the action cues outside your recording. The guide uses synthetic narration and edited browser captures.

## 0:00-0:16 · Set up the assignment

Click: Show Start here. Explain the review question; keep the cursor still.

> Hi, I'm Parth. The assignment was to make CodeRabbit's review screen easier to scan, while keeping layers. I focused on checking a summary, following the access guard, and getting back to the call.

## 0:16-0:34 · Show the source problem

Click: Show the original Unified capture full size. Point to its 49-130 summary range, then the access call.

> The original already jumps from a summary to code. Here, six points share one large range. I can reach the function, but I still need to work out which part supports each point.

## 0:34-0:56 · Make a fair comparison

Click: At 0:34 show M at the same size. Both captures start at line 54. Acknowledge that the original fits more code.

> Both screens use Unified, the same code and the same size. The original fits more code.

> Mine gives files and summary links more room. That's a tradeoff. I want to see whether that space helps me follow the check.

## 0:56-1:21 · Check a summary point

Click: At 0:56 open Try the access check. At 0:58 click Normalize tenant IDs to show a different target. At 1:04 open Read full source summary and scroll the context panel to its wording. At 1:14 close it and return the context panel to the top. At 1:16 click Require workspace access. Wait for L57-65 before speaking.

> Each point gets a smaller target. I can choose what to inspect.

> The full wording is still here. I can read it, then pick the point I want to check.

> This calls the access guard.

## 1:21-1:52 · Inspect the guard and return

Click: At 1:21 click Inspect guard in feedback-access.ts. Point to L27, then L38; both are visible without scrolling. At 1:36 click Return to access.ts. Pause before describing the restored selection.

> Here are the workspace check and the feature-enabled check. I can read both on arrival, then look at the surrounding code.

> Now I'm back at the same call. I chose a return action because keeping caller and guard side by side would squeeze both panes at this width.

## 1:52-2:10 · Show the space tradeoff

Click: At 1:55 click Focus Z. Hold the wider code view. At 2:04 click Exit focus. Show that the selection and reading position return.

> Keeping files and context visible also costs code space. Focus gives that space back.

> When I come back, I'm still at the same point.

## 2:10-2:34 · Keep progress deliberate

Click: Point to 0/7 viewed. At 2:20 click Mark viewed. At 2:26 click Undo before the toast disappears. Briefly point to disabled Submit review.

> Opening a file still marks nothing viewed. I kept that distinction.

> Mark viewed updates the count.

> Undo reverses it. Submit stays disabled because this PR is merged.

## 2:34-3:00 · Explain the limit and next test

Click: Hold the caller screen while explaining the test. At 2:57 show the closing links. Paper needs sign-in. Put clickable links beside your own recording.

> This sample covers seven of fifty-two diffs, with manually mapped links. I haven't tested it with developers. I'd ask them to explain the access check, then find something the summary might miss. If these links make people overlook more code, I'd change the approach.
