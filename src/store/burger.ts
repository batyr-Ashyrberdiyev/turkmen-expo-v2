import { create } from 'zustand';

interface Store {
  burger: boolean;
  setBurger: (value: boolean) => void;
}

export const BurgerStore = create<Store>()((set) => ({
  burger: false,
  setBurger: (value) => set((state) => ({ burger: (state.burger = value) })),
}));
