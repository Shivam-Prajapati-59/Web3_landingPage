import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppearOnScroll from "../components/AppearOnScroll";

const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Crypto Trading",
    excerpt:
      "Discover how artificial intelligence is transforming the cryptocurrency market with predictive analytics and automated trading strategies.",
    image:
      "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "May 10, 2025",
    author: "Alexandra Chen",
    category: "Technology",
    slug: "how-ai-is-revolutionizing-crypto-trading",
  },
  {
    id: 2,
    title: "5 Essential Risk Management Strategies for Crypto Traders",
    excerpt:
      "Learn the key risk management techniques that professional traders use to protect their portfolios in volatile crypto markets.",
    image:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "May 5, 2025",
    author: "Marcus Rivera",
    category: "Trading",
    slug: "5-essential-risk-management-strategies",
  },
  {
    id: 3,
    title: "The Future of Decentralized Finance and AI Integration",
    excerpt:
      "Explore how DeFi platforms are incorporating AI to create more efficient, secure, and user-friendly financial systems.",
    image:
      "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "April 28, 2025",
    author: "Sophia Williams",
    category: "DeFi",
    slug: "future-of-defi-and-ai-integration",
  },
  {
    id: 4,
    title: "Beginner's Guide to Automated Crypto Trading",
    excerpt:
      "A comprehensive introduction to automated trading systems, their benefits, risks, and how to get started with minimal technical knowledge.",
    image:
      "https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "April 15, 2025",
    author: "David Kim",
    category: "Beginners",
    slug: "beginners-guide-to-automated-crypto-trading",
  },
];

const categories = [
  "All",
  "Technology",
  "Trading",
  "DeFi",
  "Beginners",
  "Market Analysis",
];

const Blog = () => {
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

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary opacity-20 rounded-full filter blur-[80px]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary opacity-20 rounded-full filter blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AppearOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Lunexa Blog
              </h1>
              <p className="text-xl text-white/70">
                Insights, tips, and news about AI trading, cryptocurrency
                markets, and financial technology.
              </p>
            </div>
          </AppearOnScroll>

          <AppearOnScroll delay={200}>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full text-sm ${
                    category === "All"
                      ? "bg-secondary text-black"
                      : "bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AppearOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AppearOnScroll key={post.id} delay={index * 100}>
                <Link to={`/blog/${post.slug}`} className="group">
                  <div className="glass-card overflow-hidden h-full">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-secondary/90 text-black text-xs px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-white/60 mb-4">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>By {post.author}</span>
                      </div>
                      <h3 className="text-xl font-medium mb-3 group-hover:text-secondary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/70 mb-4">{post.excerpt}</p>
                      <span className="text-secondary font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </AppearOnScroll>
            ))}
          </div>

          <AppearOnScroll delay={600}>
            <div className="mt-16 text-center">
              <div className="glass-card p-10 max-w-3xl mx-auto">
                <h3 className="text-2xl font-light mb-4 text-white">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-white/70 mb-8">
                  Get the latest insights and updates from Lunexa delivered
                  directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                  />
                  <button className="neumorphic-button whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </AppearOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
