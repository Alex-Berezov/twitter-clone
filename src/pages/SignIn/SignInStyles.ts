import { makeStyles } from '@material-ui/core/styles';

export const useSineInStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 0,
        paddingRight: 0,
        height: '90vh',
        backgroundColor: 'white',
    },
    gridLeftItem: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 0,
        '& img': {
            height: '90vh',
            objectFit: 'cover',
            position: 'relative',
            zIndex: 1,
        },
        '& svg': {
            position: 'absolute',
            top: '23%',
            left: '5%',
            zIndex: 2,
            width: '100%',
            height: '60%',
        }
    },
    gridRightItem: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
    },
    smallBlueLogo: {
        fontSize: '3rem',
    },
    mainTitle: {
        fontWeight: 700,
        margin: '50px 0',
    },
    signInForm: {
        '& p': {
            marginBottom: '20px',
            '& button': {
                verticalAlign: 'baseline',
            }
        }        
    },
    signUpForm: {
        '& p': {
            marginBottom: '20px',
            '& button': {
                verticalAlign: 'baseline',
            }
        }
    },
    formTitle: {
        fontWeight: 700,
        marginBottom: '30px',
    },
    formButton: {
        borderRadius: '99px',
        fontWeight: 700,
        width: '50%',
        minHeight: '52px',
        marginBottom: '20px',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
