import Home_Section_11 from "../(components)/home_section11";
import Admin_Section from "../../(components)/(sidebar)/Admin_Section";
import SideBar from "../../(components)/(sidebar)/SideBar";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <Home_Section_11 />
    </Admin_Section>
  );
};

export default Page;
