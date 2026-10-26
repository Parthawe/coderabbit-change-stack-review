"use strict";
// A static, pinned review fixture. No requests are sent to CodeRabbit or GitHub.
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
let data,
  files = new Map(),
  restoreFocus,
  dragging = false,
  scrollFrame = 0,
  toastTimer,
  lastReading = null,
  streamWidth = 0;
const state = {
  file: "0",
  mode: "split",
  wrap: true,
  nav: "layers",
  scope: "file",
  tab: "summaries",
  focus: false,
  full: new Set(),
  viewed: new Set(),
  seen: new Set(),
  range: null,
  linked: null,
  composer: null,
  notes: [],
  drafts: {},
  returns: [],
  overviewReturn: null,
  expanded: new Set(),
  expandedLayers: new Set(),
  severityFilter: "All",
};
const anchors = {
  "0-49": [
    ["Require workspace access", 57, 65],
    ["Load feedback directories", 70, 70],
    ["Normalize tenant IDs", 75, 75],
    ["Check dataset membership", 77, 97],
    ["Reject missing or ambiguous datasets", 99, 120],
    ["Return tenant context", 122, 129],
  ],
  "0-156": [
    ["Handle Hub failures", 164, 175],
    ["Check permitted tenant", 179, 183],
    ["Return the permitted record", 185, 185],
  ],
};
const current = () => files.get(state.file),
  stream = () => $("#stream");
const lineLabel = (a, b) => (a === b ? `L${a}` : `L${a}–${b}`);
const storageKey = () => `continuous-review:${data.source.commit}`;
function persist() {
  try {
    localStorage.setItem(
      storageKey(),
      JSON.stringify({
        viewed: [...state.viewed],
        seen: [...state.seen],
        notes: state.notes,
        drafts: state.drafts,
        composer: state.composer,
      }),
    );
  } catch {
    announce("Browser storage unavailable. Your work remains in this tab.");
  }
}
function announce(s) {
  $("#interaction-status").textContent = s;
}
function toast(s, undo) {
  clearTimeout(toastTimer);
  const el = $("#toast");
  el.innerHTML = `<span>${esc(s)}</span>${undo ? '<button type="button">Undo</button>' : ""}`;
  el.hidden = false;
  if (undo)
    el.querySelector("button").onclick = () => {
      undo();
      el.hidden = true;
    };
  toastTimer = setTimeout(() => (el.hidden = true), 8000);
}
function dialog(title, html) {
  restoreFocus = document.activeElement;
  $("#dialog-title").textContent = title;
  $("#dialog-content").innerHTML = html;
  if (!$("#dialog").open) $("#dialog").showModal();
}
$("#dialog").addEventListener(
  "close",
  () =>
    restoreFocus?.isConnected && restoreFocus.focus({ preventScroll: true }),
);
function pending() {
  dialog("Source content unavailable", "<p>This source content is not captured in the prototype. All 52 verified file diffs remain available in the review.</p>");
}

function about() {
  dialog(
    "About this prototype",
    `<p>Formbricks #8650 · commit <code>${esc(data.source.commit.slice(0, 12))}</code>. This merged, out-of-date review is retained as the assignment’s source.</p><p>52 GitHub patches, their before/after blobs and every changed line have been checked: +5,722 / −127. The comparison base is <code>${data.comparison.base.slice(0, 12)}</code>. Matching totals do not prove CodeRabbit uses the same semantic ranges.</p><p>All 52 layer assignments and guided file order were checked in the live pinned review on October 26. Source content keys confirm the comparison base; 24 exported source patches match directly, and all 52 GitHub patches reconstruct the before/after content at that base. Live Split wrapping and scrolling were checked.</p><p>The original scrolls continuously within a layer. This version continues across layers. Modified files use equal Before/After panes; added files use the full width, as in the source. Semantic outlines, blame and other secondary tools remain previews.</p><p>Layer 1 has 37 source summaries; 14 excerpts are captured across nine files. Access.ts has 3 source messages: one resolved finding and two replies whose bodies were not captured. Other missing thread bodies are labelled, never counted as zero.</p><p>The source overview records 7 historical findings: 2 Major, 2 Minor and 3 Trivial. Layer 1 uses Nitpick rather than Trivial; those labels stay separate. Access.ts Major and errors.ts Minor are explicitly resolved in the captured source. Other individual statuses are not inferred.</p><p>Dark colors are derived from the source’s mauve palette, not verified product dark tokens.</p><p>Statement links are manually mapped. Notes, drafts, Seen and Viewed stay in this browser. Nothing is sent. Secondary workflows are previews. Paper needs sign-in.</p><p>The developer feedback came from exploration, not a completed comparison task. No review-time improvement has been measured.</p>`,
  );
}
function delta(f) {
  return `<span class="add-stat">+${f.added.toLocaleString()}</span>${f.deleted ? `<span class="del-stat">−${f.deleted.toLocaleString()}</span>` : ""}`;
}
function navFile(f) {
  return `<button class="nav-file" data-file="${f.id}" aria-current="${f.id === state.file ? "location" : "false"}" title="${esc(f.path)}"><span class="file-mark ${state.viewed.has(f.id) ? "done" : ""}">${state.viewed.has(f.id) ? "✓" : "▧"}</span><span class="file-label">${esc(f.name)}${state.nav === "files" || f.layerId === null ? `<small>${esc(f.path.slice(0, f.path.lastIndexOf("/")))}</small>` : ""}</span></button>`;
}
const findingIcon =
  '<svg class="signal-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="m8 1 7 7-7 7-7-7Z" fill="none" stroke="currentColor"/><path d="M8 4v5m0 2v1" stroke="currentColor"/></svg>';
function signalLabels(signals) {
  if (signals?.total == null && !signals?.capturedFindingCount)
    return '<span class="muted">Findings not captured</span>';
  if (signals.total === 0) return '<span class="muted">0 recorded</span>';
  return Object.entries(signals.severityCounts || {})
    .map(
      ([label, n]) =>
        `<span class="signal signal-${label.toLowerCase()}">${findingIcon}${n} ${esc(label)}</span>`,
    )
    .join(" ");
}
function renderNav() {
  const el = $("#navigation-list"),
    top = el.scrollTop;
  el.innerHTML =
    state.nav === "files"
      ? data.files.map(navFile).join("")
      : data.layers
          .map((l, i) => {
            const open = state.expandedLayers.has(i);
            return `<section class="nav-layer" data-nav-layer="${i}" ${current()?.layerId === i ? 'data-active="true"' : ""}><div class="layer-row"><button class="layer-disclosure" data-disclose-layer="${i}" aria-expanded="${open}" aria-controls="layer-files-${i}" aria-label="${open ? "Collapse" : "Expand"} files in layer ${i + 1}">${open ? "⌄" : "›"}</button><button class="layer-destination" data-layer="${i}"><span class="layer-number">${i + 1}</span><span class="layer-copy"><strong>${esc(l.name)}</strong><span class="layer-metrics">${l.files} files ${delta(l)}</span><span class="layer-signals" aria-label="Recorded findings: ${esc(Object.entries(l.reviewSignals.severityCounts).map(([label, n]) => `${n} ${label}`).join(", ") || "0 recorded")}">${signalLabels(l.reviewSignals)}</span></span></button></div><div id="layer-files-${i}" ${open ? "" : "hidden"}>${
              data.files.some((f) => f.layerId === i)
                ? data.files
                    .filter((f) => f.layerId === i)
                    .map(navFile)
                    .join("")
                : '<button class="text-action" data-action="pending">Assignments pending verification</button>'
            }</div></section>`;
          })
          .join("");
  el.scrollTop = top;
  $$("[data-nav-mode]").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.navMode === state.nav)),
  );
  progress();
}
function progress() {
  const n = state.viewed.size;
  $("#progress").textContent = `Viewed ${n} of 52 files`;
  $("#file-progress").value = n;
  $("#viewed").textContent = state.viewed.has(state.file)
    ? "Viewed ✓"
    : "Mark viewed";
  $("#viewed").setAttribute(
    "aria-pressed",
    String(state.viewed.has(state.file)),
  );
  $$(".stream-file-header [data-view]").forEach(
    (b) =>
      (b.textContent = state.viewed.has(b.dataset.view)
        ? "Viewed ✓"
        : "Mark viewed"),
  );
}
function setActive(id) {
  if (!files.has(id)) return;
  const changed = state.file !== id;
  state.file = id;
  const f = current();
  $("#layer-title").textContent =
    f.layerId === null
      ? "Layer assignment pending"
      : `${f.layerId + 1} · ${data.layers[f.layerId].name}`;
  $("#file-path").textContent = f.path.slice(0, f.path.lastIndexOf("/") + 1);
  $("#file-path").title = f.path;
  $("#filename").textContent = f.path.split("/").pop();
  $("#file-delta").innerHTML = delta(f);
  $("#context-filename").textContent = f.name;
  $$(".nav-file").forEach((b) =>
    b.setAttribute(
      "aria-current",
      String(b.dataset.file === id ? "location" : "false"),
    ),
  );
  $$("[data-nav-layer]").forEach(
    (b) =>
      (b.dataset.active = String(Number(b.dataset.navLayer) === f.layerId)),
  );
  progress();
  if (changed) {
    enableGutters();
    renderContext();
    const item = $(`.nav-file[data-file="${id}"]`),
      list = $("#navigation-list");
    if (item && item.getClientRects().length) {
      const a = item.getBoundingClientRect(),
        b = list.getBoundingClientRect();
      if (a.bottom > b.bottom) list.scrollTop += a.bottom - b.bottom;
      else if (a.top < b.top) list.scrollTop -= b.top - a.top;
    }
  }
}
function syntax(text) {
  const token =
    /(\/\/.*$|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b(?:const|let|if|return|import|from|export|async|await|function|type|throw|new|else)\b)/g;
  let result = "",
    last = 0;
  for (const m of text.matchAll(token)) {
    result += esc(text.slice(last, m.index));
    const t = m[0],
      cls = t.startsWith("//")
        ? "code-comment"
        : /^['"]/.test(t)
          ? "code-string"
          : "code-keyword";
    result += `<span class="${cls}">${esc(t)}</span>`;
    last = m.index + t.length;
  }
  return result + esc(text.slice(last));
}
function cell(f, side, n, text, kind) {
  if (n == null)
    return '<div class="diff-cell blank" aria-hidden="true"></div>';
  return `<div class="diff-cell ${kind === "+" ? "add" : kind === "-" ? "del" : ""}" data-file="${f.id}" data-side="${side}" data-line="${n}"><button class="gutter" tabindex="-1" data-gutter="true" data-file="${f.id}" data-side="${side}" data-line="${n}" aria-label="Select ${side} line ${n} in ${esc(f.path)}">${n}</button><span class="code-sign" aria-hidden="true">${kind === " " ? "" : kind}</span><code>${syntax(text) || " "}</code></div>`;
}
function pairedRows(f, rows) {
  let html = "";
  for (let i = 0; i < rows.length; ) {
    const r = rows[i];
    if (state.mode === "unified" || f.status === "added" || f.status === "removed") {
      const side = r.kind === "-" ? "before" : "after",
        n = r[side];
      html += `<div class="diff-row">${cell(f, side, n, r.text, r.kind)}</div>`;
      i++;
      continue;
    }
    if (r.kind === " ") {
      html += `<div class="diff-row">${cell(f, "before", r.before, r.text, " ")}${cell(f, "after", r.after, r.text, " ")}</div>`;
      i++;
      continue;
    }
    const del = [],
      add = [];
    while (i < rows.length && rows[i].kind !== " ") {
      const x = rows[i++];
      (x.kind === "-" ? del : add).push(x);
    }
    for (let j = 0; j < Math.max(del.length, add.length); j++)
      html += `<div class="diff-row">${cell(f, "before", del[j]?.before, del[j]?.text, "-")}${cell(f, "after", add[j]?.after, add[j]?.text, "+")}</div>`;
  }
  return html;
}
function fileRows(f) {
  let html = "",
    bi = 1,
    ai = 1;
  function gap(b, a, count, key) {
    if (count <= 0) return "";
    if (!state.full.has(f.id) && !state.full.has(key))
      return `<button class="gap-button" data-expand="${key}" data-file="${f.id}">↕ Show ${count} unchanged lines · ${lineLabel(a, a + count - 1)}</button>`;
    return pairedRows(
      f,
      Array.from({ length: count }, (_, i) => ({
        kind: " ",
        before: b + i,
        after: a + i,
        text: f.after[a + i - 1],
      })),
    );
  }
  for (let h = 0; h < f.hunks.length; h++) {
    const x = f.hunks[h],
      m = x.header.match(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
    const bs = Number(m[1]),
      as = Number(m[3]);
    html += gap(
      bi,
      ai,
      Math.min(Math.max(0, bs - bi), Math.max(0, as - ai)),
      `${f.id}:${h}`,
    );
    html +=
      `<div class="hunk-label">${esc(x.header)}</div>` + pairedRows(f, x.rows);
    bi = bs + Number(m[2] ?? 1);
    ai = as + Number(m[4] ?? 1);
  }
  html += gap(
    bi,
    ai,
    Math.min(f.before.length - bi + 1, f.after.length - ai + 1),
    `${f.id}:end`,
  );
  return html || '<p class="empty-diff">No text diff available.</p>';
}
function fileHTML(f) {
  return `<section class="diff-file ${f.status === "added" || f.status === "removed" ? "single-sided" : ""}" id="file-${f.id}" style="--no-wrap-width:${Math.max(1000, ...f.before.concat(f.after).map((t) => t.length * 8 + 80))}px" data-file-section="${f.id}" aria-label="${esc(f.path)}"><header class="stream-file-header"><span aria-hidden="true">▧</span><span class="path" title="${esc(f.path)}">${esc(f.path)}</span>${delta(f)}</header>${f.status === "added" || f.status === "removed" ? `<div class="side-labels"><span>${f.status === "added" ? "After · added file" : "Before · deleted file"}</span></div>` : state.mode === "split" ? `<div class="side-labels"><span>Before</span><span>After</span></div>` : '<div class="side-labels"><span>Unified · Before / After</span></div>'}<div class="diff-rows">${fileRows(f)}</div></section>`;
}
function renderStream() {
  stream().classList.toggle("unified", state.mode === "unified");
  stream().classList.toggle("no-wrap", !state.wrap);
  let last;
  stream().innerHTML = data.files
    .map((f) => {
      let h = "";
      if (f.layerId !== last) {
        last = f.layerId;
        h = `<div class="stream-layer" id="layer-${last === null ? "pending" : last}"><strong>${last === null ? "Layer assignment pending" : `${last + 1} · ${esc(data.layers[last].name)}`}</strong>${last === null ? "<p>These pinned diffs are available, but their source layer order is not yet verified.</p>" : ""}</div>`;
      }
      return h + fileHTML(f);
    })
    .join("");
  enableGutters();
  paintRanges();
}
function enableGutters() {
  stream().querySelectorAll('.gutter[tabindex="0"]').forEach((b) => {
    b.tabIndex = -1;
  });
  const active = stream().querySelector(
    `[data-file-section="${state.file}"] .gutter`,
  );
  if (active) active.tabIndex = 0;
}
function readingPosition() {
  const box = stream().getBoundingClientRect(),
    elements = document.elementsFromPoint(
      box.left +
        Math.max(
          60,
          box.width * (state.preferredSide === "before" ? 0.2 : 0.7),
        ),
      box.top + 65,
    );
  let c = elements
    .map((e) => e.closest?.(".diff-cell[data-line]"))
    .find(Boolean);
  if (!c)
    c = [
      ...stream().querySelectorAll(
        `[data-file-section="${state.file}"] .diff-cell[data-line]`,
      ),
    ].find((e) => e.getBoundingClientRect().bottom > box.top + 40);
  return c
    ? {
        file: c.dataset.file,
        side: c.dataset.side,
        line: Number(c.dataset.line),
        offset: c.getBoundingClientRect().top - box.top,
        left: stream().scrollLeft,
      }
    : { file: state.file, side: "after", line: 1, offset: 72, left: 0 };
}
function lineNode(p) {
  return (
    stream().querySelector(
      `.diff-cell[data-file="${p.file}"][data-side="${p.side}"][data-line="${p.line}"]`,
    ) ||
    stream().querySelector(
      `.diff-cell[data-file="${p.file}"][data-line="${p.line}"]`,
    )
  );
}
function restorePosition(p) {
  if (!p || !files.has(p.file)) return;
  let el = lineNode(p);
  if (!el) {
    state.full.add(p.file);
    const f = files.get(p.file);
    $(`#file-${f.id} .diff-rows`).innerHTML = fileRows(f);
    el = lineNode(p);
  }
  if (!el) el = $(`#file-${p.file}`);
  stream().scrollTop +=
    el.getBoundingClientRect().top -
    stream().getBoundingClientRect().top -
    (p.offset ?? 72);
  stream().scrollLeft = p.left || 0;
  state.preferredSide = p.side;
  setActive(p.file);
  enableGutters();
  paintRanges();
  lastReading = readingPosition();
}
function jump(file, side = "after", line = null, end = line) {
  if (document.body.classList.contains("overview-mode")) showReview(false);
  restorePosition({ file, side, line: line ?? 1, offset: 72 });
  state.linked = line === null ? null : { file, side, start: line, end };
  paintRanges();
  announce(line === null ? files.get(file).name :
    `${files.get(file).name}, ${side}, ${lineLabel(line, end)}`);
}
function trackActive() {
  scrollFrame = 0;
  const y = stream().getBoundingClientRect().top + 45;
  let active;
  for (const s of stream().querySelectorAll("[data-file-section]")) {
    if (s.getBoundingClientRect().top <= y) active = s;
    else break;
  }
  if (active) setActive(active.dataset.fileSection);
  lastReading = readingPosition();
}
stream().addEventListener(
  "scroll",
  () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(trackActive);
  },
  { passive: true },
);
function paintRanges() {
  stream()
    .querySelectorAll(".selected,.linked")
    .forEach((x) => x.classList.remove("selected", "linked"));
  for (const [r, cls] of [
    [state.linked, "linked"],
    [state.range, "selected"],
  ])
    if (r)
      stream()
        .querySelectorAll(
          `.diff-cell[data-file="${r.file}"][data-side="${r.side}"]`,
        )
        .forEach((el) => {
          const n = +el.dataset.line;
          if (n >= r.start && n <= r.end) el.classList.add(cls);
        });
  $("#selection-bar").hidden = !state.range;
  if (state.range) {
    const r = state.range;
    $("#selection-label").textContent =
      `${files.get(r.file).name} · ${r.side === "before" ? "Before" : "After"} · ${lineLabel(r.start, r.end)}`;
  }
}
function selectGutter(b, extend = false) {
  const file = b.dataset.file,
    side = b.dataset.side,
    n = Number(b.dataset.line),
    prior = state.range;
  const same = prior && prior.file === file && prior.side === side;
  if (extend && prior && !same) {
    announce("Select a range within the same file and diff side.");
    return;
  }
  const anchor = extend && same ? prior.anchor : n;
  state.preferredSide = side;
  state.range = {
    file,
    side,
    start: Math.min(anchor, n),
    end: Math.max(anchor, n),
    anchor,
  };
  paintRanges();
}
stream().addEventListener("pointerdown", (e) => {
  const b = e.target.closest("[data-gutter]");
  if (!b || e.button !== 0) return;
  selectGutter(b, e.shiftKey);
  dragging = true;
});
stream().addEventListener("pointerover", (e) => {
  const b = e.target.closest("[data-gutter]");
  if (dragging && b) selectGutter(b, true);
});
window.addEventListener("pointerup", () => (dragging = false));
stream().addEventListener("keydown", (e) => {
  const b = e.target.closest("[data-gutter]");
  if (!b) return;
  const f = files.get(b.dataset.file),
    side = b.dataset.side,
    n = +b.dataset.line;
  if (["ArrowUp", "ArrowDown"].includes(e.key)) {
    e.preventDefault();
    const next = Math.max(
      1,
      Math.min(f[side].length, n + (e.key === "ArrowDown" ? 1 : -1)),
    );
    if (e.shiftKey && !state.range) selectGutter(b);
    let target = stream().querySelector(
      `[data-gutter][data-file="${f.id}"][data-side="${side}"][data-line="${next}"]`,
    );
    if (!target) {
      const p = readingPosition();
      state.full.add(f.id);
      $(`#file-${f.id} .diff-rows`).innerHTML = fileRows(f);
      restorePosition(p);
      target = stream().querySelector(
        `[data-gutter][data-file="${f.id}"][data-side="${side}"][data-line="${next}"]`,
      );
    }
    if (target) {
      b.tabIndex = -1;
      target.tabIndex = 0;
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: "nearest" });
      if (e.shiftKey) selectGutter(target, true);
    }
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (!state.range) selectGutter(b);
    openComposer();
  }
});
function contextFiles() {
  return state.scope === "layer" && current().layerId !== null
    ? data.files.filter((f) => f.layerId === current().layerId)
    : [current()];
}
function summaryHTML(s, f) {
  const links = anchors[s.id] || [];
  return `<details class="summary-item" data-summary="${s.id}" ${state.expanded.has(s.id) ? "open" : ""}><summary><small>Lines ${esc(s.range)} · ${esc(s.complexity)} complexity</small><strong>${esc(s.title)}</strong></summary><div class="summary-body">${esc(s.body)}</div>${links.map((a, i) => `<button class="statement-link" data-link-file="${f.id}" data-start="${a[1]}" data-end="${a[2]}"><span>${esc(a[0])}</span><span>${lineLabel(a[1], a[2])}</span></button>${s.id === "0-49" && i === 0 ? '<button class="text-action" data-action="inspect">Inspect guard in feedback-access.ts</button>' : ""}`).join("")}${s.sourceDetails ? `<details class="summary-wording"><summary>Full source wording</summary><p>${esc(s.sourceDetails.intro)}</p><ul>${s.sourceDetails.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></details>` : ""}<button class="text-action" data-link-file="${f.id}" data-start="${s.start}" data-end="${s.end}">Whole range · L${esc(s.range)}</button><br><button class="text-action" data-seen="${s.id}" aria-pressed="${state.seen.has(s.id)}">${state.seen.has(s.id) ? "Seen · undo" : "Mark seen"}</button></details>`;
}
function noteKey(r) {
  return `${data.source.commit}:${r.file}:${r.side}:${r.start}:${r.end}`;
}
function composerHTML() {
  const r = state.composer;
  if (!r) return "";
  return `<div class="note-composer"><strong>Local note · ${esc(files.get(r.file).name)}</strong><p class="muted">${esc(files.get(r.file).path)}<br>${r.side === "before" ? "Before" : "After"} · ${lineLabel(r.start, r.end)}</p><button class="text-action" data-action="return-composer">Show selected code</button><textarea id="note-body" aria-label="Local note for ${esc(files.get(r.file).name)} ${lineLabel(r.start, r.end)}" placeholder="Write a note for this range…">${esc(state.drafts[noteKey(r)] || "")}</textarea><div class="actions"><button data-action="save-note">Save local note</button><button data-action="cancel-note">Cancel</button></div><p class="muted">Saved only in this browser. Nothing is sent.</p></div>`;
}
function commentsHTML(f) {
  let h = "";
  if (f.id === data.thread.file) {
    const t = data.thread;
    h = `<p class="muted">3 messages · 1 captured thread</p><details class="thread-card"><summary><span class="thread-meta"><span>${esc(t.author)}</span><span class="severity">${esc(t.severity)}</span><span class="resolved">${esc(t.status)}</span></span>${esc(t.title)}</summary><p class="muted">${esc(t.category)} · ${esc(t.effort)}</p><p>${esc(t.body)}</p><button class="text-action" data-link-file="${f.id}" data-start="${t.start}" data-end="${t.end}">${esc(f.name)} · ${lineLabel(t.start, t.end)}</button><p class="muted">2 replies · reply bodies weren’t captured.</p></details>`;
  } else if (f.comments === 0) {
    h = '<p class="muted">No source comments on this file.</p>';
  } else {
    h = `<p class="muted">${f.comments == null ? "Source message count unavailable." : `${f.comments} source messages.`} Thread content wasn’t captured. This does not mean there are no findings.</p>`;
  }
  const notes = state.notes.filter((n) => n.file === f.id);
  h += `<h3>Local notes</h3>${notes.length ? notes.map((n) => `<div class="local-note"><button class="text-action" data-link-file="${n.file}" data-side="${n.side}" data-start="${n.start}" data-end="${n.end}">${n.side === "before" ? "Before" : "After"} · ${lineLabel(n.start, n.end)}</button><p>${esc(n.body)}</p><button class="text-action" data-delete-note="${n.id}">Delete note</button></div>`).join("") : '<p class="muted">Select line numbers, then choose Comment on range. Shift-click or Shift + arrow keys extends a selection.</p>'}`;
  return h;
}
function contextIntro(f) {
  const explanation =
    f.reviewExplanation?.text ||
    (f.summaries.length
      ? f.summaries[0].body
      : "The pinned diff is available. An explanation for this file was not captured.");
  const sig = f.reviewSignals;
  let preview =
    f.id === data.thread.file
      ? `<div class="finding-preview"><span class="signal signal-major">${findingIcon}Major</span> · <span>Resolved</span><p>${esc(data.thread.title)}</p><small>Review history · 3 messages</small><button class="text-action" data-action="captured-thread">Open captured thread →</button></div>`
      : `<div class="finding-preview">${signalLabels(sig)}${sig?.statusCoverage?.knownResolvedFindings ? "<span> · Resolved</span>" : ""}${sig?.capturedFindingCount ? "<small>Captured finding · total coverage incomplete</small>" : ""}<p class="muted">${f.comments === 0 ? "No source comments on this file." : "Thread bodies are not included in this prototype."}</p></div>`;
  return `<div class="file-explanation"><strong>What this file does</strong><p>${esc(explanation)}</p>${f.reviewExplanation ? '<small class="muted">Curated from the captured code.</small>' : ""}</div>${preview}`;
}
function renderContext() {
  if (!data) return;
  const oldComposer = state.composer ? $(".note-composer") : null,
    focusedComposer = oldComposer?.contains(document.activeElement),
    oldSelection =
      focusedComposer && $("#note-body")
        ? [$("#note-body").selectionStart, $("#note-body").selectionEnd]
        : null;
  const fs = contextFiles(),
    f = current();
  $$("[data-scope]").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.scope === state.scope)),
  );
  for (const name of ["summaries", "comments"]) {
    $(`#${name}-tab`).setAttribute("aria-selected", String(name === state.tab));
    $(`#${name}-tab`).tabIndex = name === state.tab ? 0 : -1;
    $(`#${name}-panel`).hidden = name !== state.tab;
  }
  $("#summary-browser").hidden = state.tab !== "summaries";
  const messageCount =
    state.scope === "layer" && f.layerId !== null
      ? data.layers[f.layerId].comments
      : f.comments;
  $("#comments-tab").textContent =
    `Comments${messageCount == null ? "" : ` · ${messageCount} messages`}`;
  $("#summary-coverage").textContent = fs.every(
    (x) => x.summaries.length === x.summaryCount,
  )
    ? "Captured summaries"
    : "Partial summaries · details in About";
  $("#browse-summaries").innerHTML =
    '<option value="">Browse summaries</option>' +
    fs
      .flatMap((x) =>
        x.summaries.map(
          (s) => `<option value="${s.id}">${esc(s.title)}</option>`,
        ),
      )
      .join("");
  $("#summaries-panel").innerHTML =
    contextIntro(f) +
    fs
      .map(
        (x) =>
          `${fs.length > 1 ? `<h3>${esc(x.name)}</h3>` : ""}${x.summaries.length ? x.summaries.map((s) => summaryHTML(s, x)).join("") : '<p class="muted">Summary content wasn’t captured for this file. The full pinned diff is available.</p>'}`,
      )
      .join("");
  $("#comments-panel").innerHTML =
    composerHTML() +
    fs
      .map(
        (x) =>
          (fs.length > 1 ? `<h3>${esc(x.name)}</h3>` : "") + commentsHTML(x),
      )
      .join("");
  if (oldComposer) {
    $(".note-composer")?.replaceWith(oldComposer);
    if (focusedComposer) {
      $("#note-body").focus({ preventScroll: true });
      if (oldSelection) $("#note-body").setSelectionRange(...oldSelection);
    }
  }
  $("#summaries-panel")
    .querySelectorAll("details[data-summary]")
    .forEach((d) =>
      d.addEventListener("toggle", () => {
        d.open
          ? state.expanded.add(d.dataset.summary)
          : state.expanded.delete(d.dataset.summary);
      }),
    );
}
function openComposer() {
  if (!state.range) return;
  state.composer = { ...state.range };
  state.tab = "comments";
  persist();
  openContext();
  renderContext();
  $("#note-body").focus({ preventScroll: true });
}
function markViewed(id) {
  const before = state.viewed.has(id);
  before ? state.viewed.delete(id) : state.viewed.add(id);
  persist();
  renderNav();
  toast(
    `${files.get(id).name} ${before ? "marked not viewed" : "marked viewed"}`,
    () => {
      before ? state.viewed.add(id) : state.viewed.delete(id);
      persist();
      renderNav();
    },
  );
}
function overviewRows() {
  return data.layers
    .map((l, i) => ({ l, i }))
    .filter(
      ({ l }) =>
        state.severityFilter === "All" ||
        l.reviewSignals.severityCounts[state.severityFilter] > 0,
    )
    .map(
      ({ l, i }) =>
        `<tr><td>${i + 1}</td><th scope="row"><button data-layer="${i}">${esc(l.name)}</button></th><td>${l.files} files</td><td>${delta(l)}</td><td>${signalLabels(l.reviewSignals)}</td></tr>`,
    )
    .join("");
}
function renderOverview() {
  const s = data.source;
  $("#overview-screen").innerHTML =
    `<div class="overview-heading"><div><small>${esc(s.repository)} #${s.pr} · Merged</small><h1 id="overview-title">${esc(s.prTitle || s.title)}</h1><p class="muted">Pinned review · <code>${s.commit.slice(0, 12)}</code> · Out of date</p></div><button data-action="return-review">Return to review</button></div><p class="overview-description">${esc(s.changeSummary)}</p><div class="overview-totals"><span>52 files</span><span class="add-stat">+5,722</span><span class="del-stat">−127</span><span>7 recorded findings across 4 layers</span></div><p class="history-note">Review history · 2 Major · 2 Minor · 3 Trivial <span class="muted">· Individual status coverage is incomplete</span></p><div class="severity-filters" role="group" aria-label="Filter layers by recorded severity">${["All", "Major", "Minor", "Trivial", "Nitpick"].map((x) => `<button data-severity-filter="${x}" aria-pressed="${x === state.severityFilter}">${x === "All" ? "All layers" : findingIcon + esc(x)}</button>`).join("")}</div><div class="overview-table-wrap"><table class="overview-table"><caption class="sr-only">Layers in source order; findings are review history</caption><thead><tr><th>Layer</th><th scope="col">Change</th><th scope="col">Files</th><th scope="col">Lines</th><th scope="col">Recorded findings</th></tr></thead><tbody>${overviewRows()}</tbody></table></div><p class="muted label-note">The PR overview uses Trivial; layer 1 uses Nitpick. Filters keep those source labels separate.</p><section class="permission-path"><h2>Permission checks in this example</h2><p class="muted">A curated path through the captured code. These are checks to inspect, not new findings.</p><ol>${data.permissionPath.map((x) => `<li><span>${esc(x.title)}</span><button class="text-action" data-link-file="${x.file}" data-start="${x.start}" data-end="${x.end}">${esc(files.get(x.file).name)} · ${lineLabel(x.start, x.end)} →</button></li>`).join("")}</ol></section><div class="dialog-actions"><button data-action="review-tools">More review tools</button><button data-action="about">About this prototype</button></div>`;
}
function showOverview() {
  if (!document.body.classList.contains("overview-mode"))
    state.overviewReturn = readingPosition();
  closeContext(false);
  document.body.classList.add("overview-mode");
  $("#review-screen").hidden = true;
  $("#overview-screen").hidden = false;
  renderOverview();
  $("#overview-title").tabIndex = -1;
  $("#overview-title").focus({ preventScroll: true });
}
function showReview(restore = true) {
  const fromOverview = document.body.classList.contains("overview-mode");
  document.body.classList.remove("overview-mode");
  $("#overview-screen").hidden = true;
  $("#review-screen").hidden = false;
  if (location.hash === "#overview")
    history.replaceState(null, "", location.pathname + location.search);
  if (restore && state.overviewReturn) restorePosition(state.overviewReturn);
  if (fromOverview) stream().focus({ preventScroll: true });
}
function changeMode(mode) {
  const p = readingPosition();
  state.mode = mode;
  $("#split").setAttribute("aria-pressed", String(mode === "split"));
  $("#unified").setAttribute("aria-pressed", String(mode === "unified"));
  renderStream();
  restorePosition(p);
}
function focusMode() {
  if (document.body.classList.contains("overview-mode")) return;
  const p = readingPosition();
  state.focus = !state.focus;
  if (state.focus) {
    state.focusContextOpen = document.body.classList.contains("context-open");
    closeContext(false);
  } else if (state.focusContextOpen) {
    document.body.classList.add("context-open");
    $("#context-toggle").setAttribute("aria-expanded", "true");
  }
  document.body.classList.toggle("is-focus", state.focus);
  $("#focus").setAttribute("aria-pressed", String(state.focus));
  restorePosition(p);
  if (!document.activeElement.getClientRects().length)
    stream().focus({ preventScroll: true });
}
function toolsMenu() {
  dialog(
    "File tools",
    `<p>${esc(current().path)}</p><div class="dialog-actions"><button type="button" data-action="wrap">${state.wrap ? "Turn wrapping off" : "Wrap long lines"}</button><button type="button" data-action="full-context">Show unchanged context</button><button type="button" data-action="changed-context">Collapse unchanged context</button><button type="button" data-action="copy-path">Copy path</button><button type="button" data-action="outline">File outline</button></div><p class="muted">Split uses equal Before and After panes. Its live source scrolling and wrapping behavior still needs verification.</p>`,
  );
}
function reviewTools() {
  dialog(
    "Review tools",
    `<div class="dialog-actions">${["Blast radius", "Architecture impact", "Diagrams", "History", "Ask agent", "Activity filters"].map((x) => `<button type="button" data-preview="${x}">${x}</button>`).join("")}</div><p class="muted">These destinations are reachable previews. This pass covers reading diffs, navigation, progress and local notes.</p>`,
  );
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("button,a[data-action]");
  if (!b) return;
  const d = b.dataset;
  if (d.action === "retry") {
    load();
    return;
  }
  if (d.action === "settings") {
    settings();
    return;
  }
  if (!data) return;
  if (d.discloseLayer != null) {
    const i = +d.discloseLayer,
      open = !state.expandedLayers.has(i);
    open ? state.expandedLayers.add(i) : state.expandedLayers.delete(i);
    b.setAttribute("aria-expanded", String(open));
    b.setAttribute(
      "aria-label",
      `${open ? "Collapse" : "Expand"} files in layer ${i + 1}`,
    );
    b.textContent = open ? "⌄" : "›";
    $(`#layer-files-${i}`).hidden = !open;
    return;
  }
  if (d.severityFilter) {
    state.severityFilter = d.severityFilter;
    $$(".severity-filters button").forEach((x) =>
      x.setAttribute("aria-pressed", String(x === b)),
    );
    $(".overview-table tbody").innerHTML = overviewRows();
    announce(
      `${$(".overview-table tbody").children.length} layers with ${state.severityFilter === "All" ? "any" : state.severityFilter} recorded findings`,
    );
    return;
  }
  if (d.action === "captured-thread") {
    state.tab = "comments";
    renderContext();
    $(".thread-card").open = true;
    $("#comments-tab").focus({ preventScroll: true });
    return;
  }
  if (d.file && !d.gutter && !d.expand) {
    jump(d.file);
    return;
  }
  if (d.navMode) {
    state.nav = d.navMode;
    renderNav();
    return;
  }
  if (d.view) {
    markViewed(d.view);
    return;
  }
  if (d.scope) {
    state.scope = d.scope;
    renderContext();
    return;
  }
  if (d.expand) {
    const p = readingPosition();
    state.full.add(d.expand);
    $(`#file-${d.file} .diff-rows`).innerHTML = fileRows(files.get(d.file));
    restorePosition(p);
    return;
  }
  if (d.linkFile) {
    if ($("#dialog").open) $("#dialog").close();
    showReview(false);
    jump(d.linkFile, d.side || "after", +d.start, +d.end);
    return;
  }
  if (d.seen) {
    state.seen.has(d.seen) ? state.seen.delete(d.seen) : state.seen.add(d.seen);
    persist();
    b.textContent = state.seen.has(d.seen) ? "Seen · undo" : "Mark seen";
    b.setAttribute("aria-pressed", String(state.seen.has(d.seen)));
    return;
  }
  if (d.layer != null) {
    const i = +d.layer;
    if (data.files.some((f) => f.layerId === i)) {
      showReview(false);
      jump(data.files.find((f) => f.layerId === i).id);
    } else pending();
    return;
  }
  if (d.deleteNote) {
    const n = state.notes.find((x) => x.id === d.deleteNote);
    state.notes = state.notes.filter((x) => x !== n);
    persist();
    renderContext();
    toast("Local note deleted", () => {
      state.notes.push(n);
      persist();
      renderContext();
    });
    return;
  }
  if (d.preview) {
    dialog(
      d.preview,
      `<p>${esc(d.preview)} remains part of Change Stack. Its detailed content and interactions aren’t reproduced in this static prototype.</p><p><a href="${esc(data.source.url)}" target="_blank" rel="noopener">Open the original review</a></p>`,
    );
    return;
  }
  switch (d.action) {
    case "pending":
      pending();
      break;
    case "pending-files":
      $("#dialog").close();
      state.nav = "files";
      renderNav();
      jump((data.files.find((f) => f.layerId === null) || data.files[0]).id);
      break;
    case "about":
      about();
      break;
    case "review-tools":
      reviewTools();
      break;
    case "file-tools":
      toolsMenu();
      break;
    case "layer-about":
      dialog(
        current().layerId === null
          ? "Layer assignment pending"
          : data.layers[current().layerId].name,
        `<p>${esc(current().layerId === null ? "This file’s source layer has not yet been verified." : data.layers[current().layerId].description)}</p>`,
      );
      break;
    case "return-review":
      showReview();
      break;
    case "inspect": {
      const target = data.files.find((f) => f.name === "feedback-access.ts");
      state.returns.push({
        position: readingPosition(),
        linked: state.linked ? { ...state.linked } : null,
      });
      $("#return-context").hidden = false;
      jump(target.id, "after", 20, 49);
      break;
    }
    case "return-composer":
      jump(
        state.composer.file,
        state.composer.side,
        state.composer.start,
        state.composer.end,
      );
      break;
    case "save-note": {
      const body = $("#note-body").value.trim();
      if (!body) {
        $("#note-body").focus();
        return;
      }
      const r = state.composer;
      state.notes.push({
        ...r,
        commit: data.source.commit,
        id: crypto.randomUUID(),
        body,
      });
      delete state.drafts[noteKey(r)];
      state.composer = null;
      state.range = null;
      persist();
      renderContext();
      paintRanges();
      toast("Local note saved in this browser");
      break;
    }
    case "cancel-note":
      if (state.composer) {
        delete state.drafts[noteKey(state.composer)];
        state.composer = null;
        persist();
      }
      state.range = null;
      renderContext();
      paintRanges();
      break;
    case "wrap": {
      const p = readingPosition();
      state.wrap = !state.wrap;
      stream().classList.toggle("no-wrap", !state.wrap);
      $("#dialog").close();
      restorePosition(p);
      break;
    }
    case "full-context":
    case "changed-context": {
      const p = readingPosition();
      if (d.action === "full-context") state.full.add(state.file);
      else
        for (const x of [...state.full])
          if (x === state.file || x.startsWith(state.file + ":"))
            state.full.delete(x);
      $(`#file-${state.file} .diff-rows`).innerHTML = fileRows(current());
      $("#dialog").close();
      if (d.action === "changed-context" && !lineNode(p)) {
        const rows = current()
          .hunks.flatMap((h) => h.rows)
          .filter((r) => r[p.side] != null);
        const nearest = rows.reduce((a, b) =>
          Math.abs(a[p.side] - p.line) < Math.abs(b[p.side] - p.line) ? a : b,
        );
        p.line = nearest[p.side];
        announce("Unchanged context collapsed; showing the nearest hunk.");
      }
      restorePosition(p);
      break;
    }
    case "copy-path":
      navigator.clipboard.writeText(current().path).then(
        () => toast("Path copied"),
        () => toast("Clipboard unavailable"),
      );
      break;
    case "outline": {
      const f = current(),
        items = f.after
          .map((t, i) => ({ t, n: i + 1 }))
          .filter((x) =>
            /^export (async )?(function|const|type|class|interface)/.test(x.t),
          );
      dialog(
        "File outline",
        items.length
          ? items
              .map(
                (x) =>
                  `<p><button type="button" class="text-action" data-link-file="${f.id}" data-start="${x.n}" data-end="${x.n}">${esc(x.t)}</button></p>`,
              )
              .join("")
          : "<p>No exported declarations found in this file.</p>",
      );
      break;
    }
    case "retry":
      load();
      break;
  }
});
document.addEventListener("input", (e) => {
  if (e.target.id === "note-body" && state.composer) {
    state.drafts[noteKey(state.composer)] = e.target.value;
    persist();
  }
});
$("#viewed").onclick = () => markViewed(state.file);
$("#split").onclick = () => changeMode("split");
$("#unified").onclick = () => changeMode("unified");
$("#focus").onclick = focusMode;
$("#notes").onclick = about;
$("#return-context").onclick = () => {
  const saved = state.returns.pop();
  if (saved) {
    state.linked = saved.linked;
    restorePosition(saved.position);
  }
  $("#return-context").hidden = !state.returns.length;
};
$("#comment-selection").onclick = openComposer;
$("#clear-selection").onclick = () => {
  state.range = null;
  paintRanges();
};
function openContext() {
  if (state.focus) focusMode();
  document.body.classList.add("context-open");
  $("#context-toggle").setAttribute("aria-expanded", "true");
}
function closeContext(restoreFocus = true) {
  document.body.classList.remove("context-open");
  $("#context-toggle").setAttribute("aria-expanded", "false");
  if (restoreFocus) {
    const target = $("#context-toggle");
    (target.getClientRects().length ? target : stream()).focus({ preventScroll: true });
  }
}
$("#context-toggle").onclick = () => {
  if (document.body.classList.contains("context-open")) closeContext();
  else {
    openContext();
    $("#close-context").focus({ preventScroll: true });
  }
};
$("#close-context").onclick = () => closeContext();
for (const name of ["summaries", "comments"])
  $(`#${name}-tab`).onclick = () => {
    state.tab = name;
    renderContext();
  };
$(".context-tabs").onkeydown = (e) => {
  if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
    e.preventDefault();
    state.tab = state.tab === "summaries" ? "comments" : "summaries";
    renderContext();
    $(`#${state.tab}-tab`).focus();
  }
};
$("#browse-summaries").onchange = (e) => {
  const id = e.target.value,
    el = $(`[data-summary="${id}"]`);
  if (el) {
    el.open = true;
    state.expanded.add(id);
    el.scrollIntoView({ block: "nearest" });
    el.querySelector("summary").focus({ preventScroll: true });
  }
};
window.addEventListener("hashchange", () => {
  if (!data) return;
  if (location.hash === "#overview") showOverview();
  else showReview();
});
document.addEventListener("keydown", (e) => {
  if (!data || $("#dialog").open) return;
  const typing = e.target.closest(
    "input,textarea,select,[contenteditable=true]",
  );
  if (e.key === "Escape") {
    state.range = null;
    paintRanges();
    if (document.body.classList.contains("context-open")) {
      closeContext($(".review-context").contains(document.activeElement));
    }
    return;
  }
  if (document.body.classList.contains("overview-mode")) return;
  if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.key.toLowerCase() === "z") {
    e.preventDefault();
    focusMode();
  }
  if (["j", "k"].includes(e.key.toLowerCase())) {
    e.preventDefault();
    const verified = [
      ...new Set(data.files.map((f) => f.layerId).filter((i) => i !== null)),
    ];
    const i =
        current().layerId === null
          ? verified.length
          : verified.indexOf(current().layerId),
      next = i + (e.key.toLowerCase() === "j" ? 1 : -1);
    if (next >= 0 && next < verified.length)
      jump(data.files.find((f) => f.layerId === verified[next]).id);
    else if (next >= verified.length) toast("Last layer · Additional changes");
  }
  if (e.key === "F6") {
    e.preventDefault();
    if (stream().contains(document.activeElement)) {
      openContext();
      $(`#${state.tab}-tab`).focus({ preventScroll: true });
    } else {
      if (matchMedia("(max-width: 1279px)").matches) closeContext(false);
      stream().focus({ preventScroll: true });
    }
  }
  if (e.target === stream() && e.key === "Enter") {
    const p = readingPosition(),
      b = lineNode(p)?.querySelector(".gutter");
    b?.focus({ preventScroll: true });
  }
});
new ResizeObserver((entries) => {
  const width = entries[0].contentRect.width;
  if (
    width > 0 &&
    streamWidth &&
    Math.abs(width - streamWidth) > 1 &&
    lastReading
  ) {
    const p = { ...lastReading };
    streamWidth = width;
    restorePosition(p);
  } else if (width > 0) streamWidth = width;
}).observe(stream());
function loadingControls(disabled) {
  $$(
    ".review-layout button:not([data-action=settings]),.review-layout select,#notes",
  ).forEach((b) => (b.disabled = disabled));
  $(".overview-entry").setAttribute("aria-disabled", String(disabled));
}
$(".overview-entry").addEventListener("click", (e) => {
  if (!data) e.preventDefault();
});
async function load() {
  loadingControls(true);
  stream().innerHTML =
    '<div class="loading" role="status">Loading pinned diffs…</div>';
  try {
    const res = await fetch("review-data.json");
    if (!res.ok) throw Error("Fixture unavailable");
    data = await res.json();
    if (data.files.length !== 52) throw Error("Incomplete fixture");
    files = new Map(data.files.map((f) => [f.id, f]));
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey()) || "{}");
      state.viewed = new Set(
        (saved.viewed || []).filter((id) => files.has(id)),
      );
      state.seen = new Set(saved.seen || []);
      state.notes = (saved.notes || []).filter(
        (n) => n.commit === data.source.commit && files.has(n.file),
      );
      state.drafts = saved.drafts || {};
      if (saved.composer && files.has(saved.composer.file)) {
        state.composer = saved.composer;
        state.tab = "comments";
      }
    } catch {}
    renderNav();
    renderStream();
    renderContext();
    setActive("0");
    loadingControls(false);
    if (location.hash === "#overview") showOverview();
    else restorePosition({ file: "0", side: "after", line: 49, offset: 72 });
  } catch (error) {
    stream().innerHTML =
      '<div class="loading"><h2>Review unavailable</h2><p>The pinned fixture couldn’t be loaded. Your saved notes are still in this browser.</p><button type="button" data-action="retry">Retry</button></div>';
    $("#navigation-list").textContent = "Review unavailable";
    $("#progress").textContent = "Progress unavailable";
    console.error(error);
  }
}
load();

const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
let themePreference = "light";
try {
  const saved = localStorage.getItem("coderabbit-theme");
  if (["light", "dark", "system"].includes(saved)) themePreference = saved;
} catch {}
function applyTheme() {
  document.documentElement.dataset.theme =
    themePreference === "system"
      ? themeQuery.matches
        ? "dark"
        : "light"
      : themePreference;
  document.documentElement.style.colorScheme =
    document.documentElement.dataset.theme;
}
function settings() {
  dialog(
    "Settings",
    `<fieldset class="theme-options"><legend>Theme</legend>${["light", "dark", "system"].map((t) => `<label><input type="radio" name="theme" value="${t}" ${themePreference === t ? "checked" : ""}> ${t[0].toUpperCase() + t.slice(1)}</label>`).join("")}</fieldset><p class="muted">System follows your device appearance. Your reading position and local work stay where they are.</p>`,
  );
}
document.addEventListener("change", (e) => {
  if (e.target.name !== "theme") return;
  themePreference = e.target.value;
  try {
    localStorage.setItem("coderabbit-theme", themePreference);
  } catch {}
  applyTheme();
  announce(`Theme set to ${themePreference}`);
});
themeQuery.addEventListener("change", () => {
  if (themePreference === "system") applyTheme();
});
applyTheme();
