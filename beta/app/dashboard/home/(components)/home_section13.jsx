"use client";
import { useEffect, useState } from "react";
import { Section13userBoardData } from "@/app/database/SectionData";
import { IoExitOutline } from "react-icons/io5";
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
      setSection13Data([]);
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
    <section className="w-full h-full p-10 flex flex-col text-black">
      <div className="w-full h-full flex flex-col gap-10">
        <div className="w-full h-full flex items-start flex-col gap-5 ">
          <div className="flex justify-between items-center w-full h-fit">
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={(e) => {
                e.preventDefault();
                setIsClicked(!isClicked);
              }}
            >
              Хэсэг 13 үүсгэх
            </button>
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={() => {
                deleteAllSection13();
              }}
            >
              Бүх датаг устгах
            </button>
          </div>
          <div className="flex flex-col rounded-2xl bg-black text-white w-full h-full border border-black">
            <div className="w-full grid grid-cols-3 gap-5 items-center h-fit p-5 overflow-y-scroll border">
              {Section13userBoardData.map((item, index) => {
                const data = section13Data[0] || {}; // Ensure data is at least an empty object

                return (
                  <div
                    key={index}
                    className="w-full bg-[#36454f] h-fit min-h-[300px] flex border flex-col border-black rounded-xl items-center justify-start overflow-hidden"
                  >
                    <div className="w-full h-fit flex justify-center py-4 font-bold">
                      <h1>
                        {item.name === "background_image"
                          ? "Дэвсгэр зураг"
                          : item.name === "paragraph"
                          ? "Дэлгэрэнгүй техт"
                          : item.name === "placeholder"
                          ? "Түр техт"
                          : item.name === "paragraph1"
                          ? "Дэлгэрэнгүй техт 1"
                          : item.name === "paragraph2"
                          ? "Дэлгэрэнгүй техт 2"
                          : item.name === "header2"
                          ? "Толгой гарчиг 2"
                          : item.name === "button_label"
                          ? "Товч техт"
                          : item.name === "header1"
                          ? "Толгой гарчиг 1"
                          : item.name === "header3"
                          ? "Толгой гарчиг 3"
                          : item.name === "instagramImages"
                          ? "Инстаграм зураг"
                          : item.name === "Section13_data"
                          ? "Хэсэг 13-ын дата"
                          : item.name}
                      </h1>
                    </div>
                    <hr className="w-full h-[1px] bg-black" />
                    <div className="w-full h-fit flex justify-center items-center">
                      {item.name === "instagramImages" &&
                      data.instagramImages ? (
                        <div className="w-full h-fit min-h-[150px] grid grid-cols-3 gap-2">
                          {data.instagramImages.map((image, imgIndex) => (
                            <div
                              className="w-full h-fit flex items-center justify-center border border-black"
                              key={imgIndex}
                            >
                              {image ? (
                                <img
                                  src={image}
                                  alt="Instagram"
                                  className="w-full h-auto"
                                />
                              ) : (
                                <h1>NAH</h1>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : item.name === "Section13_data" &&
                        data.Section13_data ? (
                        <div className="w-full h-fit min-h-[150px] flex flex-col items-center justify-center text-center">
                          {data.Section13_data.map((section, secIndex) => (
                            <h1 key={secIndex}>{section.name}</h1>
                          ))}
                        </div>
                      ) : item.name.includes("image") && data[item.name] ? (
                        <img
                          src={data[item.name]}
                          alt="Image"
                          className="w-full h-auto"
                        />
                      ) : (
                        <div className="w-full h-fit min-h-[150px] flex flex-col items-center justify-center text-center">
                          <h1>{data[item.name]}</h1>
                        </div>
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
                Create Section 13
              </h1>
              <IoExitOutline
                size={30}
                cursor={"pointer"}
                onClick={() => setIsClicked(false)}
              />
            </div>
            <div className="w-full h-fit grid grid-cols-4 gap-5 text-black">
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
                className="bg-black text-white h-20 py-4 rounded-xl"
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
