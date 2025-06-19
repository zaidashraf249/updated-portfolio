"use client";
import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Certifications = () => {
  const certifications = [
    {
      title: "Python Fundamentals for Beginners",
      issuer: "Coursera",
      date: "2023",
      link: "/images/python-dev.jpg",
    },
    {
      title: "Mobile App Development",
      issuer: "Udemy",
      date: "2022",
      link: "/images/mobile-app-dev.JPG",
    },
    {
      title: "Navigating On-Page and Technical SEO",
      issuer: "Google Digital Garage",
      date: "2023",
      link: "/images/navigation-seo.png",
    },
    {
      title: "The CRAFT of Mobile SEO",
      issuer: "SEMrush Academy",
      date: "2022",
      link: "/images/mobile-seo.png",
    },
  ];

  return (
    <motion.section
      id="certifications"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background decoration */}
      <div className="absolute top-40 left-40 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 right-40 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl"></div>

      <div className="section-container">
        <div className="section-title">
          <span>Certifications</span>
          <h2>
            <span className="gradient-text">Professional Development</span>
          </h2>
          <div className="divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 group overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-full shadow-md">
                  <Award className="text-purple-600 dark:text-purple-400" size={28} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-gray-600 dark:text-gray-400 text-center mb-4">
                  <p className="font-medium">{cert.issuer}</p>
                  <p className="text-sm">{cert.date}</p>
                </div>
                <div className="flex justify-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center text-sm bg-purple-50 dark:bg-purple-900/30 px-3 py-1.5 rounded-full transition-colors"
                  >
                    View Certificate <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
