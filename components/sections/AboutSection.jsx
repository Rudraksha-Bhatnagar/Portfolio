"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center py-20 px-4 bg-[#1a1715]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#db6b42]">About Me</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[#a8a199] mb-6 leading-relaxed font-light"
            >
              I'm a passionate and curious developer who enjoys turning complex problems into simple, practical solutions. I love exploring how things work under the hood and finding better, smarter ways to build them. Whether I’m designing a system, debugging an issue, or learning a new technology, I approach every challenge with logic, creativity, and persistence.



            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-[#a8a199] mb-10 leading-relaxed font-light"
            >
              Problem-solving isn't just part of what I do—it’s what motivates me. I enjoy working on meaningful projects that improve experiences, solve real-world issues, and keep pushing me to grow as a developer.

            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4"
            >
              
                <Button
                variant="outline"
                size="lg"
                className="rounded-none bg-transparent border-b border-[#282420] text-[#ebe9e6] hover:bg-transparent hover:text-[#db6b42] hover:border-[#db6b42] transition-colors duration-300"
              >
                <a href="https://github.com/Rudraksha-Bhatnagar">
                <Github className="mr-2 h-4 w-4" />
                GitHub
                </a>
              </Button>
                <Button
                variant="outline"
                size="lg"
                className="rounded-none bg-transparent border-b border-[#282420] text-[#ebe9e6] hover:bg-transparent hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors duration-300"
              >
                <a href="https://www.linkedin.com/in/rudraksha-bhatnagar-31895628a/">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Organic, unboxed representation instead of a stiff card */}
            <div className="w-full h-auto flex flex-col items-center justify-center p-12 border-l border-[#282420]">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-8 relative"
                >
                  <Code className="h-20 w-20 text-[#282420] mx-auto absolute -top-4 -left-4 opacity-50" />
                  <Code className="h-16 w-16 text-[#db6b42] mx-auto relative z-10" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-[#ebe9e6] font-serif text-2xl tracking-wide"
                >
                  Developer First.
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-[#a8a199] mt-2 font-mono text-sm"
                >
                  Logic // Creativity
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
