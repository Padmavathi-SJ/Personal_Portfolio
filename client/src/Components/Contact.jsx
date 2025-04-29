import { useState } from "react";
import { motion } from "framer-motion";
import contactImg from "../assets/contact2.jpg";

const Contact = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 bg-transparent py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-1 sm:mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Feel free to reach out for collaborations, inquiries, or just to say hello!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center border border-gray-300 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-5xl bg-transparent shadow-md">
        <div className="hidden md:flex flex-1 justify-center items-center mr-4 lg:mr-8">
          <img
            src={contactImg}
            alt="Contact"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        <div className="flex-1 p-3 sm:p-4 md:p-5 rounded-lg w-full">
          <form className="space-y-2 sm:space-y-3 md:space-y-4">
            <div>
              <label className="block text-gray-200 text-sm sm:text-base font-medium">
                Your Name
              </label>
              <input
                type="text"
                className="text-blue-400 w-full p-2 text-sm sm:text-base rounded-md bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 text-sm sm:text-base font-medium">
                Your Email
              </label>
              <input
                type="email"
                className="text-blue-400 w-full p-2 text-sm sm:text-base rounded-md bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 text-sm sm:text-base font-medium">
                Your Message
              </label>
              <textarea
                className="text-blue-400 w-full p-2 text-sm sm:text-base rounded-md bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
                rows="3"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 text-sm sm:text-base md:text-lg font-medium text-white border border-blue-500 rounded-md bg-blue-500 hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
