import Admin_Section from "../../(components)/(sidebar)/Admin_Section";
import SideBar from "../../(components)/(sidebar)/SideBar";
import Home_Section_1 from "../(components)/home_section1";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <Home_Section_1 />
    </Admin_Section>
  );
};

export default Page;
