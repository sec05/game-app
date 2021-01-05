import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button"
import "../../../styles/Header/header.scss"
import Dropdown from "./Dropdown.jsx"
import {useHistory} from "react-router-dom"
export default function Header() {

  const History = useHistory();
  const changeURL = (url) =>
  {
    History.push(url);
  }
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
                <Dropdown/>
            </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}