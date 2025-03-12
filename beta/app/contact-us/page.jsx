"use client";
import AboutUsFooter from "../components/(About Us)/AboutUsFooter";
import Section1 from "../components/(About Us)/Section1";
import Section4 from "../components/(About Us)/Section4";
import BackToTop from "../components/(Main_structure)/BackToTop";
import Header from "../components/(Main_structure)/Header";
import Section12 from "../components/(Sections)/Section12";
import GoogleMap from "../components/GoogleMap";
import dynamic from "next/dynamic";
const GoogleMapComponent = dynamic(() => import("../components/GoogleMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function Page() {
  return (
    <section className="w-full h-fit bg-white flex flex-col items-center">
      <Header />
      <Section1 children={"Contact Us"} />
      <GoogleMapComponent />
      <Section12 />
      <Section4 />
      <AboutUsFooter />
      <BackToTop />
    </section>
  );
}
