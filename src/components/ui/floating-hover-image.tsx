"use client"

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react"
import React, { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface FloatingHoverImageProps {
  src?: string
  alt?: string
  children: React.ReactNode
  className?: string
  imageClassName?: string
}

export function FloatingHoverImage({
  src,
  alt,
  children,
  className,
  imageClassName,
}: FloatingHoverImageProps) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)
  const rotate = useSpring(useMotionValue(0), springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const xPos = e.clientX - rect.left
    const yPos = e.clientY - rect.top
    mouseX.set(xPos)
    mouseY.set(yPos)

    // Calculate rotation based on cursor position relative to center
    const centerX = rect.width / 2
    const rotateVal = (xPos - centerX) / 20 // Subtle rotation
    rotate.set(rotateVal)
  }

  return (
    <div
      className={cn("group relative cursor-crosshair", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        rotate.set(0)
      }}
      onMouseMove={handleMouseMove}
    >
      {children}
      <AnimatePresence>
        {isHovered && src && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: rotate.get() }}
            exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
            style={{
              position: "absolute",
              left: x,
              top: y,
              rotate: rotate,
              pointerEvents: "none",
              zIndex: 50,
              transform: "translate(-50%, -110%)", // Center above cursor
            }}
            className="hidden sm:block"
          >
            <div
              className={cn(
                "overflow-hidden rounded-xl border border-line bg-background shadow-2xl ring-4 ring-background",
                imageClassName
              )}
            >
              <img
                src={src}
                alt={alt || "Hover preview"}
                className="h-32 w-auto object-cover grayscale transition-all duration-500 group-hover:grayscale-0 md:h-48"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
