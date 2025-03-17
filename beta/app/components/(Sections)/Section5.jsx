"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const Section5 = () => {
  const [section5Data, setSection5Data] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/5`
        );
        setSection5Data(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (section5Data.length === 0) return <div>Loading...</div>;
  const { label, paragraph, images } = section5Data[0];
  return (
    <section className="w-full h-fit grid grid-cols-4 max-[766px]:grid-cols-2 max-[766px]:grid-rows-4 max-[576px]:grid-cols-1 max-[576px]:grid-rows-8 grid-rows-2">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative group ${image.colSpan} ${image.rowSpan}`}
        >
          <img
            className="w-full h-full object-cover"
            src={image.src}
            alt={image.alt}
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] p-4 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-sm text-purple-600 block mb-1 cursor-pointer">
              {label}
            </span>
            <h3 className="text-lg font-bold text-black mb-1">{paragraph}</h3>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 border cursor-pointer border-purple-600 rounded-full w-8 h-8 flex items-center justify-center">
              <BsThreeDots className="text-purple-600" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Section5;
