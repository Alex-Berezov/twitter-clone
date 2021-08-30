import { makeStyles } from '@material-ui/core/styles';

export const exploreStyles = makeStyles((theme) => ({
    explorePage: {},
    title: {
        padding: '15px',
        borderBottom: '1px solid rgb(230 233 234)',
        '& h2': {
            fontWeight: 700,
        },
    },
}));
