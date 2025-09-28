import Navbar from "@/components/Navbar";
import HeroSection from "./herosection";
import URLInputSection from "./URLInputSection";
import AdvanceStatsSection from "./AdvanceStatsSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <URLInputSection />
      <AdvanceStatsSection />
    </>
  );
}
