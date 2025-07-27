"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center py-20 px-4 bg-slate-950">
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
            <h2 className="text-5xl font-bold mb-6 text-emerald-400">About Me</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-slate-300 mb-6 leading-relaxed"
            >
              I'm a passionate and curious developer who enjoys turning complex problems into simple, practical solutions. I love exploring how things work under the hood and finding better, smarter ways to build them. Whether I’m designing a system, debugging an issue, or learning a new technology, I approach every challenge with logic, creativity, and persistence.



            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-slate-300 mb-8 leading-relaxed"
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
                className="rounded-full bg-transparent border-slate-600 text-slate-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
              >
                <a href="https://github.com/Rudraksha-Bhatnagar">
                <Github className="mr-2 h-4 w-4" />
                GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-transparent border-slate-600 text-slate-300 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300"
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
            <div className="w-full h-96 bg-slate-800/50 rounded-3xl flex items-center justify-center border border-slate-700/50">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="w-24 h-24 mx-auto mb-4 bg-emerald-600 rounded-2xl flex items-center justify-center"
                >
                  <Code className="h-12 w-12 text-white" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-slate-300 font-medium"
                >
                  Software Developer
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
