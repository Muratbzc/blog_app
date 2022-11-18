import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login, singInGoogle } from "../helpers/firebase";
import bgimage from "../assets/bg1.jpg";
import Paper from "@mui/material/Paper";

const styles = {
  paperContainer: {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "2rem",
  },
};

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userInfo.email, userInfo.password, navigate);
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={userInfo?.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={userInfo?.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2, color: "white" }}
            >
              Sign In
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
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Login;
