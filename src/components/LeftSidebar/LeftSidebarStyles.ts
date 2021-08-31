import { makeStyles } from '@material-ui/core/styles';

export const useLeftSidebarStyles = makeStyles((theme) => ({
    root: {
        '& nav': {
            paddingTop: '0px',
        },
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
    activeNavItem: {
        '& svg': {
            width: '1.95rem',
            height: '1.95rem',
            color: theme.palette.primary.main,
        },
        '& span': {
            fontWeight: 700,
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
