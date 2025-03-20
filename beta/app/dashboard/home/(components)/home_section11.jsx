"use client";
import { useEffect, useState } from "react";
import { Section11userBoardData } from "@/app/database/SectionData";
import { IoExitOutline } from "react-icons/io5";
import axios from "axios";
const Home_Section_11 = () => {
  const [section11Data, setSection11Data] = useState([]);
  const [isClicked, setIsCliked] = useState(false);
  const [formData, setFormData] = useState({
    about: "",
    header: "",
    span: "",
    blogPosts: [
      { date: "", author: "", title: "", image: "", description: "" },
    ],
  });
  const deleteAllSection11 = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/11`
      );
      console.log(response.data);
      setSection11Data([]);
    } catch (error) {
      console.log(error);
    }
  };
  const addTeamMember = () => {
    setFormData((prev) => ({
      ...prev,
      blogPosts: [
        ...prev.blogPosts,
        {
          date: "",
          author: "",
          title: "",
          image: "",
          description: "",
        },
      ],
    }));
  };
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "about" || name === "header" || name === "span") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      const updateData = [...formData.blogPosts];
      updateData[index][name] = value;
      setFormData((prev) => ({ ...prev, blogPosts: updateData }));
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/11`,
        formData
      );
      setSection11Data([...section11Data, response.data]);
      setIsCliked(false);
      setFormData({
        about: "",
        header: "",
        span: "",
        blogPosts: [
          { date: "", author: "", title: "", image: "", description: "" },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/11`
        );
        setSection11Data(await response.data);
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
              className="bg-white p-3 rounded-[6px] text-black"
              onClick={(e) => {
                e.preventDefault();
                setIsCliked(true);
              }}
            >
              Create Section11
            </button>
            <button
              className="bg-white p-3 rounded-[6px] text-black"
              onClick={() => {
                deleteAllSection11();
              }}
            >
              Delete AllData
            </button>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
            <div className="grid grid-cols-2 gap-5 p-5 rounded-2xl overflow-hidden w-full h-full border border-black">
              {Section11userBoardData.map((item, index) => {
                const data = section11Data[0];
                const blogPosts = data?.blogPosts || [];
                return (
                  <div
                    key={index}
                    className="w-full min-h-full h-fit flex border flex-col border-black rounded-xl items-center justify-start"
                  >
                    <div className="w-full h-fit flex justify-center py-4 font-bold">
                      <h1>{item.name}</h1>
                    </div>
                    <hr className="w-full h-[1px] bg-black" />
                    {item.name === "blogPosts" && data ? (
                      <div className="grid grid-cols-2 gap-5 w-full h-full items-center justify-center p-5">
                        {blogPosts.map((member, index) => (
                          <div
                            key={index}
                            className="w-full h-full border rounded-xl border-black"
                          >
                            <div className="w-full h-fit flex justify-center py-4 font-bold">
                              <h1>{`#${index + 1} team`}</h1>
                            </div>
                            <hr />
                            <div className="w-full h-full flex flex-col items-center gap-5">
                              <div className="w-full h-fit text-center">
                                {member.date}
                              </div>
                              <div className="w-full h-fit text-center">
                                {member.author}
                              </div>
                              <div className="w-full h-fit text-center">
                                {member.title}
                              </div>
                              <div className="w-full h-fit text-center">
                                {member.image}
                              </div>
                              <div className="w-full h-fit text-center">
                                {member.description}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="w-full h-full flex justify-center items-center">
                        {data?.background_image}
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
                Create Section 11
              </h1>
              <IoExitOutline
                size={30}
                cursor={"pointer"}
                onClick={() => setIsCliked(false)}
              />
            </div>
            <div className="w-full h-fit flex flex-col gap-5 text-black">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>about</h1>
                <input
                  type="text"
                  name="about" // Add name attribute
                  placeholder="about"
                  onChange={(e) => handleInputChange(e)}
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>header</h1>
                <input
                  type="text"
                  name="header" // Add name attribute
                  placeholder="header"
                  onChange={(e) => handleInputChange(e)}
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>span</h1>
                <input
                  type="text"
                  name="span" // Add name attribute
                  placeholder="span"
                  onChange={(e) => handleInputChange(e)}
                  className="w-full p-2 rounded-[6px] border border-black"
                  required
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <h1>blogPosts</h1>
                {formData.blogPosts.map((member, index) => (
                  <div key={index} className="border p-4 mb-4 rounded-lg">
                    <h2 className="mb-2 font-semibold">Member #{index + 1}</h2>
                    <input
                      type="text"
                      name="date"
                      value={member.date}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="date"
                      className="w-full p-2 mb-2 rounded-[6px] border"
                      required
                    />
                    <input
                      type="text"
                      name="author"
                      value={member.author}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="author"
                      className="w-full p-2 mb-2 rounded-[6px] border"
                      required
                    />
                    <input
                      type="text"
                      name="title"
                      value={member.title}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="title"
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
                      name="description"
                      value={member.description}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="description URL"
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

export default Home_Section_11;
