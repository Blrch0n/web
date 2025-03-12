import React from "react";
const user_data = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@gmail",
    phone_number: "1234567890",
  },
];
const user_board_data = [
  {
    name: "№",
    size: "8%",
  },
  {
    name: "Name",
    size: "30%",
  },
  {
    name: "Email",
    size: "40%",
  },
  {
    name: "Phone Number",
    size: "22%",
  },
];
const About_Us_Section = () => {
  return (
    <section className="w-full h-full p-10 flex flex-col">
      <div className="w-full h-full flex flex-col gap-10">
        <div className="w-full h-full flex items-start flex-col gap-5 ">
          <button className="bg-white p-3 rounded-[6px] text-black">
            Create User
          </button>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
            <div className="w-full flex flex-row items-center h-fit p-5 bg-blue-200">
              {user_board_data.map((data, index) => (
                <div
                  key={index}
                  className="h-fit w-full"
                  style={{ width: data.size }}
                >
                  <p>{data.name}</p>
                </div>
              ))}
            </div>
            <div className="w-full h-fit flex flex-col">
              {user_data.map((data, index) => (
                <div
                  className="w-full flex flex-row items-center h-fit p-5 bg-blue-200"
                  key={index}
                >
                  <div className="h-fit w-[8%] ">
                    <p>{data.id}</p>
                  </div>
                  <div className="h-fit w-[30%] ">
                    <p>{data.name}</p>
                  </div>
                  <div className="h-fit w-[40%] ">
                    <p>{data.email}</p>
                  </div>
                  <div className="h-fit w-[22%] ">
                    <p>{data.phone_number}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Us_Section;
