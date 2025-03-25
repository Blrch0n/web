"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoExitOutline } from "react-icons/io5";

const About_Us_Section = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [section1Data, setSection1Data] = useState([]);

  const deleteAllSection1 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/1`
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
        `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/1`,
        data
      );

      setSection1Data(response.data);
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
          `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/1`
        );
        setSection1Data(response.data);
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
              className="bg-white p-3 rounded-[6px] text-black border border-black"
              onClick={(e) => {
                e.preventDefault();
                setIsClicked(!isClicked);
              }}
            >
              Create Section1
            </button>
            <button
              className="bg-white p-3 rounded-[6px] text-black border border-black"
              onClick={() => {
                deleteAllSection1();
              }}
            >
              Delete AllData
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full border border-black">
            <h1 className="text-center py-5">Background</h1>
            <hr />
            <div className="w-full flex h-full justify-center gap-5 items-center  p-5">
              <img
                src={section1Data[0]?.background}
                className="w-full h-full"
                alt="background"
              />
            </div>
          </div>
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
                Create Section 1
              </h1>
              <IoExitOutline
                size={30}
                cursor={"pointer"}
                onClick={() => setIsClicked(false)}
              />
            </div>
            <div className="w-full h-fit flex flex-col gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Background Image</h1>
                <input
                  type="text"
                  name="background"
                  placeholder="Background Image"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>

              <button
                type="submit"
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

export default About_Us_Section;
