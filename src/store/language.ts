import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export enum LangsE {
  RU = 'ru',
  EN = 'en',
  TM = 'tm',
}

export enum LangsTitleE {
  RU = 'Русский',
  EN = 'English',
  TM = 'Türkmen',
}

interface LangType {
  title: string;
  id: LangsE;
}

interface LangStore {
  lang: LangType;
  setLang: (obj: LangType) => void;
}

export const LangStore = create<LangStore>()(
  persist(
    (set) => ({
      lang: {
        title: LangsTitleE.RU,
        id: LangsE.RU,
      },

      setLang: (obj) => set({ lang: obj }),
    }),
    {
      name: 'lang-store',
    },
  ),
);
