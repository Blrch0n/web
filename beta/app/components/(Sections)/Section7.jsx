"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

const Section7 = () => {
  const [section7Data, setSection7Data] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/7`
        );
        setSection7Data(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (section7Data.length === 0) return <div>Loading...</div>;
  const {
    image,
    background_image,
    header,
    span,
    paragraph,
    list1,
    list2,
    list3,
    list4,
    button_label,
  } = section7Data[0];
  return (
    <div
      className="w-full h-fit p-[100px] flex justify-center items-center bg-no-repeat bg-cover max-md:p-[50px] max-sm:p-[20px]"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <div className="max-w-[1140px] w-full max-[1200px]:px-20  h-full flex flex-col lg:flex-row gap-[30px]">
        <div className="flex-1 flex justify-center w-full h-full">
          <img
            src={`${image}`}
            className="w-full max-w-[540px] lg:max-w-[450px] max-[1200px]:max-w-[400px] h-auto object-contain"
            alt="Responsive PC"
          />
        </div>

        <div className="flex-1 flex flex-col gap-8 w-full h-fit">
          <h3 className="text-[32px] font-montserrat font-extrabold leading-tight">
            {header} <span className="text-[#ff9a00]">{span}</span> websites
          </h3>

          <p className="text-[16px] font-mulish font-medium">{paragraph}</p>

          <div className="w-full h-fit flex flex-col gap-6">
            <div className="relative ml-3">
              <span className="absolute -bottom-2 right-0 w-full h-[2px] bg-black"></span>
              <p className="text-[15px] text-white font-mulish font-semibold">
                {list1}
              </p>
              <span className="absolute top-2 rounded-full -left-3 h-2 w-[3px] bg-[#ff9a00]"></span>
            </div>{" "}
            <div className="relative ml-3">
              <span className="absolute -bottom-2 right-0 w-full h-[2px] bg-black"></span>
              <p className="text-[15px] text-white font-mulish font-semibold">
                {list2}
              </p>
              <span className="absolute top-2 rounded-full -left-3 h-2 w-[3px] bg-[#ff9a00]"></span>
            </div>{" "}
            <div className="relative ml-3">
              <span className="absolute -bottom-2 right-0 w-full h-[2px] bg-black"></span>
              <p className="text-[15px] text-white font-mulish font-semibold">
                {list3}
              </p>
              <span className="absolute top-2 rounded-full -left-3 h-2 w-[3px] bg-[#ff9a00]"></span>
            </div>{" "}
            <div className="relative ml-3">
              <span className="absolute -bottom-2 right-0 w-full h-[2px] bg-black"></span>
              <p className="text-[15px] text-white font-mulish font-semibold">
                {list4}
              </p>
              <span className="absolute top-2 rounded-full -left-3 h-2 w-[3px] bg-[#ff9a00]"></span>
            </div>
          </div>

          <a
            href="/"
            className="text-black bg-[#fff] overflow-hidden group relative w-fit h-fit py-[20px] rounded-full px-[60px] mt-2 border-2 border-[#ff9a00] transition-all duration-300 hover:bg-[#ff9a00] hover:text-white"
          >
            {button_label}
            <span className="rounded-full flex items-center justify-center absolute top-0 group-hover:top-[-40px] rounded-tl-none duration-300 right-2 bg-[#ff9a00] w-10 h-10">
              <FaPlayCircle size={16} color="#ffffff" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section7;
