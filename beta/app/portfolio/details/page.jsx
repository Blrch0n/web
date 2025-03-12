import AboutUsFooter from "@/app/components/(About Us)/AboutUsFooter";
import Section1 from "@/app/components/(About Us)/Section1";
import Section4 from "@/app/components/(About Us)/Section4";
import BackToTop from "@/app/components/(Main_structure)/BackToTop";
import Header from "@/app/components/(Main_structure)/Header";
import Detail_section1 from "@/app/components/(details)/Detail_section1";
import Detail_section2 from "@/app/components/(details)/Detail_section2";
import Detail_section3 from "@/app/components/(details)/Detail_section3";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-fit flex flex-col bg-white">
      <Header />
      <Section1 children={"Portfolio Details"} />
      <Detail_section1 />
      <hr></hr>
      <Detail_section2 />
      <Detail_section3 />
      <Section4 />
      <AboutUsFooter />
      <BackToTop />
    </div>
  );
};

export default Page;
