"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      institution: "Vellore Institute of Technology",
      location: "Chennai, Tamil Nadu",
      degree: "Bachelor of Technology in Computer Science",
      score: "CGPA - 9.05/10",
      date: "Aug. 2023 – May 2027",
    },
    {
      institution: "Emmanuel Mission School",
      location: "Kota, Rajasthan",
      degree: "Intermediate",
      score: "88.2%",
      date: "Aug. 2021 – May 2023",
    },
    {
      institution: "Emmanuel Mission School",
      location: "Kota, Rajasthan",
      degree: "High School",
      score: "94.4%",
      date: "Aug. 2019 – May 2021",
    },
  ]

  return (
    <section id="education" ref={ref} className="min-h-screen flex items-center py-20 px-4 bg-[#141210]">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-[#282420] pb-6"
        >
          <div className="flex items-center gap-4 mb-2">
            <GraduationCap className="h-10 w-10 text-[#db6b42]" />
            <h2 className="text-4xl md:text-5xl font-serif text-[#db6b42]">Education Journey</h2>
          </div>
          <p className="text-[#a8a199] text-lg pl-14">A timeline of my academic background.</p>
        </motion.div>

        <div className="space-y-12 max-w-3xl ml-4 md:ml-12 border-l border-[#282420] pl-6 md:pl-10 relative">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Organic bullet point */}
              <div className="absolute -left-[32px] md:-left-[46px] top-2 w-4 h-4 rounded-full bg-[#141210] border-2 border-[#db6b42] group-hover:bg-[#db6b42] transition-colors duration-300" />
              
              <div className="hover:pl-4 transition-all duration-300">
                <h3 className="text-2xl font-serif text-[#ebe9e6] mb-1">{item.degree}</h3>
                <div className="text-[#db6b42] font-medium text-lg mb-3 tracking-wide">{item.institution}</div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 text-[#918a80] text-sm md:text-base">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1.5 opacity-60" />
                    {item.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1.5 opacity-60" />
                    {item.date}
                  </div>
                </div>
                
                <div className="mt-4 font-mono text-[#d6b07c] text-sm bg-[#1c1917] inline-block px-3 py-1 rounded">
                   {item.score.includes("CGPA") ? item.score : `Score: ${item.score}`}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
