"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
  {
    title: "MemVisor",
    description: "Flutter-based interactive application to visualize memory allocation techniques in operating systems.",
    image: "/placeholder.svg?height=300&width=400&text=MemVisor",
    tech: ["Flutter", "Dart"],
    link: "https://github.com/Rudraksha-Bhatnagar/MemVisor.git"
  },
  {
    title: "Fireweb",
    description: "Secure web-based iptables wrapper with React frontend and Node.js backend for firewall rule management.",
    image: "/placeholder.svg?height=300&width=400&text=Fireweb",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/Rudraksha-Bhatnagar/fireweb.git"
  },
  {
    title: "TelMan",
    description: "Android app to manage Telegram bots and pages with scheduling, analytics, and collaboration features.",
    image: "/placeholder.svg?height=300&width=400&text=TelMan",
    tech: ["Kotlin", "XML", "Firebase", "Telegram Bot API"],
    link: "https://github.com/GuyWithXM5/Telman.git"
  },
  {
  title: "Employee Management System",
  description: "Web app for managing employees, assigning tasks, and handling authentication using a local database. Built with React for the frontend and supports admin-based task control.",
  image: "/placeholder.svg?height=300&width=400&text=Employee+Management",
  tech: ["React", "JavaScript", "HTML", "CSS"],
  link: "https://github.com/Rudraksha-Bhatnagar/Employee-Management.git"
}
];


  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center py-20 px-4 bg-slate-950"
      style={{ perspective: "1000px" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 text-emerald-400"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ transformStyle: "preserve-3d" }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{
                rotateY: 5,
                rotateX: -5,
                z: 50,
                transition: { duration: 0.3 },
              }}
              className="group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card
                className="overflow-hidden transition-all duration-500 border-slate-700/50 bg-slate-800/60 backdrop-blur-sm hover:bg-slate-800/80 relative"
                style={{
                  transform: "translateZ(0)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
                }}
              >
                

                <CardContent className="p-6 relative" style={{ transform: "translateZ(20px)" }}>
                  <motion.h3
                    className="text-xl font-bold mb-2 text-white group-hover:text-emerald-300 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-slate-300 mb-4 group-hover:text-slate-200 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-900/40 text-emerald-300 rounded-full text-sm border border-emerald-700/50 transition-all duration-300"
                        style={{ transform: `translateZ(${5 + techIndex * 2}px)` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                  <motion.div
                    style={{ transform: "translateZ(25px)" }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={()=>window.open(project.link)}
                      className="w-full bg-transparent border-slate-600 text-slate-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
                    >
                      
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
