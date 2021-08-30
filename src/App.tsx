import React from 'react';
import { Route } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { Home } from './pages/Home/Home';
import { Explore } from './pages/Explore/Explore';
import { Notifications } from './pages/Notifications/Notifications';
import { Messages } from './pages/Messages/Messages';
import { Bookmarks } from './pages/Bookmarks/Bookmarks';
import { Lists } from './pages/Lists/Lists';
import { Profile } from './pages/Profile/Profile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentPart: {
      border: '1px solid rgb(230 233 234)',
    },
  }),
);

function App() {
  const classes = useStyles();
  const [isAuthorized, setIsAuthorized] = React.useState(true);

  return (
    <div className="App">
      <main>
        {
          isAuthorized
            ? <Container maxWidth="lg">
                <Grid container spacing={1}>
                  <Grid item component="header" xs={3}>
                    <LeftSidebar />
                  </Grid>
                  <Grid className={classes.contentPart} item xs={6}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/explore" component={Explore} />
                    <Route exact path="/notifications" component={Notifications} />
                    <Route exact path="/messages" component={Messages} />
                    <Route exact path="/bookmarks" component={Bookmarks} />
                    <Route exact path="/lists" component={Lists} />
                    <Route exact path="/profile" component={Profile} />
                  </Grid>
                  <Grid item xs={3}>
                    Right side bar
                  </Grid>
                </Grid>
              </Container>
            : <Route exact path="/" component={WelcomePage} />
        }
      </main>
    </div>
  );
}

export default App;
