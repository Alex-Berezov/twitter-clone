import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/CloseOutlined';

import CreateTweetForm from '../../CreateTweetForm/CreateTweetForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: 20,
      boxShadow: theme.shadows[5],
      padding: '0 10px',
      width: '30%',
    },
    modalHeader: {
      borderBottom: '1px solid rgb(230 233 234)',
      '& .MuiButtonBase-root': {
        minWidth: 20,
        borderRadius: 99,
      },
      '& .MuiButton-text': {
        padding: 10,
      },
    },
    closeIconBtn: {
      
    },
  }),
);

interface CreateTweetModalProps {
    openModal: boolean,
    handleClose: () => void,
}

const CreateTweetModal: React.FC<CreateTweetModalProps> = ({
    openModal, handleClose
}: CreateTweetModalProps): React.ReactElement => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <div className={classes.modalHeader}>
                <Button onClick={handleClose}>
                  <CloseIcon className={classes.closeIconBtn} />
                </Button>
            </div>
            <CreateTweetForm 
                user={{
                    accountName: 'Account Name',
                    avatarUrl: '../../assets/images/lohp_1302x955.png',
                }}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CreateTweetModal;