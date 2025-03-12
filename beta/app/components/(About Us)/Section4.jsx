import React from "react";

const Section4 = () => {
  return (
    <section className="w-full h-fit flex justify-center py-[100px] bg-[#333333]">
      <div className="max-w-[1140px] max-[1200px]:grid-cols-1 max-[1200px]:px-10 w-full h-full grid grid-cols-3 gap-[100px]">
        <div className="w-full h-fit flex flex-col gap-6 text-[16px] font-bold font-mulish text-[#999]">
          <img src="/logo_4.png" alt="logo" className="w-[110px] h-auto"></img>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered
          </p>
          <div className="w-full h-fit flex flex-row gap-1">
            <div className="w-full h-auto">
              <img
                src="/image1.png"
                alt="facebook"
                className="w-full h-auto object-cover"
              ></img>
            </div>
            <div className="w-full h-auto">
              <img
                src="/image2.png"
                alt="facebook"
                className="w-full h-auto object-cover"
              ></img>
            </div>
            <div className="w-full h-auto">
              <img
                src="/image3.png"
                alt="facebook"
                className="w-full h-auto object-cover"
              ></img>
            </div>
            <div className="w-full h-auto">
              <img
                src="/image4.png"
                alt="facebook"
                className="w-full h-auto object-cover"
              ></img>
            </div>
          </div>
          <p>
            follow us on <span className="text-white">portomega.com</span>
          </p>
        </div>
        <div className="w-full h-fit flex flex-col gap-6">
          <h1 className="font-bold font-montserrat text-[20px]">LATEST NEWS</h1>
          <div className="w-full h-fit flex flex-col gap-3">
            <div className="flex w-full h-fit flex-row gap-4">
              <div className="w-[65px] h-[65px]">
                <img
                  src="/image4.png"
                  alt="facebook"
                  className="w-full h-auto object-cover"
                ></img>
              </div>
              <div className="w-full h-full flex flex-col gap-2">
                <h2 className="text-[16px] font-semibold font-mulish">
                  i like the body.
                </h2>
                <p className="text-[#999]">14 January, 2021</p>
              </div>
            </div>
            <hr className="bg-[#000000] h-[1px] w-full"></hr>
            <div className="flex w-full h-fit flex-row gap-4">
              <div className="w-[65px] h-[65px]">
                <img
                  src="/image4.png"
                  alt="facebook"
                  className="w-full h-auto object-cover"
                ></img>
              </div>
              <div className="w-full h-full flex flex-col gap-2">
                <h2 className="text-[16px] font-semibold font-mulish">
                  i like the body.
                </h2>
                <p className="text-[#999]">14 January, 2021</p>
              </div>
            </div>
            <hr className="bg-[#000000] h-[1px] w-full"></hr>
            <div className="flex w-full h-fit flex-row gap-4">
              <div className="w-[65px] h-[65px]">
                <img
                  src="/image4.png"
                  alt="facebook"
                  className="w-full h-auto object-cover"
                ></img>
              </div>
              <div className="w-full h-full flex flex-col gap-2">
                <h2 className="text-[16px] font-semibold font-mulish">
                  i like the body.
                </h2>
                <p className="text-[#999]">14 January, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col gap-4">
          <h1 className="font-bold font-montserrat text-[20px]">NEWSLETTER</h1>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full h-fit py-[16px] px-[25px] bg-[#414141] border-2"
          ></input>
          <input
            type="text"
            placeholder="Your Email"
            className="w-full h-fit py-[16px] px-[25px] bg-[#414141] border-2"
          ></input>
          <button className="bg-[#ff9a00] w-fit text-[#333] h-fit px-[30px] py-[15px] rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section4;
