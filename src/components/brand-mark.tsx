import { cn } from "@/lib/utils"

export function BrandMark({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-auto", className)}
      {...props}
    >
      {/* K */}
      <rect x="0" y="0" width="2" height="11" fill="currentColor" />
      <rect x="2" y="4" width="2" height="3" fill="currentColor" />
      <rect x="4" y="2" width="2" height="2" fill="currentColor" />
      <rect x="6" y="0" width="2" height="2" fill="currentColor" />
      <rect x="4" y="7" width="2" height="2" fill="currentColor" />
      <rect x="6" y="9" width="2" height="2" fill="currentColor" />

      {/* P */}
      <rect x="10" y="0" width="2" height="11" fill="currentColor" />
      <rect x="12" y="0" width="4" height="2" fill="currentColor" />
      <rect x="14" y="2" width="2" height="4" fill="currentColor" />
      <rect x="12" y="5" width="4" height="2" fill="currentColor" />
    </svg>
  )
}
