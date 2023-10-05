import { Rubik, Krub } from "next/font/google";
export const sans = Rubik({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const display = Krub({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});
