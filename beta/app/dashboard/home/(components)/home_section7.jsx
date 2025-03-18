"use client";
import React, { useEffect, useState } from "react";
import { Section7userBoardData } from "@/app/database/SectionData";
import axios from "axios";
const Home_Section_7 = () => {
  const [section7Data, setSection7Data] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/7`
        );
        setSection7Data(await response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="w-full h-full p-10 flex flex-col">
      <div className="w-full h-full flex flex-col gap-10">
        <div className="w-full h-full flex items-start flex-col gap-5 ">
          <button className="bg-white p-3 rounded-[6px] text-black">
            Create User
          </button>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
            <div className="w-full flex flex-row items-center h-fit p-5 bg-blue-200">
              {Section7userBoardData.map((data, index) => (
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
              {section7Data.map((data, index) => (
                <div
                  className="w-full flex flex-row items-center h-fit p-5 bg-blue-200"
                  key={index}
                >
                  <div className="h-fit w-full">
                    <p>{data.image}</p>
                  </div>
                  <div className="h-fit w-full">
                    <p>{data.background_image}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.header}</p>
                  </div>
                  <div className="h-fit w-full">
                    <p>{data.span}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.paragraph}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.lists[0]}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.button_label}</p>
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

export default Home_Section_7;
