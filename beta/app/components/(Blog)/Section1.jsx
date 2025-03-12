import React from "react";
import { BsThreeDots } from "react-icons/bs";

const news_data = [
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} color="black" />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} color="black" />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} color="black" />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} color="black" />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} color="black" />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} color="black" />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} color="black" />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} color="black" />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} color="black" />,
  },
];

const Section1_2 = () => {
  return (
    <section className="w-full h-fit flex items-center justify-center py-[100px] bg-white">
      <div className="max-w-[1140px] max-[1200px]:px-10 w-full h-fit grid gap-10 max-[1000px]:grid-cols-2 max-[768px]:grid-cols-1 grid-cols-3">
        {news_data.map((data, index) => (
          <a href="/portfolio/details" key={index}>
            <div className="w-full min-h-[350px]  relative h-full rounded-xl overflow-hidden shadow-md">
              <div className="w-full h-auto">
                <img
                  src="/blog1.jpg"
                  alt="blog"
                  className="w-full h-auto object-cover"
                />
                <div className="w-full h-fit flex flex-col gap-2 p-[30px] absolute bottom-0 right-0   bg-white rounded-[15px]">
                  <span className="text-[16px] font-medium font-mulish text-[#999]">
                    <p>{data.date}</p>
                    <h2 className=" text-[#ff9a00]">{data.author}</h2>
                  </span>
                  <h1 className="text-[22px] text-black font-bold">
                    {data.header}
                  </h1>
                  <div>{data.icon}</div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Section1_2;
