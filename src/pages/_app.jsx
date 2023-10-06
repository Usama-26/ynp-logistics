import "@/styles/globals.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { sans, display } from "@/fonts";
export default function App({ Component, pageProps }) {
  return (
    <main className={`${sans.variable} ${display.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
