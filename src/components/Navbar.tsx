import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", hash: "#home" },
  { name: "Features", path: "/", hash: "#features" },
  { name: "How it Works", path: "/", hash: "#how-it-works" },
  { name: "Testimonials", path: "/", hash: "#testimonials" },
  { name: "Timeline", path: "/", hash: "#timeline" },
  { name: "Pricing", path: "/", hash: "#pricing" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(hash);
    setIsOpen(false);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.pathname !== "/") {
      window.location.href = `/${hash}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-background/70 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/crypto/web3log.png"
              alt="Lunexa Logo"
              className="h-8 mr-2"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.hash}
                onClick={(e: any) => link.hash && scrollToSection(e, link.hash)}
                className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            ))}
            <button className="neumorphic-button text-sm">Get Started</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} className={isOpen ? "hidden" : "block"} />
            <X size={24} className={isOpen ? "block" : "hidden"} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-full md:w-80 bg-card/95 backdrop-blur-xl shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-8 h-full">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-start space-y-6 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.hash}
                  onClick={(e: any) =>
                    link.hash && scrollToSection(e, link.hash)
                  }
                  className="text-white/70 hover:text-secondary transition-colors duration-300 text-lg"
                >
                  {link.name}
                </a>
              ))}
              <button className="neumorphic-button mt-4 w-full text-center">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
