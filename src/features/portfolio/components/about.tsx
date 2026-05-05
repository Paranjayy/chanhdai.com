import { Markdown } from "@/components/markdown"
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
        <Prose className="max-w-3xl">
          <Markdown>
            {USER.about}
          </Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  )
}
