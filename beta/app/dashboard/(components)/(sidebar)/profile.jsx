import React from "react";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  return (
    <div className="w-fit h-fit flex flex-row gap-5 p-2 rounded-lg bg-white items-center text-black">
      <CgProfile size={40} />
      <div className="w-fit h-fit flex flex-col gap-5">
        <h2>Tomas Brown</h2>
        <p>thomas@gmail.com</p>
      </div>
    </div>
  );
};

export default Profile;
