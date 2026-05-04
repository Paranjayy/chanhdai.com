import { SOCIAL_LINKS } from "../../data/social-links"
import { Panel } from "../panel"
import { SocialLinkItem } from "./social-link-item"

export function SocialLinks({ exclude }: { exclude?: string[] }) {
  const links = exclude
    ? SOCIAL_LINKS.filter((link) => !exclude.includes(link.title))
    : SOCIAL_LINKS

  return (
    <Panel className="before:content-none after:content-none">
      <h2 className="sr-only">Social Links</h2>
      <div className="grid grid-cols-2 border-t border-l border-line sm:grid-cols-4">
        {links.map((link, index) => {
          return <SocialLinkItem key={index} {...link} />
        })}
      </div>
    </Panel>
  )
}
