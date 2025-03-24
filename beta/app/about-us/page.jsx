"use client";
import AboutUsFooter from "../components/(About Us)/AboutUsFooter";
import Section1 from "../components/(About Us)/Section1";
import Section2 from "../components/(About Us)/Section2";
import Section3 from "../components/(About Us)/Section3";
import Section4 from "../components/(About Us)/Section4";
import BackToTop from "../components/(Main_structure)/BackToTop";
import Header from "../components/(Main_structure)/Header";
import Section10 from "../components/(Sections)/Section10";
import Section9 from "../components/(Sections)/Section9";

export default function Page() {
  return (
    <section className="w-full h-fit bg-white flex flex-col items-center">
      <Header />
      <Section1 children={"About Us"} />
      <Section2 />
      <Section3 />
      <Section9 />
      <Section10 children={"#ff9a00"} />
      <Section4 />
      <AboutUsFooter />
      <BackToTop />
    </section>
  );
}
