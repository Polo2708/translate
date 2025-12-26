import { create } from "zustand";
import { translateText } from "../libs/translate-text";

interface TranslateLangage {
  loading: boolean;
  textTranslate: string;
  translateLanguage: (text: any) => void;
  refresh: () => void;
}

export const useTranslateStore = create<TranslateLangage>((set) => ({
  loading: false,
  textTranslate: "",
  translateLanguage: async (text: string) => {
    console.log(text);
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
  refresh: async () => {
    set({ loading: true });
    try {
      // const res = await translateText(text);
    } catch (error) {
      console.error("Error al refrescar el texto");
    } finally {
      set({ loading: false });
    }
  },
}));
