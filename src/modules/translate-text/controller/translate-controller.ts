import { useEffect } from "react";
import { useTranslateStore } from "../../../store/translate-store";

type TextSelectedMessage = {
  type: "TEXT_SELECTED";
  payload: string;
};

export const useTranslateController = () => {
  const { textTranslate, translateLanguage } = useTranslateStore();

  useEffect(() => {
    const handler = (msg: TextSelectedMessage) => {
      if (msg?.type === "TEXT_SELECTED") {
        console.log("Texto recibido:", msg.payload);
        translateLanguage(msg.payload);
      }
    };

    chrome.runtime.onMessage.addListener(handler);

    return () => {
      chrome.runtime.onMessage.removeListener(handler);
    };
  }, [translateLanguage]);

  return {
    textTranslate,
  };
};
