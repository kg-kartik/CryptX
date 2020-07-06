import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from "react-router";
import {connect} from "react-redux"
import {registerUser} from "../actions/authActions";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background : "#76ff03",
    color : "black"
  },
  '&:hover': {
    backgroundColor: "#76ff03"
  },
  input : {
      borderColor : "#76ff03"
  }

}));

const SignUp = ({registerUser,auth}) => { 
  useEffect(() => {
    if(auth.isAuthenticated) {
      history.push("/signin");
    }
  },[])  

    const history = useHistory();
    
    const [name,setName] = useState("")
    const [university,setUniversity] = useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const saveDetails = (e) => {
      e.preventDefault();
      const newUser = {
      name,
      university,
      email,
      password
    } 
    registerUser(newUser,history);
    }
    const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
        
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="Name"
            autoComplete="Name"
            autoFocus
            value = {name}
            onChange =  {(e) => {setName(e.target.value)}}
            InputProps={{
                className: classes.input
            }}
          />

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="University Name"
            label="University"
            name="University Name"
            value = {university}
            onChange =  {(e) => {setUniversity(e.target.value)}}
            autoComplete="Phone No"
            autoFocus
        />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value = {email}
            onChange =  {(e) => {setEmail(e.target.value)}}
            autoComplete="email"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value = {password}
            onChange =  {(e) => {setPassword(e.target.value)}}
            autoComplete="current-password"
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick = {(e) => saveDetails(e)}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

SignUp.propTypes = {
  registerUser : PropTypes.func.isRequired,
  auth : PropTypes.object.isRequired,
  errors : PropTypes.object
}

const mapStateToProps = (state) => ({
  errors : state.errors,
  auth : state.auth
});

export default connect(
  mapStateToProps,
  {registerUser},
)(SignUp);
