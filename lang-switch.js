document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("language-select");

  if (!languageSelector) return;

  // Функция смены языка и замены текста
  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang-ru]").forEach((el) => {
      const translated = el.getAttribute(`data-lang-${lang}`);
      if (translated) {
        el.innerHTML = translated;
      }
    });
  }

  // Если в localStorage есть сохраненный язык — применяем его и ставим в селект
  const savedLang = localStorage.getItem("selectedLanguage");
  if (savedLang) {
    languageSelector.value = savedLang;
    setLanguage(savedLang);
  }

  // Слушаем изменение выбора языка
  languageSelector.addEventListener("change", function () {
    const lang = this.value;
    localStorage.setItem("selectedLanguage", lang);
    setLanguage(lang);
  });
});
