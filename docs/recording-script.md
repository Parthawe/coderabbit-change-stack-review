# Three-minute recording script

Revision 2. Read the spoken text; leave the action cues outside the recording.

## 0:00-0:16 · Start with M in Paper

Click: Hold on the final design. Keep the cursor still.

> Hi, I’m Parth. I kept the layer-based review model. I focused on keeping my place while checking a summary against the code. Here’s the problem I chose and how I worked through it.

## 0:16-0:36 · Show the source diagnosis

Click: Zoom into the annotated file controls, layer list and summary. Point once, then move the cursor away.

> The original already has summary jumps and viewed status. What I found difficult was keeping track of the file, whether I’m looking at this file or the whole layer, and the code behind each point. Several control rows also compete for space above the diff.

## 0:36-1:05 · Explain the layout tradeoff

Click: Show the original and redesigned controls at a readable scale. Then show the persistent file list and point to Focus Z. Keep the same imports in the comparison.

> I brought the frequent file actions together above the code and collapsed the layer description. That gives the code more room.

> I kept the file list visible because checking this change takes you across files. That costs some code width. I kept Focus mode available for when you need more room.

## 1:05-1:20 · Check the summary against code

Click: At 1:10 open Read full source summary. At 1:14 close it and select L57-65. Wait for the highlight. Say the last sentence at 1:17, after the correct range is visible.

> I kept the same six points, shortened them for scanning, and left the full wording available.

> This calls the access guard.

## 1:20-1:50 · Inspect the guard and return

Click: At 1:20 click Inspect guard. At 1:25 scroll to the access check and entitlement gate. At 1:33 click Return to access.ts. Pause on the restored highlight before speaking at 1:36.

> I can follow that call into the guard and read the access check and entitlement gate here.

> Now I’m back at the same selection and reading position, without finding my place again. I mapped this route manually. You still need to read the surrounding code.

## 1:50-2:12 · Switch context

Click: At 1:56 click Entire layer. Let the grouped summaries appear before describing them. At 2:09 return to This file. No need to read the coverage counts aloud.

> This file keeps the explanation close to what I’m reading.

> Entire layer groups the summaries by file, so I can look across the change and choose where to go next.

## 2:12-2:35 · Show deliberate progress

Click: Point to the unchanged viewed count. At 2:20 click Mark viewed. At 2:26 click Undo while its toast is visible. Briefly point to disabled Submit review.

> Opening a file doesn’t mark it viewed. I kept that as a deliberate action.

> The count and file indicator update together.

> I can undo that. Submit is disabled because this PR is merged.

## 2:35-3:00 · Explain what needs testing

Click: Hold on the final state. Show Paper, prototype and rationale at 2:55. Paper needs sign-in. Put clickable links beside your recording.

> I’d test whether developers can check the code and get back with less searching, while still understanding the change. I haven’t tested that with developers yet. This sample has seven of fifty-two diffs. Next I’d test modified files and links that go stale.
