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
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '1em',
        '& textarea': {
            border: 'none',
            width: '100%',
            outline: 'none',
            fontSize: '1.5em',
        },
    },
    accessToComments: {
        justifyContent: 'flex-start',
        alignItems: 'end',
        '& h6': {
            marginLeft: 10,
            marginBottom: 0,
        }
    },
    formHr: {
        margin: '5px 0',
        width: '100%',
        height: '1px',
        background: 'rgb(230 233 234)',
    },
    buttonBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        display: 'none',
    },
}));
