"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Section1 = ({ children }) => {
  const [sectionData, setSectionData] = useState([]);
  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/1`
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
    <section
      className="w-full h-fit flex justify-center  bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${sectionData[0]?.background})` }}
    >
      <div className="max-w-[1140px] w-full h-[390px] flex flex-col text-black justify-center items-center">
        <h2 className="text-[40px] font-montserrat font-bold">{children}</h2>
        <span className="text-[16px] font-mulish font-semibold text-[#333]">
          <a href="/" className="cursor-pointer">
            Home{" "}
          </a>
          / {children}
        </span>
      </div>
    </section>
  );
};

export default Section1;
