import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/brand-logo.png';
// import axios from 'axios';

//Redux Imports 
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

//MUI Imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
 
const styles = (theme) => ({
  ...theme.spreadIt
});

export class login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userData, this.props.history);
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors});
    }
  }

  render() {
    const { classes, UI: { loading } } = this.props;
    const { errors } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm >
          <img src={AppIcon} alt="Login" className={classes.image} height="100" width="100"/>
          <Typography variant="h3" className={classes.pageTitle}>
            Login
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
              Login
              {loading && (
                <CircularProgress size={25} className={classes.progress}></CircularProgress>
              )}
            </Button>
            <br />
            <small>dont have an account ? <Link to="/signup">signup</Link></small>
          </form>
        </Grid>
        <Grid item sm /> 
      </Grid>
    )
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser:  PropTypes.func.isRequired,
  user:  PropTypes.object.isRequired,
  UI:  PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
})

const mapActionsToProps = {
  loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(login))
