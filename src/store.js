import { create } from "zustand";

export const useControlsStore = create((set) => ({
  autoRotate: true, // Rotation activée par défaut
  toggleAutoRotate: () => set((state) => ({ autoRotate: !state.autoRotate })),
}));
