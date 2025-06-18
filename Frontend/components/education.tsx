"use client";

import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Application",
      institution: "G. H. Raisoni College of Arts Commerce and Science Nagpur",
      period: "August 2022 - 2025",
      details: "Currently pursuing BCA with focus on computer science and application development.",
    },
    {
      degree: "Higher Secondary School Certificate (HSSC)",
      institution: "MB Covent Jr. College Nagpur",
      period: "2020 - February 2022",
      percentage: "56.60%",
      details: "Completed higher secondary education with science stream.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Blue Diamond High School",
      period: "2020",
      percentage: "69.60%",
      details: "Completed secondary education with distinction.",
    },
  ];

  return (
    <motion.section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/10 rounded-full filter blur-3xl"></div>

      <div className="section-container">
        <div className="section-title text-center mb-16">
          <span className="text-purple-600 dark:text-purple-400 font-medium">Education</span>
          <h2 className="text-3xl font-bold mt-2 mb-2">
            <span className="gradient-text">Academic Journey</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-purple-600 dark:border-purple-400 pl-8 ml-4">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-14 bg-white dark:bg-gray-800 p-2 rounded-full border-2 border-purple-600 dark:border-purple-400 shadow-md shadow-purple-500/20 dark:shadow-purple-500/10">
                  <GraduationCap className="text-purple-600 dark:text-purple-400" size={24} />
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 group text-left">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.degree}
                  </h3>
                  <h4 className="text-purple-600 dark:text-purple-400 mb-2">{item.institution}</h4>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.period}</span>
                  </div>
                  {item.percentage && (
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      <strong>Percentage:</strong>{" "}
                      <span className="bg-purple-50 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-0.5 rounded-md text-sm">
                        {item.percentage}
                      </span>
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
