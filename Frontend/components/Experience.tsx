"use client";
import { motion } from "framer-motion";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-3">
            Professional Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-purple-600">Work Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                  Full-Stack Developer
                </h3>
                <h4 className="text-purple-600 dark:text-purple-400 font-medium">
                  Qaswa Tech Pvt. Ltd.
                </h4>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">
                <span>01/2025 – Present</span>
                <br />
                <span>Nagpur, India</span>
              </div>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                Developed and maintained responsive web applications using the MERN stack (MongoDB, Express.js,
                React.js, Node.js).
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                Collaborated with the development team to implement front-end features and RESTful APIs.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                Gained hands-on experience in version control (Git), deployment, and agile development practices.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
