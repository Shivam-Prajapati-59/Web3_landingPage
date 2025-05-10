import AppearOnScroll from "./AppearOnScroll";
import { Calendar, CheckCircle, Award, Rocket } from "lucide-react";

const timelineItems = [
  {
    id: 1,
    title: "Project Inception",
    date: "January 2025",
    description:
      "Lunexa was born from the vision to make AI-powered crypto trading accessible to everyone, regardless of their technical expertise.",
    icon: <Calendar className="text-secondary" size={24} />,
  },
  {
    id: 2,
    title: "Beta Launch",
    date: "March 2025",
    description:
      "Our first beta release was made available to 500 selected traders who helped shape the platform with valuable feedback and insights.",
    icon: <Rocket className="text-secondary" size={24} />,
  },
  {
    id: 3,
    title: "AI Algorithm Optimization",
    date: "July 2025",
    description:
      "Major breakthrough in our AI algorithms leading to a 40% improvement in prediction accuracy across volatile market conditions.",
    icon: <CheckCircle className="text-secondary" size={24} />,
  },
  {
    id: 4,
    title: "Global Launch",
    date: "October 2025",
    description:
      "Lunexa platform officially launched worldwide with support for 20+ exchanges and over 500 cryptocurrency pairs.",
    icon: <Award className="text-secondary" size={24} />,
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary opacity-10 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AppearOnScroll>
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-white/70">
              From concept to reality, follow the evolution of Lunexa as we
              continue to innovate in the crypto trading space.
            </p>
          </div>
        </AppearOnScroll>

        <div className="max-w-4xl mx-auto mt-16 pl-4">
          {timelineItems.map((item, index) => (
            <AppearOnScroll key={item.id} delay={index * 200}>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content mb-10 relative p-6 ml-6 glass-card">
                  <div className="flex items-center mb-2">
                    <span className="inline-block mr-3">{item.icon}</span>
                    <h3 className="text-xl font-light text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-secondary text-sm mb-3">{item.date}</div>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
