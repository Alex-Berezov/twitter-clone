import React from 'react';

import { Typography } from '@material-ui/core';

import CreateTweetForm from '../../components/CreateTweetForm/CreateTweetForm';
import SingleTweet from '../../components/SingleTweet/SingleTweet';

import { homeStyles } from './homeStyles';

const sampleText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolor sapiente eveniet modi deleniti deserunt magnam eum similique, distinctio recusandae a nam voluptatum, dolores nulla voluptate iusto suscipit commodi in.'

interface HomeProps {
    classes: ReturnType<typeof homeStyles>,
};

export const Home: React.FC<HomeProps> = (): React.ReactElement => {
    const classes = homeStyles();

    return (
        <div className={classes.homePage}>
            <div className={classes.title}>
                <Typography variant="h6" component="h2">Home</Typography>
            </div>
            <CreateTweetForm 
                user={{
                    accountName: 'Account Name',
                    avatarUrl: '../../assets/images/lohp_1302x955.png',
                }}
            />
            <SingleTweet
                user={{
                    accountName: 'Account Name',
                    accountShortName: 'accountShortName',
                    avatarUrl: '../../assets/images/lohp_1302x955.png',
                }}
                text={sampleText}
            />
            <SingleTweet
                user={{
                    accountName: 'Account Name',
                    accountShortName: 'accountShortName',
                    avatarUrl: '../../assets/images/lohp_1302x955.png',
                }}
                text={sampleText}
            />
            <SingleTweet
                user={{
                    accountName: 'Account Name',
                    accountShortName: 'accountShortName',
                    avatarUrl: '../../assets/images/lohp_1302x955.png',
                }}
                text={sampleText}
            />
            <SingleTweet
                user={{
                    accountName: 'Account Name',
                    accountShortName: 'accountShortName',
                    avatarUrl: '../../assets/images/lohp_1302x955.png',
                }}
                text={sampleText}
            />
            <SingleTweet
                user={{
                    accountName: 'Account Name',
                    accountShortName: 'accountShortName',
                    avatarUrl: '../../assets/images/lohp_1302x955.png',
                }}
                text={sampleText}
            />
            <SingleTweet
                user={{
                    accountName: 'Account Name',
                    accountShortName: 'accountShortName',
                    avatarUrl: '../../assets/images/lohp_1302x955.png',
                }}
                text={sampleText}
            />
        </div>
    );
};
