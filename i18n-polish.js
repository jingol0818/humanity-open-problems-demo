(() => {
  const i18n = window.HOP_I18N;
  if (!i18n) return;

  const baseApplyStaticText = i18n.applyStaticText.bind(i18n);

  function applyStaticText() {
    baseApplyStaticText();

    const ko = i18n.getLocale() === "ko";
    document.title = ko
      ? "Humanity Open Problems — 인류의 미해결 문제"
      : "Humanity Open Problems — Follow the frontier";

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        "content",
        ko
          ? "인류가 아직 풀지 못한 질문을 발견하고 팔로우하며, 검증된 연구 진전이 실제로 무엇을 바꿨는지 따라가는 공개 Problem Network."
          : "Discover and follow humanity's unanswered questions, and see what verified research progress actually changed."
      );
    }

    const label = ko ? "EN" : "한국어";
    const aria = ko ? "Switch to English" : "한국어로 전환";
    document.querySelectorAll("#language-toggle, [data-language-toggle]").forEach((button) => {
      button.textContent = label;
      button.setAttribute("aria-label", aria);
    });
  }

  i18n.applyStaticText = applyStaticText;
})();
