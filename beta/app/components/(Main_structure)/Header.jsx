"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar_data = [
  {
    label: "Home",
    navs: ["Home I", "Home II", "Home III", "Home IV", "Home V", "Home VI"],
  },
  {
    label: "About Us",
    navs: ["Home I", "Home II", "Home III", "Home IV", "Home V", "Home VI"],
  },
  {
    label: "Portfolio",
    navs: ["Home I", "Home II", "Home III", "Home IV", "Home V", "Home VI"],
  },
  {
    label: "Page",
    navs: ["Home I", "Home II", "Home III", "Home IV", "Home V", "Home VI"],
  },
  {
    label: "Blog",
    navs: ["Home I", "Home II", "Home III", "Home IV", "Home V", "Home VI"],
  },
  {
    label: "Contact Us",
    navs: ["Home I", "Home II", "Home III", "Home IV", "Home V", "Home VI"],
  },
];

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(innerWidth <= 1000);
    };

    handleResize();
    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(scrollY > 200);
    };

    addEventListener("scroll", toggleVisibility);
    return () => removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <section
      className="flex items-center justify-center w-full h-fit m-auto fixed top-0 z-50 duration-150"
      style={{
        backgroundColor: visible ? "rgba(255, 255, 255, 0.8)" : "transparent",
        boxShadow: visible ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none",
        color: visible ? "#000000" : "#ffffff",
      }}
    >
      <div className="w-[1140px] max-[1200px]:w-full max-[1200px]:px-[50px] h-fit flex flex-row items-center">
        <div className="w-full h-full py-[30px] flex items-center justify-between px-[15px]">
          <a href="/">
            <Image
              src="/logo_4.png"
              width={118}
              height={49}
              alt="logo"
              className="cursor-pointer"
            />
          </a>

          {!isMobile ? (
            <ul className="flex flex-row text-[15px] font-mulish font-bold justify-between items-center">
              {Navbar_data.map((item, index) => (
                <li
                  key={index}
                  className="px-[20px] py-3 cursor-pointer group hover:text-[#ff9a00] duration-300 relative"
                >
                  <a
                    href={
                      item.label === "Home"
                        ? "/"
                        : `/${item.label.toLowerCase().replace(" ", "-")}`
                    }
                  >
                    {item.label}
                  </a>
                  {item.navs && (
                    <ul
                      className="absolute top-full left-0 w-[200px] bg-white p-5 border border-gray-200 shadow-lg flex flex-col gap-y-2 
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                   transition-all duration-300 z-50"
                    >
                      {item.navs.map((navItem, index) => (
                        <li
                          key={index}
                          className="text-[15px] text-black hover:text-[#ff9a00] duration-300"
                        >
                          {navItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <div className="w-[50px] h-[50px] bg-white rounded-full items-center justify-center flex cursor-pointer shadow-sm">
                <MdOutlineShoppingBag className="text-[#ff9a00] text-[25px]" />
              </div>
            </ul>
          ) : (
            <div
              className="cursor-pointer h-full flex items-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <VscThreeBars size={30} />
            </div>
          )}

          {isMobile && (
            <div
              className={`fixed top-0 right-0 w-full h-screen shadow-md p-4 flex flex-col justify-center transition-transform duration-300 ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            >
              <div className="absolute top-3 right-10 p-4 cursor-pointer">
                <IoCloseOutline
                  className="hover:text-[#ff9a00] text-[#ffffffb5] text-[60px] duration-300"
                  onClick={() => setMenuOpen(false)}
                />
              </div>
              {Navbar_data.map((item, index) => (
                <a
                  key={index}
                  href={`/${item.label.toLowerCase().replace(" ", "-")}`}
                  className="px-4 hover:text-[#ff9a00] duration-300 text-[25px] text-[#ffffffb5] py-[15px] w-full h-fit text-center"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
