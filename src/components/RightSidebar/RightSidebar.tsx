import React from 'react';

import { SearchTwitter } from '../SearchTwitter/SearchTwitter';
import Trends from '../Trends/Trends';
import WhoToFollow from '../WhoToFollow/WhoToFollow';

import { useRightSidebarStyles } from './rightSidebarStyles';

const RightSidebar: React.FC = (): React.ReactElement => {
    const classes = useRightSidebarStyles();

    return (
        <div className={classes.root}>
            <SearchTwitter />
            <Trends />
            <WhoToFollow />
        </div>
    );
};

export default RightSidebar;