import React from "react";

import SideBarItems from "../(components)/(sidebar)/SideBarItems";
import Admin_Section from "../(components)/(sidebar)/Admin_Section";
import SideBar from "../(components)/(sidebar)/SideBar";
import Portfolio_Section from "../(components)/(info)/portfolio_section";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <Portfolio_Section />
    </Admin_Section>
  );
};

export default Page;
