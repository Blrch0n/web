import React from "react";
import Profile from "./profile";
import SideBarItems from "./SideBarItems";

const SideBar = () => {
  return (
    <div className="w-fit p-10 h-screen overflow-y-scroll bg-[#999] gap-5 flex flex-col">
      <Profile />
      <SideBarItems />
    </div>
  );
};

export default SideBar;
