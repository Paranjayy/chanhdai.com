import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export function BrandMark({
  className,
  ...props
}: any) {
  return (
    <motion.svg
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-auto", className)}
      initial="initial"
      animate="animate"
      {...props}
    >
      <motion.g variants={containerVariants}>
        {/* K */}
        <motion.rect
          variants={itemVariants}
          x="0"
          y="0"
          width="2"
          height="11"
          fill="currentColor"
        />
        <motion.rect
          variants={itemVariants}
          x="2"
          y="4"
          width="2"
          height="3"
          fill="currentColor"
        />
        <motion.rect
          variants={itemVariants}
          x="4"
          y="2"
          width="2"
          height="2"
          fill="currentColor"
        />
        <motion.rect
          variants={itemVariants}
          x="6"
          y="0"
          width="2"
          height="2"
          fill="currentColor"
        />
        <motion.rect
          variants={itemVariants}
          x="4"
          y="7"
          width="2"
          height="2"
          fill="currentColor"
        />
        <motion.rect
          variants={itemVariants}
          x="6"
          y="9"
          width="2"
          height="2"
          fill="currentColor"
        />

        {/* P */}
        <motion.rect
          variants={itemVariants}
          x="10"
          y="0"
          width="2"
          height="11"
          fill="currentColor"
        />
        <motion.rect
          variants={itemVariants}
          x="12"
          y="0"
          width="4"
          height="2"
          fill="currentColor"
        />
        <motion.rect
          variants={itemVariants}
          x="14"
          y="2"
          width="2"
          height="4"
          fill="currentColor"
        />
        <motion.rect
          variants={itemVariants}
          x="12"
          y="5"
          width="4"
          height="2"
          fill="currentColor"
        />
      </motion.g>
    </motion.svg>
  )
}

const containerVariants: any = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: any = {
  initial: { opacity: 0, scale: 0.8, y: 2 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}
