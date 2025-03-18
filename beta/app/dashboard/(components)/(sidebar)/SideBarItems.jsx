"use client";
import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sideBarItems_data = [
  {
    icon: <FaHome />,
    title: "Home",
    url: "",
    order: 1,
    extra_sections: [
      { title: "All", url: "/" },
      { title: "Section1", url: "home/section1" },
      { title: "Section2", url: "home/section2" },
      { title: "Section3", url: "home/section3" },
      { title: "Section4", url: "home/section4" },
      { title: "Section5", url: "home/section5" },
      { title: "Section6", url: "home/section6" },
      { title: "Section7", url: "home/section7" },
      { title: "Section8", url: "home/section8" },
      { title: "Section9", url: "home/section9" },
      { title: "Section10", url: "home/section10" },
      { title: "Section11", url: "home/section11" },
      { title: "Section12", url: "home/section12" },
      { title: "Section13", url: "home/section13" },
    ],
  },
  {
    icon: <FaInfoCircle />,
    title: "About Us",
    url: "about-us",
    order: 2,
    extra_sections: [
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
    ],
  },
  {
    icon: <FaImages />,
    title: "Portfolio",
    url: "portfolio",
    order: 3,
    extra_sections: [
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
    ],
  },
  {
    icon: <MdFindInPage />,
    title: "Pages",
    url: "pages",
    order: 4,
    extra_sections: [
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
    ],
  },
  {
    icon: <FaBloggerB />,
    title: "Blog",
    url: "blog",
    order: 5,
    extra_sections: [
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
    ],
  },
  {
    icon: <MdOutlineContactSupport />,
    title: "Contact Us",
    url: "contact-us",
    order: 6,
    extra_sections: [
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
      { title: "Home", url: "" },
    ],
  },
];

const SideBarItems = () => {
  const pathname = usePathname();
  const [isClicked, setIsClicked] = useState(0);

  useEffect(() => {
    console.log("Route changed to:", pathname);
  }, [pathname]);
  return (
    <div className="w-full h-fit flex flex-col">
      {sideBarItems_data.map((data, index) => (
        <div
          className="w-full h-fit flex flex-col"
          key={index}
          onClick={() => {
            setIsClicked((prev) => (prev === index + 1 ? 0 : index + 1));
          }}
        >
          <div
            className="w-full h-fit flex flex-row gap-4 p-5 items-center bg-[#333] hover:text-black rounded-lg cursor-pointer"
            style={{
              background:
                pathname === `/dashboard/${data.url}` ? "#000" : "#333",
            }}
          >
            {data.icon}
            <p>{data.title}</p>
          </div>
          <div className="w-full h-fit pl-4 flex flex-col py-1">
            {data.extra_sections.map((value, index) => (
              <Link href={`/dashboard/${value.url}`} key={index} className="">
                <div
                  className="w-full h-fit flex-row gap-4 p-5 items-center hidden bg-[#333] hover:text-black rounded-lg cursor-pointer"
                  style={{
                    background:
                      pathname === `/dashboard/${value.url}` ? "#000" : "#333",
                    display: data.order === isClicked ? "flex" : "none",
                  }}
                >
                  <p>{value.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBarItems;
