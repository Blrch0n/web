import Home_Section_13 from "../(components)/home_section13";
import Admin_Section from "../../(components)/(sidebar)/Admin_Section";
import SideBar from "../../(components)/(sidebar)/SideBar";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <Home_Section_13 />
    </Admin_Section>
  );
};

export default Page;
