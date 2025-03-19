"use client";
import { FaCodeBranch } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoHelpBuoy } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";

import axios from "axios";
import { useEffect, useState } from "react";

const Section6 = ({ children }) => {
  const [section6Data, setSection6Data] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/6`
        );
        setSection6Data(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (section6Data.length === 0) return <div>Loading...</div>;
  const {
    background_image,
    about,
    header,
    span,
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
  } = section6Data[0];
  return (
    <section
      className="w-full flex justify-center py-16 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <div className="w-[1140px] max-[1200px]:px-20 flex flex-col items-start">
        <div className="mb-10">
          <h4 className="text-[#f783aa] text-lg font-bold font-montserrat">
            {about}
          </h4>
          <h3 className="text-black text-[32px] font-montserrat font-bold">
            {header}{" "}
            <span className="text-[#a762e9]" style={{ color: children }}>
              {span}
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-6 w-full h-fit max-[992px]:grid-cols-2 max-[768px]:grid-cols-1">
          <div className="group border-[#999] border-2 relative overflow-hidden flex flex-col gap-3 rounded-xl p-8 bg-white shadow-md transition-transform hover:scale-105">
            <div className="w-[60px] h-[60px] absolute cursor-pointer top-0 right-0 shadow-md bg-[#f7f7f7] rounded-full group-hover:bg-[#a762e9] duration-300 rounded-tr-none flex items-center justify-center">
              <FaCodeBranch
                className="text-[#b47beb] transition-colors duration-300 group-hover:text-white"
                size="32px"
              />
            </div>
            <h4 className="text-[22px] font-montserrat font-semibold text-black">
              {title1}
            </h4>
            <p className="text-base font-medium font-mulish text-[#666]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="group border-[#999] border-2 relative overflow-hidden flex flex-col gap-3 rounded-xl p-8 bg-white shadow-md transition-transform hover:scale-105">
            <div className="w-[60px] h-[60px] absolute cursor-pointer top-0 right-0 shadow-md bg-[#f7f7f7] rounded-full group-hover:bg-[#a762e9] duration-300 rounded-tr-none flex items-center justify-center">
              <HiPaintBrush
                className="text-[#b47beb] transition-colors duration-300 group-hover:text-white"
                size="32px"
              />
            </div>
            <h4 className="text-[22px] font-montserrat font-semibold text-black">
              {title2}
            </h4>
            <p className="text-base font-medium font-mulish text-[#666]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="group border-[#999] border-2 relative overflow-hidden flex flex-col gap-3 rounded-xl p-8 bg-white shadow-md transition-transform hover:scale-105">
            <div className="w-[60px] h-[60px] absolute cursor-pointer top-0 right-0 shadow-md bg-[#f7f7f7] rounded-full group-hover:bg-[#a762e9] duration-300 rounded-tr-none flex items-center justify-center">
              <IoIosPhonePortrait
                className="text-[#b47beb] transition-colors duration-300 group-hover:text-white"
                size="32px"
              />
            </div>
            <h4 className="text-[22px] font-montserrat font-semibold text-black">
              {title3}
            </h4>
            <p className="text-base font-medium font-mulish text-[#666]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="group border-[#999] border-2 relative overflow-hidden flex flex-col gap-3 rounded-xl p-8 bg-white shadow-md transition-transform hover:scale-105">
            <div className="w-[60px] h-[60px] absolute cursor-pointer top-0 right-0 shadow-md bg-[#f7f7f7] rounded-full group-hover:bg-[#a762e9] duration-300 rounded-tr-none flex items-center justify-center">
              <IoHelpBuoy
                className="text-[#b47beb] transition-colors duration-300 group-hover:text-white"
                size="32px"
              />
            </div>
            <h4 className="text-[22px] font-montserrat font-semibold text-black">
              {title4}
            </h4>
            <p className="text-base font-medium font-mulish text-[#666]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="group border-[#999] border-2 relative overflow-hidden flex flex-col gap-3 rounded-xl p-8 bg-white shadow-md transition-transform hover:scale-105">
            <div className="w-[60px] h-[60px] absolute cursor-pointer top-0 right-0 shadow-md bg-[#f7f7f7] rounded-full group-hover:bg-[#a762e9] duration-300 rounded-tr-none flex items-center justify-center">
              <AiOutlineGlobal
                className="text-[#b47beb] transition-colors duration-300 group-hover:text-white"
                size="32px"
              />
            </div>
            <h4 className="text-[22px] font-montserrat font-semibold text-black">
              {title5}
            </h4>
            <p className="text-base font-medium font-mulish text-[#666]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="group border-[#999] border-2 relative overflow-hidden flex flex-col gap-3 rounded-xl p-8 bg-white shadow-md transition-transform hover:scale-105">
            <div className="w-[60px] h-[60px] absolute cursor-pointer top-0 right-0 shadow-md bg-[#f7f7f7] rounded-full group-hover:bg-[#a762e9] duration-300 rounded-tr-none flex items-center justify-center">
              <IoMdTime
                className="text-[#b47beb] transition-colors duration-300 group-hover:text-white"
                size="32px"
              />
            </div>
            <h4 className="text-[22px] font-montserrat font-semibold text-black">
              {title6}
            </h4>
            <p className="text-base font-medium font-mulish text-[#666]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
