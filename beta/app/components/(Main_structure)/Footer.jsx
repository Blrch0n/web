import React from "react";

const Footer = () => {
  return (
    <section className="w-full h-[98px] flex bg-[#1a1a1a] justify-center items-center text-white">
      <div className="w-full max-[1200px]:px-10 max-w-[1140px] h-fit flex flex-row items-center gap-2 text-[13px] font-mulish text-gray-300">
        <form>
          <span>Copyright © 2021</span>
          <button className="bg-black text-white px-3 py-1 rounded-full">
            portomega
          </button>
          <span>design and developed by</span>
          <button className="bg-black text-white px-3 py-1 rounded-full">
            Fox-Theme
          </button>
        </form>
      </div>
    </section>
  );
};

export default Footer;
