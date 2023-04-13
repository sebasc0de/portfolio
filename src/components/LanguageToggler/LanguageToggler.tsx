import { Button } from "../UI/Button";
import { useState } from "react";
import i18next from "i18next";

export const LanguageToggler = () => {
  // Change language state
  const [inEnlgish, setInEnglish] = useState(false);

  // Loader state
  const [loading, setLoading] = useState(false);

  // Toggle language handler
  const toggleLanguageHandler = (lng: string) => {
    setLoading(true);
    setInEnglish(!inEnlgish);
    i18next.changeLanguage(lng);
    setLoading(false);
  };

  return (
    <>
      <div className="fixed bottom-1 left-1 z-20">
        {inEnlgish ? (
          <Button action={() => toggleLanguageHandler("es")} text="English" />
        ) : (
          <Button action={() => toggleLanguageHandler("en")} text="Español" />
        )}
      </div>
    </>
  );
};
