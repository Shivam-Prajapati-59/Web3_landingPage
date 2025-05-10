import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppearOnScroll from "../components/AppearOnScroll";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<null | "success" | "error">(
    null
  );

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log("Form submitted with data:", formData);

    // Simulate form submission
    setFormStatus("success");

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} className="text-secondary" />,
      title: "Email Us",
      content: "support@lunexa.io",
      action: "mailto:support@lunexa.io",
      label: "Send Email",
    },
    {
      icon: <Phone size={24} className="text-secondary" />,
      title: "Call Us",
      content: "+1 (888) 555-LUNA",
      action: "tel:+18885558652",
      label: "Call Now",
    },
    {
      icon: <MapPin size={24} className="text-secondary" />,
      title: "Visit Us",
      content: "123 Blockchain Ave, San Francisco, CA 94107",
      action: "https://maps.google.com",
      label: "Get Directions",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-20 rounded-full filter blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-20 rounded-full filter blur-[80px] -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AppearOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-xl text-white/70">
                Have questions about Lunexa? Our team is here to help you.
              </p>
            </div>
          </AppearOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <AppearOnScroll key={method.title} delay={index * 100}>
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-white">
                    {method.title}
                  </h3>
                  <p className="text-white/70 mb-6">{method.content}</p>
                  <a
                    href={method.action}
                    className="text-secondary hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {method.label}
                  </a>
                </div>
              </AppearOnScroll>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AppearOnScroll delay={300}>
              <div>
                <h2 className="text-3xl font-light mb-6 text-white">
                  Send Us a Message
                </h2>
                <p className="text-white/70 mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStatus === "success" && (
                    <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg mb-6">
                      Your message has been sent successfully. We'll get back to
                      you soon!
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6">
                      There was an error sending your message. Please try again.
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-white/80 mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="enterprise">Enterprise Solutions</option>
                      <option value="partnership">
                        Partnership Opportunities
                      </option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white/80 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="neumorphic-button w-full text-center"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </AppearOnScroll>

            <AppearOnScroll delay={500}>
              <div>
                <h2 className="text-3xl font-light mb-6 text-white">FAQ</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-white">
                      What are your support hours?
                    </h3>
                    <p className="text-white/70">
                      Our customer support team is available 24/7 for Pro and
                      Enterprise users. Free plan users have access to support
                      during business hours (9am-5pm PT).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-2 text-white">
                      How quickly will you respond?
                    </h3>
                    <p className="text-white/70">
                      We aim to respond to all inquiries within 24 hours. Pro
                      and Enterprise users receive priority support with typical
                      response times of under 4 hours.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-2 text-white">
                      Do you offer phone support?
                    </h3>
                    <p className="text-white/70">
                      Phone support is available for Enterprise clients. Pro
                      users can schedule phone consultations. Free users have
                      access to email and chat support.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-2 text-white">
                      Can I book a demo?
                    </h3>
                    <p className="text-white/70">
                      Absolutely! You can schedule a personalized demo with one
                      of our product specialists to explore how Lunexa can meet
                      your specific needs.
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="relative overflow-hidden h-[300px] rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Our office"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-white text-xl font-medium">
                        Visit our headquarters
                      </p>
                      <p className="text-white/70">San Francisco, California</p>
                    </div>
                  </div>
                </div>
              </div>
            </AppearOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
