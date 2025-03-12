import React from "react";

const AboutUsFooter = () => {
  return (
    <section className="w-full h-fit py-[30px] flex items-center bg-[#333] justify-center border-t border-black">
      <div className="max-w-[1140px] max-[1200px]:flex-col px-10 w-full text-[#999] h-fit flex justify-between items-center">
        <p className="text-[13px] font-medium font-mulish flex items-center gap-2">
          Copyright © 2021
          <span className="w-fit cursor-pointer h-fit rounded-full bg-black px-2 py-1 text-white">
            Portomega
          </span>
          design and developed by
          <span className="w-fit cursor-pointer h-fit rounded-full bg-black px-2 py-1 text-white">
            Fox-Theme
          </span>
        </p>
        <div className="w-fit h-fit flex flex-row gap-[40px] font-mulish text-[16px] font-bold">
          <a>Home</a>
          <a>About us</a>
          <a>Contact us</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsFooter;
