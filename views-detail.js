(() => {
  const { record } = window.HOP_STATE;
  const { followButton, eventCard, statusBadge, frontierTitle, taskForProblem } = window.HOP_COMPONENTS;
  const i18n = window.HOP_I18N;
  const t = (key) => i18n.t(key);

  function metricCount(value, labelKey) {
    if (i18n.getLocale() === "ko") return `${value}${t(labelKey)}`;
    return `${value} ${t(labelKey)}`;
  }

  function renderProblem(problem, problemEvents) {
    const verified = problemEvents.filter((item) => item.knowledge === "verified");
    const activity = problemEvents.filter((item) => item.knowledge === "activity");
    const task = taskForProblem(problem.id);
    record("problem_open", { problemId: problem.id });

    return `
      <section class="problem-hero">
        <div class="shell">
          <p class="eyebrow">${problem.domain}</p>
          <h1 class="h1">${problem.title}</h1>
          <div class="meta-line">
            <span class="badge">${problem.status}</span>
            <span class="badge">${problem.problemClass}</span>
            <span class="small muted">${metricCount(problem.metrics.frontiers, "activeFrontiers")}</span>
          </div>
          <p class="lede">${problem.summary}</p>
          <div class="button-row">
            ${followButton(problem)}
            <button class="button secondary" type="button" data-explain="${problem.id}">${t("explainThis")} ▾</button>
          </div>

          <div class="metric-grid" aria-label="Problem graph summary">
            <div class="metric"><strong>${problem.metrics.frontiers}</strong><span>${i18n.getLocale() === "ko" ? "연구 최전선" : "active frontiers"}</span></div>
            <div class="metric"><strong>${problem.metrics.questions}</strong><span>${i18n.getLocale() === "ko" ? "열린 질문" : "open questions"}</span></div>
            <div class="metric"><strong>${problem.metrics.recent}</strong><span>${i18n.getLocale() === "ko" ? "최근 진전 신호" : "recent progress signals"}</span></div>
            <div class="metric"><strong>${problem.metrics.disputed}</strong><span>${i18n.getLocale() === "ko" ? "논쟁·검토 중" : "disputed / under review"}</span></div>
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="shell">
          <p class="eyebrow">${t("whyMatters")}</p>
          <p class="lede" style="margin-top:0">${problem.why}</p>
        </div>
      </section>

      <section class="section verified-band">
        <div class="shell">
          <div class="section-head">
            <div>
              <p class="eyebrow">${t("latestVerifiedProgress")}</p>
              <h2 class="h2">${t("actuallyChanged")}</h2>
            </div>
          </div>
          <div class="card-grid">
            ${verified.length ? verified.map((item) => eventCard(item, { showProblem: false })).join("") : `
              <div class="empty-state" style="grid-column:1/-1;padding:36px">
                <h3 class="h3">${i18n.getLocale() === "ko" ? "이 프로토타입에는 최근 검증된 이벤트가 없습니다." : "No recent verified event in this static prototype."}</h3>
                <p>${t("preserveQuiet")}</p>
              </div>`}
          </div>
          ${activity.length ? `
            <div style="margin-top:34px">
              <p class="eyebrow">${t("researchNotVerified")}</p>
              <div class="card-grid">${activity.map((item) => eventCard(item, { showProblem: false })).join("")}</div>
            </div>` : ""}
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="section-head">
            <div>
              <p class="eyebrow">${t("whereFrontier")}</p>
              <h2 class="h2">${t("headlineBreaks")}</h2>
            </div>
          </div>
          <div class="frontier-list">
            ${problem.frontiers.map((frontier, index) => `
              <div class="frontier-row">
                <div class="frontier-tree">${index === problem.frontiers.length - 1 ? "└─" : "├─"}</div>
                <div>
                  <h3>${frontier.title}</h3>
                  <p>${frontier.question}</p>
                </div>
                <div class="frontier-side">
                  <strong>${frontier.status}</strong>
                  <span>${frontier.last !== "—" ? `${t("lastSignal")} · ${frontier.last}` : t("foundational")}</span>
                </div>
              </div>`).join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="content-grid-2">
            <div class="knowledge-panel known">
              <p class="eyebrow">${t("whatWeKnow")}</p>
              <h2 class="h2">${t("established")}</h2>
              <ul>${problem.known.map((item) => `<li>${item}</li>`).join("")}</ul>
            </div>
            <div class="knowledge-panel unknown">
              <p class="eyebrow">${t("whatDontKnow")}</p>
              <h2 class="h2">${t("stillOpen")}</h2>
              <ul>${problem.unknown.map((item) => `<li>${item}</li>`).join("")}</ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="section-head">
            <div>
              <p class="eyebrow">${t("howGotHere")}</p>
              <h2 class="h2">${t("milestonesNotProgressBar")}</h2>
            </div>
          </div>
          <div class="timeline">
            ${problem.milestones.map((milestone) => `
              <div class="timeline-row">
                <div class="timeline-year">${milestone.year}</div>
                <div class="timeline-axis"></div>
                <div class="timeline-text">${milestone.text}</div>
              </div>`).join("")}
          </div>
        </div>
      </section>

      <section class="section contribution-band">
        <div class="shell">
          <div class="section-head">
            <div>
              <p class="eyebrow">${t("optionalContribution")}</p>
              <h2 class="h2">${t("canYouHelp")}</h2>
            </div>
          </div>
          <div class="event-block">
            <span class="badge verified">${t("knowledgeInfrastructure")}</span>
            <h3 style="font-size:24px;margin-top:18px">${task.title}</h3>
            <p>${task.description}</p>
            <div class="button-row">
              <button class="button secondary" type="button" data-task-open="${problem.id}">${t("viewTask")}</button>
            </div>
          </div>
        </div>
      </section>`;
  }

  function renderEvent(item, problem) {
    record("progress_event_open", { eventId: item.id, problemId: problem.id });
    return `
      <section class="event-page">
        <div class="shell event-layout">
          <div class="event-main">
            <div>
              ${statusBadge(item)}
              <p class="eyebrow" style="margin-top:18px">${problem.shortTitle} · ${item.date}</p>
              <h1 class="h1" style="font-size:clamp(38px,5vw,66px)">${item.title}</h1>
              <p class="lede">${item.summary}</p>
              <div class="button-row">
                <a class="button secondary" href="#/problem/${problem.id}">${t("backProblem")}</a>
                ${followButton(problem)}
              </div>
            </div>

            <div class="event-block">
              <p class="eyebrow">${t("whatChangedLabel")}</p>
              <h3>${t("graphMoves")}</h3>
              <p>${item.changed}</p>
            </div>

            <div class="event-block caution">
              <p class="eyebrow">${t("whatNotMean")}</p>
              <h3>${t("boundary")}</h3>
              <p>${item.notMeaning}</p>
            </div>

            <div class="event-block">
              <p class="eyebrow">${t("whereApplies")}</p>
              <h3>${t("scopeMatters")}</h3>
              <p>${item.scope}</p>
            </div>
          </div>

          <aside class="event-side">
            <div class="event-block trust">
              <p class="eyebrow">${t("whyTrust")}</p>
              <h3>${item.knowledge === "verified" ? t("verifiedProgressTitle") : t("stillUnderReview")}</h3>
              <p>${item.trust}</p>
            </div>
            <div class="event-block">
              <p class="eyebrow">${t("sourceType")}</p>
              <h3>${item.source}</h3>
              <p class="small muted">${t("prototypeSource")}</p>
              <div class="button-row">
                <button class="button secondary" type="button" data-source-open="${item.id}">${t("openEvidence")}</button>
              </div>
            </div>
            <div class="event-block">
              <p class="eyebrow">${t("relatedFrontier")}</p>
              <h3>${frontierTitle(problem, item.frontierId)}</h3>
              <a class="text-link" href="#/problem/${problem.id}">${t("fullFrontierMap")}</a>
            </div>
          </aside>
        </div>
      </section>`;
  }

  function renderNotFound() {
    return `
      <section class="section">
        <div class="shell empty-state">
          <p class="eyebrow">404</p>
          <h1 class="h1">${t("notFound")}</h1>
          <div class="button-row" style="justify-content:center">
            <a class="button primary" href="#/">${t("backDiscover")}</a>
          </div>
        </div>
      </section>`;
  }

  window.HOP_VIEWS_DETAIL = { renderProblem, renderEvent, renderNotFound };
})();
