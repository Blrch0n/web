"use client";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { useRevealOnce } from "../(Main_structure)/useRevealOnce";
import { Section3userData } from "@/app/database/SectionData";

const Section3 = () => {
  const { header, background_image } = Section3userData[0];
  const [ref, revealed] = useRevealOnce(0.3);
  return (
    <section
      ref={ref}
      className={`w-full min-h-[403px] h-fit py-10 max-[1200px]:h-[283px] max-[1200px]:px-20 flex bg-slate-500 justify-center items-center bg-cover object-cover transition-opacity duration-700 ${
        revealed ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: `url(/${background_image})` }}
    >
      <div className="max-w-[1140px] w-full h-fit flex flex-row max-[576px]:flex-col max-[576px]:text-center py-10 justify-between items-center">
        <h2 className="font-bold text-[32px] font-montserrat">{header}</h2>
        <a className="relative w-[67px] h-[67px] flex items-center justify-center bg-[#ff9a00] cursor-pointer rounded-full ">
          {/* The ripple effect span */}
          <span className="absolute top-0 m-auto w-full h-full rounded-full border-2 border-white animate-ripple delay-0"></span>
          <span className="absolute top-0 m-auto w-full h-full rounded-full border-2 border-white animate-ripple delay-75"></span>
          <FaPlay color="white" className="relative z-10" />
        </a>
      </div>
    </section>
  );
};

export default Section3;
