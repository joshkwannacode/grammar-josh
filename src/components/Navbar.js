import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#52718d" }}>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ fontSize: "20" }}
          >
            GRAMMARBOT
          </Typography>
          <IconButton
            aria-label="Home"
            style={{ color: "white" }}
            component={Link}
            to={"/"}
          >
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
