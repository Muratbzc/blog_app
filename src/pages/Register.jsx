import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { register, singInGoogle } from "../helpers/firebase";
import bgimage from "../assets/bg5.jpg";
import Paper from "@mui/material/Paper";

const styles = {
  paperContainer: {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "2rem",
  },
};

const Register = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const displayName = `${userInfo.firstName} ${userInfo.lastName}`;
    register(userInfo.email, userInfo.password, navigate, displayName);
  };

  return (
    <Paper style={styles.paperContainer}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "2rem",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={userInfo?.firstName}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={userInfo?.lastName}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={userInfo?.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={userInfo?.password}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2, color: "white" }}
            >
              Sign Up
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => singInGoogle(navigate)}
            >
              WITH Google
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};
export default Register;
