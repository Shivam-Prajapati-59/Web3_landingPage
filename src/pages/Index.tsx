import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import TestimonialsSection from "../components/TestimonialsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import FeaturesSection from "../components/FeaturesSection";
import MissionSection from "../components/MissionSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import TimelineSection from "../components/TimeLineSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".appear-on-scroll");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible =
          elementTop < window.innerHeight - 100 && elementBottom > 0;

        if (isVisible) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add initial fade-in animation to the whole page
    document.body.classList.add("opacity-0");

    setTimeout(() => {
      document.body.classList.remove("opacity-0");
      document.body.classList.add(
        "transition-opacity",
        "duration-1000",
        "opacity-100"
      );
    }, 100);

    return () => {
      document.body.classList.remove(
        "transition-opacity",
        "duration-1000",
        "opacity-100"
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <HowItWorksSection />
      <FeaturesSection />
      <MissionSection />
      <TimelineSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
