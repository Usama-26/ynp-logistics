import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileFooter from "@/components/MobileFooter";
import MobileNavbar from "@/components/NavbarMobile";
import { lora, display } from "@/fonts";
export default function WebLayout({ children }) {
  return (
    <main className="text-sans">
      <Header />
      <MobileNavbar />
      {children}
      <section className="lg:block hidden">
        <Footer />
      </section>
      <section className="block lg:hidden">
        <MobileFooter />
      </section>
    </main>
  );
}
