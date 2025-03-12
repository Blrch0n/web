import Header from "./components/(Main_structure)/Header";
import Footer from "./components/(Main_structure)/Footer";
import Main from "./components/(Main_structure)/Main";
import BackToTop from "./components/(Main_structure)/BackToTop";

export default function Home() {
  return (
    <section className="w-full h-[5000px]">
      <Header />
      <Main />
      <Footer />
      <BackToTop />
    </section>
  );
}
