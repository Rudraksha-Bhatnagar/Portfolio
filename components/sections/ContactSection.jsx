"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6 text-emerald-400"
        >
          Let's Create Something Amazing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
        >
          Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ perspective: "800px" }}
        >
          <motion.div
            whileHover={{
              rotateX: -5,
              rotateY: 5,
              z: 20,
              transition: { duration: 0.3 },
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full transition-all duration-300"
              style={{
                transform: "translateZ(0)",
              }}

            >
              <a href="rudrakshabhatnagar@gmail.com">

              <Mail className="mr-2 h-4 w-4" style={{ transform: "translateZ(5px)" }} />
              <span style={{ transform: "translateZ(5px)" }}>Get In Touch</span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              rotateX: 5,
              rotateY: -5,
              z: 20,
              transition: { duration: 0.3 },
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full bg-transparent border-slate-600 text-slate-300 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300"
              style={{
                transform: "translateZ(0)",
              }}
            >
              <span style={{ transform: "translateZ(5px)" }}>Download Resume</span>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-slate-700"
        >
          <p className="text-slate-400">© 2024 John Doe. Crafted with passion and code.</p>
        </motion.div>
      </div>
    </section>
  )
}
