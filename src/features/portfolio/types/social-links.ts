export type SocialLink = {
  /** Icon image URL or React component. */
  icon: string | React.ReactNode
  title: string
  /** Optional handle/username or subtitle displayed under the title. */
  subtitle?: string
  /** External profile URL opened when the item is clicked. */
  href: string
}
