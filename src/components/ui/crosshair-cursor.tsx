"use client"

import { motion, useMotionValue, useSpring } from "motion/react"
import React, { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

export function CrosshairCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const [isVisible, setIsVisible] = useState(false)

  const springConfig = { damping: 25, stiffness: 250 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      // Check if hovering an element with cursor-crosshair
      const target = e.target as HTMLElement
      const isOverCrosshair = !!target.closest(".cursor-crosshair")
      setIsVisible(isOverCrosshair)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  if (typeof window === "undefined") return null

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x,
        y,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      className="hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:flex"
    >
      {/* Horizontal Line */}
      <div className="absolute h-[1px] w-8 bg-foreground" />
      {/* Vertical Line */}
      <div className="absolute h-8 w-[1px] bg-foreground" />
      {/* Center Dot */}
      <div className="size-1 rounded-full bg-foreground" />
    </motion.div>
  )
}
