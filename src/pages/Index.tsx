import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BrandHero from "@/components/home/BrandHero";
import BrandValues from "@/components/home/BrandValues";
import BrandMission from "@/components/home/BrandMission";
import ToolsShowcase from "@/components/home/ToolsShowcase";
import ContactSection from "@/components/home/ContactSection";
import BrandCTA from "@/components/home/BrandCTA";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BrandHero />
        <BrandCTA />
        <ToolsShowcase />
        <BrandMission />
        <BrandValues />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
