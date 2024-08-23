// manage the state variable using zustand

import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  role: null,
  setRole: (role) => set({ role }),
  assets: [],
  setAssets: (assets) => set({ assets }),
}));

export default useStore;
