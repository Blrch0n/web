"use client";
import React, { useEffect, useState } from "react";
import { FaHome, FaInfoCircle, FaImages, FaBloggerB } from "react-icons/fa";
import { MdFindInPage, MdOutlineContactSupport } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sideBarItems_data = [
  {
    icon: <FaHome />,
    title: "Home",
    url: "",
    order: 1,
    translate_text: "Нүүр",
    extra_sections: [
      { title: "Хэсэг 1", url: "home/section1" },
      { title: "Хэсэг 2", url: "home/section2" },
      { title: "Хэсэг 3", url: "home/section3" },
      { title: "Хэсэг 4", url: "home/section4" },
      { title: "Хэсэг 5", url: "home/section5" },
      { title: "Хэсэг 6", url: "home/section6" },
      { title: "Хэсэг 7", url: "home/section7" },
      { title: "Хэсэг 8", url: "home/section8" },
      { title: "Хэсэг 9", url: "home/section9" },
      { title: "Хэсэг 10", url: "home/section10" },
      { title: "Хэсэг 11", url: "home/section11" },
      { title: "Хэсэг 12", url: "home/section12" },
      { title: "Хэсэг 13", url: "home/section13" },
    ],
  },
  {
    icon: <FaInfoCircle />,
    title: "About Us",
    url: "about-us",
    order: 2,
    translate_text: "Бидний тухай",
    extra_sections: [
      { title: "Хэсэг 1", url: "about-us/" },
      { title: "Хэсэг 2", url: "about-us/section2" },
      { title: "Хэсэг 3", url: "about-us/section3" },
    ],
  },
  {
    icon: <FaImages />,
    title: "Portfolio",
    url: "portfolio",
    order: 3,
    translate_text: "Портфолио",
  },
  {
    icon: <MdFindInPage />,
    title: "Pages",
    url: "pages",
    order: 4,
    translate_text: "Хуудаснууд",
  },
  {
    icon: <FaBloggerB />,
    title: "Blog",
    url: "blog",
    order: 5,
    translate_text: "Блог",
  },
  {
    icon: <MdOutlineContactSupport />,
    title: "Contact Us",
    url: "contact-us",
    order: 6,
    translate_text: "Холбоо барих",
  },
];

const SideBarItems = () => {
  const pathname = usePathname();
  const [isClicked, setIsClicked] = useState(0);

  useEffect(() => {
    console.log("Route changed to:", pathname);
  }, [pathname]);

  // Determine if Home or one of its extra sections is active
  const isHomeActive =
    pathname === "/dashboard/" || pathname.startsWith("/dashboard/home");

  return (
    <div className="w-full h-fit flex flex-col text-black gap-1">
      {sideBarItems_data.map((data, index) => (
        <div key={index} className="flex flex-col">
          <Link href={`/dashboard/${data.url}`} key={index}>
            <div
              className="w-full h-fit flex flex-row gap-4 p-5 items-center bg-[#e5ddd7] hover:text-black rounded-lg cursor-pointer"
              onClick={() =>
                setIsClicked((prev) => (prev === index + 1 ? 0 : index + 1))
              }
              style={{
                background:
                  pathname === `/dashboard/${data.url}` ? "#ff9a00" : "#e5ddd7",
              }}
            >
              {data.icon}
              <p>{data.translate_text}</p>
            </div>
          </Link>

          {(data.title === "Home" || data.title === "About Us") &&
            (isClicked === index + 1 || isHomeActive) && (
              <div className="w-full h-fit pl-4 flex flex-col py-1">
                {data.extra_sections.map((value, idx) => (
                  <Link href={`/dashboard/${value.url}`} key={idx}>
                    <div
                      className="w-full h-fit flex flex-row gap-4 p-5 mt-1 items-center bg-[#e5ddd7] hover:text-black rounded-lg cursor-pointer"
                      style={{
                        background:
                          pathname === `/dashboard/${value.url}`
                            ? "#ff9a00"
                            : "#e5ddd7",
                      }}
                    >
                      <p>{value.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default SideBarItems;
