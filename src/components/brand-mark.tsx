import { cn } from "@/lib/utils"

export function BrandMark({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10", className)}
      {...props}
    >
      <rect
        width="100"
        height="100"
        rx="24"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* K */}
      <path
        d="M25 30V70M45 30L25 50L45 70"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* P */}
      <path
        d="M55 30V70M55 30H70C75 30 80 35 80 40C80 45 75 50 70 50H55"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
