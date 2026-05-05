"use client"

import { animate, useInView } from "motion/react"
import { useEffect, useRef } from "react"

export function CountUp({
  value,
  duration = 1,
  delay = 0,
  formatter = (v: number) => Math.floor(v).toLocaleString(),
}: {
  value: number
  duration?: number
  delay?: number
  formatter?: (v: number) => string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!inView) return

    const node = ref.current
    if (!node) return

    const controls = animate(0, value, {
      duration,
      delay,
      onUpdate(value) {
        node.textContent = formatter(value)
      },
      ease: "easeOut",
    })

    return () => controls.stop()
  }, [value, duration, delay, inView, formatter])

  return <span ref={ref}>0</span>
}
