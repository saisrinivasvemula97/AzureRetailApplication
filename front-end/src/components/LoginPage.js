import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PeopleOutlineSharpIcon from '@material-ui/icons/PeopleOutlineSharp';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const { Backend_API } = require("../utils/Backend_API");


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
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const authenticateUser = async (event) => {
    event.preventDefault();
    //console.log("here");

    const responseFromServer = await fetch(Backend_API + "authenticateUser/", {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify({ userName, password }),
    });
    let { status } = responseFromServer;
    if (status === 200) {
      const userData = await responseFromServer.json(responseFromServer);
      validateUserCreds(userData);
    } else {
      alert("An Error Occured!");
    }
    function validateUserCreds(userData) {
      if (userData.password === password) {
        sessionStorage.setItem("user_auth_token", userName);
        history.push('/home');
      } else {
        alert("UserName does not exist or Password is incorrect");
      }
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PeopleOutlineSharpIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Team 23 - Three Musketeers
        </Typography>
        <form className={classes.form} onSubmit={(e) => authenticateUser(e)} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="Username"
            name="username"
            autoFocus
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

// const LoginPage = () => {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useHistory();
//   const authenticateUser = async (event) => {
//     event.preventDefault();
//     //console.log("here");

//     const responseFromServer = await fetch(Backend_API + "authenticateUser/", {
//       headers: { "Content-Type": "application/json" },
//       method: "post",
//       body: JSON.stringify({ userName, password }),
//     });
//     let { status } = responseFromServer;
//     if (status === 200) {
//       const userData = await responseFromServer.json(responseFromServer);
//       validateUserCreds(userData);
//     } else {
//       alert("An Error Occured!");
//     }
//     function validateUserCreds(userData) {
//       if (userData.password === password) {
//         sessionStorage.setItem("user_auth_token", userName);
//         history.push('/home');
//       } else {
//         alert("UserName does not exist or Password is incorrect");
//       }
//     }
//   };
//   return (
//     <Container maxWidth="sm">
//     {/* <div className="Login"> */}
//     <PeopleOutlineSharpIcon />
//       <h4>Team-29(Ceaseless)</h4>
//       <form onSubmit={(e) => authenticateUser(e)}>
//         <div class="container">
//           <label>Username : </label>

//           <input
//             type="text"
//             value={userName}
//             placeholder="Enter Username"
//             name="username"
//             onChange={(e) => setUserName(e.target.value)}
//             required
//           />

//           <label>Password : </label>

//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter Password"
//             name="password"
//             required
//           />

//           <button type="submit">Login</button>
//           <br></br>
//           <a href="/signup">Click here to sign up</a>
//         </div>
//       </form>
//     {/* </div> */}
//     </Container>
//   );
// };

export default LoginPage;
