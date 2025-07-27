"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Palette, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
  {
    icon: Code,
    name: "Frontend Development",
    description: "React, Next.js, TypeScript, HTML, CSS, Tailwind",
    color: "emerald",
  },
  {
    icon: Code,
    name: "Mobile Development",
    description: "Flutter, Dart, Kotlin, XML, React Native",
    color: "indigo",
  },
  {
    icon: Code,
    name: "Backend & Database",
    description: "Node.js, Express, Firebase, MongoDB",
    color: "violet",
  },
  {
    icon: Code,
    name: "Problem Solving",
    description: "Data Structures, Algorithms, OOP, Debugging",
    color: "rose",
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    description: "Figma, Adobe Creative Suite",
    color: "teal",
  },
  {
    icon: Zap,
    name: "Animation",
    description: "Framer Motion, CSS Animations",
    color: "cyan",
  }
];


  const getColorClasses = (color) => {
  const colorMap = {
    emerald: "bg-emerald-600 hover:bg-emerald-700",
    teal: "bg-teal-600 hover:bg-teal-700",
    cyan: "bg-cyan-600 hover:bg-cyan-700",
    indigo: "bg-indigo-600 hover:bg-indigo-700",
    violet: "bg-violet-600 hover:bg-violet-700",
    rose: "bg-rose-600 hover:bg-rose-700",
  };
  return colorMap[color] || "bg-gray-600 hover:bg-gray-700"; // fallback color
};

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center py-20 px-4 bg-slate-900/50"
      style={{ perspective: "1200px" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 text-emerald-400"
        >
          What I Do
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8" style={{ transformStyle: "preserve-3d" }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 80, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                rotateY: 8,
                rotateX: -8,
                z: 40,
                transition: { duration: 0.3 },
              }}
              className="group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card
                className="h-full transition-all duration-500 border-slate-700/50 bg-slate-800/60 backdrop-blur-sm hover:bg-slate-800/80 relative overflow-hidden"
                style={{
                  transform: "translateZ(0)",
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.7)",
                }}
              >
                <CardContent className="p-8 text-center relative" style={{ transform: "translateZ(10px)" }}>
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 ${getColorClasses(skill.color)} rounded-2xl flex items-center justify-center transition-all duration-300 relative`}
                    whileHover={{
                      rotateY: 180,
                      scale: 1.1,
                      transition: { duration: 0.6 },
                    }}
                    style={{
                      transform: "translateZ(20px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <skill.icon className="h-8 w-8 text-white" style={{ transform: "translateZ(5px)" }} />
                    {/* Back face of the icon */}
                    <div
                      className={`absolute inset-0 ${getColorClasses(skill.color)} rounded-2xl flex items-center justify-center`}
                      style={{ transform: "rotateY(180deg) translateZ(5px)" }}
                    >
                      <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300"
                    style={{ transform: "translateZ(15px)" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.name}
                  </motion.h3>

                  <motion.p
                    className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {skill.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
