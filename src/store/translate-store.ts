import { create } from "zustand";
import { translateText } from "../libs/translate-text";

interface TranslateLangage {
  loading: boolean;
  textTranslate: string;
  translateLanguage: (text: string) => void;
}

export const useTranslateStore = create<TranslateLangage>((set) => ({
  loading: false,
  textTranslate: "",
  translateLanguage: async (text: string) => {
    set({ loading: true });
    try {
      const res = await translateText(text);
      set({ textTranslate: res });
    } catch (error) {
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));
