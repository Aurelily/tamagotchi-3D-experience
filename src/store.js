import { create } from "zustand";

export const useTamagotchiStore = create((set) => ({
  theme: "mocha", // Theme par défaut
  autoRotate: false,

  textures: {
    main: "./textures/cat/cat_main.png",
    screen: "./textures/cat/cat",
    sleep: "./textures/cat/sleep/cat-sleep",
    eat: "./textures/cat/eat/cat-eat",
    ring: "#8B5A2B",
    button: "#FFFFFF",
  },

  logoUrl: "./logos/logo-mocha.png",
  frameCount: 26,
  bgUrl: "./backgrounds/bg-mocha.png",

  toggleAutoRotate: () => set((state) => ({ autoRotate: !state.autoRotate })),

  setTheme: (theme) => {
    const themes = {
      mocha: {
        main: "./textures/cat/cat_main.png",
        screen: "./textures/cat/cat",
        sleep: "./textures/cat/sleep/cat-sleep",
        eat: "./textures/cat/eat/cat-eat",
        frameCount: 26,
        ring: "#8B5A2B",
        button: "#FFFFFF",
        logo: "./logos/logo-mocha.png",
        background: "./backgrounds/bg-mocha.png",
      },
      fruty: {
        main: "./textures/fruty/fruty_main.png",
        screen: "./textures/fruty/fruty",
        sleep: "./textures/fruty/sleep/fruty-sleep",
        eat: "./textures/fruty/eat/fruty-eat",
        frameCount: 43,
        ring: "#27a510",
        button: "#27a510",
        logo: "./logos/logo-fruty.png",
        background: "./backgrounds/bg-fruty.png",
      },
      egg: {
        main: "./textures/chick/chick_main.png",
        screen: "./textures/chick/chick",
        sleep: "./textures/chick/sleep/chick-sleep",
        eat: "./textures/chick/eat/chick-eat",
        frameCount: 52,
        ring: "#FFFACD",
        button: "#ffb700",
        logo: "./logos/logo-eggs.png",
        background: "./backgrounds/bg-egg.png",
      },
      tea: {
        main: "./textures/tea/tea_main.png",
        screen: "./textures/tea/tea",
        sleep: "./textures/tea/sleep/tea-sleep",
        eat: "./textures/tea/eat/tea-eat",
        frameCount: 26,
        ring: "#98FB98",
        button: "#27a510",
        logo: "./logos/logo-green.png",
        background: "./backgrounds/bg-tea.png",
      },
    };

    if (themes[theme]) {
      set({
        theme,
        textures: {
          main: themes[theme].main,
          screen: themes[theme].screen,
          sleep: themes[theme].sleep,
          eat: themes[theme].eat,
          ring: themes[theme].ring,
          button: themes[theme].button,
        },
        logoUrl: themes[theme].logo,
        frameCount: themes[theme].frameCount,
        bgUrl: themes[theme].background,
      });
    } else {
      console.warn(`⚠️ Thème inconnu : ${theme}`);
    }
  },

  
}));
