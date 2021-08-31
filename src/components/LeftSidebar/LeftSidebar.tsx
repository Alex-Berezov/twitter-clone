import React from 'react';
import { Link, NavLink } from "react-router-dom";

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
            <List component="nav">
                <NavLink exact to="/">
                    <SmallBlueLogo className={classes.smallBlueLogo} color="primary" />
                </NavLink>
                <NavLink exact to="/" className={classes.listItem} activeClassName={classes.activeNavItem}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Home" />
                    </ListItem>
                </NavLink>
                <NavLink to="/explore" className={classes.listItem} activeClassName={classes.activeNavItem}>
                    <ListItem button>
                        <ListItemIcon>
                            <SearchOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Explore" />
                    </ListItem>
                </NavLink>
                <NavLink to="/notifications" className={classes.listItem} activeClassName={classes.activeNavItem}>
                    <ListItem button>
                        <ListItemIcon>
                            <NotificationsNoneOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Notifications" />
                    </ListItem>
                </NavLink>
                <NavLink to="/messages" className={classes.listItem} activeClassName={classes.activeNavItem}>
                    <ListItem button>
                        <ListItemIcon>
                            <MailOutlineIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Messages" />
                    </ListItem>
                </NavLink>
                <NavLink to="/bookmarks" className={classes.listItem} activeClassName={classes.activeNavItem}>
                    <ListItem button>
                        <ListItemIcon>
                            <BookmarkBorderOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Bookmarks" />
                    </ListItem>
                </NavLink>
                <NavLink to="/lists" className={classes.listItem} activeClassName={classes.activeNavItem}>
                    <ListItem button>
                        <ListItemIcon>
                            <ListAltOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Lists" />
                    </ListItem>
                </NavLink>
                <NavLink to="/profile" className={classes.listItem} activeClassName={classes.activeNavItem}>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Profile" />
                    </ListItem>
                </NavLink>
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