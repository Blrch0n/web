"use client";
import React, { useEffect, useState } from "react";
import { Section7userBoardData } from "@/app/database/SectionData";
import { IoExitOutline } from "react-icons/io5";
import axios from "axios";
const Home_Section_7 = () => {
  const [section7Data, setSection7Data] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const deleteAllSection7 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/7`
      );
      console.log(response.data);
      setSection7Data([]);
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
        `${process.env.NEXT_PUBLIC_SERVER_URL}/7`,
        data
      );

      // Update local state with new data
      setSection7Data([...section7Data, response.data]);

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
          `${process.env.NEXT_PUBLIC_SERVER_URL}/7`
        );
        setSection7Data(await response.data);
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
              {" "}
              Create Section7{" "}
            </button>
            <button
              className="bg-white p-3 rounded-[6px] text-black border border-black"
              onClick={() => {
                deleteAllSection7();
              }}
            >
              {" "}
              Delete AllData
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
            <div className="grid grid-cols-3 gap-5 p-5 rounded-2xl overflow-hidden w-full h-full border border-black">
              {Section7userBoardData.map((item, index) => {
                const data = section7Data[0];
                return (
                  <div
                    key={index}
                    className="w-full h-full flex border flex-col border-black rounded-xl items-center justify-start"
                  >
                    <div className="w-full h-fit flex justify-center py-4 font-bold">
                      <h1>{item.name}</h1>
                    </div>
                    <hr className="w-full h-[1px] bg-black" />
                    <div className="flex w-full h-full items-center justify-center p-5">
                      {data && item.name.includes("image") ? (
                        <img
                          src={`${data[item.name]}`}
                          className=" max-w-[500px] max-h-[300px] object-contain mx-auto"
                        />
                      ) : data ? (
                        <h1 className="font-bold text-5xl">
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
                Create Section 5
              </h1>
              <IoExitOutline
                size={30}
                cursor={"pointer"}
                onClick={() => setIsClicked(false)}
              />
            </div>
            <div className="w-full h-fit flex flex-col gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>image</h1>
                <input
                  type="text"
                  name="image" // Add name attribute
                  placeholder="image"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
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
                <h1>Header</h1>
                <input
                  type="text"
                  name="header" // Add name attribute
                  placeholder="header"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>span</h1>
                <input
                  type="text"
                  name="span" // Add name attribute
                  placeholder="span"
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
                <h1>list1</h1>
                <input
                  type="text"
                  name="list1" // Add name attribute
                  placeholder="list1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>list2</h1>
                <input
                  type="text"
                  name="list2" // Add name attribute
                  placeholder="list2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>list3</h1>
                <input
                  type="text"
                  name="list3" // Add name attribute
                  placeholder="list3"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div>
                <h1>list4</h1>
                <input
                  type="text"
                  name="list4" // Add name attribute
                  placeholder="list4"
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

export default Home_Section_7;
