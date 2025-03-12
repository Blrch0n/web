import React from "react";

import SideBarItems from "../(components)/(sidebar)/SideBarItems";
import Admin_Section from "../(components)/(sidebar)/Admin_Section";
import SideBar from "../(components)/(sidebar)/SideBar";
import Blog_Section from "../(components)/(info)/Blog_Section";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <Blog_Section />
    </Admin_Section>
  );
};

export default Page;
