import localFont from "next/font/local";

export const adiFont = localFont({
  src: [
    {
      path: "../public/fonts/adi_font.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/adi_font_italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/adi_bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/adi_bold_italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});
