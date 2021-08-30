import { makeStyles } from '@material-ui/core/styles';

export const useLeftSidebarStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    smallBlueLogo: {
        fontSize: '2rem',
        margin: '10px 0 0 15px',
    },
    listItem: {
        textDecoration: 'none',
        '& svg': {
            width: '1.95rem',
            height: '1.95rem',
            color: 'black',
        }
    },
    listItemText: {
        '& span': {
            fontSize: '22px',
            fontWeight: 400,
            color: 'rgb(15, 20, 25)',
        }
    },
    tweetBtn: {
        color: 'white',
        textTransform: 'none',
        width: '80%',
        borderRadius: '99px',
        fontWeight: 700,
        fontSize: '22px',
        padding: '8px 32px',
    }
}));
