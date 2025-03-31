"use client";
import { Section2userBoardData } from "@/app/database/SectionData";
import { IoExitOutline } from "react-icons/io5";
import axios from "axios";
import { useEffect, useState } from "react";
const Home_Section_2 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [section2Data, setSection2Data] = useState([]);
  const deleteAllSection2 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/2`
      );
      console.log(response.data);
      setSection2Data([]);
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
        `${process.env.NEXT_PUBLIC_SERVER_URL}/2`,
        data
      );

      // Update local state with new data
      setSection2Data([...section2Data, response.data]);

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
          `${process.env.NEXT_PUBLIC_SERVER_URL}/2`
        );
        setSection2Data(response.data);
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
              {" "}
              Хэсэг 2 үүсгэх
            </button>
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={() => {
                deleteAllSection2();
              }}
            >
              Бүх датаг устгах
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full bg-black">
            <div className="grid grid-cols-3 gap-5 p-5 rounded-2xl w-full h-full border border-black overflow-y-scroll">
              {Section2userBoardData.map((item, index) => {
                const data = section2Data[0];
                return (
                  <div
                    key={index}
                    className="w-full h-full flex border flex-col border-black text-white bg-[#36454f] rounded-xl items-center justify-start"
                  >
                    <div className="w-full h-fit flex justify-center py-4">
                      {/* <h1>{item.name}</h1> */}
                      {item.name === "image"
                        ? "Зураг"
                        : item.name === "background"
                        ? "Дэвсгэр"
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
                        : item.name === "color1"
                        ? "Өнгө 1"
                        : item.name === "color2"
                        ? "Өнгө 2"
                        : item.name === "color3"
                        ? "Өнгө 3"
                        : item.name === "color4"
                        ? "Өнгө 4"
                        : item.name}
                    </div>
                    <hr className="w-full h-[1px] bg-black" />
                    <div className="flex w-full h-full items-center justify-center p-5">
                      {data &&
                      (item.name === "image" || item.name === "background") ? (
                        <img
                          src={`${data[item.name]}`}
                          className="w-auto h-auto max-w-[200px] max-h-[150px] object-contain mx-auto"
                        />
                      ) : data ? (
                        <h1>{data[item.name]}</h1>
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
            className="bg-white w-[75%] h-fit rounded-2xl p-6 gap-2 "
          >
            <div className="w-full h-fit flex flex-row items-center justify-between">
              <h1>Хэсэг 2 үүсгэх</h1>
              <IoExitOutline
                size={30}
                onClick={(e) => setIsClicked(false)}
                cursor={"pointer"}
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
              <div>
                <h1>Дэвсгэр зураг</h1>
                <input
                  type="text"
                  name="background"
                  placeholder="Дэвсгэр зураг"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Хэсэг</h1>
                <input
                  type="text"
                  name="span"
                  placeholder="Хэсэг"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Толгой</h1>
                <input
                  type="text"
                  name="header"
                  placeholder="Толгой"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Тухай</h1>
                <input
                  type="text"
                  name="about"
                  placeholder="Тухай"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Дэлгэрэнгүй</h1>
                <input
                  type="text"
                  name="paragraph"
                  placeholder="Дэлгэрэнгүй"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Товчний шошго</h1>
                <input
                  type="text"
                  name="button_label"
                  placeholder="Товчний шошго"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Гарчиг 1</h1>
                <input
                  type="text"
                  name="title1"
                  placeholder="Гарчиг 1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Өнгө 1</h1>
                <input
                  type="text"
                  name="color1"
                  placeholder="Өнгө 1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Гарчиг 2</h1>
                <input
                  type="text"
                  name="title2"
                  placeholder="Гарчиг 2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Өнгө 2</h1>
                <input
                  type="text"
                  name="color2"
                  placeholder="Өнгө 2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Гарчиг 3</h1>
                <input
                  type="text"
                  name="title3"
                  placeholder="Гарчиг 3"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Өнгө 3</h1>
                <input
                  type="text"
                  name="color3"
                  placeholder="Өнгө 3"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Гарчиг 4</h1>
                <input
                  type="text"
                  name="title4"
                  placeholder="Гарчиг 4"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>Өнгө 4</h1>
                <input
                  type="text"
                  name="color4"
                  placeholder="Өнгө 4"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white py-4 rounded-xl col-span-3"
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

export default Home_Section_2;
