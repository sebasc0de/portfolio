import "./styles.css";
import { I18nextProvider } from "react-i18next";
import global_en from "../translations/en/global.json";
import global_es from "../translations/es/global.json";
import i18next from "i18next";
import type { AppProps } from "next/app";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18next}>
      <Component {...pageProps} />;
    </I18nextProvider>
  );
}
