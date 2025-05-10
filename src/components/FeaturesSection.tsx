import AppearOnScroll from "./AppearOnScroll";
import { Brain, LineChart, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: <Brain size={32} className="text-secondary" />,
    title: "AI-Powered Insights",
    description:
      "Advanced machine learning algorithms analyze market trends and predict potential opportunities in real-time.",
  },
  {
    icon: <LineChart size={32} className="text-secondary" />,
    title: "Custom Trading Strategies",
    description:
      "Create and deploy personalized trading strategies based on your risk tolerance and investment goals.",
  },
  {
    icon: <Lock size={32} className="text-secondary" />,
    title: "Enterprise-Grade Security",
    description:
      "Bank-level encryption and security protocols protect your assets and personal information at all times.",
  },
  {
    icon: <Zap size={32} className="text-secondary" />,
    title: "Lightning-Fast Execution",
    description:
      "Execute trades at the perfect moment with millisecond precision to maximize profit potential.",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-background/0 to-muted/20"
    >
      <div className="container mx-auto px-4">
        <AppearOnScroll>
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-white/70">
              Discover the tools and technologies that make Lunexa the leading
              AI crypto trading platform.
            </p>
          </div>
        </AppearOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AppearOnScroll key={index} delay={index * 100}>
              <div className="glass-card p-8 h-full flex flex-col">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
