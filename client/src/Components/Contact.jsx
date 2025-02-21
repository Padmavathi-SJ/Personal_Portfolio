import { useState } from "react";
import { motion } from "framer-motion";
import contactImg from "../assets/contact2.jpg";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/gmail.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // You can integrate backend/API to handle submissions
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen px-6 md:px-16 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Outer Container with Border */}
      <div className="flex flex-col md:flex-row items-center border-1 border-[var(--accent-color)] rounded-xl p-6 md:p-8 w-full max-w-5xl bg-transparent">
        {/* Left Section - Image */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <img
            src={contactImg}
            alt="Contact"
            className="w-[90%] rounded-xl shadow-lg"
          />
        </div>

        {/* Right Section - Contact Form & Social Media */}
        <div className="flex-1 p-5 md:p-6 rounded-xl shadow-lg w-full md:w-[60%] bg-transparent">
          <h2 className="text-2xl font-bold text-center text-[var(--primary-text)] mb-4">
            Get in Touch
          </h2>

          {/* Contact Form */}
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[var(--primary-text)] font-semibold">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full p-2 rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                required
              />
            </div>

            <div>
              <label className="block text-[var(--primary-text)] font-semibold">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                className="w-full p-2 rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                required
              />
            </div>

            <div>
              <label className="block text-[var(--primary-text)] font-semibold">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                rows="3"
                className="w-full p-2 rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 text-lg font-semibold text-white bg-[var(--accent-color)] rounded-lg hover:bg-opacity-80 transition"
            >
              Send Message
            </button>
          </form>

          {/* Social Media Links */}
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-[var(--primary-text)]">
              Connect with Me
            </h3>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="w-8 h-8 transition-transform transform hover:scale-110"
                />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-8 h-8 transition-transform transform hover:scale-110"
                />
              </a>
              <a href="mailto:your.email@example.com">
                <img
                  src={emailIcon}
                  alt="Email"
                  className="w-8 h-8 transition-transform transform hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
