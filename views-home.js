(() => {
  const { problems, events, themes } = window.HOP_DATA;
  const { problemById, eventById, followed, record } = window.HOP_STATE;
  const { followButton, problemCard, eventCard } = window.HOP_COMPONENTS;
  const i18n = window.HOP_I18N;
  const t = (key) => i18n.t(key);

  function renderHome(themeFilter = "all") {
    const heroProblem = problemById("dark-matter");
    const heroEvent = eventById("dm-constraint-01");
    const verified = events.filter((item) => item.knowledge === "verified");
    const activity = events.filter((item) => item.knowledge === "activity");
    const visibleProblems = themeFilter === "all"
      ? problems
      : problems.filter((problem) => problem.theme === themeFilter);

    record("home_view");

    return `
      <section class="hero-home editorial-hero">
        <div class="shell hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">${t("heroEyebrow")}</p>
            <h1 class="display-title">${t("heroTitle")}</h1>
            <p class="lede">${t("heroLede")}</p>
            <div class="hero-actions">
              <a class="button primary" href="#/problem/${heroProblem.id}" data-track="problem_open" data-problem-id="${heroProblem.id}">${t("exploreProblem")}</a>
            </div>
          </div>
          <div class="hero-side editorial-stack">
            <article class="editorial-feature">
              <p class="eyebrow">${t("featuredQuestion")}</p>
              <strong>${heroProblem.title}</strong>
              <p>${heroProblem.hook}</p>
              <div class="editorial-foot">
                <a class="text-link" href="#/problem/${heroProblem.id}">${t("seeFrontier")}</a>
                ${followButton(heroProblem, true)}
              </div>
            </article>
            <article class="editorial-feature progress-feature">
              <span class="badge verified">${heroEvent.type} · ${t("verified")}</span>
              <strong>${heroEvent.title}</strong>
              <p>${heroEvent.summary}</p>
              <a class="text-link" href="#/event/${heroEvent.id}">${t("whatChanged")}</a>
            </article>
          </div>
        </div>
      </section>

      <section class="section verified-band">
        <div class="shell">
          <div class="section-head">
            <div>
              <p class="eyebrow">${t("verifiedProgress")}</p>
              <h2 class="h2">${t("actuallyChanged")}</h2>
              <p>${t("trustedEvents")}</p>
            </div>
          </div>
          <div class="card-grid">
            ${verified.slice(0, 3).map((item) => eventCard(item)).join("")}
          </div>
        </div>
      </section>

      <section class="section explore-band">
        <div class="shell">
          <div class="section-head">
            <div>
              <p class="eyebrow">${t("exploreUnknown")}</p>
              <h2 class="h2">${t("chooseQuestion")}</h2>
            </div>
          </div>
          <div class="theme-row">
            <button class="theme-chip ${themeFilter === "all" ? "active" : ""}" data-theme-filter="all">${t("all")}</button>
            ${themes.map((theme) => `
              <button class="theme-chip ${themeFilter === theme.id ? "active" : ""}" data-theme-filter="${theme.id}">${theme.label}</button>
            `).join("")}
          </div>
          <div class="problem-grid">
            ${visibleProblems.map(problemCard).join("") || `<p class="muted">${t("noThemeProblems")}</p>`}
          </div>
        </div>
      </section>

      <section class="section activity-band">
        <div class="shell">
          <div class="section-head">
            <div>
              <p class="eyebrow">${t("researchActivity")}</p>
              <h2 class="h2">${t("newNotAlwaysProgress")}</h2>
              <p>${t("claimsWorthWatching")}</p>
            </div>
          </div>
          <div class="card-grid">
            ${activity.map((item) => eventCard(item)).join("")}
          </div>
        </div>
      </section>`;
  }

  function renderFollowing() {
    const followedProblems = problems.filter((problem) => followed.has(problem.id));
    const followedEvents = events.filter((item) => followed.has(item.problemId));
    record("following_feed_view", { followCount: followed.size });

    return `
      <section class="follow-page">
        <div class="shell">
          <p class="eyebrow">${t("myFrontiers")}</p>
          <h1 class="h1">${t("questionsYouWant")}</h1>
          <p class="lede">${t("followingLede")}</p>

          ${followedProblems.length ? `
            <div class="section compact" style="border:0;padding-bottom:22px">
              <div class="theme-row">
                ${followedProblems.map((problem) => `<a class="theme-chip" style="text-decoration:none" href="#/problem/${problem.id}">${problem.shortTitle}</a>`).join("")}
              </div>
            </div>

            <div class="section compact" style="border:0;padding-top:14px">
              <div class="section-head">
                <div>
                  <p class="eyebrow">${t("followingFeed")}</p>
                  <h2 class="h2">${t("meaningfulChanges")}</h2>
                </div>
              </div>
              <div class="follow-list">
                ${followedEvents.length ? followedEvents.map((item) => eventCard(item)).join("") : `
                  <div class="empty-state">
                    <h2 class="h2">${t("noEvents")}</h2>
                    <p>${t("preserveQuiet")}</p>
                  </div>`}
              </div>
            </div>` : `
            <div class="empty-state" style="margin-top:42px">
              <h2 class="h2">${t("followQuestions")}</h2>
              <p>${t("trustedFeedHere")}</p>
              <div class="button-row" style="justify-content:center;margin-top:24px">
                ${problems.slice(0, 4).map((problem) => `<a class="button secondary" href="#/problem/${problem.id}">${problem.shortTitle}</a>`).join("")}
              </div>
            </div>`}
        </div>
      </section>`;
  }

  window.HOP_VIEWS_HOME = { renderHome, renderFollowing };
})();
