(() => {
  const app = document.getElementById("app");
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  const drawerClose = document.getElementById("drawer-close");
  const languageButton = document.getElementById("language-toggle");

  const state = window.HOP_STATE;
  const homeViews = window.HOP_VIEWS_HOME;
  const detailViews = window.HOP_VIEWS_DETAIL;
  const ui = window.HOP_UI;
  const i18n = window.HOP_I18N;
  const t = (key) => i18n.t(key);

  let themeFilter = "all";

  function syncLanguageButtons() {
    const label = i18n.getLocale() === "ko" ? "EN" : "한국어";
    document.querySelectorAll("#language-toggle, [data-language-toggle]").forEach((button) => {
      button.textContent = label;
    });
  }

  function updateFollowCounts() {
    const count = state.followed.size;
    const desktop = document.getElementById("follow-count");
    const mobile = document.getElementById("mobile-follow-count");
    if (desktop) desktop.textContent = String(count);
    if (mobile) mobile.textContent = String(count);
  }

  function parseRoute() {
    const raw = window.location.hash.replace(/^#\/?/, "");
    return raw ? raw.split("/").filter(Boolean) : [];
  }

  function setActiveNav(route) {
    const section = route[0] === "following" ? "following" : "discover";
    document.querySelectorAll("[data-nav]").forEach((link) => {
      link.classList.toggle("active", link.dataset.nav === section);
    });
  }

  function render(moveFocus = true) {
    const route = parseRoute();
    setActiveNav(route);
    updateFollowCounts();
    syncLanguageButtons();
    i18n.applyStaticText();

    if (!route.length) {
      app.innerHTML = homeViews.renderHome(themeFilter);
    } else if (route[0] === "problem" && route[1]) {
      const problem = state.problemById(route[1]);
      app.innerHTML = problem
        ? detailViews.renderProblem(problem, state.eventsForProblem(problem.id))
        : detailViews.renderNotFound();
    } else if (route[0] === "event" && route[1]) {
      const item = state.eventById(route[1]);
      const problem = item ? state.problemById(item.problemId) : null;
      app.innerHTML = item && problem
        ? detailViews.renderEvent(item, problem)
        : detailViews.renderNotFound();
    } else if (route[0] === "following") {
      app.innerHTML = homeViews.renderFollowing();
    } else {
      app.innerHTML = detailViews.renderNotFound();
    }

    if (moveFocus) {
      window.scrollTo(0, 0);
      app.focus({ preventScroll: true });
    }
  }

  document.addEventListener("click", (event) => {
    const localeToggle = event.target.closest("#language-toggle, [data-language-toggle]");
    if (localeToggle) {
      event.preventDefault();
      i18n.toggleLocale();
      return;
    }

    const follow = event.target.closest("[data-follow]");
    if (follow) {
      event.preventDefault();
      event.stopPropagation();
      const problem = state.problemById(follow.dataset.follow);
      const active = state.toggleFollow(follow.dataset.follow);
      updateFollowCounts();
      ui.toast(`${active ? t("following").replace("✓ ", "") : t("unfollowed")} · ${problem.shortTitle}`);
      render(false);
      return;
    }

    const theme = event.target.closest("[data-theme-filter]");
    if (theme) {
      themeFilter = theme.dataset.themeFilter;
      app.innerHTML = homeViews.renderHome(themeFilter);
      return;
    }

    const explain = event.target.closest("[data-explain]");
    if (explain) {
      ui.openExplain(explain.dataset.explain);
      return;
    }

    const level = event.target.closest("[data-explain-level]");
    if (level) {
      ui.setExplainLevel(level.dataset.explainLevel);
      return;
    }

    const prompt = event.target.closest("[data-mock-prompt]");
    if (prompt) {
      ui.runMockPrompt(prompt.dataset.mockPrompt);
      return;
    }

    const task = event.target.closest("[data-task-open]");
    if (task) {
      state.record("actionable_task_open", { problemId: task.dataset.taskOpen });
      ui.toast(t("taskDeferred"));
      return;
    }

    const source = event.target.closest("[data-source-open]");
    if (source) {
      state.record("source_open", { eventId: source.dataset.sourceOpen });
      ui.toast(t("sourceDeferred"));
      return;
    }

    const searchResult = event.target.closest("[data-search-result]");
    if (searchResult) {
      state.record("search_result_open", { problemId: searchResult.dataset.searchResult });
      ui.closeSearch();
    }
  });

  searchButton.addEventListener("click", ui.openSearch);
  searchInput.addEventListener("input", ui.onSearchInput);
  drawerClose.addEventListener("click", ui.closeExplain);
  ui.drawerBackdrop.addEventListener("click", ui.closeExplain);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") ui.closeExplain();
  });

  window.addEventListener("hashchange", () => render(true));
  window.addEventListener("hop:localechange", (event) => {
    state.record("locale_change", { locale: event.detail.locale });
    render(false);
    ui.refreshLocalizedUi();
  });

  if (!window.location.hash) {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#/`);
  }

  i18n.applyStaticText();
  syncLanguageButtons();
  render(false);
  window.HOP_APP = { render };
})();
