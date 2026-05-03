import { cn } from "@/lib/utils"

export function BrandMark({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10", className)}
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 4v16" />
      <path d="M6 12l5-5M6 12l5 5" />
      <path d="M13 12h3a3 3 0 1 0 0-6h-3v10" />
    </svg>
  )
}
