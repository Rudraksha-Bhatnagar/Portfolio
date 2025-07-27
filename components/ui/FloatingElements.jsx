"use client"

import { motion } from "framer-motion"
import { floatingAnimations } from "@/lib/animations"

export default function FloatingElements() {
  return (
    <>
      {/* Enhanced 3D Floating Elements */}
      <motion.div
        animate={floatingAnimations.orb1.animate}
        transition={floatingAnimations.orb1.transition}
        className="absolute top-20 left-10 w-16 h-16 bg-purple-500/30 rounded-full blur-xl pointer-events-none"
        style={{
          transform: "translateZ(50px)",
          boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)",
        }}
      />

      <motion.div
        animate={floatingAnimations.orb2.animate}
        transition={floatingAnimations.orb2.transition}
        className="absolute bottom-20 right-10 w-24 h-24 bg-pink-500/30 rounded-full blur-xl pointer-events-none"
        style={{
          transform: "translateZ(30px)",
          boxShadow: "0 0 50px rgba(236, 72, 153, 0.6)",
        }}
      />

      <motion.div
        animate={floatingAnimations.orb3.animate}
        transition={floatingAnimations.orb3.transition}
        className="absolute top-1/2 left-1/4 w-12 h-12 bg-orange-500/20 rounded-full blur-lg pointer-events-none"
        style={{
          transform: "translateZ(20px)",
          boxShadow: "0 0 30px rgba(249, 115, 22, 0.4)",
        }}
      />

      {/* 3D Geometric Shape */}
      <motion.div
        animate={floatingAnimations.triangle.animate}
        transition={floatingAnimations.triangle.transition}
        className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 opacity-60 pointer-events-none"
        style={{
          transform: "translateZ(40px)",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))",
        }}
      />
    </>
  )
}
