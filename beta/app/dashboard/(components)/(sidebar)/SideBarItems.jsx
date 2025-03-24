"use client";
import React, { useEffect, useState } from "react";
import { FaHome, FaInfoCircle, FaImages, FaBloggerB } from "react-icons/fa";
import { MdFindInPage, MdOutlineContactSupport } from "react-icons/md";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
  },
  {
    icon: <FaImages />,
    title: "Portfolio",
    url: "portfolio",
    order: 3,
  },
  {
    icon: <MdFindInPage />,
    title: "Pages",
    url: "pages",
    order: 4,
  },
  {
    icon: <FaBloggerB />,
    title: "Blog",
    url: "blog",
    order: 5,
  },
  {
    icon: <MdOutlineContactSupport />,
    title: "Contact Us",
    url: "contact-us",
    order: 6,
  },
];

const SideBarItems = () => {
  const pathname = usePathname();
  const router = useRouter();
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
          <Link href={`/dashboard/${data.url}`}>
            <div
              className="w-full h-fit flex flex-row gap-4 p-5 items-center bg-[#fff] hover:text-black rounded-lg cursor-pointer"
              onClick={() =>
                setIsClicked((prev) => (prev === index + 1 ? 0 : index + 1))
              }
              style={{
                background:
                  pathname === `/dashboard/${data.url}` ? "#ff9a00" : "#fff",
              }}
            >
              {data.icon}
              <p>{data.title}</p>
            </div>
          </Link>
          {/* For Home, show extra sections if either toggled open or the route is active */}
          {data.title === "Home" &&
            (isClicked === index + 1 || isHomeActive) && (
              <div className="w-full h-fit pl-4 flex flex-col py-1">
                {data.extra_sections.map((value, idx) => (
                  <div
                    key={idx}
                    onClick={() => router.push(`/dashboard/${value.url}`)}
                    className="w-full h-fit flex flex-row gap-4 p-5 mt-1 items-center bg-[#fff] hover:text-black rounded-lg cursor-pointer"
                    style={{
                      background:
                        pathname === `/dashboard/${value.url}`
                          ? "#ff9a00"
                          : "#fff",
                    }}
                  >
                    <p>{value.title}</p>
                  </div>
                ))}
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default SideBarItems;
