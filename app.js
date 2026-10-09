const STORAGE_KEY = "tsia2-practice-state-v1";
const RESULTS_KEY = "tsia2-practice-results-v1";

const state = {
  view: "home",
  session: null,
  results: null
};

const $ = (sel) => document.querySelector(sel);

function loadSession() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

function loadResults() {
  try {
    return JSON.parse(localStorage.getItem(RESULTS_KEY) || "null");
  } catch {
    return null;
  }
}

function saveSession() {
  if (!state.session) localStorage.removeItem(STORAGE_KEY);
  else localStorage.setItem(STORAGE_KEY, JSON.stringify(state.session));
}

function saveResults(results) {
  state.results = results;
  localStorage.setItem(RESULTS_KEY, JSON.stringify(results));
}

function letter(i) {
  return String.fromCharCode(65 + i);
}

function shuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function questionsFor(section) {
  return BANK[section].map((q) => ({ ...q, section }));
}

function buildSession(form) {
  const sections = form.sections;
  let pool = [];
  sections.forEach((section) => {
    pool = pool.concat(questionsFor(section));
  });
  const fullCount = pool.length;
  const count = form.length === "all" ? fullCount : Math.min(fullCount, Number(form.length));
  const picked = shuffle(pool).slice(0, count);
  return {
    id: Date.now(),
    sections,
    lengthLabel: form.length === "all" ? "Full bank" : `${count} questions`,
    items: picked.map((q) => q.id),
    index: 0,
    answers: {},
    flags: {},
    revealed: {},
    gradeAsYouGo: !!form.gradeAsYouGo,
    startedAt: Date.now(),
    updatedAt: Date.now()
  };
}

function itemById(id) {
  return [...BANK.math, ...BANK.elar].find((q) => q.id === id);
}

function currentItem() {
  const id = state.session.items[state.session.index];
  return itemById(id);
}

function elapsed(ms) {
  const sec = Math.floor(ms / 1000);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function render() {
  const root = $("#app");
  if (state.view === "home") root.innerHTML = homeHtml();
  if (state.view === "test") root.innerHTML = testHtml();
  if (state.view === "results") root.innerHTML = resultsHtml();
  bind();
}

function homeHtml() {
  const saved = loadSession();
  const last = loadResults();
  const resume = saved
    ? `<section class="card resume">
        <h2>Unfinished attempt</h2>
        <p>${saved.lengthLabel} · question ${saved.index + 1} of ${saved.items.length}${saved.gradeAsYouGo ? " · grade as you go" : ""} · saved in this browser</p>
        <div class="row">
          <button class="primary" data-action="resume">Resume test</button>
          <button class="ghost" data-action="discard">Discard</button>
        </div>
      </section>`
    : "";
  const lastCard = last
    ? `<section class="card">
        <h2>Last score</h2>
        <p>${last.correct} / ${last.total} correct (${last.percent}%) · ${new Date(last.finishedAt).toLocaleString()}</p>
        <button class="ghost" data-action="last">Review last results</button>
      </section>`
    : "";
  return `
    <header class="hero">
      <p class="eyebrow">Texas Success Initiative Assessment 2.0 · practice</p>
      <h1>TSIA2 English and Math sample</h1>
      <p class="lede">Original multiple-choice items written to the TSIA2 content categories. This is not the official College Board test and does not produce a CRC score.</p>
    </header>
    ${resume}
    ${lastCard}
    <form id="setup" class="card">
      <h2>Start a test</h2>
      <fieldset>
        <legend>Section</legend>
        <label><input type="radio" name="section" value="both" checked> English and Math</label>
        <label><input type="radio" name="section" value="elar"> English only (20)</label>
        <label><input type="radio" name="section" value="math"> Math only (20)</label>
      </fieldset>
      <fieldset>
        <legend>Length</legend>
        <label><input type="radio" name="length" value="all" checked> Full sample</label>
        <label><input type="radio" name="length" value="5"> 5 questions</label>
        <label><input type="radio" name="length" value="10"> 10 questions</label>
        <label><input type="radio" name="length" value="15"> 15 questions</label>
      </fieldset>
      <fieldset>
        <legend>Feedback</legend>
        <label><input type="checkbox" name="gradeAsYouGo"> Grade as you go — show whether the answer was correct when you click Next</label>
      </fieldset>
      <button class="primary" type="submit">Begin</button>
      <p class="fine">Progress is stored in this browser only. The official multiple-choice sections are untimed, so this timer is informational.</p>
    </form>
    <section class="card split">
      <div>
        <h2>What the real test covers</h2>
        <p><strong>ELAR CRC:</strong> about 30 adaptive items, literary and informational reading plus revision and sentence skills. College-ready routes also require an essay score of 5–8.</p>
        <p><strong>Math CRC:</strong> 20 items across quantitative, algebraic, geometric, and statistical reasoning. Statewide readiness is a CRC of 950–990, or a CRC below 950 plus Diagnostic Level 6.</p>
      </div>
      <div>
        <h2>Official samples</h2>
        <ul>${OFFICIAL.map((l) => `<li><a href="${l.url}" target="_blank" rel="noreferrer">${l.label}</a></li>`).join("")}</ul>
      </div>
    </section>`;
}

function testHtml() {
  const session = state.session;
  const q = currentItem();
  const n = session.index + 1;
  const total = session.items.length;
  const selected = session.answers[q.id];
  const flagged = !!session.flags[q.id];
  const revealed = !!(session.gradeAsYouGo && session.revealed && session.revealed[q.id]);
  const correct = selected === q.answer;
  const passage = q.passage ? `<blockquote class="passage">${escapeHtml(q.passage)}</blockquote>` : "";
  const choices = q.choices.map((choice, i) => `
    <label class="choice ${selected === i ? "selected" : ""} ${revealed && i === q.answer ? "correct" : ""} ${revealed && selected === i && i !== q.answer ? "wrong" : ""}">
      <input type="radio" name="choice" value="${i}" ${selected === i ? "checked" : ""} ${revealed ? "disabled" : ""}>
      <span class="mark">${letter(i)}</span>
      <span>${escapeHtml(choice)}</span>
    </label>`).join("");
  const feedback = revealed
    ? `<div class="feedback ${selected === undefined ? "missed" : correct ? "ok" : "bad"}">
        <strong>${selected === undefined ? "No answer selected." : correct ? "Correct." : "Not correct."}</strong>
        <p>${selected === undefined ? "" : `<span>Your answer: ${letter(selected)}. </span>`}Correct answer: ${letter(q.answer)}. ${escapeHtml(q.choices[q.answer])}</p>
        <p>${escapeHtml(q.explanation)}</p>
      </div>`
    : "";
  const checkedCount = session.items.filter((id) => session.revealed && session.revealed[id]).length;
  const checkedCorrect = session.items.filter((id) => session.revealed && session.revealed[id] && session.answers[id] === itemById(id).answer).length;
  const liveScore = session.gradeAsYouGo && checkedCount
    ? `<span class="live">${checkedCorrect} / ${checkedCount} correct so far</span>`
    : "";
  const dots = session.items.map((id, i) => {
    const answered = session.answers[id] !== undefined;
    const flag = session.flags[id];
    return `<button class="dot ${i === session.index ? "here" : ""} ${answered ? "done" : ""} ${flag ? "flag" : ""}" data-go="${i}" aria-label="Question ${i + 1}">${i + 1}</button>`;
  }).join("");
  return `
    <header class="testbar">
      <div>
        <p class="eyebrow">${q.section === "math" ? "Mathematics" : "ELAR"} · ${q.category}${session.gradeAsYouGo ? " · grade as you go" : ""}</p>
        <h1>Question ${n} of ${total}</h1>
      </div>
      <div class="meta">
        ${liveScore}
        <span id="clock">${elapsed(Date.now() - session.startedAt)}</span>
        <button class="ghost" data-action="save-exit">Save and exit</button>
      </div>
    </header>
    <section class="card question">
      ${passage}
      <p class="skill">${q.skill}</p>
      <h2>${escapeHtml(q.stem)}</h2>
      <form id="choices">${choices}</form>
      ${feedback}
      <div class="row">
        <button class="ghost" data-action="flag">${flagged ? "Unflag" : "Flag for review"}</button>
        <span class="spacer"></span>
        <button class="ghost" data-action="prev" ${session.index === 0 ? "disabled" : ""}>Back</button>
        ${session.index === total - 1
          ? `<button class="primary" data-action="grade">${session.gradeAsYouGo && !revealed ? "Check answer" : "Grade test"}</button>`
          : `<button class="primary" data-action="next">${revealed ? "Next question" : "Next"}</button>`}
      </div>
    </section>
    <nav class="dots" aria-label="Question navigator">${dots}</nav>`;
}

function gradeSession(session) {
  const rows = session.items.map((id) => {
    const q = itemById(id);
    const chosen = session.answers[id];
    return {
      id,
      section: q.section,
      category: q.category,
      skill: q.skill,
      stem: q.stem,
      choices: q.choices,
      answer: q.answer,
      chosen,
      correct: chosen === q.answer,
      explanation: q.explanation
    };
  });
  const correct = rows.filter((r) => r.correct).length;
  const byCategory = {};
  rows.forEach((r) => {
    if (!byCategory[r.category]) byCategory[r.category] = { correct: 0, total: 0, section: r.section };
    byCategory[r.category].total += 1;
    if (r.correct) byCategory[r.category].correct += 1;
  });
  return {
    finishedAt: Date.now(),
    startedAt: session.startedAt,
    lengthLabel: session.lengthLabel,
    correct,
    total: rows.length,
    percent: Math.round((correct / rows.length) * 100),
    unanswered: rows.filter((r) => r.chosen === undefined).length,
    byCategory,
    rows
  };
}

function resultsHtml() {
  const r = state.results;
  const cats = Object.entries(r.byCategory).map(([name, stat]) => {
    const pct = Math.round((stat.correct / stat.total) * 100);
    const weak = pct < 80;
    const links = (PRACTICE[name] || []).map((l) => `<a href="${l.url}" target="_blank" rel="noreferrer">${l.label}</a>`).join(" · ");
    return `<article class="cat ${weak ? "weak" : "ok"}">
      <h3>${name}</h3>
      <p>${stat.correct} / ${stat.total} · ${pct}%</p>
      ${weak ? `<p class="need">Practice this area. ${links}</p>` : `<p class="oknote">On track in this sample. ${links}</p>`}
    </article>`;
  }).join("");
  const missed = r.rows.filter((row) => !row.correct).map((row) => {
    const yours = row.chosen === undefined ? "No answer" : `${letter(row.chosen)}. ${row.choices[row.chosen]}`;
    return `<article class="miss">
      <p class="skill">${row.category} · ${row.skill}</p>
      <h3>${escapeHtml(row.stem)}</h3>
      <p><strong>Your answer:</strong> ${escapeHtml(yours)}</p>
      <p><strong>Correct:</strong> ${letter(row.answer)}. ${escapeHtml(row.choices[row.answer])}</p>
      <p>${escapeHtml(row.explanation)}</p>
    </article>`;
  }).join("");
  return `
    <header class="hero">
      <p class="eyebrow">Results saved in this browser</p>
      <h1>${r.correct} / ${r.total} correct</h1>
      <p class="lede">${r.percent}% · ${r.lengthLabel} · ${elapsed(r.finishedAt - r.startedAt)} elapsed · ${r.unanswered} unanswered</p>
    </header>
    <section class="card">
      <h2>This is not a CRC score</h2>
      <p>Official Mathematics readiness is a CRC of 950–990, or a CRC below 950 plus Diagnostic Level 6. Official ELAR readiness is a CRC of 945–990 plus an essay of 5–8, or a CRC below 945 plus Diagnostic Level 5 or 6 and an essay of 5–8. A raw percent here cannot be converted into those scaled scores.</p>
    </section>
    <section class="grid">${cats}</section>
    <section class="card">
      <h2>${missed ? "Review these items" : "No missed items in this attempt"}</h2>
      ${missed || "<p>Every selected item matched the checked answer key.</p>"}
    </section>
    <section class="card">
      <h2>Official practice</h2>
      <ul>${OFFICIAL.map((l) => `<li><a href="${l.url}" target="_blank" rel="noreferrer">${l.label}</a></li>`).join("")}</ul>
      <div class="row">
        <button class="primary" data-action="home">New test</button>
        <button class="ghost" data-action="clear-results">Clear saved score</button>
      </div>
    </section>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "\u0026amp;")
    .replace(/</g, "\u003c")
    .replace(/>/g, "\u003e")
    .replace(/"/g, "\u0026quot;");
}

function bind() {
  const setup = $("#setup");
  if (setup) {
    setup.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(setup);
      const section = data.get("section");
      const sections = section === "both" ? ["elar", "math"] : [section];
      state.session = buildSession({
        sections,
        length: data.get("length"),
        gradeAsYouGo: data.get("gradeAsYouGo") === "on"
      });
      saveSession();
      state.view = "test";
      render();
    });
  }
  document.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", () => handle(btn.dataset.action));
  });
  document.querySelectorAll("[data-go]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.session.index = Number(btn.dataset.go);
      state.session.updatedAt = Date.now();
      saveSession();
      render();
    });
  });
  const choices = $("#choices");
  if (choices) {
    choices.addEventListener("change", (event) => {
      const q = currentItem();
      state.session.answers[q.id] = Number(event.target.value);
      state.session.updatedAt = Date.now();
      saveSession();
      render();
    });
  }
}

function shouldRevealFirst() {
  const session = state.session;
  if (!session.gradeAsYouGo) return false;
  const id = session.items[session.index];
  session.revealed = session.revealed || {};
  if (session.revealed[id]) return false;
  session.revealed[id] = true;
  session.updatedAt = Date.now();
  saveSession();
  render();
  return true;
}

function handle(action) {
  if (action === "resume") {
    state.session = loadSession();
    state.view = "test";
    render();
  }
  if (action === "discard") {
    localStorage.removeItem(STORAGE_KEY);
    state.session = null;
    render();
  }
  if (action === "last") {
    state.results = loadResults();
    state.view = "results";
    render();
  }
  if (action === "save-exit") {
    saveSession();
    state.view = "home";
    render();
  }
  if (action === "flag") {
    const q = currentItem();
    state.session.flags[q.id] = !state.session.flags[q.id];
    saveSession();
    render();
  }
  if (action === "prev" && state.session.index > 0) {
    state.session.index -= 1;
    saveSession();
    render();
  }
  if (action === "next" && state.session.index < state.session.items.length - 1) {
    if (shouldRevealFirst()) return;
    state.session.index += 1;
    saveSession();
    render();
  }
  if (action === "grade") {
    if (shouldRevealFirst()) return;
    const unanswered = state.session.items.filter((id) => state.session.answers[id] === undefined).length;
    const ok = unanswered === 0 || confirm(`${unanswered} question${unanswered === 1 ? "" : "s"} unanswered. Grade anyway?`);
    if (!ok) return;
    const results = gradeSession(state.session);
    saveResults(results);
    localStorage.removeItem(STORAGE_KEY);
    state.session = null;
    state.view = "results";
    render();
  }
  if (action === "home") {
    state.view = "home";
    render();
  }
  if (action === "clear-results") {
    localStorage.removeItem(RESULTS_KEY);
    state.results = null;
    state.view = "home";
    render();
  }
}

let clock;
function tick() {
  const el = $("#clock");
  if (el && state.session) el.textContent = elapsed(Date.now() - state.session.startedAt);
}

document.addEventListener("DOMContentLoaded", () => {
  state.results = loadResults();
  render();
  clock = setInterval(tick, 1000);
});
