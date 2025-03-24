"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
const About_Us_Section = () => {
  const [section1Data, setSection1Data] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
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
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/1`,
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
          `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/1`
        );
        setSection1Data(response.data);
      } catch (error) {
        console.log(error);
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
            <div className="w-full grid grid-cols-3 gap-5 items-center h-fit p-5">
              {section1Data.map((data, index) => (
                <div
                  className="w-full h-fit min-h-[200px] flex rounded-lg items-center justify-center border border-black"
                  key={index}
                >
                  <h1>{data.background}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Us_Section;
