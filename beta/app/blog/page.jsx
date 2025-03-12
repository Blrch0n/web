"use client";
import React from "react";
import Header from "../components/(Main_structure)/Header";
import Section1 from "../components/(About Us)/Section1";
import AboutUsFooter from "../components/(About Us)/AboutUsFooter";
import BackToTop from "../components/(Main_structure)/BackToTop";
import Section1_2 from "../components/(Blog)/Section1";

const Page = () => {
  return (
    <div className="w-full h-fit flex flex-col">
      <Header />
      <Section1 children={"Blog"} />
      <Section1_2 />
      <AboutUsFooter />
      <BackToTop />
    </div>
  );
};

export default Page;
