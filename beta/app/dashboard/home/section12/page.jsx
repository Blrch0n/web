import Home_Section_12 from "../(components)/home_section12";
import Admin_Section from "../../(components)/(sidebar)/Admin_Section";
import SideBar from "../../(components)/(sidebar)/SideBar";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <Home_Section_12 />
    </Admin_Section>
  );
};

export default Page;
