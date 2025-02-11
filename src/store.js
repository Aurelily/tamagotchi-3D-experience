import { create } from "zustand";

export const useTamagotchiStore = create((set) => ({
  theme: "mocha", // Theme par défaut
  autoRotate: false,

  textures: {
    main: "./textures/cat/cat_main.png",
    screen: "./textures/cat/cat",
    ring: "#8B5A2B",
    button: "#FFFFFF",
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
        ring: "#bd8a5b",
        button: "#FFFFFF",
        logo: "./logos/logo-mocha.png",
      },
      fruty: {
        main: "./textures/fruty/fruty_main.png",
        screen: "./textures/fruty/fruty",
        frameCount: 43,
        ring: "#27a510",
        button: "#27a510",
        logo: "./logos/logo-fruty.png",
      },
      egg: {
        main: "./textures/chick/chick_main.png",
        screen: "./textures/chick/chick",
        frameCount: 52,
        ring: "#FFFACD",
        button: "#ffb700",
        logo: "./logos/logo-eggs.png",
      },
      tea: {
        main: "./textures/tea/tea_main.png",
        screen: "./textures/tea/tea",
        frameCount: 26,
        ring: "#98FB98",
        button: "#27a510",
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
          button: themes[theme].button,
        },
        logoUrl: themes[theme].logo,
        frameCount: themes[theme].frameCount,
      });
    } else {
      console.warn(`⚠️ Thème inconnu : ${theme}`);
    }
  },
}));
