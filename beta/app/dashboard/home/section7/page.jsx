import Home_Section_7 from "../(components)/home_section7";
import Admin_Section from "../../(components)/(sidebar)/Admin_Section";
import SideBar from "../../(components)/(sidebar)/SideBar";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <Home_Section_7 />
    </Admin_Section>
  );
};

export default Page;
