import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import img from "../assets/blog3.png";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { AddNewBlog } from "../helpers/functions";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";

const initialValues = {
  title: "",
  imageUrl: "",
  context: "",
};

const NewBlog = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { blogInfo, setBlogInfo } = useContext(BlogContext);
  console.log(blogInfo);
  const handleSubmit = (e) => {
    e.preventDefault();
    AddNewBlog(blogInfo, currentUser);
    setBlogInfo(initialValues);
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={img}
          alt=""
          style={{
            width: "20rem",
            height: "15rem",
            borderRadius: "30%",
            marginTop: "2rem",
          }}
        />
        <Typography component="h1" variant="h4">
          ── New Blog ──
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            value={blogInfo.title}
            onChange={(e) =>
              setBlogInfo({ ...blogInfo, [e.target.id]: e.target.value })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="imageUrl"
            label="Image Url"
            id="imageUrl"
            autoComplete="imageUrl"
            value={blogInfo.imageUrl}
            onChange={(e) =>
              setBlogInfo({ ...blogInfo, [e.target.id]: e.target.value })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="context"
            label="Context"
            id="context"
            autoComplete="context"
            multiline
            rows={12}
            value={blogInfo.context}
            onChange={(e) =>
              setBlogInfo({ ...blogInfo, [e.target.id]: e.target.value })
            }
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NewBlog;
