import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full filter blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#home" className="text-2xl font-bold">
              <span className="gradient-text">Zaid</span>
              <span className="text-white">.dev</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              BCA Final Year Student & Aspiring Full-Stack Developer specializing in MERN stack development.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/zaidashraf249"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors bg-gray-800 p-2 rounded-full"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/zaid-ashraf-58a18a265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors bg-gray-800 p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:zaidashraf249@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors bg-gray-800 p-2 rounded-full"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">&copy; {currentYear} Zaid Ashraf. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
