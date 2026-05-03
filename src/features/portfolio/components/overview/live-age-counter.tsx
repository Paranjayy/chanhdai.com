import React from "react"

type Props = React.HTMLAttributes<HTMLSpanElement> & { value?: string }

export function LiveAgeCounter({ className, value = "--", ...props }: Props) {
  return (
    <span className={className} aria-hidden={false} {...props}>
      {value}
    </span>
  )
}

export default LiveAgeCounter
