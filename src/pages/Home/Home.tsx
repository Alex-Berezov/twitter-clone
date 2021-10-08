import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import CreateTweetForm from '../../components/CreateTweetForm/CreateTweetForm';
import SingleTweet from '../../components/SingleTweet/SingleTweet';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators/actionCreators';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';

import { homeStyles } from './homeStyles';

interface HomeProps {
    classes: ReturnType<typeof homeStyles>,
};

export const Home: React.FC<HomeProps> = (): React.ReactElement => {
    const classes = homeStyles();
    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);

    React.useEffect(() => {
        dispatch(fetchTweets());
    }, [dispatch]);

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
            <hr className={classes.hr} />
            {
                isLoading
                    ? <div className={classes.preloader}><CircularProgress /></div>
                    : (tweets.map(tweet => {
                            return <SingleTweet
                                user={tweet.user}
                                text={tweet.text}
                                key={tweet._id}
                            />
                        })
                    )
            }
        </div>
    );
};
