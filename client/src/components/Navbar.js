import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

//MUI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <Button color="inherit" component={NavLink} to="/">Home</Button>
          <Button color="inherit" component={NavLink} to="/login">Login</Button>
          <Button color="inherit" component={NavLink} to="/signup">Signup</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar
