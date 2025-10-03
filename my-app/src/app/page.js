import Navbar from "@/components/Navbar";
import HeroSection from "./herosection";
import URLInputSection from "./URLInputSection";
import AdvanceStatsSection from "./AdvanceStatsSection";
import BoostLinkSection from "./BoostLinkSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <URLInputSection />
      <AdvanceStatsSection />
      <BoostLinkSection />
    </>
  );
}
