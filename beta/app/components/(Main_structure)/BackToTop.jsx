"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    const handlePosition = () => {
      setIsMobile(innerWidth <= 1200);
    };

    handlePosition();

    addEventListener("resize", handlePosition);
    addEventListener("scroll", toggleVisibility);

    return () => {
      removeEventListener("scroll", toggleVisibility);
      removeEventListener("resize", handlePosition);
    };
  }, []);

  const scrollToTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`w-[50px] h-[50px] bg-[#262626] rounded-full flex items-center justify-center 
      shadow-[0px_0px_10px_3px_#ff9a0085] fixed 
      animate-[bounceCustom_2s_infinite] cursor-pointer z-100 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }
        ${
          isMobile
            ? "bottom-[20px] right-[20px]"
            : "bottom-[70px] right-[100px]"
        }
      `}
    >
      <FaArrowUpLong color="#fd7e14" size={20} />
    </button>
  );
};

export default BackToTop;
