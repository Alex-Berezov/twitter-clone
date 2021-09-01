import { makeStyles } from '@material-ui/core/styles';

export const createTweetFormStyles = makeStyles((theme) => ({
    root: {
        borderBottom: '1px solid rgb(230 233 234)',
        padding: '5px 10px',
    },
    form: {
        display: 'flex',
        boxShadow: 'none',
    },
    avatar: {
        width: '2.5em',
        height: '2.5em',
    },
    addTweetPart: {
        padding: '1em',
        '& textarea': {
            border: 'none',
            width: '24em',
            outline: 'none',
            fontSize: '1.5em',
        },
    },
}));
