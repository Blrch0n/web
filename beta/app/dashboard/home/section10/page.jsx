import Home_Section_10 from "../(components)/home_section10";
import Admin_Section from "../../(components)/(sidebar)/Admin_Section";
import SideBar from "../../(components)/(sidebar)/SideBar";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <Home_Section_10 />
    </Admin_Section>
  );
};

export default Page;
