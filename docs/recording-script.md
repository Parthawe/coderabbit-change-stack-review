# Three-minute recording script

Revision 6. Read the spoken text; leave the action cues outside the recording.

## 0:00-0:16 · Explain the assignment

Click: Show final M in Paper. Explain the task and the review problem you chose. Keep the cursor still.

> Hi, I’m Parth. The assignment was to make CodeRabbit’s review screen easier to use without losing what it can do. I focused on checking a summary against the code, then getting back without losing my place.

## 0:16-0:36 · Explain what got in the way

Click: Zoom into the annotated file controls, layer list and summary. Point once, then move the cursor away.

> The original already has summary jumps, layers and viewed status. What got in my way was keeping track of the file, the code behind each point, and where I’d been. Several rows of controls also compete with the code.

## 0:36-1:04 · Explain the layout tradeoff

Click: At 0:36 show Before at full width and pause. At 0:40 switch to After at the same size; start explaining the grouped actions after it appears. At 0:46 point to the persistent file list, then Focus Z. Do not put the screens side by side.

> I grouped the file actions and tucked the layer description away.

> I kept the file list visible because this review takes you across files. You can see where you are without reopening a menu. That takes some width from the code, so I kept Focus mode.

## 1:04-1:20 · Check the summary against code

Click: At 1:10 open Read full source summary. At 1:14 close it and select L57-65. Wait for the highlight. Say the last sentence at 1:17, after the correct range is visible.

> One summary covers 82 lines. I gave each of its six points a code link, and kept the full wording.

> This calls the access guard.

## 1:20-1:50 · Inspect the guard and return

Click: At 1:20 click Inspect guard. At 1:25 scroll to the access check and entitlement gate. At 1:33 click Return to access.ts. Pause on the restored highlight before speaking at 1:36.

> Here I can check whether the person has workspace access and whether the feature is enabled.

> Now I’m back where I was. I don’t have to scroll around to find that line again. This link is mapped manually, and you still need to read the surrounding code.

## 1:50-2:12 · Switch context

Click: At 1:56 click Entire layer. Let the grouped summaries appear before describing them. At 2:09 return to This file. No need to read the coverage counts aloud.

> This file keeps the explanation focused on what I’m reading.

> Entire layer shows the summaries grouped by file. So I can look across the related changes and decide what to check next.

## 2:12-2:35 · Show deliberate progress

Click: Point to the unchanged viewed count. At 2:20 click Mark viewed. At 2:26 click Undo while its toast is visible. Briefly point to disabled Submit review.

> Opening a file doesn’t mean I’ve reviewed it. Marking it viewed is a separate choice.

> The count and file indicator update together.

> And I can undo that. Submit stays disabled because this PR is merged.

## 2:35-3:00 · Explain what needs testing

Click: Hold on the final state. Show Paper, prototype and rationale at 2:57. Paper needs sign-in. Put clickable links beside your recording.

> The idea is to make checking the code and getting back less work. I haven’t tested it with developers yet. This sample covers seven of fifty-two diffs. I’d compare the same task on both screens and check what people understood, what they missed, and where they lost their place.
