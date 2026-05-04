export interface MediaStat {
  title: string
  subtitle: string
  icon: string
  href: string
  category: "Movies" | "Series" | "Books" | "Music"
  stats?: {
    label: string
    value: string
  }[]
}

export const MEDIA_STATS: MediaStat[] = [
  {
    title: "Trakt",
    subtitle: "Movies & Series",
    icon: "https://cdn.simpleicons.org/trakt",
    href: "https://trakt.tv/users/paranjayy",
    category: "Movies",
    stats: [
      { label: "Watched", value: "450+" },
      { label: "Days", value: "42" },
    ],
  },
  {
    title: "Letterboxd",
    subtitle: "Film Diary",
    icon: "https://cdn.simpleicons.org/letterboxd",
    href: "https://letterboxd.com/paranjayy",
    category: "Movies",
    stats: [
      { label: "Films", value: "320" },
      { label: "This Year", value: "12" },
    ],
  },
  {
    title: "Goodreads",
    subtitle: "Reading List",
    icon: "https://cdn.simpleicons.org/goodreads",
    href: "https://www.goodreads.com/user/show/paranjayy",
    category: "Books",
    stats: [
      { label: "Books", value: "85" },
      { label: "Challenge", value: "12/24" },
    ],
  },
  {
    title: "Volt.fm",
    subtitle: "Spotify Stats",
    icon: "https://volt.fm/paranjay",
    href: "https://volt.fm/paranjay",
    category: "Music",
    stats: [
      { label: "Top Genre", value: "Pop" },
      { label: "Listeners", value: "High" },
    ],
  },
]
