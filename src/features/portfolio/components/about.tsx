import { Markdown } from "@/components/markdown"
import { InlineImageLink } from "@/components/ui/inline-image-link"
import { Prose } from "@/components/ui/typography"
import { USER } from "@/features/portfolio/data/user"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export function About() {
  return (
    <Panel id="about" className="cursor-crosshair">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose>
          <Markdown
            components={{
              strong: ({ children }) => {
                const text = String(children)
                if (text === "coffee") {
                  return (
                    <InlineImageLink
                      href="/media#music"
                      label="coffee"
                      src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400&auto=format&fit=crop"
                      alt="Coffee"
                    />
                  )
                }
                if (text === "wild") {
                  return (
                    <InlineImageLink
                      href="/media#photography"
                      label="wild"
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&auto=format&fit=crop"
                      alt="Nature"
                    />
                  )
                }
                if (text === "book") {
                  return (
                    <InlineImageLink
                      href="/media#books"
                      label="book"
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop"
                      alt="Books"
                    />
                  )
                }
                return <strong>{children}</strong>
              },
            }}
          >
            {USER.about}
          </Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  )
}
