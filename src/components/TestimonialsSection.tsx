import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AppearOnScroll from "./AppearOnScroll";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Emma T.",
    role: "Angel Investor",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content:
      "Lunexa's AI algorithms have completely transformed my trading strategy. I've seen a 34% increase in my portfolio since I started using it.",
    result: "+34% portfolio growth in 3 months",
  },
  {
    id: 2,
    name: "Michael R.",
    role: "Day Trader",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content:
      "The automation features save me hours every day. I'm now making better trades while spending less time in front of charts.",
    result: "Saved 20+ hours per week on trading activities",
  },
  {
    id: 3,
    name: "Sarah L.",
    role: "Crypto Enthusiast",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content:
      "As someone new to crypto trading, Lunexa's platform has been a game-changer. The interface is intuitive, and the AI assistant guides my every move.",
    result: "First profitable quarter after 2 years of losses",
  },
  {
    id: 4,
    name: "James K.",
    role: "Portfolio Manager",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content:
      "I'm managing multiple client portfolios, and Lunexa has streamlined my entire workflow. The customization options for different risk profiles are excellent.",
    result: "Managing 15+ portfolios with personalized strategies",
  },
  {
    id: 5,
    name: "Sophia C.",
    role: "Tech Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content:
      "The predictive analytics in Lunexa have helped me stay ahead of market trends. I was able to pivot my investments before a major market shift.",
    result: "Avoided 28% potential loss during market downturn",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (!isAnimating && activeIndex < testimonials.length - 1) {
      setIsAnimating(true);
      setActiveIndex((prev) => prev + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating && activeIndex > 0) {
      setIsAnimating(true);
      setActiveIndex((prev) => prev - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary opacity-20 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AppearOnScroll>
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <p className="text-white/70">
              Join thousands of traders who have transformed their crypto
              trading experience with our AI-powered platform.
            </p>
          </div>
        </AppearOnScroll>

        <AppearOnScroll delay={200}>
          <div className="relative">
            <div ref={containerRef} className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full md:px-12">
                    <div className="glass-card p-8 md:p-10 purple-glow">
                      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                        <div className="flex-shrink-0">
                          <Avatar className="w-20 h-20 border-2 border-secondary">
                            <AvatarImage
                              src={testimonial.image}
                              alt={testimonial.name}
                            />
                            <AvatarFallback>
                              {testimonial.name[0]}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex-1">
                          <p className="text-white/80 text-lg md:text-xl mb-6">
                            "{testimonial.content}"
                          </p>
                          <div className="mb-4">
                            <p className="font-medium text-white">
                              {testimonial.name}
                            </p>
                            <p className="text-white/60 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                          <div className="bg-secondary/20 border border-secondary/30 rounded-lg px-4 py-2 inline-block">
                            <p className="text-secondary font-medium">
                              Result: {testimonial.result}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-10 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-secondary w-8" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-4 z-20 pointer-events-none">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className={`p-2 rounded-full bg-card/80 backdrop-blur-sm border border-white/10 shadow-lg pointer-events-auto ${
                  activeIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-100 hover:bg-card"
                }`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="text-white" size={24} />
              </button>

              <button
                onClick={handleNext}
                disabled={activeIndex === testimonials.length - 1}
                className={`p-2 rounded-full bg-card/80 backdrop-blur-sm border border-white/10 shadow-lg pointer-events-auto ${
                  activeIndex === testimonials.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-100 hover:bg-card"
                }`}
                aria-label="Next testimonial"
              >
                <ChevronRight className="text-white" size={24} />
              </button>
            </div>
          </div>
        </AppearOnScroll>
      </div>
    </section>
  );
};

export default TestimonialsSection;
