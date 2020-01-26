import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/brand-logo.png';
import axios from 'axios';

//MUI Imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

//Redux
import { connect } from 'react-redux';
 
const styles = (theme) => ({
  ...theme.spreadIt
});

export class signup extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    handle: "",
    loading: false,
    errors: {}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    });

    axios.post('/signup', {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle
    })
    .then(res => {
      console.log(res.data);
      localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
      this.setState({
        loading: false
      });
      //Redirect us to the Home page
      this.props.history.push('/');
    })
    .catch(err => {
      console.log(err.response);
      this.setState({
        errors: err.response.data,
        loading: false
      });
    });
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { classes } = this.props;
    const { loading, errors } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm >
          <img src={AppIcon} alt="Sign Up" className={classes.image} height="100" width="100"/>
          <Typography variant="h3" className={classes.pageTitle}>
            Signup
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              label="email"
              type="email"
              helperText={errors.email}
              error={errors.email ? true : false}
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth />
            <TextField
              id="password"
              name="password"
              label="password"
              type="password"
              helperText={errors.password}
              error={errors.password ? true : false}
              className={classes.textField}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
              className={classes.textField}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              fullWidth />
            <TextField
              id="handle"
              name="handle"
              label="handle"
              type="text"
              helperText={errors.handle}
              error={errors.handle ? true : false}
              className={classes.textField}
              value={this.state.handle}
              onChange={this.handleChange}
              fullWidth />    
            {errors.error && (
              <Typography variant="body2" className={classes.customError}>
                {errors.error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}>
              Signup
              {loading && (
                <CircularProgress size={25} className={classes.progress}></CircularProgress>
              )}
            </Button>
            <br />
            <small>Already have an account ? <Link to="/login">login</Link></small>
          </form>
        </Grid>
        <Grid item sm /> 
      </Grid>
    )
  }
}

signup.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(signup)
