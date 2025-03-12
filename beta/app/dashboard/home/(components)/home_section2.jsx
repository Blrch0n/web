import {
  Section2userBoardData,
  Section2userData,
} from "@/app/database/SectionData";
import React from "react";
const Home_Section_2 = () => {
  return (
    <section className="w-full h-full p-10 flex flex-col">
      <div className="w-full h-full flex flex-col gap-10">
        <div className="w-full h-full flex items-start flex-col gap-5 ">
          <button className="bg-white p-3 rounded-[6px] text-black">
            Create Section2
          </button>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
            <div className="w-full flex flex-row items-center h-fit p-5 bg-blue-200">
              {Section2userBoardData.map((data, index) => (
                <div
                  key={index}
                  className="h-fit w-full"
                  style={{ width: data.size }}
                >
                  <p>{data.name}</p>
                </div>
              ))}
            </div>
            <div className="w-full h-fit flex flex-col">
              {Section2userData.map((data, index) => (
                <div
                  className="w-full flex flex-row items-center h-fit p-5 bg-blue-200"
                  key={index}
                >
                  <div className="h-fit w-[8%] ">
                    <p>{data.id}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.image}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.background}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.header}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.about}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.paragraph}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.button_label}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.jobs[0].label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_Section_2;
