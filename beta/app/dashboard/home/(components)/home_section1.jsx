"use client";
import { Section1userBoardData } from "@/app/database/SectionData";
import axios from "axios";
import { useEffect, useState } from "react";

const Home_Section_1 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [section1Data, setSection1Data] = useState([]);

  const deleteAllSection1 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/1`
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
        `${process.env.NEXT_PUBLIC_SERVER_URL}/1`,
        data
      );

      // Update local state with new data
      setSection1Data([...section1Data, response.data]);

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
          `${process.env.NEXT_PUBLIC_SERVER_URL}/1`
        );
        setSection1Data(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full h-full p-10 flex flex-col relative">
      <div className="w-full h-full flex flex-col gap-10">
        {" "}
        <div className="w-full h-full flex items-start flex-col gap-5 ">
          {" "}
          <div className="flex justify-between items-center w-full h-fit">
            <button
              className="bg-white p-3 rounded-[6px] text-black"
              onClick={(e) => {
                e.preventDefault();
                setIsClicked(!isClicked);
              }}
            >
              {" "}
              Create Section1{" "}
            </button>
            <button
              className="bg-white p-3 rounded-[6px] text-black"
              onClick={() => {
                deleteAllSection1();
              }}
            >
              {" "}
              Delete AllData
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
            {" "}
            <div className="w-full flex flex-row items-center h-fit p-5 bg-blue-200">
              {" "}
              {Section1userBoardData.map((data, index) => (
                <div
                  key={index}
                  className="h-fit w-full"
                  style={{ width: data.size }}
                >
                  {" "}
                  <p>{data.name}</p>{" "}
                </div>
              ))}{" "}
            </div>{" "}
            <div className="w-full h-fit flex flex-col">
              {" "}
              {section1Data.map((data, index) => (
                <div
                  className="w-full flex flex-row items-center h-fit p-5 bg-blue-200"
                  key={index}
                >
                  {" "}
                  <div className="h-fit w-[20%] ">
                    {" "}
                    <p>{data.image}</p>{" "}
                  </div>{" "}
                  <div className="h-fit w-[17%] overflow-hidden">
                    {" "}
                    <p>{data.background}</p>{" "}
                  </div>{" "}
                  <div className="h-fit w-[20%] ">
                    {" "}
                    <p>{data.header}</p>{" "}
                  </div>{" "}
                  <div className="h-fit w-[20%] ">
                    {" "}
                    <p>{data.paragraph}</p>{" "}
                  </div>{" "}
                  <div className="h-fit w-[20%] ">
                    {" "}
                    <p>{data.button_label}</p>{" "}
                  </div>
                </div>
              ))}
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
            <h1 className="text-3xl font-montserrat font-bold text-black">
              Create Section 1
            </h1>
            <div className="w-full h-fit flex flex-col gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Image</h1>
                <input
                  type="text"
                  name="image" // Add name attribute
                  placeholder="Image"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>background</h1>
                <input
                  type="text"
                  name="background" // Add name attribute
                  placeholder="background"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>header</h1>
                <input
                  type="text"
                  name="header" // Add name attribute
                  placeholder="header"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>paragraph</h1>
                <input
                  type="text"
                  name="paragraph" // Add name attribute
                  placeholder="paragraph"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>button_label</h1>
                <input
                  type="text"
                  name="button_label" // Add name attribute
                  placeholder="button_label"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <button
                type="submit" // Change to submit type
                className="bg-black text-white py-4 rounded-xl"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Home_Section_1;
