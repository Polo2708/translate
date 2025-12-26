import { useEffect, useState } from "react";
import { useTranslateStore } from "../../../store/translate-store";

export const useTranslateController = () => {
  const { textTranslate, translateLanguage } = useTranslateStore();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!chrome?.storage) return;

    const handleChange = async (
      changes: { [key: string]: chrome.storage.StorageChange },
      area: string
    ) => {
      if (area === "local" && changes.selectedText?.newValue) {
        setLoading(true);
        await translateLanguage(changes.selectedText.newValue);
        setLoading(false);
      }
    };

    chrome.storage.onChanged.addListener(handleChange);

    return () => {
      chrome.storage.onChanged.removeListener(handleChange);
    };
  }, [translateLanguage]);

  const refreshText = () => {
    setLoading((prev) => !prev);
  };

  return {
    textTranslate,
    loading,
    refreshText,
    setLoading,
  };
};
