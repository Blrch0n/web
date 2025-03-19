"use client";
import React, { useEffect, useState } from "react";
import { Section12userBoardData } from "@/app/database/SectionData";
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
              Create Section12{" "}
            </button>
            <button
              className="bg-white p-3 rounded-[6px] text-black"
              onClick={() => {
                deleteAllSection12();
              }}
            >
              {" "}
              Delete AllData
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
            <div className="w-full flex flex-row items-center h-fit p-5 bg-blue-200">
              {Section12userBoardData.map((data, index) => (
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
              {section12Data.map((data, index) => (
                <div
                  className="w-full flex flex-row items-center h-fit p-5 bg-blue-200"
                  key={index}
                >
                  <div className="h-fit w-full ">
                    <p>{data.background}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.header1}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.paragraph1}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.header2}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.paragraph2}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.header3}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.button1_label}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.button2_label}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.button3_label}</p>
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
      {isClicked && (
        <div className="absolute top-0 left-0 bg-black/50 w-full h-screen flex items-center justify-center z-50">
          {/* Add onSubmit to form and proper input names */}
          <form
            onSubmit={handleFormSubmit}
            className="bg-white w-1/2 h-fit rounded-2xl p-6 gap-2 flex flex-col"
          >
            <h1 className="text-3xl font-montserrat font-bold text-black">
              Create Section 12
            </h1>
            <div className="w-full h-fit flex flex-col gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>background_image</h1>
                <input
                  type="text"
                  name="background" // Add name attribute
                  placeholder="background"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>header1</h1>
                <input
                  type="text"
                  name="header1" // Add name attribute
                  placeholder="header1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>paragraph1</h1>
                <input
                  type="text"
                  name="paragraph1" // Add name attribute
                  placeholder="paragraph1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>header2</h1>
                <input
                  type="text"
                  name="header2" // Add name attribute
                  placeholder="header2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>paragraph2</h1>
                <input
                  type="text"
                  name="paragraph2" // Add name attribute
                  placeholder="paragraph2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>header3</h1>
                <input
                  type="text"
                  name="header3" // Add name attribute
                  placeholder="header3"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>button1_label</h1>
                <input
                  type="text"
                  name="button1_label" // Add name attribute
                  placeholder="button1_label"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>button2_label</h1>
                <input
                  type="text"
                  name="button2_label" // Add name attribute
                  placeholder="button2_label"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>button3_label</h1>
                <input
                  type="text"
                  name="button3_label" // Add name attribute
                  placeholder="button3_label"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
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

export default Home_Section_12;
