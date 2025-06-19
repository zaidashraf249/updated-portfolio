"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "ATS Resume Checker",
      description:
        "A full-stack web application built with Next.js, Node.js, and MySQL, utilizing AI/ML to analyze resumes and provide feedback for improved ATS compatibility.",
      image: "/images/developer-workspace.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "MySQL",
        "Node.js",
        "AI/ML",
      ],
      liveLink: "#",
      githubLink: "https://github.com/zaidashraf249",
    },
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website built with HTML and CSS to showcase skills, projects, and personal information in a structured and visually appealing layout.",
      image: "/images/portfolio-image.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveLink: "#",
      githubLink: "https://github.com/zaidashraf249",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "A classic two-player Tic Tac Toe game built using HTML, CSS, and JavaScript. Includes a simple UI with win/draw detection and restart functionality.",
      image: "/images/tic-tac-toe.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://zaidashraf249.github.io/Tic-Tac-Toe/",
      githubLink: "https://github.com/zaidashraf249",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background decoration */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl"></div>

      <div className="section-container">
        <motion.div
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-purple-600 dark:text-purple-400 font-medium">
            My Projects
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-2">
            <span className="gradient-text">Recent Works</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Here are some of the projects I've worked on that showcase my skills
            and experience as a full-stack developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-50 dark:bg-gray-700 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 rounded-full"
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full"
                    >
                      <ExternalLink size={16} className="mr-2" /> Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 rounded-full"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full"
                    >
                      <Github size={16} className="mr-2" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
