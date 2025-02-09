import { create } from "zustand";

export const useControlsStore = create((set) => ({
  autoRotate: false,
  toggleAutoRotate: () =>
    set((state) => ({ autoRotate: !state.autoRotate })),

  // ✅ État pour stocker le modèle chargé
  modelUrl: "./models/Tamagotchi/tamagotchi-mocha.glb",
  setModelUrl: (url) => set({ modelUrl: url }),

  logoUrl: "./logos/logo-mocha.png", // Logo par défaut
setLogoUrl: (url) => set({ logoUrl: url }),

}));
