import React from 'react';

import { SearchTwitter } from '../SearchTwitter/SearchTwitter';

import { useRightSidebarStyles } from './rightSidebarStyles';

const RightSidebar = () => {
    const classes = useRightSidebarStyles();

    return (
        <div className={classes.root}>
            <SearchTwitter />
        </div>
    );
};

export default RightSidebar;