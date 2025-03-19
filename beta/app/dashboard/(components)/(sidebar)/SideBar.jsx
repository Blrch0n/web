import React from "react";
import Profile from "./profile";
import SideBarItems from "./SideBarItems";

const SideBar = () => {
  return (
    <div className="w-[400px] p-10 h-screen overflow-y-auto overflow-x-hidden bg-black gap-5 flex flex-col">
      <Profile />
      <SideBarItems />
    </div>
  );
};

export default SideBar;
