import React from "react";
import Admin_Section from "../../(components)/(sidebar)/Admin_Section";
import SideBar from "../../(components)/(sidebar)/SideBar";
import About_Us_Section3 from "../../(components)/(info)/About_Us_Section3";

const page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <About_Us_Section3 />
    </Admin_Section>
  );
};

export default page;
