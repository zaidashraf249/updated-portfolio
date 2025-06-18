"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-pink-500/10 rounded-full filter blur-3xl"></div>

      <div className="section-container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span>About Me</span>
          <h2>
            <span className="gradient-text">Know Who I Am</span>
          </h2>
          <div className="divider"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Who I Am Card */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeUp}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                <span className="text-purple-600 dark:text-purple-400 text-lg">👨‍💻</span>
              </span>
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm Zaid Ashraf, a final year BCA student...
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Driven and detail-oriented, I'm proficient in...
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm eager to leverage modern web frameworks...
            </p>
          </motion.div>

          {/* Personal Details */}
          <motion.div
            className="text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            variants={fadeUp}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                <span className="text-purple-600 dark:text-purple-400 text-lg">📋</span>
              </span>
              Personal Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[ // reusable card animations
                {
                  icon: <MapPin className="text-purple-600 dark:text-purple-400" size={24} />,
                  title: "Location",
                  text: "Mominpura, Nagpur",
                },
                {
                  icon: <Phone className="text-purple-600 dark:text-purple-400" size={24} />,
                  title: "Phone",
                  text: "+91 9322822436",
                },
                {
                  icon: <Mail className="text-purple-600 dark:text-purple-400" size={24} />,
                  title: "Email",
                  text: "zaidashraf249@gmail.com",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-purple-600 dark:text-purple-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                      <circle cx="17" cy="7" r="5" />
                    </svg>
                  ),
                  title: "Languages",
                  text: "English, Hindi, Urdu",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 group"
                  custom={0.3 + index * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 break-all">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interests */}
            <motion.div
              className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.6}
              variants={fadeUp}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                  <span className="text-purple-600 dark:text-purple-400 text-sm">🎯</span>
                </span>
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Football", "Swimming", "Blogging", "Learning New Skills", "Traveling"].map((interest, i) => (
                  <motion.span
                    key={interest}
                    custom={0.7 + i * 0.05}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm hover:bg-purple-100 hover:text-purple-800 dark:hover:bg-purple-900/30 dark:hover:text-purple-300 transition-colors cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
