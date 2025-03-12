import Home_Section_6 from "../(components)/home_section6";
import Admin_Section from "../../(components)/(sidebar)/Admin_Section";
import SideBar from "../../(components)/(sidebar)/SideBar";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <Home_Section_6 />
    </Admin_Section>
  );
};

export default Page;
