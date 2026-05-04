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

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <div
      className={cn("group relative cursor-crosshair", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      <AnimatePresence>
        {isHovered && src && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: "absolute",
              left: x,
              top: y,
              pointerEvents: "none",
              zIndex: 50,
              transform: "translate(-50%, -110%)", // Center above cursor
            }}
            className="hidden sm:block"
          >
            <div
              className={cn(
                "overflow-hidden rounded-lg border border-line bg-background shadow-2xl",
                imageClassName
              )}
            >
              <img
                src={src}
                alt={alt || "Hover preview"}
                className="h-32 w-auto object-cover md:h-48"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
