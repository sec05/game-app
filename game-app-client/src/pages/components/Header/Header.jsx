import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button"
import "../../../styles/Header/header.scss"
import Dropdown from "./Dropdown.jsx"

export default function Header() {


  return (
    <div className="root">
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Button size="large" className="title">
            Title
          </Button>
            <div className="actionContainer">
                <Button>Games</Button>
                <Button>Button</Button>
                <Dropdown/>
            </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}