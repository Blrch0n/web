"use client";
import { IoExitOutline } from "react-icons/io5";
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
    <section className="w-full h-full p-10 flex flex-col relative text-black">
      <div className="w-full h-full flex flex-col gap-10 ">
        <div className="w-full h-full flex items-start flex-col gap-5 ">
          <div className="flex justify-between items-center w-full h-fit">
            <button
              className="bg-white p-3 rounded-[6px] text-black border border-black"
              onClick={(e) => {
                e.preventDefault();
                setIsClicked(!isClicked);
              }}
            >
              Create Section1{" "}
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
          <div className="grid grid-cols-3 gap-5 p-5 rounded-2xl overflow-hidden w-full h-full border border-black">
            {section1Data.length > 0 &&
              Section1userBoardData.map((item, index) => {
                const data = section1Data[0];
                return (
                  <div
                    key={index}
                    className="w-full h-full flex border flex-col border-black rounded-xl items-center justify-start"
                  >
                    <div className="w-full h-fit flex justify-center py-4">
                      <h1>{item.name}</h1>
                    </div>
                    <hr className="w-full h-[1px] bg-black" />
                    <div className="flex w-full h-full items-center justify-center p-5">
                      {data &&
                      (item.name === "image" || item.name === "background") ? (
                        <img
                          src={`${data[item.name]}`}
                          className="w-full h-full object-cover"
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

      {isClicked && (
        <div className="absolute top-0 left-0 bg-black/50 w-full h-screen flex items-center justify-center z-50">
          {/* Add onSubmit to form and proper input names */}
          <form
            onSubmit={handleFormSubmit}
            className="bg-white w-1/2 h-fit rounded-2xl p-6 gap-2 flex flex-col"
          >
            <div className="w-full h-fit flex items-center justify-between">
              <h1 className="text-3xl font-montserrat font-bold text-black">
                Create Section 1
              </h1>
              <IoExitOutline
                size={30}
                onClick={() => setIsClicked(false)}
                cursor={"pointer"}
              />
            </div>
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
