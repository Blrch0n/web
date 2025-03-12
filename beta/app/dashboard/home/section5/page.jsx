import Home_Section_5 from "../(components)/home_section5";
import Admin_Section from "../../(components)/(sidebar)/Admin_Section";
import SideBar from "../../(components)/(sidebar)/SideBar";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <Home_Section_5 />
    </Admin_Section>
  );
};

export default Page;
