import { useState } from "react";
import AppearOnScroll from "./AppearOnScroll";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What makes Lunexa different from other trading platforms?",
    answer:
      "Lunexa combines advanced AI algorithms with an intuitive user interface, making it accessible for beginners while providing powerful tools for experienced traders. Our platform offers real-time market analysis, personalized trading strategies, and automated execution that adapts to changing market conditions.",
  },
  {
    question: "Is my crypto secure with Lunexa?",
    answer:
      "Absolutely. Lunexa operates on a non-custodial model, meaning we never hold your assets. Your crypto remains in your wallet at all times. We use bank-level encryption, two-factor authentication, and regular security audits to ensure the highest level of protection for your account and data.",
  },
  {
    question: "Do I need trading experience to use Lunexa?",
    answer:
      "No, Lunexa is designed for traders of all experience levels. Beginners can rely on our AI assistant for guidance and use pre-configured strategies, while experienced traders can customize advanced parameters and create their own trading strategies.",
  },
  {
    question: "Can I try Lunexa before committing to a paid plan?",
    answer:
      "Yes, our Free plan allows you to explore Lunexa's core features without any cost. This includes basic AI insights, manual trading execution, and access to standard market data. It's a great way to experience the platform before upgrading to a Pro or Enterprise plan.",
  },
  {
    question: "What cryptocurrencies does Lunexa support?",
    answer:
      "Lunexa supports all major cryptocurrencies including Bitcoin, Ethereum, Cardano, Solana, and over 50 additional altcoins. We regularly add support for new tokens based on market trends and user requests.",
  },
  {
    question: "How does the AI trading assistant work?",
    answer:
      "Our AI trading assistant analyzes vast amounts of market data, including price movements, trading volumes, social sentiment, and macroeconomic indicators. It uses this information to identify patterns and generate trading signals. Based on your risk profile and goals, it then recommends or automatically executes trades on your behalf.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <AppearOnScroll>
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-white/70">
              Find answers to common questions about Lunexa and our AI-powered
              trading platform.
            </p>
          </div>
        </AppearOnScroll>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AppearOnScroll key={index} delay={index * 100}>
              <div className="mb-4">
                <button
                  className={`w-full text-left p-6 glass-card flex justify-between items-center transition-all ${
                    openIndex === index ? "rounded-b-none" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-medium text-white">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp
                      className="text-secondary flex-shrink-0"
                      size={20}
                    />
                  ) : (
                    <ChevronDown
                      className="text-secondary flex-shrink-0"
                      size={20}
                    />
                  )}
                </button>

                {openIndex === index && (
                  <div className="glass-card border-t-0 rounded-t-none p-6 animate-accordion-down">
                    <p className="text-white/70">{faq.answer}</p>
                  </div>
                )}
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
