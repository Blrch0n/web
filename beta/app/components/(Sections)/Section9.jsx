import { Section9userData } from "@/app/database/SectionData";

const Section9 = () => {
  return (
    <section
      className="w-full min-h-[324px] h-fit flex items-center justify-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(/fun-facts.jpg)" }}
    >
      <div className="max-w-[1140px] py-10 w-full h-fit grid grid-cols-4 max-[992px]:grid-cols-2 max-[766px]:grid-cols-1">
        {Section9userData.map((data, index) => (
          <div
            key={index}
            className="w-full h-fit flex-col items-center flex justify-center"
          >
            <h2 className="text-[48px] font-extrabold font-montserrat text-[#f18f0a]">
              {data.number}
            </h2>
            <p className="font-semibold text-[16px] font-montserrat ">
              {data.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section9;
