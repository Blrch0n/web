"use client";
import React, { useEffect, useState } from "react";
import { Section8userBoardData } from "@/app/database/SectionData";
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
              Create Section8{" "}
            </button>
            <button
              className="bg-white p-3 rounded-[6px] text-black"
              onClick={() => {
                deleteAllSection8();
              }}
            >
              {" "}
              Delete AllData
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
            <div className="w-full flex flex-row items-center h-fit p-5 bg-blue-200">
              {Section8userBoardData.map((data, index) => (
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
              {section8Data.map((data, index) => (
                <div
                  className="w-full flex flex-row items-center h-fit p-5 bg-blue-200"
                  key={index}
                >
                  <div className="h-fit w-full ">
                    <p>{data.background_image}</p>
                  </div>
                  <div className="h-fit w-full ">
                    <p>{data.teamMembers[0].name}</p>
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
            <h1 className="text-3xl font-montserrat font-bold text-black">
              Create Section 8
            </h1>
            <div className="w-full h-fit flex flex-col gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Background Image</h1>
                <input
                  type="text"
                  name="background_image"
                  value={formData.background_image}
                  onChange={(e) => handleInputChange(e)}
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>

              <div className="w-full h-fit flex flex-col gap-2">
                <h1>Team Members</h1>
                {formData.teamMembers.map((member, index) => (
                  <div key={index} className="border p-4 mb-4 rounded-lg">
                    <h2 className="mb-2 font-semibold">Member #{index + 1}</h2>
                    <input
                      type="text"
                      name="name"
                      value={member.name}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="Name"
                      className="w-full p-2 mb-2 rounded-[6px] border"
                      required
                    />
                    <input
                      type="text"
                      name="role"
                      value={member.role}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="Role"
                      className="w-full p-2 mb-2 rounded-[6px] border"
                      required
                    />
                    <input
                      type="text"
                      name="image"
                      value={member.image}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="Image URL"
                      className="w-full p-2 mb-2 rounded-[6px] border"
                      required
                    />
                    <input
                      type="text"
                      name="paragraph"
                      value={member.paragraph}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="Paragraph"
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
                  Add Another Member
                </button>
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

export default Home_Section_8;
