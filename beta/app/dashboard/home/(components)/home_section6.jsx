"use client";
import React, { useEffect, useState } from "react";
import { Section6userBoardData } from "@/app/database/SectionData";
import axios from "axios";
const Home_Section_6 = () => {
  const [section6Data, setSection6Data] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

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
    <section className="w-full h-full p-10 flex flex-col">
      <div className="w-full h-full flex flex-col gap-10">
        <div className="w-full h-full flex items-start flex-col gap-5 ">
          <button
            className="bg-white p-3 rounded-[6px] text-black"
            onClick={() => setIsClicked(true)}
          >
            Create User
          </button>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
            <div className="w-full flex flex-row items-center h-fit p-5 bg-blue-200">
              {Section6userBoardData.map((data, index) => (
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
              {section6Data.map((data, index) => (
                <div
                  className="w-full flex flex-row items-center h-fit p-5 bg-blue-200"
                  key={index}
                >
                  <div className="h-fit w-full ">
                    <p>{data.background_image}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.about}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.header}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.span}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.title1}</p>
                  </div>{" "}
                  <div className="h-fit w-full ">
                    <p>{data.title2}</p>
                  </div>{" "}
                  <div className="h-fit w-full ">
                    <p>{data.title3}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.title4}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.title5}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.title6}</p>
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
              Create Section 6
            </h1>
            <div className="w-full h-fit flex flex-col gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>background_image</h1>
                <input
                  type="text"
                  name="background_image" // Add name attribute
                  placeholder="background_image"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>about</h1>
                <input
                  type="text"
                  name="about" // Add name attribute
                  placeholder="about"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>header</h1>
                <input
                  type="text"
                  name="header" // Add name attribute
                  placeholder="header"
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
                <h1>title1</h1>
                <input
                  type="text"
                  name="title1" // Add name attribute
                  placeholder="title1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>title2</h1>
                <input
                  type="text"
                  name="title2" // Add name attribute
                  placeholder="title2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>title3</h1>
                <input
                  type="text"
                  name="title3" // Add name attribute
                  placeholder="title3"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>title4</h1>
                <input
                  type="text"
                  name="title4" // Add name attribute
                  placeholder="title4"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>{" "}
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>title4</h1>
                <input
                  type="text"
                  name="title5" // Add name attribute
                  placeholder="title5"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>{" "}
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>title4</h1>
                <input
                  type="text"
                  name="title6" // Add name attribute
                  placeholder="title6"
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

export default Home_Section_6;
