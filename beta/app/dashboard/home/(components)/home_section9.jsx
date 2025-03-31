"use client";
import { useEffect, useState } from "react";
import { Section9userBoardData } from "@/app/database/SectionData";
import { IoExitOutline } from "react-icons/io5";
import axios from "axios";
const Home_Section_9 = () => {
  const [section9Data, setSection9Data] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const deleteAllSection9 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/9`
      );
      console.log(response.data);
      setSection9Data([]);
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
        `${process.env.NEXT_PUBLIC_SERVER_URL}/9`,
        data
      );

      // Update local state with new data
      setSection9Data([...section9Data, response.data]);

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
          `${process.env.NEXT_PUBLIC_SERVER_URL}/9`
        );
        console.log(response.data);
        setSection9Data(await response.data);
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
              Хэсэг 9 үүсгэх
            </button>
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={() => {
                deleteAllSection9();
              }}
            >
              Датаг устгах
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full text-white bg-black">
            <div className="grid grid-cols-3 gap-5 p-5 rounded-2xl overflow-y-scroll w-full h-full border border-black">
              {Section9userBoardData.map((item, index) => {
                const data = section9Data[0];
                return (
                  <div
                    key={index}
                    className="w-full h-full flex border flex-col bg-[#36454f] border-black rounded-xl items-center justify-start"
                  >
                    <div className="w-full h-fit flex justify-center py-4 font-bold">
                      <h1>
                        {item.name === "number1"
                          ? "Тоо 1"
                          : item.name === "label1"
                          ? "Гарчиг 1"
                          : item.name === "number2"
                          ? "Тоо 2"
                          : item.name === "label2"
                          ? "Гарчиг 2"
                          : item.name === "number3"
                          ? "Тоо 3"
                          : item.name === "label3"
                          ? "Гарчиг 3"
                          : item.name === "number4"
                          ? "Тоо 4"
                          : item.name === "label4"
                          ? "Гарчиг 4"
                          : item.name}
                      </h1>
                    </div>
                    <hr className="w-full h-[1px] bg-black" />
                    <div className="flex w-full h-full items-center justify-center p-5">
                      <h1 className="font-bold text-5xl text-center">
                        {data ? data[item.name] : "N/A"}
                      </h1>
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
                Хэсэг 9 үүсгэх
              </h1>
              <IoExitOutline
                size={30}
                cursor={"pointer"}
                onClick={() => setIsClicked(false)}
              />
            </div>
            <div className="w-full h-fit grid grid-cols-3 gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Тоо 1</h1>
                <input
                  type="text"
                  name="number1" // Add name attribute
                  placeholder="Тоо 1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Гарчиг 1</h1>
                <input
                  type="text"
                  name="label1" // Add name attribute
                  placeholder="Гарчиг 1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Тоо 2</h1>
                <input
                  type="text"
                  name="number2" // Add name attribute
                  placeholder="Тоо 2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Гарчиг 2</h1>
                <input
                  type="text"
                  name="label2" // Add name attribute
                  placeholder="Гарчиг 2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Тоо 3</h1>
                <input
                  type="text"
                  name="number3" // Add name attribute
                  placeholder="Тоо 3"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Гарчиг 3</h1>
                <input
                  type="text"
                  name="label3" // Add name attribute
                  placeholder="Гарчиг 3"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Тоо 4</h1>
                <input
                  type="text"
                  name="number4" // Add name attribute
                  placeholder="Тоо 4"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Гарчиг 4</h1>
                <input
                  type="text"
                  name="label4" // Add name attribute
                  placeholder="Гарчиг 4"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <button
                type="submit" // Change to submit type
                className="bg-black text-white py-4 rounded-xl"
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

export default Home_Section_9;
