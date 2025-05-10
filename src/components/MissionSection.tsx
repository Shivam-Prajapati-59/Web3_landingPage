import AppearOnScroll from "./AppearOnScroll";

const MissionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-20 rounded-full filter blur-[80px] -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-20 rounded-full filter blur-[80px] translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AppearOnScroll>
            <div>
              <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-white/70 text-lg mb-8">
                At Lunexa, we're on a mission to democratize crypto trading by
                making advanced AI technologies accessible to everyone,
                regardless of their experience level.
              </p>
              <p className="text-white/70 text-lg mb-8">
                We believe that the future of finance should be inclusive,
                transparent, and efficient. Our platform is designed to remove
                barriers, reduce complexity, and empower individuals to take
                control of their financial future.
              </p>
              <p className="text-white/70 text-lg">
                By combining cutting-edge AI with an intuitive user experience,
                we're creating a new standard for crypto trading that
                prioritizes both performance and accessibility.
              </p>
            </div>
          </AppearOnScroll>

          <AppearOnScroll delay={200}>
            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-tr from-secondary to-primary opacity-50 rounded-3xl blur-sm"></div>
              <div className="glass-card border-2 border-white/20 p-10 relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl lg:text-5xl font-light text-white mb-2">
                      65K+
                    </p>
                    <p className="text-white/60">Active Users</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl lg:text-5xl font-light text-white mb-2">
                      $320M+
                    </p>
                    <p className="text-white/60">Trading Volume</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl lg:text-5xl font-light text-white mb-2">
                      42%
                    </p>
                    <p className="text-white/60">Avg. Return</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl lg:text-5xl font-light text-white mb-2">
                      24/7
                    </p>
                    <p className="text-white/60">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </AppearOnScroll>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
