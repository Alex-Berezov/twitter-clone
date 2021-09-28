import React from 'react';
import { NavLink } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import SmallBlueLogo from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import CreateTweetModal from './CreateTweetModal/CreateTweetModal';
import { useLeftSidebarStyles } from './LeftSidebarStyles';

const LeftSidebar: React.FC = (): React.ReactElement => {
    const classes = useLeftSidebarStyles();

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => {
        setOpenModal(true);
    };
    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <div className={classes.root}>
            <List component="nav">
                <NavLink exact to="/">
                    <SmallBlueLogo className={classes.smallBlueLogo} color="primary" />
                </NavLink>
                <NavLink exact to="/" className={classes.listItem} activeClassName={classes.activeNavItem}>
                    <ListItem button className={classes.listItemInner}>
                        <ListItemIcon>
                            <HomeOutlinedIcon />
                        </ListItemIcon>
                        <Hidden mdDown>
                            <ListItemText className={classes.listItemText} primary="Home" />
                        </Hidden>
                    </ListItem>
                </NavLink>
                <NavLink to="/explore" className={classes.listItem} activeClassName={classes.activeNavItem}>
                    <ListItem button className={classes.listItemInner}>
                        <ListItemIcon>
                            <SearchOutlinedIcon />
                        </ListItemIcon>
                        <Hidden mdDown>
                            <ListItemText className={classes.listItemText} primary="Explore" />
                        </Hidden>
                    </ListItem>
                </NavLink>
                <NavLink to="/notifications" className={classes.listItem} activeClassName={classes.activeNavItem}>
                    <ListItem button className={classes.listItemInner}>
                        <ListItemIcon>
                            <NotificationsNoneOutlinedIcon />
                        </ListItemIcon>
                        <Hidden mdDown>
                            <ListItemText className={classes.listItemText} primary="Notifications" />
                        </Hidden>
                    </ListItem>
                </NavLink>
                <NavLink to="/messages" className={classes.listItem} activeClassName={classes.activeNavItem}>
                    <ListItem button className={classes.listItemInner}>
                        <ListItemIcon>
                            <MailOutlineIcon />
                        </ListItemIcon>
                        <Hidden mdDown>
                            <ListItemText className={classes.listItemText} primary="Messages" />
                        </Hidden>
                    </ListItem>
                </NavLink>
                <NavLink to="/bookmarks" className={classes.listItem} activeClassName={classes.activeNavItem}>
                    <ListItem button className={classes.listItemInner}>
                        <ListItemIcon>
                            <BookmarkBorderOutlinedIcon />
                        </ListItemIcon>
                        <Hidden mdDown>
                            <ListItemText className={classes.listItemText} primary="Bookmarks" />
                        </Hidden>
                    </ListItem>
                </NavLink>
                <NavLink to="/lists" className={classes.listItem} activeClassName={classes.activeNavItem}>
                    <ListItem button className={classes.listItemInner}>
                        <ListItemIcon>
                            <ListAltOutlinedIcon />
                        </ListItemIcon>
                        <Hidden mdDown>
                            <ListItemText className={classes.listItemText} primary="Lists" />
                        </Hidden>
                    </ListItem>
                </NavLink>
                <NavLink to="/profile" className={classes.listItem} activeClassName={classes.activeNavItem}>
                    <ListItem button className={classes.listItemInner}>
                        <ListItemIcon>
                            <PersonOutlineOutlinedIcon />
                        </ListItemIcon>
                        <Hidden mdDown>
                            <ListItemText className={classes.listItemText} primary="Profile" />
                        </Hidden>
                    </ListItem>
                </NavLink>
                <ListItem className={classes.listItem} button disabled>
                    <ListItemIcon>
                        <MoreHorizIcon />
                    </ListItemIcon>
                    <Hidden mdDown>
                        <ListItemText className={classes.listItemText} primary="More" />
                    </Hidden>
                </ListItem>
            </List>
            <Hidden mdDown>
                <Button
                    className={classes.tweetBtn}
                    variant="contained"
                    color="primary"
                    onClick={handleOpen}
                >
                    Tweet
                </Button>
            </Hidden>
            <CreateTweetModal handleOpen={handleOpen} openModal={openModal} handleClose={handleClose} />
        </div>
    );
};

export default LeftSidebar;