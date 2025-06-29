"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: (delay = 0) => ({
    duration: 0.6,
    delay,
  }),
};

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContact({ ...contact, [e.target.id]: e.target.value });
  };

  const addMessage = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://updated-portfolio-backend.onrender.com/api/v1/addmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
        body: JSON.stringify(contact),
      });

      if (res.ok) {
        alert("Message sent Successfully...!");
        setContact({ name: "", email: "", subject: "", message: "" });
        setSubmitSuccess(true);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div {...fadeIn}>
          <div className="text-center mb-12">
            <span className="text-purple-600 dark:text-purple-400 font-medium">Get In Touch</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Let's Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Feel free to contact me for any work or suggestions. I'm always open
              to discussing new projects, creative ideas, or opportunities to be
              part of your vision.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {[ // Animating all contact info cards
              {
                icon: <Phone className="text-purple-600 dark:text-purple-400" size={24} />,
                title: "Phone",
                content: (
                  <a href="tel:+919322822436" className="text-gray-600 dark:text-gray-400 hover:underline">
                    +91 9322822436
                  </a>
                ),
              },
              {
                icon: <Mail className="text-purple-600 dark:text-purple-400" size={24} />,
                title: "Email",
                content: (
                  <a href="mailto:zaidashraf249@gmail.com" className="text-gray-600 dark:text-gray-400 break-all hover:underline">
                    zaidashraf249@gmail.com
                  </a>
                ),
              },
              {
                icon: <MapPin className="text-purple-600 dark:text-purple-400" size={24} />,
                title: "Location",
                content: (
                  <a
                    href="https://www.google.com/maps/place/Mominpura,+Nagpur,+Maharashtra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Mominpura, Nagpur
                  </a>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={fadeIn.transition(i * 0.2)}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 group"
              >
                <div className="flex items-start">
                  <div className="mr-4 bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">{item.title}</h4>
                    {item.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            {...fadeIn}
            transition={fadeIn.transition(0.3)}
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
                <h3 className="text-white font-semibold text-lg">Send Me a Message</h3>
              </div>
              <div className="p-6">
                {submitSuccess && (
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6 text-center">
                    <p>Thank you for your message! I'll get back to you soon.</p>
                  </div>
                )}
                <form onSubmit={addMessage} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        id="name"
                        value={contact.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={contact.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can I help you?"
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={contact.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Your message here..."
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <button
                    type="submit"
                    style={{borderRadius:"5px"}}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
