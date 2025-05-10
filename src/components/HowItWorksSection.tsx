import AppearOnScroll from "./AppearOnScroll";
import { Wallet, Bot, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: <Wallet size={40} className="text-secondary" />,
    title: "Connect Your Wallet",
    description:
      "Securely connect your crypto wallet to our platform with end-to-end encryption and zero custody of your assets.",
    image: "/crypto/crypto wallet image.png",
  },
  {
    icon: <Bot size={40} className="text-secondary" />,
    title: "Set Up Your AI Assistant",
    description:
      "Configure your AI trading assistant with your preferences, risk tolerance, and investment goals.",
    image: "/crypto/pursecrypto.png",
  },
  {
    icon: <BarChart3 size={40} className="text-secondary" />,
    title: "Automate Your Trading",
    description:
      "Let our AI handle your trading 24/7 with automated strategies that adapt to market conditions in real-time.",
    image: "/crypto/keychaincrypto.png",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AppearOnScroll>
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-white/70">
              Get started with Lunexa in three simple steps and transform your
              crypto trading experience.
            </p>
          </div>
        </AppearOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AppearOnScroll key={index} delay={index * 200}>
              <div className="glass-card flex flex-col h-full overflow-hidden">
                <div className="relative h-48 overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-36 w-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-light mb-4 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/70 mb-6">{step.description}</p>
                  <div className="mt-auto">
                    <span className="text-secondary text-sm font-medium flex items-center">
                      Step {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
