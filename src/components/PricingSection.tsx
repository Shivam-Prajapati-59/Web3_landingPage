import AppearOnScroll from "./AppearOnScroll";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for beginners exploring crypto trading",
    features: [
      "Basic AI trading insights",
      "Manual trading execution",
      "Standard market data",
      "3 active trading pairs",
      "Community support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For serious traders seeking advanced features",
    features: [
      "Advanced AI predictions",
      "Automated trading strategies",
      "Real-time market analytics",
      "Unlimited trading pairs",
      "Priority support",
      "Custom risk management",
      "Portfolio optimization",
    ],
    cta: "Get Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for institutional traders",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "Custom API integration",
      "Multi-wallet support",
      "Advanced security features",
      "White-label solutions",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-secondary opacity-10 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AppearOnScroll>
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-white/70">
              Select the perfect plan for your trading needs. All plans include
              our core AI technology.
            </p>
          </div>
        </AppearOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <AppearOnScroll key={plan.name} delay={index * 200}>
              <div
                className={`glass-card p-8 h-full flex flex-col relative ${
                  plan.popular ? "border-2 border-secondary/50" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-secondary text-black px-4 py-1 text-xs font-medium tracking-wide rounded-bl-lg rounded-tr-lg">
                    RECOMMENDED
                  </div>
                )}

                <h3 className="text-2xl font-medium mb-2 text-white">
                  {plan.name}
                </h3>

                <div className="mb-6">
                  <span className="text-4xl font-light text-white">
                    {plan.price}
                  </span>
                  <span className="text-white/60">{plan.period}</span>
                </div>

                <p className="text-white/70 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check
                        size={18}
                        className="text-secondary mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`neumorphic-button w-full ${
                    plan.popular
                      ? "bg-secondary text-black hover:bg-secondary/90"
                      : ""
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
