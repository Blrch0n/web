import React from "react";
import Section1 from "../components/(About Us)/Section1";
import Section6 from "../components/(Sections)/Section6";
import Section4 from "../components/(About Us)/Section4";
import AboutUsFooter from "../components/(About Us)/AboutUsFooter";
import BackToTop from "../components/(Main_structure)/BackToTop";
import Header from "../components/(Main_structure)/Header";

const Page = () => {
  return (
    <section className="w-full h-fit bg-white flex flex-col items-center">
      <Header />
      <Section1 children={"Page"} />
      <Section6 children={"#ff9a00"} />
      <Section4 />
      <AboutUsFooter />
      <BackToTop />
    </section>
  );
};

export default Page;
