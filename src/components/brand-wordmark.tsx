import { cn } from "@/lib/utils"

export function BrandWordmark({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 300 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
      {...props}
    >
      <text
        x="0"
        y="45"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontWeight: 800,
          fontSize: "40px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Paranjay
      </text>
    </svg>
  )
}
