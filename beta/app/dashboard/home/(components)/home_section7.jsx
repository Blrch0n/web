"use client";
import React, { useEffect, useState } from "react";
import { Section7userBoardData } from "@/app/database/SectionData";
import { IoExitOutline } from "react-icons/io5";
import axios from "axios";
const Home_Section_7 = () => {
  const [section7Data, setSection7Data] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const deleteAllSection7 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/7`
      );
      console.log(response.data);
      setSection7Data([]);
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
        `${process.env.NEXT_PUBLIC_SERVER_URL}/7`,
        data
      );

      // Update local state with new data
      setSection7Data([...section7Data, response.data]);

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
              Хэсэг 7 үүсгэх
            </button>
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={() => {
                deleteAllSection7();
              }}
            >
              Датаг устгах
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full bg-black text-white">
            <div className="grid grid-cols-3 gap-5 p-5 rounded-2xl overflow-hidden w-full overflow-y-scroll h-full border border-black">
              {Section7userBoardData.map((item, index) => {
                const data = section7Data[0];
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
                          : item.name === "span"
                          ? "Онцлох үг"
                          : item.name === "button_label"
                          ? "Товчны шошго"
                          : item.name === "about"
                          ? "Тухай"
                          : item.name === "list1"
                          ? "Эгнээ 1"
                          : item.name === "list2"
                          ? "Эгнээ 2"
                          : item.name === "list3"
                          ? "Эгнээ 3"
                          : item.name === "list4"
                          ? "Эгнээ 4"
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
                <h1>Зураг</h1>
                <input
                  type="text"
                  name="image"
                  placeholder="Зураг"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Дэвсгэр зураг</h1>
                <input
                  type="text"
                  name="background_image"
                  placeholder="Дэвсгэр зураг"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Гарчиг</h1>
                <input
                  type="text"
                  name="header"
                  placeholder="Гарчиг"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Онцлох үг</h1>
                <input
                  type="text"
                  name="span"
                  placeholder="Онцлох үг"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Параграф</h1>
                <input
                  type="text"
                  name="paragraph"
                  placeholder="Параграф"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Жагсаалт 1</h1>
                <input
                  type="text"
                  name="list1"
                  placeholder="Жагсаалт 1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Жагсаалт 2</h1>
                <input
                  type="text"
                  name="list2"
                  placeholder="Жагсаалт 2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Жагсаалт 3</h1>
                <input
                  type="text"
                  name="list3"
                  placeholder="Жагсаалт 3"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Жагсаалт 4</h1>
                <input
                  type="text"
                  name="list4"
                  placeholder="Жагсаалт 4"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Товчлуурын текст</h1>
                <input
                  type="text"
                  name="button_label"
                  placeholder="Товчлуурын текст"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white py-4 rounded-xl col-span-2"
              >
                Үүсгэх
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Home_Section_7;
