"use client";
import { useEffect, useState } from "react";
import { Section13userBoardData } from "@/app/database/SectionData";
import axios from "axios";
const Home_Section_13 = () => {
  const [section13Data, setSection13Data] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState({
    background_image: "",
    paragraph: "",
    placeholder: "",
    button_label: "",
    header1: "",
    header2: "",
    instagramImages: [""],
    Section13_data: [{ name: "", number: 0 }],
  });
  const deleteAllSection13 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/13`
      );
      console.log(response.data);
      setSection13Data({});
    } catch (error) {
      console.log(error);
    }
  };
  const addImages = () => {
    setFormData((prev) => ({
      ...prev,
      instagramImages: [...prev.instagramImages, ""],
    }));
  };

  const addMembers = () => {
    setFormData((prev) => ({
      ...prev,
      Section13_data: [...prev.Section13_data, { name: "", number: 0 }],
    }));
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (
      name === "background_image" ||
      name === "paragraph" ||
      name === "placeholder" ||
      name === "button_label" ||
      name === "header1" ||
      name === "header2"
    ) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else if (name === "images") {
      const updatedData = [...formData.instagramImages];
      updatedData[index] = value;
      setFormData((prev) => ({ ...prev, instagramImages: updatedData }));
    } else {
      const updateData = [...formData.Section13_data];
      updateData[index][name] = value;
      setFormData((prev) => ({ ...prev, Section13_data: updateData }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/13`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      setSection13Data([...section13Data, response.data]);
      setIsClicked(false);
      setFormData({
        background_image: "",
        paragraph: "",
        placeholder: "",
        button_label: "",
        header1: "",
        header2: "",
        instagramImages: [""],
        Section13_data: [{ name: "", number: 0 }],
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/13`,
          { headers: { "Content-Type": "application/json" } }
        );
        setSection13Data(response.data);
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
              Create Section13{" "}
            </button>
            <button
              className="bg-white p-3 rounded-[6px] text-black"
              onClick={() => {
                deleteAllSection13();
              }}
            >
              {" "}
              Delete AllData
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
            <div className="w-full flex flex-row items-center h-fit p-5 bg-blue-200">
              {Section13userBoardData.map((data, index) => (
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
              {section13Data.map((data, index) => (
                <div
                  className="w-full flex flex-row items-center h-fit p-5 bg-blue-200"
                  key={index}
                >
                  <div className="h-fit w-full ">
                    <p>{data.background_image}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.paragraph}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.button_label}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.header1}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.header2}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.instagramImages[0]}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.Section13_data[0].name}</p>
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
              Create Section 13
            </h1>
            <div className="w-full h-fit flex flex-col gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>background_image</h1>
                <input
                  type="text"
                  name="background_image" // Add name attribute
                  placeholder="background_image"
                  onChange={(e) => handleInputChange(e)}
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
                  onChange={(e) => handleInputChange(e)}
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>placeholder</h1>
                <input
                  type="text"
                  name="placeholder" // Add name attribute
                  placeholder="placeholder"
                  onChange={(e) => handleInputChange(e)}
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
                  onChange={(e) => handleInputChange(e)}
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
                  onChange={(e) => handleInputChange(e)}
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
                  onChange={(e) => handleInputChange(e)}
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>instagramImages</h1>
                {formData.instagramImages.map((member, index) => (
                  <div key={index} className="border p-4 mb-4 rounded-lg">
                    <h2 className="mb-2 font-semibold">
                      instagram Images #{index + 1}
                    </h2>
                    <input
                      type="text"
                      name="images"
                      value={member}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="images"
                      className="w-full p-2 mb-2 rounded-[6px] border"
                      required
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addImages}
                  className="bg-gray-200 p-2 rounded-[6px] hover:bg-gray-300"
                >
                  add image
                </button>
                {formData.Section13_data.map((member, index) => (
                  <div key={index} className="border p-4 mb-4 rounded-lg">
                    <h2 className="mb-2 font-semibold">name #{index + 1}</h2>
                    <input
                      type="text"
                      name="name"
                      value={member.name}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="name"
                      className="w-full p-2 mb-2 rounded-[6px] border"
                      required
                    />
                    <h2 className="mb-2 font-semibold">member #{index + 1}</h2>
                    <input
                      type="text"
                      name="number"
                      value={member.number}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="number"
                      className="w-full p-2 mb-2 rounded-[6px] border"
                      required
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addMembers}
                  className="bg-gray-200 p-2 rounded-[6px] hover:bg-gray-300"
                >
                  add member
                </button>
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

export default Home_Section_13;
