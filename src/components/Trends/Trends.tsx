import React from 'react';

import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

import { trendsStyles } from './trendsStyles';
import TrendingBlock from '../TrendingBlock/TrendingBlock';

const Trends: React.FC = (): React.ReactElement => {
    const classes = trendsStyles();

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography variant="h6">
                    Trends for you
                </Typography>
                <SettingsIcon />
            </div>
            <TrendingBlock />
            <TrendingBlock />
            <TrendingBlock />
        </div>
    );
};

export default Trends;