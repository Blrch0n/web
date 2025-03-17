"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const Section11 = () => {
  const [section11Data, setSection11Data] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/11`
        );
        setSection11Data(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (section11Data.length === 0) return <div>Loading...</div>;
  const { about, header, span, blogPosts } = section11Data[0];
  return (
    <section className="w-full min-h-[681px] h-fit bg-white p-[100px] max-[766px]:p-0 max-[766px]:py-20 relative flex justify-center items-center">
      <span className="w-[336px] h-[347px] absolute top-[100px] -left-[150px]">
        <img src="/dot_01.png" alt="Decorative Dots" />
      </span>
      <div className="max-w-[1140px] w-full max-[1200px]:px-10 h-full flex flex-col gap-8">
        <div className="font-montserrat font-bold">
          <h4 className="text-[18px] text-[#f783aa]">{about}</h4>
          <h3 className="text-[32px] text-black font-extrabold">
            {header} <span className="text-[#a762e9]">{span}</span>
          </h3>
        </div>
        <div className="w-full h-fit grid grid-cols-3 gap-10 max-[992px]:grid-cols-2 max-[766px]:grid-cols-1">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="w-full h-[280px] flex flex-col relative rounded-[15px] items-start overflow-hidden justify-between group z-10"
            >
              <img src={post.image} className="w-full" alt="Blog Post" />
              <div className="absolute flex flex-col bottom-0 p-[25px] text-black right-0 w-full h-[156px] group-hover:h-[228px] transition-all border-[#f2f2f2] border-[1px] duration-500 rounded-[15px] bg-white">
                <div className="flex flex-row justify-between">
                  <a>{post.date}</a>
                  <a>{post.author}</a>
                </div>
                <a className="font-bold text-[20px]">{post.title}</a>
                <p className="text-[16px] hidden font-medium font-mulish group-hover:flex duration-300 text-[#999]">
                  {post.description}
                </p>
                <BsThreeDots size={20} color="black" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="w-[736px] h-[624px] absolute bottom-0 right-0 z-[0]">
        <img src="/Latest-news.png" alt="Latest News" />
      </span>
    </section>
  );
};

export default Section11;
