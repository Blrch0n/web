import React from "react";
import { MdOutlineLaunch } from "react-icons/md";
const section1_data = [
  "/image5.png",
  "/image5.png",
  "/image5.png",
  "/image5.png",
  "/image5.png",
  "/image5.png",
];

const Section1_1 = () => {
  return (
    <section className="w-full h-fit bg-white flex justify-center items-center py-[100px]">
      <div className="max-w-[1140px] max-[1200px]:px-20 max-[992px]:px-10 max-[768px]:grid-cols-1 w-full h-fit grid grid-cols-2 grid-rows-3 gap-10">
        {section1_data.map((data, index) => (
          <div className="w-full h-full relative group" key={index}>
            <img src={data} alt="logo" className="w-full object-cover" />
            <a
              className="w-[80%] max-h-[80%] h-fit opacity-0 group-hover:opacity-80 duration-300 px-[14px] py-[20px] flex flex-col gap-3 bg-white bottom-[10%] right-[10%] absolute"
              href="/portfolio/details"
            >
              <h1 className="text-[16px] font-mulish text-[#6134CF] font-semibold">
                look , life, good
              </h1>
              <div className="w-full h-fit flex items-center justify-between">
                <p className="text-[20px] max-[592px]:text-[16px] text-[#333] font-semibold font-mulish">
                  Portfolio, Look, Life, Good
                </p>
                <MdOutlineLaunch className="text-[#6134CF] text-[20px] max-[592px]:text-[16px]" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section1_1;
