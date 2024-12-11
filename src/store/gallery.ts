import { create } from 'zustand';

interface Store {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const GalleryStore = create<Store>()((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
}));
