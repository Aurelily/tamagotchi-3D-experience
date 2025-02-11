import { create } from "zustand";

export const useTamagotchiStore = create((set) => ({
  theme: "mocha", // Valeur par défaut
  autoRotate: false,

  textures: {
    main: "./textures/cat/cat_main.png",
    screen: "./textures/cat/cat",
    ring: "#8B5A2B",
    button: "#FFFFFF", // ✅ Remplace button1, button2, button3 par une seule couleur
  },

  logoUrl: "./logos/logo-mocha.png",
  frameCount: 26,

  toggleAutoRotate: () => set((state) => ({ autoRotate: !state.autoRotate })),

  setTheme: (theme) => {
    const themes = {
      mocha: {
        main: "./textures/cat/cat_main.png",
        screen: "./textures/cat/cat",
        frameCount: 26,
        ring: "#8B5A2B",
        button: "#FFFFFF", // ✅ Tous les boutons prennent cette couleur
        logo: "./logos/logo-mocha.png",
      },
      fruty: {
        main: "./textures/fruty/fruty_main.png",
        screen: "./textures/fruty/fruty",
        frameCount: 43,
        ring: "#FF69B4",
        button: "#FF1493",
        logo: "./logos/logo-fruty.png",
      },
      egg: {
        main: "./textures/chick/chick_main.png",
        screen: "./textures/chick/chick",
        frameCount: 52,
        ring: "#FFFACD",
        button: "#FFD700",
        logo: "./logos/logo-eggs.png",
      },
      tea: {
        main: "./textures/tea/tea_main.png",
        screen: "./textures/tea/tea",
        frameCount: 26,
        ring: "#98FB98",
        button: "#32CD32",
        logo: "./logos/logo-green.png",
      },
    };

    if (themes[theme]) {
      set({
        theme,
        textures: {
          main: themes[theme].main,
          screen: themes[theme].screen,
          ring: themes[theme].ring,
          button: themes[theme].button, // ✅ Tous les boutons prennent cette couleur
        },
        logoUrl: themes[theme].logo,
        frameCount: themes[theme].frameCount,
      });
    }
  },

  setTextures: (newTextures) =>
    set((state) => ({
      textures: { ...state.textures, ...newTextures },
    })),

  setLogoUrl: (newLogoUrl) => set(() => ({ logoUrl: newLogoUrl })),
}));
