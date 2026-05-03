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
      <rect x="4" y="4" width="4" height="16" fill="currentColor" />
      <rect x="8" y="10" width="4" height="4" fill="currentColor" />
      <rect x="12" y="6" width="4" height="4" fill="currentColor" />
      <rect x="12" y="14" width="4" height="4" fill="currentColor" />
      <rect x="20" y="4" width="4" height="4" fill="currentColor" />
      <rect x="20" y="10" width="4" height="4" fill="currentColor" />
      <rect x="20" y="16" width="4" height="4" fill="currentColor" />
      <rect x="24" y="6" width="4" height="8" fill="currentColor" />
    </svg>
  )
}
