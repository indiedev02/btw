import GetinTouch from "@/section/GetinTouch";
import GovernmentSolutions from "./_components/GovernmentSolutions";
import Hero from "./_components/Hero";
import GovernmentServices from "./_components/KeyCapabilities";
import BlackspektroBanner from "@/section/Banner";

const Government = () => {
  return (
    <>
      <Hero />
      <GovernmentServices />
      <GovernmentSolutions />
      <BlackspektroBanner />
      <GetinTouch />
    </>
  );
};

export default Government;
