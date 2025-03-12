import Contact_Us_Section from "../(components)/(info)/Contact_Us_Section";
import Admin_Section from "../(components)/(sidebar)/Admin_Section";
import SideBar from "../(components)/(sidebar)/SideBar";

const Page = () => {
  return (
    <Admin_Section>
      <SideBar />
      <Contact_Us_Section />
    </Admin_Section>
  );
};

export default Page;
