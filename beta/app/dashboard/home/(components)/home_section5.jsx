"use client";
import React, { useEffect, useState } from "react";
import { Section5userBoardData } from "@/app/database/SectionData";
import { IoExitOutline } from "react-icons/io5";
import axios from "axios";
const Home_Section_5 = () => {
  const [section5Data, setSection5Data] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const deleteAllSection5 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/5`
      );
      console.log(response.data);
      setSection5Data([]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/5`,
        data
      );

      // Update local state with new data
      setSection5Data([...section5Data, response.data]);

      // Close modal and reset form
      setIsClicked(false);
      e.target.reset();
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/5`
        );
        setSection5Data(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="w-full h-full p-10 flex flex-col text-black">
      <div className="w-full h-full flex flex-col gap-10">
        <div className="w-full h-full flex items-start flex-col gap-5 ">
          <div className="flex justify-between items-center w-full h-fit">
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={(e) => {
                e.preventDefault();
                setIsClicked(!isClicked);
              }}
            >
              Хэсэг 5 үүсгэх
            </button>
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={() => {
                deleteAllSection5();
              }}
            >
              Бүх датаг устгах
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
            <div className="grid grid-cols-3 gap-5 p-5 rounded-2xl overflow-hidden w-full text-white overflow-y-visible h-full border border-black">
              {Section5userBoardData.map((item, index) => {
                const data = section5Data[0];
                return (
                  <div
                    key={index}
                    className="w-full h-full flex border flex-col border-black bg-[#36454f] rounded-xl items-center justify-start"
                  >
                    <div className="w-full h-fit flex justify-center py-4 font-bold">
                      <h1>
                        {item.name === "label"
                          ? "Техт"
                          : item.name === "paragraph"
                          ? "Дэлгэрэнгүй"
                          : item.name === "image1"
                          ? "Зураг 1"
                          : item.name === "image2"
                          ? "Зураг 2"
                          : item.name === "image3"
                          ? "Зураг 3"
                          : item.name === "image4"
                          ? "Зураг 4"
                          : item.name === "image5"
                          ? "Зураг 5"
                          : item.name === "image6"
                          ? "Зураг 6"
                          : item.name}
                      </h1>
                    </div>
                    <hr className="w-full h-[1px] bg-black" />
                    <div className="flex w-full h-full items-center justify-center p-5">
                      {data && item.name.includes("image") ? (
                        <img
                          src={`${data[item.name]}`}
                          className=" w-full h-full object-contain mx-auto"
                        />
                      ) : data ? (
                        <h1 className="font-bold text-5xl">
                          {data[item.name]}
                        </h1>
                      ) : (
                        "N/A"
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {isClicked && (
        <div className="absolute top-0 left-0 bg-black/50 w-full h-screen flex items-center justify-center z-50">
          {/* Add onSubmit to form and proper input names */}
          <form
            onSubmit={handleFormSubmit}
            className="bg-white w-1/2 h-fit rounded-2xl p-6 gap-2 flex flex-col"
          >
            <div className="w-full h-fit flex flex-row items-center justify-between">
              <h1 className="text-3xl font-montserrat font-bold text-black">
                Хэсэг 5 үүсгэх
              </h1>
              <IoExitOutline
                size={30}
                cursor={"pointer"}
                onClick={() => setIsClicked(false)}
              />
            </div>
            <div className="w-full h-fit grid grid-cols-3 gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Техт</h1>
                <input
                  type="text"
                  name="label" // Add name attribute
                  placeholder="Техт"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Дэлгэрэнгүй</h1>
                <input
                  type="text"
                  name="paragraph" // Add name attribute
                  placeholder="Дэлгэрэнгүй"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Зураг 1</h1>
                <input
                  type="text"
                  name="image1" // Add name attribute
                  placeholder="Зураг 1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Зураг 2</h1>
                <input
                  type="text"
                  name="image2" // Add name attribute
                  placeholder="Зураг 2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Зураг 3</h1>
                <input
                  type="text"
                  name="image3" // Add name attribute
                  placeholder="Зураг 3"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Зураг 4</h1>
                <input
                  type="text"
                  name="image4" // Add name attribute
                  placeholder="Зураг 4"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Зураг 5</h1>
                <input
                  type="text"
                  name="image5" // Add name attribute
                  placeholder="Зураг 5"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Зураг 6</h1>
                <input
                  type="text"
                  name="image6" // Add name attribute
                  placeholder="Зураг 6"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <button
                type="submit" // Change to submit type
                className="bg-black text-white py-4 rounded-xl"
              >
                Шинэ үүсгэх
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Home_Section_5;
