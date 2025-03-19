"use client";
import React, { useEffect, useState } from "react";
import { Section5userBoardData } from "@/app/database/SectionData";
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
    <section className="w-full h-full p-10 flex flex-col">
      <div className="w-full h-full flex flex-col gap-10">
        <div className="w-full h-full flex items-start flex-col gap-5 ">
          <div className="flex justify-between items-center w-full h-fit">
            <button
              className="bg-white p-3 rounded-[6px] text-black"
              onClick={(e) => {
                e.preventDefault();
                setIsClicked(!isClicked);
              }}
            >
              {" "}
              Create Section5{" "}
            </button>
            <button
              className="bg-white p-3 rounded-[6px] text-black"
              onClick={() => {
                deleteAllSection5();
              }}
            >
              {" "}
              Delete AllData
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
            <div className="w-full flex flex-row items-center h-fit p-5 bg-blue-200">
              {Section5userBoardData.map((data, index) => (
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
              {section5Data.map((data, index) => (
                <div
                  className="w-full flex flex-row items-center h-fit p-5 bg-blue-200"
                  key={index}
                >
                  <div className="h-fit w-full flex flex-row items-center overflow-hidden">
                    <p className="w-full h-fit">{data.label}</p>
                    <p className="w-full h-fit">{data.paragraph}</p>
                    <p className="w-full h-fit">{data.image1}</p>
                    <p className="w-full h-fit">{data.image2}</p>
                    <p className="w-full h-fit">{data.image3}</p>
                    <p className="w-full h-fit">{data.image4}</p>
                    <p className="w-full h-fit">{data.image5}</p>
                    <p className="w-full h-fit">{data.image6}</p>
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
              Create Section 5
            </h1>
            <div className="w-full h-fit flex flex-col gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>label</h1>
                <input
                  type="text"
                  name="label" // Add name attribute
                  placeholder="label"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>paragraph</h1>
                <input
                  type="text"
                  name="paragraph" // Add name attribute
                  placeholder="paragraph"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>image1</h1>
                <input
                  type="text"
                  name="image1" // Add name attribute
                  placeholder="image1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>image2</h1>
                <input
                  type="text"
                  name="image2" // Add name attribute
                  placeholder="image2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>image3</h1>
                <input
                  type="text"
                  name="image3" // Add name attribute
                  placeholder="image3"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>image4</h1>
                <input
                  type="text"
                  name="image4" // Add name attribute
                  placeholder="image4"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>image5</h1>
                <input
                  type="text"
                  name="image5" // Add name attribute
                  placeholder="image5"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>image6</h1>
                <input
                  type="text"
                  name="image6" // Add name attribute
                  placeholder="image6"
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

export default Home_Section_5;
