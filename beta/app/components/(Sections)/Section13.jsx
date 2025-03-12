"use client";
import { Section13userData } from "@/app/database/SectionData";
import React, { useState } from "react";
import { GrSend } from "react-icons/gr";

const Section13 = () => {
  const [clickedName, setClickedName] = useState(2);
  const {
    background_image,
    paragraph,
    placeholder,
    button_label,
    header1,
    header2,
    instagramImages,
    Section13_data,
  } = Section13userData[0];

  return (
    <section
      className="w-full p-[100px] max-[800px]:p-10 min-h-[501px] flex justify-center items-center"
      style={{ backgroundImage: `url(/${background_image})` }}
    >
      <div className="max-w-[1140px] w-full h-full max-[800px]:flex-col  flex flex-row gap-[30px] justify-between">
        <div className="flex flex-col max-w-[445px] w-full h-fit gap-5">
          <img
            src="./logo_4.png"
            className="max-w-[109px] max-h-[40px] w-full h-auto cursor-pointer"
            href="/"
            alt="Logo"
          />
          <p className="text-[#999999]">{paragraph}</p>

          <form className="relative w-full flex items-center">
            <input
              className="w-full px-6 py-4 rounded-full border border-gray-300 text-gray-600 outline-none focus:border-[#ff9a00]"
              type="text"
              placeholder={`${placeholder}`}
            />
            <button className="group relative flex items-center justify-center px-16 py-4 ml-[-50px] overflow-hidden rounded-full bg-[#ff9a00] text-white font-semibold shadow-md border border-[#ff9a00]">
              {button_label}
              <span className="group-hover:-translate-y-12 duration-300 absolute right-1 -top-0 transform w-10 h-10 flex items-center justify-center bg-white rounded-full rounded-tl-none shadow">
                <GrSend color="#ff9a00" size={"18px"} />
              </span>
            </button>
          </form>
        </div>
        <div className="flex max-w-[475px] w-full h-fit flex-col gap-5">
          <h2 className="text-[20px] font-montserrat font-semibold">
            {header1}
          </h2>
          <div className="w-full h-fit grid grid-cols-4 grid-rows-2 gap-[1px] rounded-xl overflow-hidden">
            {instagramImages.map((src, index) => (
              <div key={index} className="w-full h-auto col-span-1 row-span-1">
                <img
                  className="w-full h-full object-cover cursor-pointer"
                  src={src}
                  alt={`Instagram feed ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-[190px] flex-col gap-5">
          <h2 className="text-[20px] font-montserrat font-semibold">
            {header2}
          </h2>
          <ul className="w-full h-fit flex flex-col gap-5 z-20 font-mulish text-[16px] text-[#999999] relative">
            {Section13_data.map((data, index) => (
              <li
                key={index}
                className={`hover:text-white cursor-pointer relative z-20 ${
                  data.number === clickedName ? "text-white" : ""
                }`}
                onClick={() => setClickedName(data.number)}
              >
                <span
                  className={`w-[8px] h-[15px] rounded-full bg-white absolute left-[-15px] top-1 ${
                    data.number === clickedName ? "block" : "hidden"
                  }`}
                ></span>
                <a>{data.name}</a>
              </li>
            ))}
            <span className="absolute w-[1px] h-[90%] top-1/2 -translate-y-1/2 bg-[#999999] left-[-1px] z-0"></span>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section13;
