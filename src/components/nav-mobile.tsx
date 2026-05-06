"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useMediaQuery } from "@/hooks/use-media-query"
import { haptic } from "@/registry/lib/haptic"
import type { NavItem } from "@/types/nav"

import { motion, AnimatePresence } from "motion/react"
import * as LucideIcons from "lucide-react"

export function NavMobile({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 40rem)")
  const pathname = usePathname()

  const handleOpenChange = useCallback((open: boolean) => {
    haptic()
    setOpen(open)
  }, [])

  if (isDesktop) {
    return <NavMobileTrigger />
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange} modal>
      <PopoverTrigger asChild>
        <NavMobileTrigger />
      </PopoverTrigger>

      <PopoverContent
        className="w-56 overflow-hidden rounded-2xl p-2"
        side="top"
        align="center"
        sideOffset={12}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-1">
          {items.map((link, idx) => {
            const active =
              pathname === link.href ||
              (link.href === "/"
                ? ["/", "/index"].includes(pathname || "")
                : pathname?.startsWith(link.href))

            // @ts-ignore - Dynamic icon resolution
            const Icon = LucideIcons[link.icon || "Circle"] || LucideIcons.Circle

            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.03 }}
              >
                <Link
                  href={link.href}
                  data-active={active}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-base transition-colors hover:bg-accent data-active:bg-accent data-active:text-primary"
                  onClick={() => handleOpenChange(false)}
                >
                  <Icon className="h-5 w-5 opacity-70" />
                  <span className="font-medium">{link.title}</span>
                  {active && (
                    <motion.div
                      layoutId="active-indicator"
                      className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}

function NavMobileTrigger(
  props: Omit<React.ComponentProps<typeof Button>, "children">
) {
  return (
    <Button
      className="group relative flex touch-manipulation flex-col gap-1 border-none before:absolute before:-inset-x-2 before:-top-8 before:-bottom-1 active:scale-none data-open:bg-accent"
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle Menu"
      {...props}
    >
      <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]:translate-y-0.75 group-data-[state=open]:rotate-45" />
      <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]:-translate-y-0.75 group-data-[state=open]:-rotate-45" />
    </Button>
  )
}
