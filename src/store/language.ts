import { create } from 'zustand';

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

export const LangStore = create<LangStore>()((set) => ({
  lang: {
    title: LangsTitleE.RU,
    id: LangsE.RU,
  },

  setLang: (obj) => set((state) => ({ lang: (state.lang = obj) })),
}));