"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Section2 = () => {
  const [section2Data, setSection2Data] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/2`
        );
        setSection2Data(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (section2Data.length === 0) {
    return <div>Loading...</div>;
  }

  const {
    image,
    background,
    span,
    header,
    about,
    paragraph,
    button_label,
    title1,
    color1,
    title2,
    color2,
    title3,
    color3,
    title4,
    color4,
  } = section2Data[0];
  return (
    <section
      className="w-full min-h-[932px] h-fit bg-no-repeat bg-cover flex items-center justify-center bg-white overflow-hidden relative]"
      style={{ backgroundImage: `url(${background}  )` }}
    >
      <div className="max-w-[1140px] w-full max-[992px]:flex-col max-[992px]:py-20 px-5 h-full flex flex-row items-center justify-between">
        <img
          src={`${image}`}
          className="max-w-[635px] max-h-[607px] w-full h-auto"
        ></img>
        <div className="max-w-[475px] w-full h-full flex flex-col items-start justify-center">
          <div className="w-full h-full flex flex-col gap-5 items-start justify-center">
            <h4 className="text-[#f783aa] text-lg font-bold font-montserrat">
              {about}
            </h4>
            <h3 className="text-black font-montserrat text-[32px] font-extrabold">
              <span className="text-[#ff9a00]">{span}</span> {header}
            </h3>
            <p className="text-[#999999] font-mulish text-[16px]">
              {paragraph}
            </p>
            <a
              href="/"
              className="text-white bg-[#ff9a00] overflow-hidden group relative w-fit h-fit py-[20px] rounded-full px-[60px] mt-2 "
            >
              {button_label}
              <span className=" rounded-full flex items-center justify-center rounded-tl-none absolute top-0 group-hover:top-[-40px] duration-300 right-2 bg-white w-10 h-10">
                <FaPhoneAlt size={"16px"} color={"#ff9a00"} />
              </span>
            </a>
            <div className="w-full h-fit grid grid-cols-2 grid-rows-2 gap-5 items-center justify-between">
              <div className="text-black w-full h-fit text-[16px] font-montserrat gap-2 relative">
                {title1}
                <span
                  className="w-[30px] h-[4px] rounded-full inline-block absolute left-0 -bottom-1"
                  style={{ backgroundColor: color1 }}
                ></span>
              </div>
              <div className="text-black w-full h-fit text-[16px] font-montserrat gap-2 relative">
                {title2}
                <span
                  className="w-[30px] h-[4px] rounded-full inline-block absolute left-0 -bottom-1"
                  style={{ backgroundColor: color2 }}
                ></span>
              </div>
              <div className="text-black w-full h-fit text-[16px] font-montserrat gap-2 relative">
                {title3}
                <span
                  className="w-[30px] h-[4px] rounded-full inline-block absolute left-0 -bottom-1"
                  style={{ backgroundColor: color3 }}
                ></span>
              </div>
              <div className="text-black w-full h-fit text-[16px] font-montserrat gap-2 relative">
                {title4}
                <span
                  className="w-[30px] h-[4px] rounded-full inline-block absolute left-0 -bottom-1"
                  style={{ backgroundColor: color4 }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
