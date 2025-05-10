import { ChevronRight } from "lucide-react";
import AppearOnScroll from "./AppearOnScroll";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-20 rounded-full filter blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-20 rounded-full filter blur-[80px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <AppearOnScroll>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              AI-Powered Crypto Trading for the Future
            </h1>
          </AppearOnScroll>

          <AppearOnScroll delay={200}>
            <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto">
              Maximize your crypto investments with our advanced AI algorithms,
              seamless automation, and personalized trading strategies.
            </p>
          </AppearOnScroll>

          <AppearOnScroll delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="neumorphic-button hover:animate-glow">
                Get Started Now
              </button>
              <a
                href="#how-it-works"
                className="flex items-center text-secondary hover:text-white/80 transition-colors"
              >
                <span>Learn more</span>
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </AppearOnScroll>
        </div>

        <AppearOnScroll delay={600}>
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
              <img
                src="crypto/dashboard.jpg"
                alt="Lunexa Dashboard"
                className="w-full h-auto rounded-2xl shadow-xl border border-white/10"
              />
            </div>
          </div>
        </AppearOnScroll>
      </div>
    </section>
  );
};

export default HeroSection;
