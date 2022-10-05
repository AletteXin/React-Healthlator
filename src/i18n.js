import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import { translations_bm } from "./assets/translations/bm"
import { translations_en } from "./assets/translations/en"
import { translations_cn } from "./assets/translations/cn"
import LanguageDetector from "i18next-browser-languagedetector";


i18n

    .use(LanguageDetector)
    .use(initReactI18next)
    .init({

        resources: {
            en: {
                translation: translations_en
            },
            bm: {
                translation: translations_bm
            },

            cn: {
                translation: translations_cn
            },
        },

        // lng: "en",    //default language
        // fallbackLng: "en", //when specified language translations not present 
        // //then fallbacklang translations loaded.
        // debug: true,
        // backend: {
        //     /* translation file path */
        //     // loadPath: "./assets/{{ns}}/{{lng}}.json",
        //     loadPath: "./assets/translations/en.json",
        // },

        // /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
        // ns: ["translations"],
        // defaultNS: "translations",
        // keySeparator: false,
        // interpolation: {
        //     escapeValue: false,
        //     formatSeparator: ",",
        // },
        // react: {
        //     wait: true,
        // },
    });


export default i18n;