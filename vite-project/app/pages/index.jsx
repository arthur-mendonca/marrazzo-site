import CTASection from "../components/CTASection";
import ExpertSection from "../components/ExpertSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/NavBar";
import PricingSection from "../components/PricingSection";
import ProblemSection from "../components/ProblemSection";
import PromiseSection from "../components/PromiseSection";
import SolutionSection from "../components/SolutionSection";
import TargetSection from "../components/TargetSection";
import TestimonialsSection from "../components/TestimonialsSection";
import TransformationSection from "../components/TransformationSection";
import UniqueSection from "../components/UniqueSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <PromiseSection />
        <TestimonialsSection />
        <ProblemSection />
        <SolutionSection />
        <UniqueSection />
        <PricingSection />
        <TransformationSection />
        <TargetSection />
        <ExpertSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
