"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-[#141210] px-4 overflow-hidden">
      {/* Organic Background Texture */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, rgba(219, 107, 66, 0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="text-center z-10 relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#1c1917] flex items-center justify-center border border-[#282420]">
            <span className="text-4xl font-serif text-[#db6b42]">RB</span>
          </div>
        </motion.div>

          <h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-serif mb-4 text-[#ebe9e6] tracking-tight"
        >
          Rudraksha Bhatnagar
        </h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-[#a8a199] mb-8 max-w-2xl mx-auto font-light tracking-wide"
        >
          Software Developer
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
            <Button
            size="lg"
            className="bg-transparent border border-[#db6b42] text-[#db6b42] hover:bg-[#db6b42] hover:text-[#141210] px-8 py-3 rounded-none transition-all duration-300"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore My Work
            <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
          </Button>
        </motion.div>
      </div>

      {/* Subtle organic light spread instead of floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,rgba(219,107,66,0.03),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(214,176,124,0.02),transparent_50%)]" />
      </div>
    </section>
  )
}
