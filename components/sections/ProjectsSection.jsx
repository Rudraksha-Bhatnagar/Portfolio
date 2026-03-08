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

  const repos = [
    { title: "Hotreload", url: "https://github.com/Rudraksha-Bhatnagar/Hotreload.git" },
    { title: "UniGriev", url: "https://github.com/Rudraksha-Bhatnagar/23BCE1366_UniGriev.git" },
    { title: "Multi-Agent System", url: "https://github.com/Rudraksha-Bhatnagar/Multi-Agent-system.git" },
    { title: "PennyPin", url: "https://github.com/Rudraksha-Bhatnagar/PennyPin.git" },
    { title: "Scale Pilot", url: "https://github.com/Rudraksha-Bhatnagar/Scale-Pilot.git" },
    { title: "URL Shortner", url: "https://github.com/Rudraksha-Bhatnagar/URL-shortner.git" },
    { title: "Timber", url: "https://github.com/Rudraksha-Bhatnagar/Timber.git" },
    { title: "Tic Tac Toe", url: "https://github.com/Rudraksha-Bhatnagar/tic-tac-toe.git" }
  ];


  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center py-20 px-4 bg-[#1a1715]"
      style={{ perspective: "1000px" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-center mb-16 text-[#db6b42] border-b border-[#282420] pb-6 max-w-2xl mx-auto"
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
                className="overflow-hidden transition-all duration-500 border border-[#282420] bg-transparent hover:bg-[#141210] relative rounded-none hover:shadow-[0_0_0_1px_rgba(219,107,66,0.5)]"
                style={{
                  transform: "translateZ(0)",
                }}
              >
                

                <CardContent className="p-6 relative" style={{ transform: "translateZ(20px)" }}>
                  <motion.h3
                    className="text-2xl font-serif mb-3 text-[#ebe9e6] group-hover:text-[#db6b42] transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-[#a8a199] mb-6 font-light transition-colors duration-300"
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
                        className="px-3 py-1 bg-[#282420]/30 text-[#d6b07c] font-mono text-xs border border-[#282420] transition-all duration-300 rounded"
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
                      className="w-full bg-transparent border-b border-[#282420] border-t-0 border-l-0 border-r-0 rounded-none text-[#ebe9e6] hover:bg-transparent hover:text-[#db6b42] hover:border-[#db6b42] transition-colors duration-300 flex items-center justify-between px-0"
                    >
                      
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="mt-20"
        >
          <h3 className="text-3xl font-serif text-center mb-10 text-[#a8a199]">More Open Source Repositories</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.title}
                whileHover={{ x: 5 }}
                className="bg-transparent border-l-2 border-[#282420] p-4 hover:border-[#db6b42] transition-all cursor-pointer group"
                onClick={() => window.open(repo.url)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-serif text-[#ebe9e6] group-hover:text-[#db6b42] transition-colors">{repo.title}</h4>
                  <ExternalLink className="h-4 w-4 text-[#a8a199] opacity-0 group-hover:opacity-100 transition-all group-hover:text-[#db6b42]" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
