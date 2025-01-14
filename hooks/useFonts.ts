import { useEffect } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"], 
  variable: "--font-roboto", 
  display: "swap", 
  weight: ["400", "500", "700"],
});

export const useFonts = () => {
  useEffect(() => {
    const html = document.documentElement;
    html.className = `${roboto.variable}`; 
  }, []);
};
