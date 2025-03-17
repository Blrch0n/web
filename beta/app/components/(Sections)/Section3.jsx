"use client";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import axios from "axios";

const Section3 = () => {
  const [section3Data, setSection3Data] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/3`
        );
        setSection3Data(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });
  if (section3Data.length === 0) {
    return <div>Loading...</div>;
  }
  const { header, background_image } = section3Data[0];
  return (
    <section
      className={`w-full min-h-[403px] h-fit py-10 max-[1200px]:h-[283px] max-[1200px]:px-20 flex bg-slate-500 justify-center items-center bg-cover object-cover transition-opacity duration-700
      }`}
      style={{ backgroundImage: `url(/${background_image})` }}
    >
      <div className="max-w-[1140px] w-full h-fit flex flex-row max-[576px]:flex-col max-[576px]:text-center py-10 justify-between items-center">
        <h2 className="font-bold text-[32px] font-montserrat">{header}</h2>
        <a className="relative w-[67px] h-[67px] flex items-center justify-center bg-[#ff9a00] cursor-pointer rounded-full ">
          {/* The ripple effect span */}
          <span className="absolute top-0 m-auto w-full h-full rounded-full border-2 border-white animate-ripple delay-0"></span>
          <span className="absolute top-0 m-auto w-full h-full rounded-full border-2 border-white animate-ripple delay-75"></span>
          <FaPlay color="white" className="relative z-10" />
        </a>
      </div>
    </section>
  );
};

export default Section3;
