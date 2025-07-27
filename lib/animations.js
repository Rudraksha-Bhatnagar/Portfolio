// Hero Section Animations
export const heroAnimations = {
  avatar: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  title: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay: 0.3, duration: 0.8 },
  },
  subtitle: {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay: 0.6, duration: 0.8 },
  },
  button: {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay: 0.9, duration: 0.8 },
  },
}

// Section Animations
export const sectionAnimations = {
  container: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  image: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, delay: 0.3 },
  },
  title: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  subtitle: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 },
  },
  buttons: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.4 },
  },
}

// Skill Card Animations
export const skillCardAnimations = {
  initial: { opacity: 0, y: 100, rotateX: -20 },
  animate: { opacity: 1, y: 0, rotateX: 0 },
  transition: { duration: 0.8 },
  hover: {
    rotateY: 8,
    rotateX: -8,
    z: 40,
    transition: { duration: 0.3 },
  },
}

// Project Card Animations
export const projectCardAnimations = {
  initial: { opacity: 0, y: 100, rotateX: -15 },
  animate: { opacity: 1, y: 0, rotateX: 0 },
  transition: { duration: 0.8 },
  hover: {
    rotateY: 5,
    rotateX: -5,
    z: 50,
    transition: { duration: 0.3 },
  },
}

// Button Animations
export const buttonAnimations = {
  primary: {
    hover: {
      rotateX: -5,
      rotateY: 5,
      z: 20,
      transition: { duration: 0.3 },
    },
  },
  secondary: {
    hover: {
      rotateX: 5,
      rotateY: -5,
      z: 20,
      transition: { duration: 0.3 },
    },
  },
}

// Floating Elements Animations
export const floatingAnimations = {
  orb1: {
    animate: {
      y: [0, -20, 0],
      rotateX: [0, 15, 0],
      rotateY: [0, 25, 0],
    },
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
  orb2: {
    animate: {
      y: [0, 30, 0],
      rotateX: [0, -15, 0],
      rotateZ: [0, 10, 0],
    },
    transition: {
      duration: 8,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
      delay: 2,
    },
  },
  orb3: {
    animate: {
      y: [0, -15, 0],
      x: [0, 10, 0],
      rotateY: [0, 45, 0],
    },
    transition: {
      duration: 10,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
      delay: 4,
    },
  },
  triangle: {
    animate: {
      rotateX: [0, 360],
      rotateY: [0, 180],
      scale: [1, 1.2, 1],
    },
    transition: {
      duration: 12,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    },
  },
}
