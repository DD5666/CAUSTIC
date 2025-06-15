document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("language-select");


  // Смена языка
  if (languageSelector) {
    function setLanguage(lang) {
      document.documentElement.lang = lang;
      document.querySelectorAll("[data-lang-ru]").forEach((el) => {
        const translated = el.getAttribute(`data-lang-${lang}`);
        if (translated) el.innerHTML = translated;
      });
    }

    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang) {
      languageSelector.value = savedLang;
      setLanguage(savedLang);
    }

    languageSelector.addEventListener("change", function () {
      const lang = this.value;
      localStorage.setItem("selectedLanguage", lang);
      setLanguage(lang);
    });
  }
 
});
