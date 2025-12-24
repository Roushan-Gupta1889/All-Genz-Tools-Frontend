import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BrandHero from "@/components/home/BrandHero";
import BrandValues from "@/components/home/BrandValues";
import BrandMission from "@/components/home/BrandMission";
import ToolsShowcase from "@/components/home/ToolsShowcase";
import BrandCTA from "@/components/home/BrandCTA";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BrandHero />
        <BrandValues />
        <BrandMission />
        <ToolsShowcase />
        <BrandCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
