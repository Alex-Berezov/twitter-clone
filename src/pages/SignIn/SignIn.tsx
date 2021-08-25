import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import SmallBlueLogo from '@material-ui/icons/Twitter';
import loginImg from '../../assets/images/lohp_1302x955.png';

import { useSineInStyles } from './SignInStyles';

const SignIn = () => {
    const classes = useSineInStyles();

    const [isSignInForm, setIsSignInForm] = React.useState(false);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const [signInModalOpen, setSignInModalOpen] = React.useState(false);
    const toggleOpenSignInModal = () => {
        setSignInModalOpen(!signInModalOpen);
    };

    const [signUpModalOpen, setSignUpModalOpen] = React.useState(false);
    const toggleOpenSignUpModal = () => {
        setSignUpModalOpen(!signUpModalOpen);
    };

    return (
        <Container className={classes.root} maxWidth="xl">
            <Grid container spacing={0}>
                <Grid item className={classes.gridLeftItem} xs={6}>
                    <img src={loginImg} alt="loginImg" />
                    <svg viewBox="0 0 30 30" aria-hidden="true">
                        <g>
                            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" fill="white">
                            </path>
                        </g>
                    </svg>
                </Grid>
                <Grid item className={classes.gridRightItem} xs={6}>
                    <SmallBlueLogo className={classes.smallBlueLogo} color="primary" />
                    <Typography variant="h2" className={classes.mainTitle}>
                        Keep up to date with what is happening
                    </Typography>
                    {
                        isSignInForm
                            ? <Box className={classes.signInForm}>
                                <Typography variant="h3" className={classes.formTitle}>
                                    Sign in to Twitter
                                </Typography>
                                <Button
                                    variant="outlined"
                                    className={classes.formButton}
                                    onClick={toggleOpenSignInModal}
                                >
                                    Sign In
                                </Button>
                                <Typography variant="body1">
                                    Don't you have an account?
                                    {' '}
                                    <Link
                                        component="button"
                                        variant="body1"
                                        onClick={toggleSignInForm}
                                    >
                                        Sign up
                                    </Link>
                                </Typography>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    className={classes.modal}
                                    open={signInModalOpen}
                                    onClose={toggleOpenSignInModal}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                    timeout: 500,
                                    }}
                                >
                                    <Fade in={signInModalOpen}>
                                    <div className={classes.paper}>
                                        <h2 id="transition-modal-title">Sign In modal</h2>
                                        <p id="transition-modal-description">react-transition-group animates me.</p>
                                    </div>
                                    </Fade>
                                </Modal>
                            </Box>
                            : <Box className={classes.signUpForm}>
                                <Typography variant="h3" className={classes.formTitle}>
                                    Join Twitter right now!
                                </Typography>
                                <Button
                                    variant="outlined"
                                    className={classes.formButton}
                                    onClick={toggleOpenSignUpModal}
                                >
                                    Sign Up
                                </Button>
                                <Typography variant="body2">
                                    By registering, you agree to the
                                    {' '}
                                    <Link
                                        href="https://twitter.com/tos"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Terms of Service
                                    </Link>
                                    {' '}
                                    and the
                                    {' '}
                                    <Link
                                        href="https://twitter.com/privacy"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Privacy Policy
                                    </Link>
                                    {' '}
                                    , as well as the
                                    {' '}
                                    <Link
                                        href="https://help.twitter.com/rules-and-policies/twitter-cookies"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Cookie Policy
                                    </Link>.
                                </Typography>
                                <Typography variant="body1">
                                    Already registered?
                                    {' '}
                                    <Link
                                        component="button"
                                        variant="body1"
                                        onClick={toggleSignInForm}
                                    >
                                        Sign in
                                    </Link>
                                </Typography>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    className={classes.modal}
                                    open={signUpModalOpen}
                                    onClose={toggleOpenSignUpModal}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                    timeout: 500,
                                    }}
                                >
                                    <Fade in={signUpModalOpen}>
                                    <div className={classes.paper}>
                                        <h2 id="transition-modal-title">Sign up modal</h2>
                                        <p id="transition-modal-description">react-transition-group animates me.</p>
                                    </div>
                                    </Fade>
                                </Modal>
                            </Box>
                    }
                </Grid>
            </Grid>
        </Container>
    );
};

export default SignIn;