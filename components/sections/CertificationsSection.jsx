"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: "Android App Development with Kotlin",
      issuer: "Imarticus Learning",
      date: "May 2025",
    }
  ]

  return (
    <section id="certifications" ref={ref} className="min-h-screen flex items-center py-20 px-4 bg-[#141210]">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-[#282420] pb-6 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <Award className="h-10 w-10 text-[#db6b42]" />
            <h2 className="text-4xl md:text-5xl font-serif text-center text-[#db6b42]">Certifications</h2>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Card className="h-full border-none bg-transparent hover:bg-[#1a1715] transition-all duration-300 relative rounded-none hover:shadow-[0_0_0_1px_rgba(219,107,66,0.3)]">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-[#1a1715] border border-[#282420] rounded-full flex items-center justify-center text-[#d6b07c] group-hover:border-[#db6b42] group-hover:text-[#db6b42] transition-colors duration-300">
                    <Award className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-serif text-[#ebe9e6] mb-3">{cert.title}</h3>
                    <p className="text-[#db6b42] font-medium mb-5">{cert.issuer}</p>
                    
                    <div className="flex items-center justify-center font-mono text-[#a8a199] text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {cert.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
