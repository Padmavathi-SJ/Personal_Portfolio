import { useState } from "react";
import { motion } from "framer-motion";
import contactImg from "../assets/contact2.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 bg-transparent py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-2 sm:mb-3">
          Get in Touch & Contact Me!
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          Feel free to reach out for collaborations, inquiries, or just to say hello!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch border border-gray-700 rounded-xl p-6 sm:p-8 w-full max-w-6xl bg-gray-900 bg-opacity-50 shadow-xl backdrop-blur-sm">
        <div className="hidden md:flex flex-1 overflow-hidden rounded-lg mr-6 lg:mr-8">
          <img
            src={contactImg}
            alt="Contact"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
          />
        </div>

        <div className="flex-1 p-6 sm:p-8 rounded-lg bg-gray-800 bg-opacity-40">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 text-base rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 text-base rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400"
                placeholder="example@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 text-base rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400 min-h-[120px]"
                placeholder="Type your message..."
                rows="4"
                required
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 text-base font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Send Message"}
              </button>
              
              {submitStatus === "success" && (
                <p className="mt-4 text-center text-green-400 text-sm sm:text-base">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-center text-red-400 text-sm sm:text-base">
                  Failed to send message. Please try again later.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
