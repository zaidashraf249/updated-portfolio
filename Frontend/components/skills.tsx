"use client";

import { Code, Database, Globe, Server, Cpu, FileCode, Layout, PenTool } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
}

const Skills = () => {
  const technicalSkills = [
    { name: "HTML/CSS", icon: <Layout className="text-purple-600 dark:text-purple-400" size={24} />, level: 90 },
    { name: "JavaScript", icon: <FileCode className="text-purple-600 dark:text-purple-400" size={24} />, level: 85 },
    { name: "React JS", icon: <Code className="text-purple-600 dark:text-purple-400" size={24} />, level: 80 },
    { name: "Next JS", icon: <Server className="text-purple-600 dark:text-purple-400" size={24} />, level: 75 },
    { name: "Python", icon: <Cpu className="text-purple-600 dark:text-purple-400" size={24} />, level: 70 },
    { name: "PHP", icon: <Globe className="text-purple-600 dark:text-purple-400" size={24} />, level: 65 },
    { name: "MySQL", icon: <Database className="text-purple-600 dark:text-purple-400" size={24} />, level: 75 },
    { name: "C, C++", icon: <Cpu className="text-purple-600 dark:text-purple-400" size={24} />, level: 60 },
    { name: "SEO", icon: <PenTool className="text-purple-600 dark:text-purple-400" size={24} />, level: 70 },
  ]

  const softSkills = [
    { name: "Adaptability", level: 85 },
    { name: "Problem Solving", level: 90 },
    { name: "Teamwork", level: 80 },
    { name: "Time Management", level: 75 },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500/10 rounded-full filter blur-3xl"></div>

      <div className="section-container">
        <div className="section-title">
          <span>My Skills</span>
          <h2>
            <span className="gradient-text">What I Can Do</span>
          </h2>
          <div className="divider"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                <span className="text-purple-600 dark:text-purple-400 text-lg">💻</span>
              </span>
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 group"
                >
                  <div className="flex items-center mb-3">
                    <div className="mr-3 bg-purple-100 dark:bg-purple-900/50 p-2 rounded-full group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                      {skill.icon}
                    </div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 relative shimmer"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 text-right text-xs text-gray-500 dark:text-gray-400">{skill.level}%</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                <span className="text-purple-600 dark:text-purple-400 text-lg">🧠</span>
              </span>
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 gap-6 mb-10">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 group"
                >
                  <div className="flex items-center mb-3">
                    <h4 className="font-medium text-gray-800 dark:text-white">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 relative shimmer"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 text-right text-xs text-gray-500 dark:text-gray-400">{skill.level}%</div>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                  <span className="text-purple-600 dark:text-purple-400 text-sm">🛠️</span>
                </span>
                Additional Skills
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {["MS Office", "Node.js", "Git & GitHub", "Responsive Design", "REST APIs", "MongoDB"].map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-600 dark:text-gray-400 group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
