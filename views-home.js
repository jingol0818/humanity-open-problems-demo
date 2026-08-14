(() => {
  const { problems, events, themes } = window.HOP_DATA;
  const { problemById, eventById, followed, record } = window.HOP_STATE;
  const { followButton, problemCard, eventCard } = window.HOP_COMPONENTS;
  const i18n = window.HOP_I18N;
  const t = (key) => i18n.t(key);
  const copy = (en, ko) => i18n.getLocale() === "ko" ? ko : en;

  function howItWorks() {
    const steps = [
      {
        n: "01",
        title: copy("Discover a question", "궁금한 질문을 발견하고"),
        text: copy("Start with the unknown, not the academic department.", "학문명이 아니라 아직 풀리지 않은 질문에서 시작합니다.")
      },
      {
        n: "02",
        title: copy("Follow the frontier", "관심 있는 난제를 팔로우하고"),
        text: copy("Keep the questions you care about in one personal frontier feed.", "답이 궁금한 난제들을 내 피드에 모아둡니다.")
      },
      {
        n: "03",
        title: copy("See what really changed", "실제로 달라진 것만 확인합니다"),
        text: copy("Verified progress stays separate from claims that are still under review.", "검증된 진전과 아직 검토 중인 주장을 분리해서 보여줍니다.")
      }
    ];

    return `
      <article class="how-card">
        <p class="eyebrow">${copy("HOW IT WORKS", "이 서비스의 사용법")}</p>
        <div class="how-steps">
          ${steps.map((step) => `
            <div class="how-step">
              <span>${step.n}</span>
              <div>
                <strong>${step.title}</strong>
                <p>${step.text}</p>
              </div>
            </div>`).join("")}
        </div>
      </article>`;
  }

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
      <section class="hero-home editorial-hero v3-hero">
        <div class="shell hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">${t("heroEyebrow")}</p>
            <h1 class="display-title">${t("heroTitle")}</h1>
            <p class="lede">${t("heroLede")}</p>
            <p class="prototype-disclosure">${copy(
              "Prototype · illustrative research data, not live tracking",
              "프로토타입 · 예시 연구 데이터이며 실시간 연구 추적이 아닙니다"
            )}</p>
            <div class="hero-actions">
              <a class="button primary" href="#/problem/${heroProblem.id}" data-track="problem_open" data-problem-id="${heroProblem.id}">${t("exploreProblem")}</a>
            </div>
          </div>
          <div class="hero-side editorial-stack v3-hero-side">
            ${howItWorks()}
            <article class="editorial-feature progress-feature hero-progress-card">
              <span class="badge verified">${heroEvent.type} · ${t("verified")}</span>
              <strong>${heroEvent.title}</strong>
              <p>${heroEvent.summary}</p>
              <div class="hero-progress-meta">
                <span>${heroEvent.source}</span>
                <a class="text-link" href="#/event/${heroEvent.id}">${t("whatChanged")}</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section explore-band v3-explore-first">
        <div class="shell">
          <div class="section-head">
            <div>
              <p class="eyebrow">${t("exploreUnknown")}</p>
              <h2 class="h2">${t("chooseQuestion")}</h2>
              <p>${copy(
                "Find a question worth following. The full product will grow far beyond this prototype set.",
                "답이 궁금한 질문을 골라보세요. 실제 서비스에서는 이 프로토타입보다 훨씬 넓은 문제 풀을 다룹니다."
              )}</p>
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
