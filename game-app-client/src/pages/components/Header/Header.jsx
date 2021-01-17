import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GitHubIcon from '@material-ui/icons/GitHub';
import "../../../styles/Header/header.scss"
import {useHistory} from "react-router-dom"
export default function Header() {

  const History = useHistory();
  const changeURL = (url) =>
  {
    History.push(url);
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="root">
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Button size="large" className="title" onClick={()=>changeURL("/")}>
            Title
          </Button>
            <div className="actionContainer">
                <Button>Games</Button>
                <Button>Button</Button>
                <Button onClick={handleClickOpen}>Log In</Button>
            </div>

        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Log In"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Button className="githubButton" onClick={()=>window.location.href="http://localhost:3001/auth/github "} size="large"><GitHubIcon fontSize="medium"/> &nbsp;GitHub</Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Not Now
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}