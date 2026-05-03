import Link from "next/link"

import { BrandMark } from "@/components/brand-mark"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 text-center dark:bg-zinc-950">
      <div className="flex flex-col items-center gap-6">
        <BrandMark className="size-20 animate-pulse text-zinc-900 dark:text-zinc-100" />
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-100">
          404
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          This page has been archived or moved. Let&apos;s get you back to the
          main site.
        </p>
        <Link
          href="/"
          className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
