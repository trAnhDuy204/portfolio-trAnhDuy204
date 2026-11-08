import { watch } from "vue";
import { loadTranslations } from "../utils/load";
import { locale, translations } from "../store";
import { onMounted } from "vue";
import { LOCALES, LOCALE_DEFAULT } from "../constants";

import type { Locale } from "../types";

export const useTranslations = () => {
  onMounted(() => {
    const savedLocale = window.localStorage.getItem("portfolio-locale");
    const browserLanguage = navigator.language.split("-")[0]?.toLowerCase();
    // Keep the requested internal key "vn", while recognizing standard Vietnamese locale codes.
    const preferredLocale = browserLanguage === "vi" ? "vn" : browserLanguage;
    const candidate = savedLocale === "de" || savedLocale === "vi" ? "vn" : savedLocale;

    locale.value = candidate && Object.hasOwn(LOCALES, candidate)
      ? (candidate as Locale)
      : preferredLocale && Object.hasOwn(LOCALES, preferredLocale)
        ? (preferredLocale as Locale)
        : LOCALE_DEFAULT;
    document.documentElement.lang = LOCALES[locale.value].iso;
  });

  watch(locale, () => {
    if (!locale.value) return;
    window.localStorage.setItem("portfolio-locale", locale.value);
    document.documentElement.lang = LOCALES[locale.value].iso;
  });

  watch(
    locale,
    async (newLocale) => {
      if (!newLocale) return;
      translations.value = (await loadTranslations("common", newLocale)) ?? {};
    },
    { immediate: true },
  );
};
