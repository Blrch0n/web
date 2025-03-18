"use client";
import { useEffect, useState } from "react";
import { Section9userBoardData } from "@/app/database/SectionData";
import axios from "axios";
const Home_Section_9 = () => {
  const [section9Data, setSection9Data] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

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
    <section className="w-full h-full p-10 flex flex-col">
      <div className="w-full h-full flex flex-col gap-10">
        <div className="w-full h-full flex items-start flex-col gap-5 ">
          <button
            className="bg-white p-3 rounded-[6px] text-black"
            onClick={() => {
              setIsClicked(true);
            }}
          >
            Create User
          </button>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
            <div className="w-full flex flex-row items-center h-fit p-5 bg-blue-200">
              {Section9userBoardData.map((data, index) => (
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
              {section9Data.map((data, index) => (
                <div
                  className="w-full flex flex-row items-center h-fit p-5 bg-blue-200"
                  key={index}
                >
                  <div className="h-fit w-full ">
                    <p>{data.number1}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.label1}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.number2}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.label2}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.number3}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.label3}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.number4}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.label4}</p>
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
              Create Section 9
            </h1>
            <div className="w-full h-fit flex flex-col gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>number1</h1>
                <input
                  type="text"
                  name="number1" // Add name attribute
                  placeholder="number1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>label1</h1>
                <input
                  type="text"
                  name="label1" // Add name attribute
                  placeholder="label1"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>number2</h1>
                <input
                  type="text"
                  name="number2" // Add name attribute
                  placeholder="number2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>label2</h1>
                <input
                  type="text"
                  name="label2" // Add name attribute
                  placeholder="label2"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>number3</h1>
                <input
                  type="text"
                  name="number3" // Add name attribute
                  placeholder="number3"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>label3</h1>
                <input
                  type="text"
                  name="label3" // Add name attribute
                  placeholder="label3"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>number4</h1>
                <input
                  type="text"
                  name="number4" // Add name attribute
                  placeholder="number4"
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>label4</h1>
                <input
                  type="text"
                  name="label4" // Add name attribute
                  placeholder="label4"
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

export default Home_Section_9;
