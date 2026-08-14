(() => {
  const LOCALE_KEY = "hop_prototype_locale_v1";
  const data = window.HOP_DATA;
  const englishData = JSON.parse(JSON.stringify(data));

  const strings = {
    en: {
      prototype: "Prototype",
      discover: "Discover",
      myFrontiers: "My Frontiers",
      searchAria: "Search problems",
      aiExplain: "AI EXPLAIN",
      explainThis: "Explain this",
      closeExplanation: "Close explanation",
      exploreUnknown: "EXPLORE THE UNKNOWN",
      findProblem: "Find a problem",
      closeSearch: "Close search",
      searchPlaceholder: "Try “dark matter”, “life”, “mathematics”…",
      heroEyebrow: "THE FRONTIER OF HUMAN KNOWLEDGE",
      heroTitle: "What does humanity still not know?",
      heroLede: "Follow humanity's unanswered questions — and see when the frontier actually moves.",
      exploreProblem: "Explore a problem",
      featuredQuestion: "FEATURED QUESTION",
      seeFrontier: "See where the frontier is →",
      whatChanged: "What changed →",
      verifiedProgress: "VERIFIED PROGRESS",
      actuallyChanged: "What actually changed",
      trustedEvents: "Trusted events that changed the current knowledge graph.",
      chooseQuestion: "Choose a question, not a discipline.",
      all: "All",
      noThemeProblems: "No prototype problems in this theme yet.",
      researchActivity: "RESEARCH ACTIVITY",
      newNotAlwaysProgress: "New does not always mean progress.",
      claimsWorthWatching: "Claims and candidates can be worth watching without changing what we trust.",
      questionsYouWant: "Questions you want humanity to answer.",
      followingLede: "Your feed separates verified changes from research activity so a noisy new claim never looks like a solved problem.",
      followingFeed: "FOLLOWING FEED",
      meaningfulChanges: "Meaningful changes first",
      noEvents: "No prototype events for these follows yet.",
      preserveQuiet: "A real product should preserve quiet rather than manufacture updates.",
      followQuestions: "Follow the questions you want humanity to answer.",
      trustedFeedHere: "Your trusted progress feed will appear here. Start with one of the flagship questions below.",
      followProblem: "Follow problem",
      follow: "+ Follow",
      following: "✓ Following",
      verified: "Verified",
      underReview: "Under review",
      activeFrontiers: "active frontiers",
      latestChange: "Latest change",
      noRecentEvent: "No recent event",
      openEvent: "Open event →",
      researchFrontier: "Research frontier",
      whyMatters: "WHY THIS MATTERS",
      latestVerifiedProgress: "LATEST VERIFIED PROGRESS",
      researchNotVerified: "RESEARCH ACTIVITY · NOT YET VERIFIED PROGRESS",
      whereFrontier: "WHERE THE FRONTIER IS",
      headlineBreaks: "The headline question breaks into active fronts.",
      lastSignal: "last signal",
      foundational: "foundational",
      whatWeKnow: "WHAT WE KNOW",
      established: "Established enough to build on",
      whatDontKnow: "WHAT WE DON'T KNOW",
      stillOpen: "Still open",
      howGotHere: "HOW WE GOT HERE",
      milestonesNotProgressBar: "Milestones, not a fake progress bar",
      optionalContribution: "OPTIONAL CONTRIBUTION",
      canYouHelp: "Can you help without pretending to solve the whole thing?",
      knowledgeInfrastructure: "Knowledge Infrastructure",
      viewTask: "View task concept",
      whatChangedLabel: "WHAT CHANGED",
      graphMoves: "How the knowledge graph moves",
      whatNotMean: "WHAT THIS DOES NOT MEAN",
      boundary: "The important boundary",
      whereApplies: "WHERE THIS APPLIES",
      scopeMatters: "Scope matters",
      whyTrust: "WHY WE TRUST THIS",
      verifiedProgressTitle: "Verified progress",
      stillUnderReview: "Still under review",
      sourceType: "SOURCE TYPE",
      prototypeSource: "Prototype content. Production events would link primary sources, provenance and verification history here.",
      openEvidence: "Open evidence concept",
      relatedFrontier: "RELATED FRONTIER",
      fullFrontierMap: "See the full frontier map →",
      backProblem: "← Back to problem",
      notFound: "This frontier isn't in the prototype.",
      backDiscover: "Back to Discover",
      simple: "Simple",
      highschool: "High school",
      undergraduate: "Undergraduate",
      specialist: "Specialist",
      askGraph: "ASK FROM THE GRAPH",
      promptMatter: "Why does this matter?",
      promptUnknown: "What is still unknown?",
      promptSolve: "What would count as solving this?",
      promptTrust: "How do we know what to trust?",
      aiPrototypeNote: "Prototype: answers are scripted from the current Problem Graph. A production AI should be grounded in the same graph and primary sources.",
      searchNoMatch: "No prototype problem matches that search.",
      unfollowed: "Unfollowed",
      taskDeferred: "Task workflow is intentionally deferred in v0 — behavior first, research workflow later.",
      sourceDeferred: "Production version: primary source, provenance and verification history open here.",
      unknownCentral: "The central unknowns include:",
      trustAnswer: "The prototype separates research activity from verified progress. Trusted changes should carry provenance, scope, verification status and a record of challenges or replication where relevant.",
      solveCollatz: "A rigorous proof covering every positive integer, or a verified counterexample, would resolve the headline conjecture. Bounded computation alone cannot do that.",
      solveSeti: "A candidate technosignature would need to survive instrumental, human-interference and natural-explanation checks and receive independent confirmation. Finite null searches can constrain possibilities but cannot prove universal absence.",
      solveConsciousness: "Specific empirical questions can be resolved when competing theories make operationalized predictions and sufficiently sensitive experiments distinguish them. The foundational question of why subjective experience exists has no shared terminal verifier here.",
      solvePlural: "This is a plural-resolution problem. Individual Open Questions can be supported, constrained or resolved even when the Grand Problem has no single terminal event.",
      sourcePrimary: "primary source",
      statusOpen: "OPEN"
    },
    ko: {
      prototype: "프로토타입",
      discover: "탐색",
      myFrontiers: "내가 팔로우한 난제",
      searchAria: "난제 검색",
      aiExplain: "AI로 이해하기",
      explainThis: "쉽게 설명하기",
      closeExplanation: "설명 닫기",
      exploreUnknown: "미지의 영역 탐색",
      findProblem: "난제 찾기",
      closeSearch: "검색 닫기",
      searchPlaceholder: "예: 암흑물질, 생명의 기원, 수학…",
      heroEyebrow: "인류 지식의 최전선",
      heroTitle: "인류는 아직 무엇을 모를까?",
      heroLede: "인류가 아직 풀지 못한 질문을 따라가고, 지식의 경계가 실제로 움직이는 순간을 확인하세요.",
      exploreProblem: "난제 하나 살펴보기",
      featuredQuestion: "주목할 질문",
      seeFrontier: "현재 최전선 보기 →",
      whatChanged: "무엇이 달라졌나 →",
      verifiedProgress: "검증된 진전",
      actuallyChanged: "실제로 무엇이 달라졌나",
      trustedEvents: "현재 지식 그래프를 실제로 바꾼 검증된 사건들입니다.",
      chooseQuestion: "학문보다 질문을 먼저 고르세요.",
      all: "전체",
      noThemeProblems: "이 분야에는 아직 프로토타입 난제가 없습니다.",
      researchActivity: "연구 활동",
      newNotAlwaysProgress: "새로운 연구가 항상 진전은 아닙니다.",
      claimsWorthWatching: "새로운 주장과 후보는 지켜볼 가치가 있어도, 검증되기 전에는 우리가 믿는 지식을 바꾸지 않습니다.",
      questionsYouWant: "답을 알고 싶은 인류의 질문들.",
      followingLede: "검증된 변화와 단순 연구 활동을 분리해, 화제가 된 새 주장이 해결된 사실처럼 보이지 않게 합니다.",
      followingFeed: "팔로우 피드",
      meaningfulChanges: "의미 있는 변화부터",
      noEvents: "팔로우한 난제에 아직 프로토타입 업데이트가 없습니다.",
      preserveQuiet: "실제 서비스라면 업데이트를 억지로 만들지 않고 조용한 문제는 조용하게 두어야 합니다.",
      followQuestions: "답이 궁금한 질문을 팔로우하세요.",
      trustedFeedHere: "검증된 진전 피드가 여기에 쌓입니다. 아래 대표 난제 중 하나부터 시작해보세요.",
      followProblem: "이 난제 팔로우",
      follow: "+ 팔로우",
      following: "✓ 팔로우 중",
      verified: "검증됨",
      underReview: "검토 중",
      activeFrontiers: "개 연구 최전선",
      latestChange: "최근 변화",
      noRecentEvent: "최근 변화 없음",
      openEvent: "업데이트 보기 →",
      researchFrontier: "연구 최전선",
      whyMatters: "왜 중요한가",
      latestVerifiedProgress: "최근 검증된 진전",
      researchNotVerified: "연구 활동 · 아직 검증된 진전 아님",
      whereFrontier: "현재 연구의 최전선",
      headlineBreaks: "거대한 질문은 여러 개의 실제 연구 전선으로 나뉩니다.",
      lastSignal: "최근 신호",
      foundational: "근본 논의",
      whatWeKnow: "현재까지 아는 것",
      established: "다음 연구의 기반이 될 만큼 확립된 내용",
      whatDontKnow: "아직 모르는 것",
      stillOpen: "여전히 열린 질문",
      howGotHere: "여기까지 온 과정",
      milestonesNotProgressBar: "가짜 해결률 대신 중요한 이정표를 봅니다",
      optionalContribution: "선택적 참여",
      canYouHelp: "난제 전체를 풀지 않아도 의미 있게 기여할 수 있을까?",
      knowledgeInfrastructure: "지식 인프라 기여",
      viewTask: "기여 과제 예시 보기",
      whatChangedLabel: "무엇이 달라졌나",
      graphMoves: "지식 그래프가 움직인 지점",
      whatNotMean: "이 결과가 의미하지 않는 것",
      boundary: "과장하지 않기 위한 중요한 경계",
      whereApplies: "어디까지 적용되는가",
      scopeMatters: "범위를 구분해야 합니다",
      whyTrust: "왜 신뢰할 수 있나",
      verifiedProgressTitle: "검증된 진전",
      stillUnderReview: "아직 검토 중",
      sourceType: "출처 유형",
      prototypeSource: "프로토타입 내용입니다. 실제 서비스에서는 1차 출처, provenance, 검증 이력이 여기에 연결됩니다.",
      openEvidence: "근거 구조 보기",
      relatedFrontier: "연결된 연구 최전선",
      fullFrontierMap: "전체 연구 전선 보기 →",
      backProblem: "← 난제로 돌아가기",
      notFound: "이 연구 전선은 아직 프로토타입에 없습니다.",
      backDiscover: "탐색으로 돌아가기",
      simple: "아주 쉽게",
      highschool: "고등학생 수준",
      undergraduate: "대학생 수준",
      specialist: "전문가 수준",
      askGraph: "문제 그래프에 물어보기",
      promptMatter: "왜 중요한가요?",
      promptUnknown: "아직 무엇을 모르나요?",
      promptSolve: "무엇이 해결로 인정되나요?",
      promptTrust: "무엇을 믿어야 하는지 어떻게 판단하나요?",
      aiPrototypeNote: "프로토타입에서는 현재 Problem Graph에 기반한 미리 작성된 설명을 보여줍니다. 실제 AI는 같은 그래프와 1차 출처에 근거해 답해야 합니다.",
      searchNoMatch: "검색어와 일치하는 프로토타입 난제가 없습니다.",
      unfollowed: "팔로우 해제",
      taskDeferred: "v0에서는 기여 워크플로를 의도적으로 미뤘습니다. 먼저 사용자 행동을 검증하고 이후 연구 워크플로를 붙입니다.",
      sourceDeferred: "실제 버전에서는 1차 출처, provenance, 검증 이력이 여기에서 열립니다.",
      unknownCentral: "핵심 미해결 질문은 다음과 같습니다:",
      trustAnswer: "이 프로토타입은 단순 연구 활동과 검증된 진전을 분리합니다. 신뢰할 수 있는 변화에는 출처, 적용 범위, 검증 상태, 반론이나 재현 이력이 함께 붙어야 합니다.",
      solveCollatz: "모든 양의 정수를 포괄하는 엄밀한 증명 또는 검증된 반례 하나가 나오면 콜라츠 추측은 해결됩니다. 유한 범위 계산만으로는 해결할 수 없습니다.",
      solveSeti: "테크노시그니처 후보는 장비 오류, 인간 간섭, 자연적 설명을 통과하고 독립적으로 재확인되어야 합니다. 유한한 null search는 가능성을 좁힐 수 있지만 우주 전체에 외계 기술이 없음을 증명할 수는 없습니다.",
      solveConsciousness: "경쟁 이론이 서로 다른 관측 가능한 예측을 내고 충분히 민감한 실험이 이를 구분하면 특정 실증 질문은 해결될 수 있습니다. 그러나 왜 주관적 경험이 존재하는가라는 근본 질문에는 모두가 합의한 최종 검증 기준이 없습니다.",
      solvePlural: "이 문제는 하나의 사건으로 끝나는 유형이 아닙니다. Grand Problem 전체가 열려 있어도 개별 Open Question은 지지되거나 제약되거나 해결될 수 있습니다.",
      statusOpen: "미해결"
    }
  };

  const tasks = {
    en: {
      "dark-matter": ["Reproduce a published constraint visualization", "Use a bounded public result to recreate one constraint plot and record the assumptions behind it."],
      "origin-of-life": ["Normalize reaction conditions across related experiments", "Extract temperature, pH, starting materials and yields from a curated paper set so adjacent pathways can be compared."],
      technosignatures: ["Add a published search to the Search Coverage map", "Extract target, frequency range, sensitivity, duration, signal model and outcome from one published search."],
      collatz: ["Reproduce a bounded computational checkpoint", "Run a published verification approach over a small assigned interval and return a reproducible result."],
      consciousness: ["Map a preregistered prediction to its experimental result", "Connect a theory claim, its prediction, measured result and interpretation so theory changes remain traceable."],
      default: ["Curate one source-backed evidence item", "Add one bounded contribution that can be independently checked against a primary source."]
    },
    ko: {
      "dark-matter": ["공개된 제약 그래프 하나 재현하기", "공개된 제한 범위의 결과를 이용해 제약 그래프 하나를 다시 만들고 그 결과가 의존하는 가정을 기록합니다."],
      "origin-of-life": ["관련 실험의 반응 조건 표준화하기", "선별된 논문에서 온도, pH, 출발물질, 수율을 추출해 인접한 화학 경로를 비교할 수 있게 합니다."],
      technosignatures: ["공개된 탐색 하나를 Search Coverage 지도에 추가하기", "한 편의 공개 연구에서 대상, 주파수 범위, 감도, 관측 시간, 신호 모델, 결과를 구조화합니다."],
      collatz: ["유한 계산 검증 하나 재현하기", "공개된 검증 방법을 작은 할당 구간에서 실행하고 독립적으로 재현 가능한 결과를 제출합니다."],
      consciousness: ["사전등록 예측과 실제 실험 결과 연결하기", "이론 주장, 사전 예측, 측정 결과, 해석을 연결해 이론 변화의 근거가 추적 가능하게 합니다."],
      default: ["1차 출처에 근거한 증거 하나 정리하기", "독립적으로 1차 출처와 대조할 수 있는 제한된 기여 하나를 추가합니다."]
    }
  };

  function readLocale() {
    const saved = window.localStorage.getItem(LOCALE_KEY);
    return saved === "ko" ? "ko" : "en";
  }

  let locale = readLocale();

  function resetDataToEnglish() {
    data.themes.forEach((theme, index) => {
      theme.label = englishData.themes[index].label;
    });
    data.problems.forEach((problem, index) => {
      const original = englishData.problems[index];
      ["domain", "title", "shortTitle", "status", "problemClass", "summary", "hook", "why"].forEach((key) => problem[key] = original[key]);
      problem.known.splice(0, problem.known.length, ...original.known);
      problem.unknown.splice(0, problem.unknown.length, ...original.unknown);
      problem.frontiers.forEach((frontier, i) => Object.assign(frontier, original.frontiers[i]));
      problem.milestones.forEach((milestone, i) => Object.assign(milestone, original.milestones[i]));
      Object.assign(problem.explain, original.explain);
    });
    data.events.forEach((item, index) => Object.assign(item, englishData.events[index]));
  }

  function applyKoreanData() {
    const ko = window.HOP_KO_DATA;
    data.themes.forEach((theme) => {
      theme.label = ko.themes[theme.id] || theme.label;
    });
    data.problems.forEach((problem) => {
      const tr = ko.problems[problem.id];
      if (!tr) return;
      ["domain", "title", "shortTitle", "status", "problemClass", "summary", "hook", "why"].forEach((key) => {
        if (tr[key]) problem[key] = tr[key];
      });
      if (tr.known) problem.known.splice(0, problem.known.length, ...tr.known);
      if (tr.unknown) problem.unknown.splice(0, problem.unknown.length, ...tr.unknown);
      problem.frontiers.forEach((frontier) => {
        const f = tr.frontiers?.[frontier.id];
        if (f) {
          frontier.title = f[0];
          frontier.question = f[1];
          frontier.status = frontier.status === "FOUNDATIONAL" ? "근본 논의" : "진행 중";
        }
      });
      if (tr.milestones) {
        problem.milestones.forEach((milestone, i) => {
          if (tr.milestones[i]) {
            milestone.year = tr.milestones[i][0];
            milestone.text = tr.milestones[i][1];
          }
        });
      }
      if (tr.explain) Object.assign(problem.explain, tr.explain);
    });
    data.events.forEach((item) => {
      const tr = ko.events[item.id];
      if (tr) Object.assign(item, tr);
    });
  }

  function localizeData(nextLocale = locale) {
    resetDataToEnglish();
    if (nextLocale === "ko") applyKoreanData();
  }

  function t(key) {
    return strings[locale]?.[key] ?? strings.en[key] ?? key;
  }

  function task(problemId) {
    const entry = tasks[locale][problemId] || tasks[locale].default;
    return { title: entry[0], description: entry[1] };
  }

  function applyStaticText() {
    document.documentElement.lang = locale === "ko" ? "ko" : "en";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      node.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
      node.setAttribute("aria-label", t(node.dataset.i18nAria));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
    });
    const toggle = document.getElementById("language-toggle");
    if (toggle) {
      toggle.textContent = locale === "ko" ? "EN" : "한국어";
      toggle.setAttribute("aria-label", locale === "ko" ? "Switch to English" : "한국어로 전환");
    }
  }

  function setLocale(nextLocale) {
    const normalized = nextLocale === "ko" ? "ko" : "en";
    if (normalized === locale) return;
    locale = normalized;
    window.localStorage.setItem(LOCALE_KEY, locale);
    localizeData(locale);
    applyStaticText();
    window.dispatchEvent(new CustomEvent("hop:localechange", { detail: { locale } }));
  }

  function toggleLocale() {
    setLocale(locale === "en" ? "ko" : "en");
  }

  function getLocale() {
    return locale;
  }

  localizeData(locale);

  window.HOP_I18N = {
    t,
    task,
    setLocale,
    toggleLocale,
    getLocale,
    localizeData,
    applyStaticText
  };
})();