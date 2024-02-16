import english from "./en.json";
import spanish from "./es.json";

const LANG = {
  ENGLISH: "en",
  SPANISH: "es",
};

export const getCv = (lang = LANG.SPANISH) => {
  switch (lang) {
    case LANG.SPANISH:
      return spanish;
    case LANG.ENGLISH:
      return english;
    default:
      return spanish;
  }
};
