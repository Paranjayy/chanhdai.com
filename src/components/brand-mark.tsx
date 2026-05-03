import { cn } from "@/lib/utils"

export function BrandMark({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-12", className)}
      {...props}
    >
      {/* K */}
      <rect x="4" y="4" width="3" height="16" fill="currentColor" />
      <rect x="7" y="11" width="3" height="2" fill="currentColor" />
      <rect x="10" y="7" width="3" height="4" fill="currentColor" />
      <rect x="10" y="13" width="3" height="4" fill="currentColor" />
      <rect x="13" y="4" width="3" height="3" fill="currentColor" />
      <rect x="13" y="17" width="3" height="3" fill="currentColor" />

      {/* P */}
      <rect x="20" y="4" width="3" height="16" fill="currentColor" />
      <rect x="23" y="4" width="5" height="2" fill="currentColor" />
      <rect x="23" y="11" width="5" height="2" fill="currentColor" />
      <rect x="27" y="6" width="2" height="5" fill="currentColor" />
    </svg>
  )
}
