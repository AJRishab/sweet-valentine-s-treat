import HeroSection from "@/components/HeroSection";
import ChocolateSection from "@/components/ChocolateSection";
import MessageSection from "@/components/MessageSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ChocolateSection />
      <MessageSection />
      <Footer />
    </main>
  );
};

export default Index;
