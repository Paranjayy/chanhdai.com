import { Icons } from "@/components/icons"

import type { Bookmark } from "../types/bookmarks"

export const BOOKMARKS: Bookmark[] = [
  {
    title: "The Pragmatic Programmer",
    description: "Your journey to mastery. Essential reading for every software engineer.",
    href: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
    icon: <Icons.google />,
  },
  {
    title: "Clean Code",
    description: "A Handbook of Agile Software Craftsmanship.",
    href: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
    icon: <Icons.google />,
  },
]
