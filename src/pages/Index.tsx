import HeroSection from "@/components/HeroSection";
import AgentsSection from "@/components/AgentsSection";
import StatsSection from "@/components/StatsSection";
import TimelineSection from "@/components/TimelineSection";
import ComparisonSection from "@/components/ComparisonSection";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AgentsSection />
      <StatsSection />
      <TimelineSection />
      <ComparisonSection />
      <IndustriesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;