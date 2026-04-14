import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ dark }) {
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const baseStyle = {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 0,
    fontSize: 14,
    opacity: 0.7,
    color: dark ? "#ff1a1a" :  "#000"   // ← ВАЖНО
  };

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <button
        onClick={() => changeLang("es")}
        style={{
          ...baseStyle,
          opacity: i18n.language === "es" ? 1 : 0.6,
          fontWeight: i18n.language === "es" ? 600 : 400,
        }}
      >
        ES
      </button>

      <button
        onClick={() => changeLang("en")}
        style={{
          ...baseStyle,
          opacity: i18n.language === "en" ? 1 : 0.6,
          fontWeight: i18n.language === "en" ? 600 : 400,
        }}
      >
        EN
      </button>
    </div>
  );
}
