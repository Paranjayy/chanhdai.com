"use client"

import { motion, useMotionValue, useSpring } from "motion/react"
import { useState } from "react"

import { cn } from "@/lib/utils"

export type FluidGradientTextProps = {
  /** Text content rendered inside the SVG. */
  text: string
  /** Second line of text content. */
  text2?: string
  /** SVG viewBox width used to scale the gradient and text layout. @default 1200 */
  svgViewBoxWidth?: number
  /** SVG viewBox height used as the base text size. @default 300 */
  svgViewBoxHeight?: number
  className?: string
}

export function FluidGradientText({
  text,
  text2,
  svgViewBoxWidth = 1200,
  svgViewBoxHeight = 300,
  className,
}: FluidGradientTextProps) {
  const actualHeight = text2 ? svgViewBoxHeight * 1.8 : svgViewBoxHeight
  const xRaw = useMotionValue(svgViewBoxWidth / 2)
  const yRaw = useMotionValue(actualHeight / 2)

  const x = useSpring(xRaw, { stiffness: 150, damping: 25 })
  const y = useSpring(yRaw, { stiffness: 150, damping: 25 })

  const [isHovered, setIsHovered] = useState(false)
  const fillOpacity = useSpring(isHovered ? 1 : 0, {
    stiffness: 100,
    damping: 30,
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true)
    const rect = event.currentTarget.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top

    const normalizedX = (mouseX / rect.width) * svgViewBoxWidth
    const normalizedY = (mouseY / rect.height) * actualHeight

    xRaw.set(normalizedX)
    yRaw.set(normalizedY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    xRaw.set(svgViewBoxWidth / 2)
    yRaw.set(actualHeight / 2)
  }

  return (
    <div
      className={cn("relative size-full overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        className="size-full select-none"
        viewBox={`0 0 ${svgViewBoxWidth} ${actualHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.text
          x="50%"
          y={text2 ? "35%" : "50%"}
          textAnchor="middle"
          dominantBaseline="central"
          stroke="currentColor"
          strokeOpacity="0.4"
          strokeWidth="0.75"
          fill="url(#fluid_gradient_text_linear)"
          fillOpacity={fillOpacity}
          filter="drop-shadow(0 0 1px currentColor)"
          style={{
            fontFamily: "Helvetica, sans-serif",
            fontSize: svgViewBoxHeight * 0.7,
            fontWeight: "900",
            letterSpacing: "-0.05em",
            textTransform: "uppercase",
          }}
        >
          {text}
        </motion.text>
        {text2 && (
          <motion.text
            x="50%"
            y="70%"
            textAnchor="middle"
            dominantBaseline="central"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="0.75"
            fill="url(#fluid_gradient_text_linear)"
            fillOpacity={fillOpacity}
            filter="drop-shadow(0 0 1px currentColor)"
            style={{
              fontFamily: "Helvetica, sans-serif",
              fontSize: svgViewBoxHeight * 0.7,
              fontWeight: "900",
              letterSpacing: "-0.05em",
              textTransform: "uppercase",
            }}
          >
            {text2}
          </motion.text>
        )}
        <defs>
          <motion.linearGradient
            id="fluid_gradient_text_linear"
            x1={x}
            y1={y}
            x2={svgViewBoxWidth}
            y2={actualHeight}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="0.45" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="0.5" stopColor="currentColor" stopOpacity="1" />
            <stop offset="0.55" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.1" />
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  )
}
