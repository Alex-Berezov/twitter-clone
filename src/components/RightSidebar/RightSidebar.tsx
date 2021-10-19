import React from "react"
import { useLocation } from "react-router"

import { SearchTwitter } from "../SearchTwitter/SearchTwitter"
import Trends from "../Trends/Trends"
import WhoToFollow from "../WhoToFollow/WhoToFollow"

import { useRightSidebarStyles } from "./rightSidebarStyles"

const RightSidebar: React.FC = (): React.ReactElement => {
  const classes = useRightSidebarStyles()
  let location = useLocation()

  return (
    <div className={classes.root}>
      {location.pathname === "/search" ? null : <SearchTwitter />}
      <Trends />
      <WhoToFollow />
    </div>
  )
}

export default RightSidebar
