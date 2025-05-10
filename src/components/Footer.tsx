import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-card/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-medium tracking-tighter text-white">
                Lune<span className="text-secondary">xa</span>
              </span>
            </Link>
            <p className="text-white/60 mb-4 max-w-xs">
              Advanced AI-powered crypto trading platform designed to maximize
              your portfolio performance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/60 hover:text-secondary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm44,156a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V80A44.05,44.05,0,0,1,80,36h96a44.05,44.05,0,0,1,44,44ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-secondary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-secondary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-secondary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M232,128.7c0-9.67-1.28-19.15-3.78-28.31-2.44-8.72-10.38-14.94-19.42-14.94H47.2A19.43,19.43,0,0,0,27.91,98.7c-2.53,9-3.91,18.08-3.91,28.35,0,10.49,1.08,21,6.15,31.36,5.69,11.68,17.2,19.59,31.85,19.59h136c13.47,0,25.2-7.55,30.85-19.53S232,138.3,232,128.7Z"
                    opacity="0.2"
                  ></path>
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v48A8,8,0,0,1,144,176ZM112,96V80a8,8,0,0,1,16,0V96a8,8,0,0,1-16,0Z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-white/60 hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/60 hover:text-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white/60 hover:text-secondary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-white/60 hover:text-secondary transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-secondary transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-secondary transition-colors"
                >
                  Support Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-secondary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-secondary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">
              Subscribe to Newsletter
            </h4>
            <p className="text-white/60 mb-4">
              Get the latest updates and news about Lunexa.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 w-full outline-none text-white"
              />
              <button className="bg-secondary text-card px-4 rounded-r-lg font-normal hover:bg-secondary/80 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 Lunexa. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white/60 hover:text-secondary transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-secondary transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-secondary transition-colors text-sm"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
