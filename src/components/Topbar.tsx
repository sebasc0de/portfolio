import { useTranslation } from "react-i18next";

export const Topbar = () => {
  const [t] = useTranslation("global");

  return (
    <div className="font-medium top-0 z-50 bg-blue-600 text-white text-center p-3">
      {t("topbar.message")}
    </div>
  );
};
