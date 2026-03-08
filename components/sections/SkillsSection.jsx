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
    emerald: "text-[#db6b42]",
    teal: "text-[#db6b42]",
    cyan: "text-[#d6b07c]",
    indigo: "text-[#d6b07c]",
    violet: "text-[#a8a199]",
    rose: "text-[#db6b42]",
    orange: "text-[#db6b42]",
    amber: "text-[#d6b07c]",
    stone: "text-[#a8a199]",
  };
  return colorMap[color] || "text-[#a8a199]"; // fallback color
};

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center py-20 px-4 bg-[#141210]"
      style={{ perspective: "1200px" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-center mb-16 text-[#db6b42] border-b border-[#282420] pb-6 max-w-2xl mx-auto"
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
                className="h-full transition-all duration-500 border-none bg-transparent hover:bg-[#1a1715] hover:border-l-2 hover:border-[#db6b42] relative overflow-hidden rounded-none"
                style={{
                  transform: "translateZ(0)",
                }}
              >
                <CardContent className="p-8 text-left relative" style={{ transform: "translateZ(10px)" }}>
                  <motion.div
                    className={`w-12 h-12 mb-6 flex items-center transition-all duration-300 relative`}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.6 },
                    }}
                  >
                    <skill.icon className={`h-8 w-8 ${getColorClasses(skill.color)}`} style={{ transform: "translateZ(5px)" }} />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-serif mb-4 text-[#ebe9e6] group-hover:text-[#db6b42] transition-colors duration-300"
                    style={{ transform: "translateZ(15px)" }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    {skill.name}
                  </motion.h3>

                  <motion.p
                    className="text-[#918a80] font-light transition-colors duration-300"
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
