"use client";
import axios from "axios";
import { useEffect, useState } from "react";
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
  const [sectionData, setSectionData] = useState([]);
  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/portfolio`
        );
        setSectionData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching section data:", error);
      }
    };
    fetchSectionData();
  }, []);
  useEffect;
  return (
    <section className="w-full h-fit bg-white flex justify-center items-center py-[100px]">
      <div className="max-w-[1140px] max-[1200px]:px-20 max-[992px]:px-10 max-[768px]:grid-cols-1 w-full h-fit grid grid-cols-2 grid-rows-3 gap-10">
        {sectionData &&
          sectionData[0]?.images.map((data, index) => (
            <div className="w-full h-full relative group" key={index}>
              <img
                src={data.image}
                alt="logo"
                className="w-full object-cover"
              />
              <a
                className="w-[80%] max-h-[80%] h-fit opacity-0 group-hover:opacity-80 duration-300 px-[14px] py-[20px] flex flex-col gap-3 bg-white bottom-[10%] right-[10%] absolute"
                href="/portfolio/details"
              >
                <h1 className="text-[16px] font-mulish text-[#6134CF] font-semibold">
                  {data.span}
                </h1>
                <div className="w-full h-fit flex items-center justify-between">
                  <p className="text-[20px] max-[592px]:text-[16px] text-[#333] font-semibold font-mulish">
                    {data.paragraph}
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
