import React from 'react';
import SmallBlueLogo from '@material-ui/icons/Twitter';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { useSignUpModalFormStyles } from './SignUpModalFormStyles';

interface SignUpModalFormProps {
    signUpModalOpen: boolean;
    toggleOpenSignUpModal: () => void;
}

const SignUpModalForm: React.FC<SignUpModalFormProps> = ({
    signUpModalOpen,
    toggleOpenSignUpModal,
}: SignUpModalFormProps): React.ReactElement => {
    const classes = useSignUpModalFormStyles();

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );
    
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
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
                <form className={classes.paper} noValidate autoComplete="off">
                    <SmallBlueLogo className={classes.smallBlueLogo} color="primary" />
                    <Typography variant="h5">
                        Create an account
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
                    <Typography variant="h6">
                        Date of birth
                    </Typography>
                    <Typography variant="body2">
                        This information will not be publicly available.
                        {' '}
                        Confirm your age, even if this account is for a company, pet, etc.
                    </Typography>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date of birth"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <Button className={classes.submitBtn} variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Fade>
        </Modal>
    );
};

export default SignUpModalForm;
