import * as Icons from "../components/social-links/icons"
import type { SocialLink } from "../types/social-links"

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: <Icons.GitHubIcon />,
    title: "GitHub",
    subtitle: "username",
    href: "https://github.com/username",
  },
  {
    icon: <Icons.XIcon />,
    title: "X",
    subtitle: "username",
    href: "https://x.com/username",
  },
  {
    icon: <Icons.LinkedInIcon />,
    title: "LinkedIn",
    subtitle: "username",
    href: "https://www.linkedin.com/in/username/",
  },
]
