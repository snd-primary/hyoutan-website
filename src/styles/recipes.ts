import { cva } from "@styled-system/css";

export const recipes = {
  heading2: cva({
    base: {
      fontWeight: "bold",
      transform: "translateZ(200px)",
      fontSize: { base: "xx-large", lg: "xxx-large" },
    },
  }),

  heading3: cva({
    base: {
      fontWeight: "bold",
      transform: "translateZ(200px)",
      fontSize: { base: "x-large", lg: "xx-large" },
    },
  }),
};
