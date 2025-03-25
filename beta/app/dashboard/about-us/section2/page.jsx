import About_Us_Section2 from "../../(components)/(info)/About_Us_Section2";
import Admin_Section from "../../(components)/(sidebar)/Admin_Section";
import SideBar from "../../(components)/(sidebar)/SideBar";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <About_Us_Section2 />
    </Admin_Section>
  );
};

export default Page;
