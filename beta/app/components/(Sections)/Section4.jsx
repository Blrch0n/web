"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const Section4 = () => {
  const [section4Data, setSection4Data] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/4`
        );
        setSection4Data(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (section4Data.length === 0) return <div>Loading...</div>;
  const { about, span, header, button_label, background_image } =
    section4Data[0];
  return (
    <section
      className="w-full h-fit flex items-center bg-white justify-center pt-[100px]"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <div className="max-w-[1140px] w-full min-h-[193px] h-fit max-[1200px]:px-20 relative max-[766px]:flex-col max-[766px]:py-10 flex flex-row items-center justify-between bg-no-repeat bg-cover bg-center">
        <div className="w-fit h-full flex flex-col">
          <h2 className="text-[18px] font-bold font-montserrat text-[rgb(247,131,170)]">
            {about}
          </h2>
          <h3 className="text-[32px] font-extrabold font-montserrat text-black z-10">
            {span}{" "}
            <span className="text-[rgb(167,98,233)] text-[32px]">{header}</span>
          </h3>
        </div>
        <a
          href="/"
          className="text-[#333333] font-montserrat font-bold text-[14px] bg-white border-2 border-[rgb(167,98,233)] overflow-hidden group relative w-fit h-fit py-[20px] rounded-full px-[60px] mt-2 "
        >
          {button_label}
          <span className=" rounded-full flex items-center justify-center rounded-tl-none absolute top-0 group-hover:top-[-40px] duration-300 right-2 bg-[rgb(167,98,233)] w-10 h-10">
            <BsThreeDots size={"28px"} color={"#ffffff"} />
          </span>
        </a>
        {/* <img src="/Portfolio-copy.jpg" className="absolute top-0 right-0"></img> */}
      </div>
    </section>
  );
};

export default Section4;
