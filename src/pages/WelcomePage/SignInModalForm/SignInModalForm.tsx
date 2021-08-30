import React from 'react';
import SmallBlueLogo from '@material-ui/icons/Twitter';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { useSignInModalFormStyles } from './SignInModalFormStyles';

interface SignInModalFormProps {
    signInModalOpen: boolean;
    toggleOpenSignInModal: () => void;
}

const SignInModalForm: React.FC<SignInModalFormProps> = ({
    signInModalOpen,
    toggleOpenSignInModal,
}: SignInModalFormProps): React.ReactElement => {
    const classes = useSignInModalFormStyles();

    return (
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
                <form className={classes.paper} noValidate autoComplete="off">
                    <SmallBlueLogo className={classes.smallBlueLogo} color="primary" />
                    <Typography variant="h5">
                        Sign in to Twitter
                    </Typography>
                    <TextField
                        className={classes.signUpField}
                        required
                        id="outlined-basic"
                        label="E-mail"
                        type="email"
                        variant="outlined"
                    />
                    <TextField
                        className={classes.signUpField}
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <Button className={classes.submitBtn} variant="contained" color="primary">
                        Sign in
                    </Button>
                    <div className={classes.signInModalButtonGroup}>
                        <Button color="primary" disabled>Forgot password?</Button>
                        <Button color="primary" disabled>Create an account</Button>
                    </div>
                </form>
            </Fade>
        </Modal>
    );
};

export default SignInModalForm;