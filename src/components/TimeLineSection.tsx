import { useEffect, useRef, useState } from "react";
import { Calendar, CheckCircle, Award, Rocket } from "lucide-react";
import AppearOnScroll from "./AppearOnScroll";

const timelineItems = [
  {
    id: 1,
    title: "We track the market's impact on your portfolio daily",
    description:
      "Using real-time data analytics to monitor your investments and provide actionable insights when market conditions change.",
    icon: <Calendar className="text-teal-400" size={24} />,
    comparison:
      "Your RM is busy searching for new clients & rarely tracks your portfolio",
    cardContent: (
      <div className="relative h-40 md:h-48">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full px-2">
            <div className="mb-6">
              <p className="text-teal-400 text-xs mb-1">Israel conflict</p>
              <div className="relative w-full h-24">
                <svg className="w-full h-full" viewBox="0 0 300 80">
                  <path
                    d="M0,40 C20,35 40,55 60,50 C80,45 100,30 120,35 C140,40 160,60 180,50 C200,40 220,30 240,45 C260,60 280,70 300,65"
                    fill="none"
                    stroke="#e0e0e0"
                    strokeWidth="2"
                  />
                  <circle cx="120" cy="35" r="5" fill="#f87171" />
                  <circle cx="180" cy="50" r="5" fill="#f87171" />
                  <circle cx="240" cy="45" r="5" fill="#14b8a6" />
                </svg>
                <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-400">
                  <span>Mar 2023</span>
                  <span>Apr 2023</span>
                  <span>Dec 2023</span>
                </div>
              </div>
            </div>
            <div className="flex text-xs">
              <div className="mr-4">
                <p className="text-gray-400">US Banking Crisis</p>
              </div>
              <div>
                <p className="text-gray-400">India State Elections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Instantly evaluates if your portfolio needs a change",
    description:
      "Our AI algorithms continuously evaluate your portfolio performance and alert you when rebalancing is necessary.",
    icon: <Rocket className="text-teal-400" size={24} />,
    comparison: "Delay action on your portfolio due to manual processes",
    cardContent: (
      <div className="relative h-40 md:h-48">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full px-2">
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Aman's Portfolio</p>
                <div>
                  <p className="text-xl font-semibold">18.1%</p>
                  <p className="text-xs text-gray-400">+ 2.4%</p>
                </div>
              </div>
            </div>

            <div className="mb-3 flex items-center">
              <div className="h-5 w-5 rounded-full bg-teal-400 flex items-center justify-center mr-2">
                <CheckCircle size={14} className="text-white" />
              </div>
              <div>
                <p className="text-sm">Opportunity</p>
                <p className="text-xs text-gray-400">
                  Achieve close to optimal returns
                </p>
              </div>
            </div>

            <div className="mb-1">
              <div className="flex justify-between text-xs mb-1">
                <span>Rebalance benefit</span>
                <span>Cost of Rebalance</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-teal-400">+ 6.4%</span>
                <span>0.4%</span>
              </div>
            </div>

            <div className="flex justify-between text-xs mb-3">
              <span>Tax of Rebalance</span>
              <span>1.1%</span>
            </div>

            <button className="w-full bg-teal-500 text-white py-2 rounded flex items-center justify-center">
              <CheckCircle size={16} className="mr-2" />
              <span>Rebalance Needed</span>
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Automatically capitalizes on opportunities",
    description:
      "Our system identifies market opportunities and executes timely trades to maximize your investment potential.",
    icon: <CheckCircle className="text-teal-400" size={24} />,
    comparison:
      "Manual analysis leads to missed trading windows and suboptimal returns",
    cardContent: (
      <div className="relative h-40 md:h-48">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full px-2">
            <div className="mb-6">
              <p className="font-medium mb-4">Aman's Portfolio</p>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="h-5 w-5 rounded-full bg-teal-400 flex items-center justify-center mr-2">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm">Small Cap allocation</p>
                    <p className="text-xs text-teal-400">Increased by 10.3%</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-red-400 flex items-center justify-center mr-2">
                    <div className="h-2 w-2 bg-white"></div>
                  </div>
                  <div>
                    <p className="text-sm">Large & Mid Cap allocation</p>
                    <p className="text-xs text-red-400">Decreased by 8.9%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Global Launch",
    description:
      "Lunexa platform officially launched worldwide with support for 20+ exchanges and over 500 cryptocurrency pairs.",
    icon: <Award className="text-teal-400" size={24} />,
    comparison: "Limited exchange support and delayed feature rollout",
    cardContent: (
      <div className="relative h-40 md:h-48">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="py-10 text-center">
            <Award size={40} className="mx-auto mb-2 text-teal-400" />
            <h3 className="text-lg font-medium">500+ Crypto Pairs</h3>
            <p className="text-sm text-gray-400">
              Available across 20 global exchanges
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

const ComparisonTimelineSection = () => {
  const [activeItems, setActiveItems] = useState<Record<number, boolean>>({});
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.id;
          if (id) {
            setActiveItems((prev) => ({
              ...prev,
              [id.toString()]: entry.isIntersecting,
            }));
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    // Handle scroll for timeline line animation
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on how much of timeline is scrolled
      let progressValue = 0;

      if (rect.top >= windowHeight) {
        progressValue = 0;
      } else if (rect.bottom <= 0) {
        progressValue = 100;
      } else {
        const visibleHeight =
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const percentVisible = visibleHeight / rect.height;
        progressValue = Math.min(
          100,
          Math.max(0, (1 - rect.top / windowHeight) * 100)
        );
      }

      setProgress(progressValue);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to make the timeline line class name based on whether its section is active
  const getLineClass = (index: any, totalItems: any) => {
    if (progress === 0) return "opacity-0";

    const sectionSize = 100 / totalItems;
    const sectionThreshold = sectionSize * (index + 1);

    if (progress >= sectionThreshold) {
      return "bg-gradient-to-b from-teal-400 to-blue-500 opacity-100";
    } else if (progress >= sectionThreshold - sectionSize) {
      return "bg-gradient-to-b from-teal-400 to-blue-500 opacity-50";
    }
    return "opacity-0";
  };

  return (
    <section className="py-16 md:py-24 bg-black text-white relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-teal-900 opacity-10 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AppearOnScroll>
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              How We're Different
            </h2>
            <p className="text-white/70">
              We reinvent wealth management through automation and data-driven
              insights
            </p>
          </div>
        </AppearOnScroll>

        {/* Timeline container */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-[38px] top-0 bottom-0 w-1 bg-gray-800 z-0">
            <div
              className="absolute left-0 top-0 bottom-0 w-full transition-all duration-1000 ease-out"
              style={{ height: `${progress}%` }}
            ></div>
          </div>

          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el: any) => (itemRefs.current[index] = el)}
              data-id={item.id}
              className="mb-24"
            >
              <div className="relative flex flex-col md:flex-row">
                {/* Timeline dot/marker */}
                <div className="absolute left-4 md:left-[38px] transform -translate-x-1/2 z-10">
                  <div
                    className={`h-8 w-8 rounded-full border-4 flex items-center justify-center transition-all duration-700 ease-out ${
                      activeItems[item.id]
                        ? "border-teal-400 bg-black"
                        : "border-gray-700 bg-gray-900"
                    }`}
                  >
                    <div
                      className={`h-3 w-3 rounded-full transition-all duration-500 ${
                        activeItems[item.id] ? "bg-teal-400" : "bg-gray-700"
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Content container */}
                <div className="pl-12 md:pl-16 w-full">
                  <div className="grid md:grid-cols-2 gap-3">
                    {/* Main card */}
                    <AppearOnScroll delay={index * 100}>
                      <div
                        className={`relative z-10 p-6 rounded-xl border overflow-hidden ${
                          activeItems[item.id]
                            ? "bg-gray-900/90 backdrop-blur-sm border-gray-800"
                            : "bg-gray-900/50 border-gray-800/50"
                        }`}
                      >
                        <div className="absolute top-0 right-0 m-2 p-1 text-xs rounded-full bg-gray-800 text-white">
                          <span className="inline-block w-4 h-4 rounded-full bg-teal-400 border-2 border-black"></span>
                        </div>
                        <div>
                          <div className="flex items-center mb-3">
                            <div className="p-2 rounded-lg bg-teal-900/30 mr-3">
                              {item.icon}
                            </div>
                            <h3 className="font-semibold text-white">REZERV</h3>
                          </div>
                          <h3 className="text-xl mb-3">{item.title}</h3>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                        <div className="mt-4">{item.cardContent}</div>
                      </div>
                    </AppearOnScroll>

                    {/* Comparison card */}
                    <AppearOnScroll delay={index * 100 + 200}>
                      <div
                        className={`relative z-10 p-6 rounded-xl border overflow-hidden ${
                          activeItems[item.id]
                            ? "bg-gray-900/90 backdrop-blur-sm border-gray-800"
                            : "bg-gray-900/50 border-gray-800/50"
                        }`}
                      >
                        <div className="absolute top-0 right-0 m-2 p-1 text-xs rounded-full bg-gray-800 text-white">
                          <span className="inline-block w-4 h-4 rounded-full bg-gray-700 border-2 border-black">
                            VS
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-3">
                            Traditional wealth firms
                          </h3>
                          <p className="text-gray-400">{item.comparison}</p>
                        </div>
                      </div>
                    </AppearOnScroll>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add styles via CSS modules or directly in a stylesheet instead of using jsx prop */}
      <style>{`
        .appear-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default ComparisonTimelineSection;
