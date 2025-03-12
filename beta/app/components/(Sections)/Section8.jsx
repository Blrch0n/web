"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Section8userData } from "@/app/database/SectionData";

export default function TeamGrid() {
  const { background_image, teamMembers } = Section8userData[0];
  return (
    <section
      className="w-full h-fit pt-[100px] pb-[50px] z-10 relative bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(/${background_image})` }}
    >
      <div className="max-w-[1140px] w-full px-10 h-fit mx-auto bg-transparent">
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1140: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className=" rounded-lg bg-transparent hover:shadow-lg duration-1000 border-[1px] border-[#f3f3f3] overflow-hidden text-start p-5 w-full relative h-fit">
                <div className="absolute top-0 right-0 w-[150px] h-[200px] sm:w-[180px] sm:h-[220px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-gray-800 font-bold text-lg sm:text-xl">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-semibold text-sm sm:text-base">
                  {member.role}
                </p>
                <div className="flex space-x-3 mt-2 text-gray-500">
                  {[FaFacebookF, FaTwitter, FaLinkedin].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer rounded-full bg-slate-200"
                    >
                      <Icon className="text-sm sm:text-base hover:text-orange-500 cursor-pointer duration-300" />
                    </div>
                  ))}
                </div>
                <p className="text-[#999999] font-mulish font-medium w-[160px] text-xs sm:text-sm mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
