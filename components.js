(() => {
  const { problemById, eventsForProblem, followed } = window.HOP_STATE;
  const i18n = window.HOP_I18N;
  const t = (key) => i18n.t(key);

  function followButton(problem, compact = false) {
    const active = followed.has(problem.id);
    return `
      <button class="button ${active ? "following" : "secondary"}"
              type="button"
              data-follow="${problem.id}"
              aria-pressed="${active}">
        ${active ? t("following") : compact ? t("follow") : t("followProblem")}
      </button>`;
  }

  function statusBadge(item) {
    return item.knowledge === "verified"
      ? `<span class="badge verified">${item.type} · ${t("verified")}</span>`
      : `<span class="badge activity">${item.type} · ${t("underReview")}</span>`;
  }

  function problemCard(problem) {
    const recent = eventsForProblem(problem.id).find((item) => item.knowledge === "verified");
    const frontierCount = i18n.getLocale() === "ko"
      ? `${problem.metrics.frontiers}${t("activeFrontiers")}`
      : `${problem.metrics.frontiers} ${t("activeFrontiers")}`;
    return `
      <article class="problem-card" data-theme="${problem.theme}">
        <div>
          <div class="topline">
            <span class="badge">${problem.domain}</span>
            <span class="small muted">${problem.status}</span>
          </div>
          <a href="#/problem/${problem.id}" data-track="problem_open" data-problem-id="${problem.id}">
            <h3>${problem.title}</h3>
            <p>${problem.summary}</p>
          </a>
        </div>
        <div>
          <div class="problem-meta">
            <span>${frontierCount}</span>
            <span>${recent ? `${t("latestChange")} · ${recent.date}` : t("noRecentEvent")}</span>
          </div>
          <div class="button-row">${followButton(problem, true)}</div>
        </div>
      </article>`;
  }

  function eventCard(item, options = {}) {
    const problem = problemById(item.problemId);
    const activityClass = item.knowledge === "activity" ? " activity-card" : "";
    const showProblem = options.showProblem !== false;
    return `
      <article class="event-card${activityClass}">
        <a href="#/event/${item.id}" data-track="progress_event_open" data-event-id="${item.id}">
          ${statusBadge(item)}
          ${showProblem ? `<p class="eyebrow" style="margin-top:14px">${problem.shortTitle}</p>` : ""}
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="event-foot">
            <span>${item.date}</span>
            <span>${t("openEvent")}</span>
          </div>
        </a>
      </article>`;
  }

  function frontierTitle(problem, id) {
    const frontier = problem.frontiers.find((item) => item.id === id);
    return frontier ? frontier.title : t("researchFrontier");
  }

  function taskForProblem(id) {
    return i18n.task(id);
  }

  window.HOP_COMPONENTS = {
    followButton,
    statusBadge,
    problemCard,
    eventCard,
    frontierTitle,
    taskForProblem
  };
})();
