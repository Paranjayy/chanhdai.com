import { compareDesc } from "date-fns"

import { CollapsibleList } from "@/components/collapsible-list"

import { BOOKMARKS } from "../../data/bookmarks"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { BookmarkItem } from "./bookmark-item"

const SORTED_BOOKMARKS = [...BOOKMARKS].sort((a, b) => {
  const dateA = a.bookmarkedAt ? new Date(a.bookmarkedAt).getTime() : 0
  const dateB = b.bookmarkedAt ? new Date(b.bookmarkedAt).getTime() : 0
  return dateB - dateA
})

export function Bookmarks() {
  return (
    <Panel id="bookmarks">
      <PanelHeader>
        <PanelTitle>
          Bookmarks
          <PanelTitleSup>({SORTED_BOOKMARKS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={SORTED_BOOKMARKS}
        max={3}
        renderItem={(item) => <BookmarkItem bookmark={item} />}
      />
    </Panel>
  )
}
