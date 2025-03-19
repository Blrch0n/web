"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import axios from "axios";

export default function Section10({ children }) {
  const [section10Data, setSection10Data] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/10`
        );
        setSection10Data(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (section10Data.length === 0) return <div>Loading...</div>;
  const { background_image, teamMembers } = section10Data[0];
  return (
    <section
      className="w-full h-fit pt-[100px] pb-[50px] bg-white bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <div className="max-w-[1140px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper rounded-[10px]"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="group rounded-[10px] text-center w-full relative flex flex-col gap-6">
                <div className="w-full h-fit border-[1px] group-hover:shadow-lg duration-300 p-5 rounded-[10px] border-[#999999]">
                  <p className="text-sm sm:text-[15px] text-[#999999] font-medium font-montserrat text-start">
                    Lorem ipsum dolor sit amet, amet,consectetur addipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna
                  </p>
                </div>
                <div className="w-full h-[130px] flex flex-row gap-4 items-center">
                  <img
                    src={member.image}
                    className="w-0 h-0 rounded-full group-hover:w-[75px] group-hover:h-[75px] duration-1000"
                    alt={member.name}
                  />
                  <div className="flex flex-col gap-2 text-base font-montserrat font-bold text-start text-black">
                    <h6>{member.name}</h6>
                    <p
                      className="text-[#a862e9] text-sm sm:text-[16px]"
                      style={{ color: children }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
