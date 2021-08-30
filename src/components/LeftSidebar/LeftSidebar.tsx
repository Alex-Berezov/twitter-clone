import React from 'react';
import { Link } from "react-router-dom";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import SmallBlueLogo from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { useLeftSidebarStyles } from './LeftSidebarStyles';

const LeftSidebar = () => {
    const classes = useLeftSidebarStyles();

    return (
        <div className={classes.root}>
            <SmallBlueLogo className={classes.smallBlueLogo} color="primary" />
            <List component="nav">
                <Link to="/" className={classes.listItem}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Home" />
                    </ListItem>
                </Link>
                <Link to="/explore" className={classes.listItem}>
                    <ListItem button>
                        <ListItemIcon>
                            <SearchOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Explore" />
                    </ListItem>
                </Link>
                <Link to="/notifications" className={classes.listItem}>
                    <ListItem button>
                        <ListItemIcon>
                            <NotificationsNoneOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Notifications" />
                    </ListItem>
                </Link>
                <Link to="/messages" className={classes.listItem}>
                    <ListItem button>
                        <ListItemIcon>
                            <MailOutlineIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Messages" />
                    </ListItem>
                </Link>
                <Link to="/bookmarks" className={classes.listItem}>
                    <ListItem button>
                        <ListItemIcon>
                            <BookmarkBorderOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Bookmarks" />
                    </ListItem>
                </Link>
                <Link to="/lists" className={classes.listItem}>
                    <ListItem button>
                        <ListItemIcon>
                            <ListAltOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Lists" />
                    </ListItem>
                </Link>
                <Link to="/profile" className={classes.listItem}>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Profile" />
                    </ListItem>
                </Link>
                <ListItem className={classes.listItem} button disabled>
                    <ListItemIcon>
                        <MoreHorizIcon />
                    </ListItemIcon>
                    <ListItemText className={classes.listItemText} primary="More" />
                </ListItem>
            </List>
            <Button className={classes.tweetBtn} variant="contained" color="primary">
                Tweet
            </Button>
        </div>
    );
};

export default LeftSidebar;