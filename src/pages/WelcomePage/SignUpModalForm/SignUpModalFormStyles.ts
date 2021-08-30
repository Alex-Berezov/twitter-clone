import { makeStyles } from '@material-ui/core/styles';

export const useSignUpModalFormStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        height: 'auto',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        borderRadius: '16px',
        '& h5': {
            fontWeight: 700,
            marginBottom: 30,
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    smallBlueLogo: {
        fontSize: '2.5rem',
        margin: '0 auto',
        marginBottom: 20,
    },
    signUpField: {
        marginBottom: 30,
    },
    submitBtn: {
        margin: '30px 0',
        borderRadius: '99px',
        color: '#fff',
        textTransform: 'none',
        height: 45,
        fontSize: 20,
    },
}));
