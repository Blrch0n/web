import React from "react";
import Admin_Section from "./(components)/(sidebar)/Admin_Section";
import SideBar from "./(components)/(sidebar)/SideBar";
import Home_Section from "./(components)/(info)/home";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <Home_Section />
    </Admin_Section>
  );
};

export default Page;
