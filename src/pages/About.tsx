import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppearOnScroll from "../components/AppearOnScroll";

const About = () => {
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
    window.scrollTo(0, 0);

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

  const teamMembers = [
    {
      name: "Alexandra Chen",
      role: "CEO & Founder",
      bio: "Former hedge fund manager with 15+ years of experience in algorithmic trading and AI development.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Marcus Rivera",
      role: "CTO",
      bio: "AI researcher with a Ph.D. in Machine Learning and previous experience at leading tech companies.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Sophia Williams",
      role: "Chief Data Scientist",
      bio: "Expert in predictive analytics and cryptocurrency market modeling with 10+ years in fintech.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Serial entrepreneur with multiple successful exits in the financial technology sector.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-20 rounded-full filter blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-20 rounded-full filter blur-[80px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AppearOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                About Lunexa
              </h1>
              <p className="text-xl text-white/70">
                We're revolutionizing crypto trading through AI and machine
                learning.
              </p>
            </div>
          </AppearOnScroll>

          <AppearOnScroll delay={200}>
            <div className="glass-card p-8 md:p-12 mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-light mb-6 text-white">
                    Our Story
                  </h2>
                  <p className="text-white/70 mb-6">
                    Lunexa was founded in 2022 by a team of financial experts,
                    AI researchers, and crypto enthusiasts who saw an
                    opportunity to make cryptocurrency trading more accessible
                    and profitable for everyone.
                  </p>
                  <p className="text-white/70 mb-6">
                    After experiencing firsthand the challenges of crypto
                    trading—the volatility, the 24/7 market, the complexity of
                    technical analysis—we set out to build a solution that would
                    level the playing field between institutional and retail
                    investors.
                  </p>
                  <p className="text-white/70">
                    Today, our AI-powered trading platform serves thousands of
                    users across the globe, from novice traders to institutional
                    investors, all benefiting from our advanced algorithms and
                    intuitive user experience.
                  </p>
                </div>
                <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Lunexa team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </AppearOnScroll>

          <AppearOnScroll delay={400}>
            <div className="mb-20">
              <h2 className="text-3xl font-light mb-10 text-center text-white">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="text-secondary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M12 3v17m0-17c-1.114 0-2.121.171-3 .458M12 3c1.114 0-2.121.171-3 .458m14.1 3.242-1 .714-1.5-1.071-.5 1.071-1-.714M7.5 8h.01M12 8h.01M16.5 8h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-white">
                    Innovation
                  </h3>
                  <p className="text-white/70">
                    We're committed to pushing the boundaries of what's possible
                    in crypto trading through cutting-edge technology and
                    creative solutions.
                  </p>
                </div>

                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="text-secondary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M12 11.25h.019V11.25a2.25 2.25 0 1 0 0 4.5V15.75M12 5.25S9.75 2.25 9 3c-.5.5-4.5 7.5 3 12.75 7.5-5.25 3.5-12.25 3-12.75-.75-.75-3 2.25-3 2.25Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-white">Trust</h3>
                  <p className="text-white/70">
                    We build transparent systems and communicate honestly,
                    ensuring our users can trust us with their trading
                    decisions.
                  </p>
                </div>

                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="text-secondary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM7.5 10.5h9M10.5 7.5l3 3-3 3"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-white">
                    Accessibility
                  </h3>
                  <p className="text-white/70">
                    We believe everyone should have access to sophisticated
                    trading tools, regardless of their experience or resources.
                  </p>
                </div>
              </div>
            </div>
          </AppearOnScroll>

          <AppearOnScroll delay={600}>
            <div>
              <h2 className="text-3xl font-light mb-10 text-center text-white">
                Our Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <div key={member.name} className="glass-card p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-2 border-secondary"
                    />
                    <h3 className="text-xl font-medium mb-1 text-white">
                      {member.name}
                    </h3>
                    <p className="text-secondary mb-4">{member.role}</p>
                    <p className="text-white/70">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </AppearOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
