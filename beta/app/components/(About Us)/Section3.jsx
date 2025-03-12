"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const section3_data = [
  { name: "Shaharia Parvez", company: "Company CEO", long: true },
  { name: "Shaharia Parvez", company: "Company CEO", long: false },
  { name: "Shaharia Parvez", company: "Company CEO", long: false },
  { name: "Shaharia Parvez", company: "Company CEO", long: true },
];

const Section3 = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <section
      className="w-full h-fit py-[100px] flex items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(/team-bg.jpg)" }}
    >
      <div className="max-w-[1140px] h-fit flex flex-col gap-10 w-full">
        <div className="text-center">
          <h2 className="text-[18px] font-bold font-montserrat text-[#f783aa]">
            TEAM
          </h2>
          <h1 className="text-[#222] font-montserrat text-[32px] font-black">
            <span className="text-[#ff9a00]">Our Team</span> Members
          </h1>
        </div>
        <div className="w-full h-fit">
          <div className="w-full h-[700px] flex flex-row justify-between relative">
            {section3_data.map((item, index) => (
              <div
                key={index}
                className="w-full h-full flex items-center justify-center relative"
                style={{ paddingTop: !item.long ? "100px" : "0px" }}
              >
                <span className="h-full w-[1px] bg-[#ff9a00]"></span>
                {clickedIndex === index ? (
                  <div
                    className="w-[230px] max-[592px]:w-[150px] h-[80px] bg-white rounded-xl border-[1px] border-[#ff9a00] absolute top-0 flex justify-center items-center flex-col mx-auto z-40"
                    style={{ marginTop: !item.long ? "55px" : "-35px" }}
                  >
                    <h1 className="text-[17px] font-montserrat font-bold text-[#222]">
                      {item.name}
                    </h1>
                    <p className="text-[12px] text-[#ff9a00] font-medium font-mulish">
                      {item.company}
                    </p>
                  </div>
                ) : (
                  <div
                    className=" w-9 h-9 rounded-full bg-white border-[1px] flex items-center justify-center absolute top-0 mx-auto border-[#e5e5e5]"
                    style={{ marginTop: !item.long ? "100px" : "0px" }}
                    onClick={() => setClickedIndex(index)}
                  >
                    <FaPlus color="#ff9a00" />
                  </div>
                )}
              </div>
            ))}
            <img
              src="/team-image.jpg"
              className="w-full h-auto absolute bottom-0 mx-auto"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
