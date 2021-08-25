
import { makeStyles } from '@material-ui/core/styles';

export const useFooterStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    footer: {
        padding: theme.spacing(3, 0),
        backgroundColor: 'white',
        '& p': {
            color: 'grey',
            marginTop: '10px',
        }
    },
    container: {
        textAlign: 'center',
    },
    footerLinks: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));