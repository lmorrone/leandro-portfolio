import english from "./en.json";
import spanish from "./es.json";

const LANG = {
  ENGLISH: "en",
  SPANISH: "es",
};

export const getI18n = (lang = LANG.SPANISH) => {
  switch (lang) {
    case LANG.SPANISH:
      return spanish;
    case LANG.ENGLISH:
      return english;
    default:
      return spanish;
  }
};

export const getInvertedLanguage = (lang = LANG.SPANISH) => {
  switch (lang) {
    case LANG.SPANISH:
      return LANG.ENGLISH;
    case LANG.ENGLISH:
      return LANG.SPANISH;
    default:
      return LANG.ENGLISH;
  }
}