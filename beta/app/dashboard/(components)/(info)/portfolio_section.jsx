"use client";
import React, { useEffect, useState } from "react";
import { Section8userBoardData } from "@/app/database/SectionData";
import { IoExitOutline } from "react-icons/io5";
import axios from "axios";
const Portfolio_Section = () => {
  const [section8Data, setSection8Data] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState({
    images: [{ image: "", span: "", paragraph: "" }],
  });
  const deleteAllSection8 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/portfolio`
      );
      setSection8Data([]);
    } catch (error) {
      console.log(error);
    }
  };
  // Add new team member fields
  const addTeamMember = () => {
    setFormData((prev) => ({
      images: [...prev.images, { image: "", span: "", paragraph: "" }],
    }));
  };

  // Update form fields
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;

    const updatedMembers = [...formData.images];
    updatedMembers[index][name] = value;
    setFormData((prev) => ({ ...prev, images: updatedMembers }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/portfolio`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      setSection8Data([response.data]);
      setIsClicked(false);
      setFormData({
        images: [{ image: "", span: "", paragraph: "" }],
      });
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/portfolio`
        );
        setSection8Data(response.data);
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
              {" "}
              Портфолио үүсгэх
            </button>
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={() => {
                deleteAllSection8();
              }}
            >
              {" "}
              Бүх датаг устгах
            </button>
          </div>
          <div className="flex flex-col rounded-2xl w-full h-[600px] overflow-hidden bg-black text-white">
            <div className="grid grid-cols-3 gap-5 p-5 rounded-2xl overflow-y-auto w-full h-full border border-black">
              {section8Data[0]?.images.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col border border-black bg-[#36454f] rounded-2xl p-3 w-full h-full"
                >
                  <img
                    src={data?.image}
                    alt={`Member ${index + 1}`}
                    className="w-full h-auto object-cover "
                  />
                  <div className="p-4">
                    <h2>Гарчиг: {data?.span}</h2>
                    <p>Дэлгэрэнгүй: {data?.paragraph}</p>
                  </div>
                </div>
              ))}
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
                Портфолио үүсгэх
              </h1>
              <IoExitOutline
                size={30}
                cursor={"pointer"}
                onClick={() => setIsClicked(false)}
              />
            </div>
            <div className="w-full h-fit flex flex-col gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Багийн гишүүд</h1>
                {formData.images.map((member, index) => (
                  <div key={index} className="border p-4 mb-4 rounded-lg">
                    <h2 className="mb-2 font-semibold">Гишүүн #{index + 1}</h2>
                    <input
                      type="text"
                      name="image"
                      value={member.image}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="Зураг"
                      className="w-full p-2 mb-2 rounded-[6px] border"
                      required
                    />
                    <input
                      type="text"
                      name="span"
                      value={member.span}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="Гарчиг"
                      className="w-full p-2 mb-2 rounded-[6px] border"
                      required
                    />
                    <input
                      type="text"
                      name="paragraph"
                      value={member.paragraph}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="Дэлгэрэнгүй"
                      className="w-full p-2 mb-2 rounded-[6px] border"
                      required
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addTeamMember}
                  className="bg-gray-200 p-2 rounded-[6px] hover:bg-gray-300"
                >
                  Шинэ зураг нэмэх
                </button>
              </div>

              <button
                type="submit"
                className="bg-black text-white py-4 rounded-xl"
              >
                Шинээр үүсгэх
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Portfolio_Section;
