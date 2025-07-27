import { Code, Palette, Zap } from "lucide-react"

export const skillsData = [
  {
    icon: Code,
    name: "Frontend Development",
    description: "React, Next.js, TypeScript",
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    description: "Figma, Adobe Creative Suite",
  },
  {
    icon: Zap,
    name: "Animation",
    description: "Framer Motion, CSS Animations",
  },
]

export const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "Modern shopping experience with smooth animations",
    image: "/placeholder.svg?height=300&width=400&text=E-Commerce+Platform",
    tech: ["React", "Next.js", "Stripe"],
  },
  {
    title: "Creative Portfolio",
    description: "Interactive portfolio with 3D elements",
    image: "/placeholder.svg?height=300&width=400&text=Creative+Portfolio",
    tech: ["Three.js", "React", "Framer Motion"],
  },
  {
    title: "Mobile App Design",
    description: "Clean and intuitive mobile interface",
    image: "/placeholder.svg?height=300&width=400&text=Mobile+App+Design",
    tech: ["React Native", "Figma", "TypeScript"],
  },
]

export const personalInfo = {
  name: "John Doe",
  title: "Creative Developer & Digital Artist",
  initials: "JD",
  about: {
    paragraph1:
      "I'm a passionate creative developer who loves bringing ideas to life through code and design. With a keen eye for aesthetics and a deep understanding of modern web technologies, I create digital experiences that are both beautiful and functional.",
    paragraph2:
      "When I'm not coding, you'll find me exploring new design trends, experimenting with creative animations, or working on personal projects that push the boundaries of web development.",
  },
  social: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    email: "john@example.com",
  },
}
