"use client";
import React, { useEffect, useState } from "react";
import { Section12userBoardData } from "@/app/database/SectionData";
import { IoExitOutline } from "react-icons/io5";
import axios from "axios";
const Home_Section_12 = () => {
  const [section12Data, setSection12Data] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const deleteAllSection12 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/12`
      );
      console.log(response.data);
      setSection12Data([]);
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
        `${process.env.NEXT_PUBLIC_SERVER_URL}/12`,
        data
      );

      // Update local state with new data
      setSection12Data([...section12Data, response.data]);

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
          `${process.env.NEXT_PUBLIC_SERVER_URL}/12`
        );
        setSection12Data(await response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="w-full h-full p-10 flex flex-col text-black">
      <div className="w-full h-full flex flex-col gap-10">
        <div className="w-full h-full flex items-start flex-col gap-5">
          <div className="flex justify-between items-center w-full h-fit">
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={(e) => {
                e.preventDefault();
                setIsClicked(!isClicked);
              }}
            >
              {" "}
              Create Section12{" "}
            </button>
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={() => {
                deleteAllSection12();
              }}
            >
              {" "}
              Delete AllData
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden bg-black text-white w-full h-full border border-black">
            <div className="w-full h-full grid grid-cols-3 gap-5 items-center overflow-y-scroll p-5">
              {Section12userBoardData.map((item, index) => {
                const data = section12Data[0];
                return (
                  <div
                    key={index}
                    className="w-full h-full flex border bg-[#36454f] flex-col border-black rounded-xl items-center justify-center"
                  >
                    <div className="w-full h-fit flex justify-center py-4 font-bold">
                      <h1>
                        {item.name === "background"
                          ? "Дэвсгэр зураг"
                          : item.name === "header1"
                          ? "Толгой гарчиг 1"
                          : item.name === "header2"
                          ? "Толгой гарчиг 2"
                          : item.name === "paragraph1"
                          ? "Дэлгэрэнгүй техт 1"
                          : item.name === "paragraph2"
                          ? "Дэлгэрэнгүй техт 2"
                          : item.name === "header3"
                          ? "Толгой гарчиг 3"
                          : item.name === "button1_label"
                          ? "Товч 1"
                          : item.name === "button2_label"
                          ? "Товч 2"
                          : item.name === "button3_label"
                          ? "Товч 3"
                          : item.name === "button_label"
                          ? "Үндсэн товч"
                          : item.name}
                      </h1>
                    </div>
                    <hr className="w-full h-[1px] bg-black" />
                    <div className="w-full h-full flex justify-center items-center p-2">
                      {data && item.name.includes("background") ? (
                        <img
                          src={`${data[item.name]}`}
                          className="w-full h-full object-contain mx-auto"
                        />
                      ) : data ? (
                        <h1 className="font-bold h-full text-5xl">
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
                Хэсэг 12 үүсгэх
              </h1>
              <IoExitOutline
                size={30}
                cursor={"pointer"}
                onClick={() => setIsClicked(false)}
              />
            </div>
            <div className="w-full h-fit grid grid-cols-3 gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Дэвсгэр зураг</h1>
                <input
                  type="text"
                  name="background" // Add name attribute
                  placeholder="Дэвсгэр зураг"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Толгой 1</h1>
                <input
                  type="text"
                  name="header1" // Add name attribute
                  placeholder="Толгой 1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Дэлгэрэнгүй 1</h1>
                <input
                  type="text"
                  name="paragraph1" // Add name attribute
                  placeholder="Дэлгэрэнгүй 1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Толгой 2</h1>
                <input
                  type="text"
                  name="header2" // Add name attribute
                  placeholder="Толгой 2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Дэлгэрэнгүй 2</h1>
                <input
                  type="text"
                  name="paragraph2" // Add name attribute
                  placeholder="Дэлгэрэнгүй 2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Толгой 3</h1>
                <input
                  type="text"
                  name="header3" // Add name attribute
                  placeholder="Толгой 3"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Товч 1 техт</h1>
                <input
                  type="text"
                  name="button1_label" // Add name attribute
                  placeholder="Товч 1 техт"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Товч 2 техт</h1>
                <input
                  type="text"
                  name="button2_label" // Add name attribute
                  placeholder="Товч 2 техт"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Товч 3 техт</h1>
                <input
                  type="text"
                  name="button3_label" // Add name attribute
                  placeholder="Товч 3 техт"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Үндсэн товч</h1>
                <input
                  type="text"
                  name="button_label" // Add name attribute
                  placeholder="Үндсэн товч"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <button
                type="submit" // Change to submit type
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

export default Home_Section_12;
