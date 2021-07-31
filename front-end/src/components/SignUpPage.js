import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUpPage = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const history = useHistory();

  const createUserAccount = async (event) => {
    event.preventDefault();
    const responseFromServer = await fetch(Backend_API + "newuser/", {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify({ userName, password, email, firstName, lastName }),
    });
    let { status } = responseFromServer;
    if (status === 200) {
      const data = await responseFromServer.json(responseFromServer);
      if (data.userExists) {
        alert("User Name already in use");
      } else {
        history.push("/login");
      }
    } else {
      alert("An Error Occured!");
    }
  };
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
        <form className={classes.form} onSubmit={createUserAccount} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setfirstName(e.target.value)}
                value={firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setlastName(e.target.value)}
                value={lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Username"
                name="userName"
                autoComplete="uname"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
// const SignUpPage = () => {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [firstName, setfirstName] = useState("");
//   const [lastName, setlastName] = useState("");
//   const history = useHistory();

//   const createUserAccount = async (event) => {
//     event.preventDefault();
//     const responseFromServer = await fetch(Backend_API + "newuser/", {
//       headers: { "Content-Type": "application/json" },
//       method: "post",
//       body: JSON.stringify({ userName, password, email, firstName, lastName }),
//     });
//     let { status } = responseFromServer;
//     if (status === 200) {
//       const data = await responseFromServer.json(responseFromServer);
//       if (data.userExists) {
//         alert("User Name already in use");
//       } else {
//         history.push("/login");
//       }
//     } else {
//       alert("An Error Occured!");
//     }
//   };
//   return (

//     <div className="Login">

//       <Form onSubmit={createUserAccount}>
//         <div>
//           <h2>Sign Up</h2>
//         </div>
//         <Form.Group size="lg">
//           <Form.Control
//             required
//             autoFocus
//             type="text"
//             value={userName}
//             placeholder="User Name"
//             minLength="5"
//             onChange={(e) => setUserName(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg">
//           <Form.Control
//             required
//             type="password"
//             value={password}
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg">
//           <Form.Row>
//             <Col>
//               <Form.Control
//                 required
//                 value={firstName}
//                 placeholder="First name"
//                 onChange={(e) => setfirstName(e.target.value)}
//               />
//             </Col>
//             <Col>
//               <Form.Control
//                 required
//                 value={lastName}
//                 placeholder="Last name"
//                 onChange={(e) => setlastName(e.target.value)}
//               />
//             </Col>
//           </Form.Row>
//         </Form.Group>
//         <Form.Group size="lg">
//           <Form.Control
//             required
//             type="email"
//             value={email}
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <button
//           type="submit"
//           id="loginBtn"
//           disabled={false}
//           className="btn btn-success btn-lg btn-block"
//         >
//           Sign Up!
//         </button>
//       </Form>
//     </div>

//   );
// };

export default SignUpPage;
