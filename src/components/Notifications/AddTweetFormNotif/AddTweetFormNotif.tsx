import React from "react"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"

interface AddTweetFormNotifProps {
  visibleNotif: boolean
  setVisibleNotif: (a: boolean) => void
}

const AddTweetFormNotif: React.FC<AddTweetFormNotifProps> = ({
  visibleNotif,
  setVisibleNotif,
}: AddTweetFormNotifProps): React.ReactElement => {
  const handleCloseNotif = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }
    setVisibleNotif(false)
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={visibleNotif}
        autoHideDuration={10000}
        onClose={handleCloseNotif}
        message="The tweet was not added"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleCloseNotif}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseNotif}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  )
}

export default AddTweetFormNotif
