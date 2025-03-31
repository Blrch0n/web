"use client";
import React, { useEffect, useState } from "react";
import { Section6userBoardData } from "@/app/database/SectionData";
import { IoExitOutline } from "react-icons/io5";
import axios from "axios";
const Home_Section_6 = () => {
  const [section6Data, setSection6Data] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const deleteAllSection6 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/6`
      );
      console.log(response.data);
      setSection6Data([]);
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
        `${process.env.NEXT_PUBLIC_SERVER_URL}/6`,
        data
      );

      // Update local state with new data
      setSection6Data([...section6Data, response.data]);

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
          `${process.env.NEXT_PUBLIC_SERVER_URL}/6`
        );
        setSection6Data(response.data);
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
              Хэсэг 6 үүсгэх
            </button>
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={() => {
                deleteAllSection6();
              }}
            >
              Датаг устгах
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full bg-black text-white">
            <div className="grid grid-cols-3 gap-5 p-5 rounded-2xl overflow-hidden w-full h-full border overflow-y-scroll border-black">
              {Section6userBoardData.map((item, index) => {
                const data = section6Data[0];
                return (
                  <div
                    key={index}
                    className="w-full h-full flex border flex-col border-black bg-[#36454f] rounded-xl items-center justify-start"
                  >
                    <div className="w-full h-fit flex justify-center py-4 font-bold">
                      <h1>
                        {item.name === "image"
                          ? "Зураг"
                          : item.name === "background_image"
                          ? "Дэвсгэр зураг"
                          : item.name === "header"
                          ? "Толгой хэсэг"
                          : item.name === "paragraph"
                          ? "Догол мөр"
                          : item.name === "button_label"
                          ? "Товчны шошго"
                          : item.name === "about"
                          ? "Тухай"
                          : item.name === "title1"
                          ? "Гарчиг 1"
                          : item.name === "title2"
                          ? "Гарчиг 2"
                          : item.name === "title3"
                          ? "Гарчиг 3"
                          : item.name === "title4"
                          ? "Гарчиг 4"
                          : item.name === "title5"
                          ? "Гарчиг 5"
                          : item.name === "title6"
                          ? "Гарчиг 6"
                          : item.name}
                      </h1>
                    </div>
                    <hr className="w-full h-[1px] bg-black" />
                    <div className="flex w-full h-full items-center justify-center p-5">
                      {data && item.name.includes("image") ? (
                        <img
                          src={`${data[item.name]}`}
                          className="w-full h-full object-contain mx-auto"
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
                Хэсэг 6 үүсгэх
              </h1>
              <IoExitOutline
                size={30}
                cursor={"pointer"}
                onClick={() => setIsClicked(false)}
              />
            </div>
            <div className="w-full h-fit grid grid-cols-3 gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Дэвсгэр үүсгэх</h1>
                <input
                  type="text"
                  name="background_image" // Add name attribute
                  placeholder="Дэвсгэр үүсгэх"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Тухай</h1>
                <input
                  type="text"
                  name="about" // Add name attribute
                  placeholder="Тухай"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Толгой хэсэг</h1>
                <input
                  type="text"
                  name="header" // Add name attribute
                  placeholder="Толгой хэсэг"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>span</h1>
                <input
                  type="text"
                  name="span" // Add name attribute
                  placeholder="span"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Гарчиг 1</h1>
                <input
                  type="text"
                  name="title1" // Add name attribute
                  placeholder="Гарчиг 1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Гарчиг 2</h1>
                <input
                  type="text"
                  name="title2" // Add name attribute
                  placeholder="Гарчиг 2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Гарчиг 3</h1>
                <input
                  type="text"
                  name="title3" // Add name attribute
                  placeholder="Гарчиг 3"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Гарчиг 4</h1>
                <input
                  type="text"
                  name="title4" // Add name attribute
                  placeholder="Гарчиг 4"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>{" "}
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Гарчиг 5</h1>
                <input
                  type="text"
                  name="title5" // Add name attribute
                  placeholder="Гарчиг 5"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>{" "}
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Гарчиг 6</h1>
                <input
                  type="text"
                  name="title6" // Add name attribute
                  placeholder="Гарчиг 6"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <button
                type="submit" // Change to submit type
                className="bg-black text-white py-4 rounded-xl col-span-2"
              >
                Шинээр үүсгэх
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Home_Section_6;
