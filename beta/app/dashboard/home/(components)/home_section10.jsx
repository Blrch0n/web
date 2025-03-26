"use client";
import React, { useEffect, useState } from "react";
import { Section10userBoardData } from "@/app/database/SectionData";
import { IoExitOutline } from "react-icons/io5";
import axios from "axios";
const Home_Section_10 = () => {
  const [section10Data, setSection10Data] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState({
    background_image: "",
    teamMembers: [{ name: "", role: "", image: "" }],
  });
  const addTeamMember = () => {
    setFormData((prev) => ({
      ...prev,
      teamMembers: [...prev.teamMembers, { name: "", role: "", image: "" }],
    }));
  };
  const deleteAllSection10 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/10`
      );
      console.log(response.data);
      setSection10Data([]);
    } catch (error) {
      console.log(error);
    }
  };
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
        `${process.env.NEXT_PUBLIC_SERVER_URL}/10`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      setSection10Data([...section10Data, response.data]);
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
          `${process.env.NEXT_PUBLIC_SERVER_URL}/10`
        );
        setSection10Data(await response.data);
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
              Create Section10{" "}
            </button>
            <button
              className="bg-[#ff9a00] p-3 rounded-[6px] text-black border border-black"
              onClick={() => {
                deleteAllSection10();
              }}
            >
              {" "}
              Delete AllData
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full bg-black text-white">
            <div className="grid grid-cols-2 gap-5 p-5 rounded-2xl overflow-y-scroll w-full h-full border border-black">
              {Section10userBoardData.map((item, index) => {
                const data = section10Data[0];
                const teamMembers = data?.teamMembers || [];
                return (
                  <div
                    key={index}
                    className="w-full min-h-full h-fit flex border flex-col bg-[#36454f] overflow-hidden border-black rounded-xl items-center justify-start"
                  >
                    <div className="w-full h-fit flex justify-center py-4 font-bold">
                      <h1>{item.name}</h1>
                    </div>
                    <hr className="w-full h-[1px] bg-black" />
                    {item.name === "teamMembers" && data ? (
                      <div className="grid grid-cols-2 gap-5 w-full h-full items-center justify-center p-5">
                        {teamMembers.map((member, index) => (
                          <div
                            key={index}
                            className="w-full h-full border rounded-xl overflow-hidden text-white border-white"
                          >
                            <div className="w-full h-fit flex justify-center py-4 font-bold">
                              <h1>{`#${index + 1} team`}</h1>
                            </div>
                            <hr className="black" />
                            <div className="w-full h-full flex flex-col items-center gap-5">
                              <div className="w-full h-fit text-center">
                                {`Name : ${member.name}`}
                              </div>
                              <div className="w-full h-fit text-center">
                                {`Role : ${member.role}`}
                              </div>
                              <div className="w-full h-fit text-center justify-center items-center">
                                <img
                                  src={`${member.image}`}
                                  alt="image"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="w-full h-full flex justify-center items-center">
                        <img
                          src={`${data?.background_image}`}
                          alt="background"
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

export default Home_Section_10;
