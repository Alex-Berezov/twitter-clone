import React from "react"
import { Route } from "react-router-dom"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

import LeftSidebar from "./components/LeftSidebar/LeftSidebar"
import RightSidebar from "./components/RightSidebar/RightSidebar"
import { WelcomePage } from "./pages/WelcomePage/WelcomePage"
import { Home } from "./pages/Home/Home"
import { Explore } from "./pages/Explore/Explore"
import { Notifications } from "./pages/Notifications/Notifications"
import { Messages } from "./pages/Messages/Messages"
import { Bookmarks } from "./pages/Bookmarks/Bookmarks"
import { Lists } from "./pages/Lists/Lists"
import { Profile } from "./pages/Profile/Profile"
import SelectedTweet from "./pages/SelectedTweet/SelectedTweet"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "100vh",
    },
    contentPart: {
      border: "1px solid rgb(230 233 234)",
    },
    rightSidebarRoot: {
      marginTop: 5,
    },
  })
)

const App: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const [isAuthorized, setIsAuthorized] = React.useState(true)

  return (
    <div className="App">
      <main>
        {isAuthorized ? (
          <Container className={classes.container} maxWidth="lg">
            <Grid container spacing={1}>
              <Grid item component="header" sm={1} md={1} lg={3}>
                <LeftSidebar />
              </Grid>
              <Grid className={classes.contentPart} item sm={7} md={7} lg={5}>
                <Route exact path="/" component={Home} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/notifications" component={Notifications} />
                <Route exact path="/messages" component={Messages} />
                <Route exact path="/bookmarks" component={Bookmarks} />
                <Route exact path="/lists" component={Lists} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/tweet/:id" component={SelectedTweet} />
              </Grid>
              <Grid className={classes.rightSidebarRoot} item xs={4}>
                <RightSidebar />
              </Grid>
            </Grid>
          </Container>
        ) : (
          <Route exact path="/" component={WelcomePage} />
        )}
      </main>
    </div>
  )
}

export default App
