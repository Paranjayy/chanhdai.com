"use client"

import { motion, useMotionValue, useSpring } from "motion/react"

export type FluidGradientTextProps = {
  /** Text content rendered inside the SVG. */
  text: string
  /** SVG viewBox width used to scale the gradient and text layout. @default 1200 */
  svgViewBoxWidth?: number
  /** SVG viewBox height used as the base text size. @default 300 */
  svgViewBoxHeight?: number
}

export function FluidGradientText({
  text,
  svgViewBoxWidth = 1200,
  svgViewBoxHeight = 300,
}: FluidGradientTextProps) {
  const xRaw = useMotionValue(svgViewBoxWidth / 2)
  const yRaw = useMotionValue(svgViewBoxHeight / 2)

  const x = useSpring(xRaw, { stiffness: 150, damping: 25 })
  const y = useSpring(yRaw, { stiffness: 150, damping: 25 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top

    const normalizedX = (mouseX / rect.width) * svgViewBoxWidth
    const normalizedY = (mouseY / rect.height) * svgViewBoxHeight

    xRaw.set(normalizedX)
    yRaw.set(normalizedY)
  }

  const handleMouseLeave = () => {
    xRaw.set(svgViewBoxWidth / 2)
    yRaw.set(svgViewBoxHeight / 2)
  }

  return (
    <div
      className="relative size-full overflow-hidden after:absolute after:bottom-0 after:h-px after:w-full after:bg-current/10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        className="size-full translate-y-[37.5%] select-none"
        viewBox={`0 0 ${svgViewBoxWidth} ${svgViewBoxHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="0.5"
          fill="url(#fluid_gradient_text_linear)"
          filter="drop-shadow(0 0 1px currentColor)"
          style={{
            fontFamily: "Helvetica, sans-serif",
            fontSize: svgViewBoxHeight * 0.75,
            fontWeight: "900",
            letterSpacing: "-0.05em",
            textTransform: "uppercase",
          }}
        >
          {text}
        </text>
        <defs>
          <motion.linearGradient
            id="fluid_gradient_text_linear"
            x1={x}
            y1={y}
            x2={svgViewBoxWidth}
            y2={svgViewBoxHeight}
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
