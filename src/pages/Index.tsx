import NavigationHeader from "@/components/NavigationHeader";
import HeroSection from "@/components/HeroSection";
import TabsSection from "@/components/TabsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <HeroSection />
      <TabsSection />
      <FooterSection />
    </div>
  );
};

export default Index;