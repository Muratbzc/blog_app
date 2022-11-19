import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { logouth } from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import logo from "../assets/logo1.jpg";

const initialValues = {
  title: "",
  imageUrl: "",
  context: "",
};
const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { setBlogInfo } = useContext(BlogContext);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = () => {
    navigate("login");
    setAnchorElUser(null);
  };
  const handleRegister = () => {
    navigate("register");
    setAnchorElUser(null);
  };
  const handleProfile = () => {
    navigate("profile");
    setAnchorElUser(null);
  };
  const handleNewBlog = () => {
    setBlogInfo(initialValues);
    navigate("newblog");
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    logouth();
    navigate("login");
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
          >
            <img src={logo} style={{ height: "5rem" }} alt="" />
          </Box>
          <Box
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              cursor: "pointer",
            }}
          >
            <img src={logo} style={{ height: "5rem" }} alt="" />
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              flexGrow: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              onClick={() => navigate("/")}
              sx={{
                my: 2,
                color: "#F1BF10",
                display: "block",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              {` ──── <all kinds of information /> ────`}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={currentUser.displayName || ""}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!currentUser && (
                <MenuItem onClick={handleLogin}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              )}
              {!currentUser && (
                <MenuItem onClick={handleRegister}>
                  <Typography textAlign="center">Register</Typography>
                </MenuItem>
              )}
              {currentUser && (
                <MenuItem onClick={handleProfile}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
              )}
              {currentUser && (
                <MenuItem onClick={handleNewBlog}>
                  <Typography textAlign="center">New Blog</Typography>
                </MenuItem>
              )}
              {currentUser && (
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
