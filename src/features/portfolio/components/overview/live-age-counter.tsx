"use client"

import React, { useEffect, useState } from "react"

import { USER } from "@/features/portfolio/data/user"

type Props = React.HTMLAttributes<HTMLSpanElement>

export function LiveAgeCounter({ className, ...props }: Props) {
  const [age, setAge] = useState<string>("")

  useEffect(() => {
    if (!USER.dob) return

    const dob = new Date(USER.dob)
    if (isNaN(dob.getTime())) {
      console.error("Invalid DOB:", USER.dob)
      return
    }

    const calculateAge = () => {
      const now = new Date()
      const diff = now.getTime() - dob.getTime()
      const ageInYears = diff / (1000 * 60 * 60 * 24 * 365.25)
      setAge(ageInYears.toFixed(9))
    }

    calculateAge() // Initial calculation

    const interval = setInterval(calculateAge, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className={className} aria-hidden={false} {...props}>
      {age || "--"}
    </span>
  )
}

export default LiveAgeCounter
