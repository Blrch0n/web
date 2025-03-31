"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoExitOutline } from "react-icons/io5";

const About_Us_Section2 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [section1Data, setSection1Data] = useState([]);

  const deleteAllSection1 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/2`
      );
      console.log(response.data);
      setSection1Data([]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.entries());
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/2`,
        data
      );

      setSection1Data(await response.data);
      console.log(response.data);

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
          `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/2`
        );
        setSection1Data(response.data);
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
        <div className="w-full h-full flex items-start flex-col gap-5 ">
          <div className="flex justify-between items-center w-full h-fit">
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={(e) => {
                e.preventDefault();
                setIsClicked(!isClicked);
              }}
            >
              Хэсэг 2 үүсгэх
            </button>
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={() => {
                deleteAllSection1();
              }}
            >
              Датаг устгах
            </button>
          </div>

          {Array.isArray(section1Data) &&
            section1Data.map((data, index) => {
              return (
                <div
                  className="w-full h-full border grid grid-cols-3 rounded-xl overflow-y-scroll bg-black text-white justify-center items-center border-black gap-2 p-5"
                  key={index}
                >
                  {Object.entries(data).map(([key, value], i) => (
                    <div
                      key={i}
                      className="border border-black p-5 w-full bg-[#36454f] rounded-lg h-full flex flex-col items-center justify-start"
                    >
                      <h1 className="text-sm">
                        {key === "background"
                          ? "Дэвсгэр зураг"
                          : key === "image"
                          ? "Зураг"
                          : key === "about"
                          ? "Тухай"
                          : key === "header"
                          ? "Тодруулсан хэсэг"
                          : key === "paragraph"
                          ? "Дэлгэрэнгүй"
                          : key === "button_label"
                          ? "Товчийн нэр"
                          : key === "progresses"
                          ? "Явц"
                          : key}
                      </h1>
                      <hr className="w-full border-t border-white my-2" />
                      {typeof value === "string" &&
                      (value.includes("image") ||
                        value.includes("background")) ? (
                        <img src={value} alt="image" />
                      ) : (
                        <p className="text-lg font-bold text-center">{value}</p>
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
        </div>
      </div>
      {isClicked && (
        <div className="absolute top-0 left-0 bg-black/50 w-full h-screen flex items-center justify-center z-50">
          <form
            onSubmit={handleFormSubmit}
            className="bg-white w-1/2 h-fit rounded-2xl p-6 gap-2 flex flex-col"
          >
            <div className="w-full h-fit flex flex-row items-center justify-between">
              <h1 className="text-3xl font-montserrat font-bold text-black">
                Хэсэг 2 үүсгэх
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
                  name="background"
                  placeholder="Дэвсгэр зураг"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
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
                <h1>Тухай</h1>
                <input
                  type="text"
                  name="about"
                  placeholder="Тухай"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>span</h1>
                <input
                  type="text"
                  name="span"
                  placeholder="span"
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
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Дэлгэрэнгүй</h1>
                <input
                  type="text"
                  name="paragraph"
                  placeholder="Дэлгэрэнгүй"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Товчний гарчиг</h1>
                <input
                  type="text"
                  name="button_label"
                  placeholder="Товчний гарчиг"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>

              <button
                type="submit"
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

export default About_Us_Section2;
