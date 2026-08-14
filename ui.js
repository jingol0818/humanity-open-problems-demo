(() => {
  const { problems } = window.HOP_DATA;
  const { problemById, record } = window.HOP_STATE;
  const i18n = window.HOP_I18N;
  const t = (key) => i18n.t(key);

  const drawer = document.getElementById("explain-drawer");
  const drawerBackdrop = document.getElementById("drawer-backdrop");
  const drawerTitle = document.getElementById("drawer-title");
  const drawerBody = document.getElementById("drawer-body");
  const searchDialog = document.getElementById("search-dialog");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const toastRegion = document.getElementById("toast-region");

  let explainProblemId = null;
  let explainLevel = "simple";

  function toast(message) {
    const element = document.createElement("div");
    element.className = "toast";
    element.textContent = message;
    toastRegion.appendChild(element);
    window.setTimeout(() => element.remove(), 2500);
  }

  function renderExplain(message = "") {
    const problem = problemById(explainProblemId);
    if (!problem) return;

    const levels = [
      ["simple", t("simple")],
      ["highschool", t("highschool")],
      ["undergraduate", t("undergraduate")],
      ["specialist", t("specialist")]
    ];

    drawerBody.innerHTML = `
      <div class="level-row">
        ${levels.map(([id, label]) => `
          <button class="level-button ${explainLevel === id ? "active" : ""}"
                  type="button" data-explain-level="${id}">${label}</button>
        `).join("")}
      </div>
      <p class="explain-copy">${message || problem.explain[explainLevel]}</p>
      <div class="prompt-list">
        <p class="eyebrow">${t("askGraph")}</p>
        <button class="prompt-chip" type="button" data-mock-prompt="matter">${t("promptMatter")}</button>
        <button class="prompt-chip" type="button" data-mock-prompt="unknown">${t("promptUnknown")}</button>
        <button class="prompt-chip" type="button" data-mock-prompt="solve">${t("promptSolve")}</button>
        <button class="prompt-chip" type="button" data-mock-prompt="trust">${t("promptTrust")}</button>
      </div>
      <p class="small muted" style="margin-top:24px">${t("aiPrototypeNote")}</p>`;
  }

  function openExplain(problemId) {
    const problem = problemById(problemId);
    if (!problem) return;

    explainProblemId = problemId;
    explainLevel = "simple";
    drawerTitle.textContent = problem.shortTitle;
    renderExplain();
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    drawerBackdrop.hidden = false;
    record("ai_explain_open", { problemId });
  }

  function closeExplain() {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    drawerBackdrop.hidden = true;
  }

  function setExplainLevel(level) {
    explainLevel = level;
    renderExplain();
    record("ai_explain_level_change", { problemId: explainProblemId, level });
  }

  function runMockPrompt(type) {
    const problem = problemById(explainProblemId);
    if (!problem) return;

    const answers = {
      matter: problem.why,
      unknown: `${t("unknownCentral")} ${problem.unknown.join(" ")}`,
      trust: t("trustAnswer")
    };

    if (type === "solve") {
      if (problem.id === "collatz") answers.solve = t("solveCollatz");
      else if (problem.id === "technosignatures") answers.solve = t("solveSeti");
      else if (problem.id === "consciousness") answers.solve = t("solveConsciousness");
      else answers.solve = t("solvePlural");
    }

    renderExplain(answers[type] || problem.explain[explainLevel]);
    record("ai_explain_prompt", { problemId: explainProblemId, prompt: type });
  }

  function renderSearch(query = "") {
    const q = query.trim().toLowerCase();
    const matches = problems.filter((problem) => {
      if (!q) return true;
      return [problem.title, problem.shortTitle, problem.domain, problem.theme, problem.summary]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });

    searchResults.innerHTML = matches.map((problem) => `
      <a class="search-result" href="#/problem/${problem.id}" data-search-result="${problem.id}">
        <strong>${problem.title}</strong>
        <span>${problem.domain} · ${problem.summary}</span>
      </a>`).join("") || `<p class="muted" style="padding:14px">${t("searchNoMatch")}</p>`;
  }

  function openSearch() {
    renderSearch("");
    if (typeof searchDialog.showModal === "function") {
      searchDialog.showModal();
      window.setTimeout(() => searchInput.focus(), 30);
    }
    record("search_open");
  }

  function closeSearch() {
    if (searchDialog.open) searchDialog.close();
  }

  function onSearchInput() {
    renderSearch(searchInput.value);
  }

  function refreshLocalizedUi() {
    if (explainProblemId && drawer.classList.contains("open")) {
      const problem = problemById(explainProblemId);
      drawerTitle.textContent = problem?.shortTitle || t("explainThis");
      renderExplain();
    }
    if (searchDialog.open) renderSearch(searchInput.value);
  }

  window.HOP_UI = {
    toast,
    openExplain,
    closeExplain,
    setExplainLevel,
    runMockPrompt,
    openSearch,
    closeSearch,
    onSearchInput,
    refreshLocalizedUi,
    drawerBackdrop
  };
})();
