import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';

// MUI imports
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    display: 'flex',
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25
  }
}

export class Scream extends Component {  
  render() {
    // const classes = this.props.classes
    const { classes, scream }  = this.props

    return (
      <Card className={classes.card}>
          <CardMedia image={scream.userImage}  title="Profile Image" className={classes.image}/>
          <CardContent className={classes.content}>
            <Typography variant="h5" component={Link} to={`/users/${scream.userHandle}`} color="primary">{scream.userHandle}</Typography>
            <Typography variant="body2" color="textSecondary">{scream.createdAt}</Typography>
            <Typography variant="body1">{scream.body}</Typography>
          </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Scream)
