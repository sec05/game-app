import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import "../../../styles/Header/dropdown.scss"
import {useHistory} from "react-router-dom"
const StyledMenu = withStyles({

})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: "black",
      },
    },
  },
}))(MenuItem);

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const History = useHistory();
  const changeURL = (url) =>
  {
    History.push(url);
  }
  return (
    <div style={{display: "inline"}}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="dropdownButton"
      >
        Sign Up
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          
          <ListItemText onClick={()=>changeURL("/login")}>Log In</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem>
        <ListItemText onClick={()=>changeURL("/signup")}>Create Account</ListItemText>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
