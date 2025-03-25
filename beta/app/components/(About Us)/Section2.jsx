"use clients";
import React, { useEffect, useState } from "react";
import SkillsSection from "../(Mini)/SkillSection";
import axios from "axios";

const Section2 = () => {
  const [sectionData, setSectionData] = useState([]);
  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/2`
        );
        setSectionData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching section data:", error);
      }
    };
    fetchSectionData();
  }, []);
  return (
    <section className="w-full h-fit flex py-[100px] max-[1200px]:px-[100px] px-[50px] items-center justify-center overflow-hidden">
      <div className="max-w-[1140px] flex flex-row w-full h-fit relative">
        <img
          src={sectionData[0]?.image}
          className="w-auto absolute h-[150%] z-10 bottom-[-300px] right-[-100px] max-[992px]:hidden"
        ></img>
        <div className="w-full h-full flex flex-col gap-7 z-20 justify-between items-start">
          <div>
            <h3 className="text-[18px] font-bold font-montserrat text-[#f783aa]">
              {sectionData[0]?.about}
            </h3>
            <h2 className="text-[32px] font-montserrat font-black text-[#222]">
              <span className="text-[#ff9a00]">{sectionData[0]?.span}</span>{" "}
              {sectionData[0]?.header}
            </h2>
          </div>
          <p className="text-[16px] text-[#999] font-montserrat">
            {sectionData[0]?.header}
          </p>
          <button className="text-white w-[183px] h-[58px] bg-[#ff9a00] rounded-[8px]">
            {sectionData[0]?.button_label}
          </button>
          <hr className="bg-[#999] w-full h-[1px]"></hr>
          <div className="w-full h-fit ">
            <SkillsSection />
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center max-[992px]:hidden"></div>
      </div>
    </section>
  );
};

export default Section2;
