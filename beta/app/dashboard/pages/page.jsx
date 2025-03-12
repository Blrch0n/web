import React from "react";

import SideBarItems from "../(components)/(sidebar)/SideBarItems";
import Admin_Section from "../(components)/(sidebar)/Admin_Section";
import SideBar from "../(components)/(sidebar)/SideBar";
import Pages_Section from "../(components)/(info)/Pages_Section";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <Pages_Section />
    </Admin_Section>
  );
};

export default Page;
