"use client";
import React, { useEffect, useState } from "react";
import { Section8userBoardData } from "@/app/database/SectionData";
import { IoExitOutline } from "react-icons/io5";
import axios from "axios";
const Home_Section_8 = () => {
  const [section8Data, setSection8Data] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState({
    background_image: "",
    teamMembers: [{ name: "", role: "", image: "", paragraph: "" }],
  });
  const deleteAllSection8 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/8`
      );
      console.log(response.data);
      setSection8Data([]);
    } catch (error) {
      console.log(error);
    }
  };
  // Add new team member fields
  const addTeamMember = () => {
    setFormData((prev) => ({
      ...prev,
      teamMembers: [
        ...prev.teamMembers,
        { name: "", role: "", image: "", paragraph: "" },
      ],
    }));
  };

  // Update form fields
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "background_image") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      const updatedMembers = [...formData.teamMembers];
      updatedMembers[index][name] = value;
      setFormData((prev) => ({ ...prev, teamMembers: updatedMembers }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/8`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      setSection8Data([...section8Data, response.data]);
      setIsClicked(false);
      setFormData({
        background_image: "",
        teamMembers: [{ name: "", role: "", image: "", paragraph: "" }],
      });
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/8`
        );
        setSection8Data(response.data);
        console.log(response.data);
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
              Хэсэг 8 шинээр үүсгэх
            </button>
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={() => {
                deleteAllSection8();
              }}
            >
              Хэсэг 8 устгах
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full bg-black text-white">
            <div className="grid grid-cols-2 gap-5 p-5 rounded-2xl overflow-y-scroll w-full h-full border border-black">
              {Section8userBoardData.map((item, index) => {
                const data = section8Data[0];
                const teamMembers = data?.teamMembers || [];
                return (
                  <div
                    key={index}
                    className="w-full min-h-full bg-[#36454f] h-fit flex border flex-col border-black rounded-xl items-center justify-start"
                  >
                    <div className="w-full h-fit flex justify-center py-4 font-bold">
                      <h1>
                        {item.name === "background_image"
                          ? "Дэвсгэр зураг"
                          : "Багийн гишүүд"}
                      </h1>
                    </div>
                    <hr className="w-full h-[1px] bg-black" />
                    {item.name === "teamMembers" && data ? (
                      <div className="grid grid-cols-2 gap-5 w-full h-full items-center justify-center p-5">
                        {teamMembers.map((member, index) => (
                          <div
                            key={index}
                            className="w-full h-full border rounded-xl text-white border-white"
                          >
                            <div className="w-full h-fit flex justify-center py-4 font-bold">
                              <h1>{`#${index + 1} team`}</h1>
                            </div>
                            <hr />
                            <div className="w-full h-full flex flex-col items-center gap-5">
                              <div className="w-full h-fit text-center">
                                {member.name}
                              </div>
                              <div className="w-full h-fit text-center">
                                {member.role}
                              </div>
                              <img
                                className="w-full h-fit text-center max-w-[150px] max-h-[150px] object-cover"
                                src={`${member.image}`}
                              ></img>
                              <div className="w-full h-fit text-center">
                                {member.paragraph}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="w-full h-full flex justify-center items-center">
                        <img
                          src={section8Data[0]?.background_image}
                          className="w-full h-auto object-cover"
                          alt="background_image"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
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
                Хэсэг 8 үүсгэх
              </h1>
              <IoExitOutline
                size={30}
                cursor={"pointer"}
                onClick={() => setIsClicked(false)}
              />
            </div>
            <div className="w-full h-fit grid grid-cols-2 gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Дэвсгэр зураг</h1>
                <input
                  type="text"
                  name="background_image"
                  value={formData.background_image}
                  placeholder="Дэвсгэр зураг"
                  onChange={(e) => handleInputChange(e)}
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>

              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Багийн гишүүд</h1>
                {formData.teamMembers.map((member, index) => (
                  <div key={index} className="border p-4 mb-4 rounded-lg">
                    <h2 className="mb-2 font-semibold">Гишүүд #{index + 1}</h2>
                    <input
                      type="text"
                      name="name"
                      value={member.name}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="Нэр"
                      className="w-full p-2 mb-2 rounded-[6px] border"
                      required
                    />
                    <input
                      type="text"
                      name="role"
                      value={member.role}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="Үүрэг"
                      className="w-full p-2 mb-2 rounded-[6px] border"
                      required
                    />
                    <input
                      type="text"
                      name="image"
                      value={member.image}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="Зургийн зам"
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
                  Шинэ гишүүн үүсгэх
                </button>
              </div>

              <button
                type="submit"
                className="bg-black text-white py-4 rounded-xl col-span-2"
              >
                Үүсгэх
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Home_Section_8;
