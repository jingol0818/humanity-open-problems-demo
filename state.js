(() => {
  const { problems, events } = window.HOP_DATA;
  const FOLLOW_KEY = "hop_prototype_follows_v1";
  const EVENT_KEY = "hop_prototype_events_v1";

  function readJson(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_) {
      return fallback;
    }
  }

  const followed = new Set(readJson(FOLLOW_KEY, []));

  function saveFollows() {
    window.localStorage.setItem(FOLLOW_KEY, JSON.stringify([...followed]));
  }

  function record(name, payload = {}) {
    const history = readJson(EVENT_KEY, []);
    history.push({ name, payload, at: new Date().toISOString() });
    window.localStorage.setItem(EVENT_KEY, JSON.stringify(history.slice(-200)));
  }

  function problemById(id) {
    return problems.find((problem) => problem.id === id);
  }

  function eventById(id) {
    return events.find((item) => item.id === id);
  }

  function eventsForProblem(id) {
    return events.filter((item) => item.problemId === id);
  }

  function toggleFollow(id) {
    if (followed.has(id)) followed.delete(id);
    else followed.add(id);
    saveFollows();
    record(followed.has(id) ? "follow_problem" : "unfollow_problem", { problemId: id });
    return followed.has(id);
  }

  window.HOP_STATE = {
    followed,
    record,
    problemById,
    eventById,
    eventsForProblem,
    toggleFollow
  };
})();
