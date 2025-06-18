import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden bg-hero-pattern">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center gap-10 relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="inline-block relative mb-2">
            <span className="px-4 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
              Full-Stack Developer
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hey, I'm <span className="gradient-text">Zaid Ashraf</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
            BCA Final Year Student & <span className="gradient-text-accent font-semibold">MERN Stack Developer</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            Proficient in React.js, Next.js, and the MERN stack. Passionate about building innovative web applications
            and solving complex problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all">
              <a href="#contact" className="flex items-center">
                Contact Me <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-gray-800 rounded-full px-6"
            >
              <a href="#projects" className="flex items-center">
                View Projects <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>

          <div className="flex mt-8 space-x-4">
            <a
              href="https://github.com/zaidashraf249"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/zaid-ashraf-58a18a265/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:zaidashraf249@gmail.com"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-500 rounded-full opacity-20 animate-float"></div>
            <div
              className="absolute -bottom-6 -right-6 w-12 h-12 bg-pink-500 rounded-full opacity-20 animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-2 border-dashed border-purple-300 dark:border-purple-700 animate-rotate opacity-30"></div>

            {/* Profile image */}
            <div className="blob w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl relative z-10 bg-gradient-to-br from-purple-500 to-pink-500 p-1">
              <img
                src="/images/zaid-profile.png"
                alt="Zaid Ashraf"
                className="w-full h-full object-cover rounded-[40%] bg-white dark:bg-gray-800"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
