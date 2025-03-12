import React from "react";

import Admin_Section from "../(components)/(sidebar)/Admin_Section";
import SideBar from "../(components)/(sidebar)/SideBar";
import About_Us_Section from "../(components)/(info)/About_Us_Section";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <About_Us_Section />
    </Admin_Section>
  );
};

export default Page;
