import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "html, body": {
    fontFamily: 'Zen Maru Gothic, "Hiragino Kaku Gothic ProN","Hiragino Sans"',
    background: "background",
    color: "foreground",
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx,astro}",
    "./pages/**/*.{js,jsx,ts,tsx,astro}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      fonts: {
        body: {
          value: 'Zen Maru Gothic, "Hiragino Kaku Gothic ProN","Hiragino Sans"',
        },
      },
      colors: {
        //white
        background: { value: "rgb(250, 250, 250)" },
        //black
        foreground: { value: "rgb(46, 46, 46)" },

        //yellow
        primary: { value: "rgb(199, 185, 36)" },
        primaryForeground: { value: "rgb(199, 185, 36)" },

        //blue
        secondary: { value: "rgb(199, 185, 36)" },
        secondaryForeground: { value: "rgb(199, 185, 36)" },

        border: { value: "rgb(46,46,46)" },
        input: { value: "rgb(46, 46, 46)" },
        ring: { value: "rgb(199, 185, 36)" },
      },
    },
  },

  globalCss,

  // The output directory for your css system
  outdir: "styled-system",
});
