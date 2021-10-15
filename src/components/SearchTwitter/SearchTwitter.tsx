import React from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      borderRadius: 99,
      boxShadow: "none",
      background: "rgba(238, 243, 244, 1)",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    focusedRoot: {
      marginTop: 5,
      padding: "1px 3px",
      display: "flex",
      alignItems: "center",
      borderRadius: 99,
      boxShadow: "none",
      background: "transporent",
      border: "1px solid rgba(29,161,242)",
    },
  })
)

interface SearchTwitterProps {
  value?: any
}

export const SearchTwitter: React.FC<SearchTwitterProps> = ({
  value,
}): React.ReactElement => {
  const classes = useStyles()
  const [focused, setFocused] = React.useState(false)

  return (
    <Paper
      component="form"
      className={focused ? classes.focusedRoot : classes.root}
      onFocus={() => setFocused(!focused)}
      onBlur={() => setFocused(!focused)}
    >
      {focused ? (
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          color="primary"
        >
          <SearchIcon />
        </IconButton>
      ) : (
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      )}
      <InputBase
        className={classes.input}
        placeholder="Search Twitter"
        value={value}
      />
    </Paper>
  )
}
