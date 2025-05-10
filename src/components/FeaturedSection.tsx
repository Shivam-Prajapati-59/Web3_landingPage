import AppearOnScroll from "./AppearOnScroll";

const FeaturedSection = () => {
  const logos = [
    { name: "TechCrunch", logo: "TC" },
    { name: "Forbes", logo: "Forbes" },
    { name: "Business Insider", logo: "BI" },
    { name: "CNBC", logo: "CNBC" },
    { name: "CoinDesk", logo: "CoinDesk" },
  ];

  return (
    <section className="py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <AppearOnScroll>
          <h3 className="text-center text-white/50 text-sm uppercase tracking-wider mb-10">
            Featured in
          </h3>
        </AppearOnScroll>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((item, index) => (
            <AppearOnScroll key={item.name} delay={index * 100}>
              <div className="text-white/40 hover:text-white/70 transition-colors">
                <span className="text-xl md:text-2xl font-medium">
                  {item.logo}
                </span>
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
