import { useState } from "react";
import { motion } from "framer-motion";
import contactImg from "../assets/contact2.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("https://portfolio-backend-o78y.onrender.com/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResponseMessage(result.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage("Failed to send message. Try again later.");
    }

    setLoading(false);
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center min-h-screen px-6 md:px-16 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title and Description */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-[var(--primary-text)] mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-400">
          Feel free to reach out for collaborations, inquiries, or just to say hello!
        </p>
      </div>

      {/* Outer Container */}
      <div className="flex flex-col md:flex-row items-center border border-gray-300 rounded-xl p-6 md:p-8 w-full max-w-5xl bg-transparent shadow-lg">
        {/* Left Section - Image */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <img
            src={contactImg}
            alt="Contact"
            className="w-[90%] rounded-xl shadow-lg"
          />
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1 p-5 md:p-6 rounded-xl w-full md:w-[60%] bg-transparent">
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
                placeholder="Your name"
                className="text-blue-400 w-full p-2 rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
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
                className="text-blue-400 w-full p-2 rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
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
                className="text-blue-400 w-full p-2 rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 text-lg font-semibold text-[var(--primary-color)] border border-[var(--primary-color)] rounded-lg bg-transparent hover:bg-[var(--primary-color)] hover:text-white transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Display Response Message */}
          {responseMessage && (
            <p className="mt-4 text-center text-gray-300">{responseMessage}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
